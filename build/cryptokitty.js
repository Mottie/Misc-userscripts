"use strict";
const fs = require("fs-extra");
const path = require("path");
const got = require("got");

const userscript = path.join(__dirname, "..", "cryptokitty-rare-highlighter.user.js");
const linkPattern = "<a class=\"badge badge-pill badge-cattribute";
const numberPattern = "<span class=\"badge badge-pill badge-secondary\">";
const list = {};

const now = (new Date()).toISOString().substring(0, 19).replace("T", " ");

got("https://cryptokittydex.com/")
	.then(response => extractList(response.body))
	.then(data => output(data))
	.then(() => console.log("\x1b[32m%s\x1b[0m", "Cryptokitty userscript updated"))
	.catch(exit);

async function output(data) {
	const code = await fs.readFile(userscript, "utf8");
	fs.writeFile(userscript, updateDex(code, data));
}

function updateDex(code, data) {
	return code.replace(
		/\/\*\sBUILD:DEX-START[^/]+\/[\s\S]+\/\*\sBUILD:DEX-END\s\*\//,
		`/* BUILD:DEX-START */
	const lastUpdate = "Last Updated from CryptoKittydex on ${now} UTC";
	const rares = ${JSON.stringify(data, null, "\t\t").replace("}", "\t}")};
	/* BUILD:DEX-END */`
	);
}

function extractList(data = "") {
	let pos1 = 0,
		pos2 = 0,
		counter = 0;
	let name = "";
	// Add counter to prevent infinite loops
	while (counter < 1000 && (pos1 = data.indexOf(linkPattern, pos2)) > -1) {
		pos2 = data.indexOf(">", pos1);
		pos1 = data.indexOf(numberPattern, pos2);
		name = data.substring(pos2 + 1, pos1).trim();
		pos1 += numberPattern.length;
		pos2 = data.indexOf("</span>", pos1);
		list[name] = parseInt(data.substring(pos1, pos2).replace(/,/g, ""), 10);
		counter++;
	}
	return list;
}

function exit(err) {
	if (err) {
		console.error(err);
	}
	process.exit(err ? 1 : 0);
}
