// ==UserScript==
// @name        Cryptokitty rare highlighter
// @version     1.0.0
// @description A userscript that makes rare cryptokitty cattributes more noticeable
// @license     MIT
// @author      Rob Garrison
// @namespace   https://github.com/Mottie
// @include     https://www.cryptokitties.co/*
// @run-at      document-idle
// @grant       none
// @icon        https://www.cryptokitties.co/icons/apple-icon-120x120.png
// @updateURL   https://raw.githubusercontent.com/Mottie/Misc-userscripts/master/cryptokitty-rare-highlighter.user.js
// @downloadURL https://raw.githubusercontent.com/Mottie/Misc-userscripts/master/cryptokitty-rare-highlighter.user.js
// ==/UserScript==
(() => {
	"use strict";

	/* BUILD:DEX-START */
	const lastUpdate = "Last Updated from CryptoKittydex on 2018-06-29 22:15:20 UTC";
	const rares = {
		"Genesis": 1,
		"Bug": 3,
		"dragontail": 5,
		"universe": 13,
		"sully": 23,
		"littlefoot": 25,
		"martian": 26,
		"tendertears": 27,
		"rosequartz": 60,
		"pearl": 60,
		"wowza": 65,
		"padparadscha": 74,
		"redvelvet": 81,
		"kurilian": 117,
		"ruhroh": 125,
		"cobalt": 127,
		"autumnmoon": 169,
		"buttercup": 174,
		"bornwithit": 192,
		"manul": 259,
		"balinese": 262,
		"finalfrontier": 268,
		"mertail": 283,
		"lavender": 291,
		"razzledazzle": 321,
		"unicorn": 438,
		"palejade": 444,
		"butterscotch": 450,
		"brownies": 458,
		"mintmacaron": 514,
		"oceanid": 523,
		"chameleon": 564,
		"highsociety": 573,
		"flapflap": 728,
		"babypuke": 797,
		"impish": 855,
		"tinybox": 966,
		"buzzed": 997,
		"Santa": 1002,
		"highlander": 1132,
		"caffeine": 1171,
		"rollercoaster": 1268,
		"turtleback": 1461,
		"cashewmilk": 1485,
		"garnet": 1518,
		"salty": 1520,
		"daemonwings": 1542,
		"swarley": 1618,
		"trioculus": 1656,
		"eclipse": 1808,
		"daemonhorns": 1875,
		"twilightsparkle": 1952,
		"Dracula": 2000,
		"Elf": 2000,
		"neckbeard": 2000,
		"Shipcat": 2000,
		"patrickstarfish": 2008,
		"verdigris": 2071,
		"yokel": 2143,
		"seafoam": 2384,
		"koala": 2394,
		"dahlia": 2450,
		"shale": 2566,
		"flamingo": 2690,
		"cheeky": 2859,
		"dragonfruit": 2955,
		"dippedcone": 3006,
		"thunderstruck": 3032,
		"belch": 3043,
		"periwinkle": 3127,
		"rorschach": 3314,
		"safetyvest": 3550,
		"grimace": 3621,
		"missmuffett": 3728,
		"pumpkin": 3738,
		"wasntme": 3939,
		"doridnudibranch": 4312,
		"starstruck": 4910,
		"mainecoon": 4931,
		"wingtips": 5006,
		"hotrod": 5198,
		"sweetmeloncakes": 5284,
		"poisonberry": 5301,
		"royalblue": 5597,
		"koladiviya": 6089,
		"norwegianforest": 6108,
		"manx": 6116,
		"harbourfog": 6191,
		"camo": 6382,
		"baddate": 6402,
		"hintomint": 6955,
		"elk": 7403,
		"alien": 7683,
		"nachocheez": 7813,
		"daffodil": 7940,
		"forgetmenot": 8009,
		"springcrocus": 8163,
		"parakeet": 8254,
		"cerulian": 8271,
		"onyx": 8568,
		"Superduck": 10001,
		"wolfgrey": 10113,
		"lilac": 10150,
		"persian": 11116,
		"sass": 11166,
		"cinderella": 11368,
		"serpent": 11838,
		"henna": 12633,
		"apricot": 13397,
		"stunned": 13448,
		"frosting": 14146,
		"violet": 14922,
		"ganado": 14964,
		"savannah": 15531,
		"fabulous": 16929,
		"chartreux": 17244,
		"rascal": 17440,
		"pixiebob": 17480,
		"bubblegum": 17952,
		"dali": 19144,
		"leopard": 21076,
		"jaguar": 23804,
		"cyan": 24298,
		"tigerpunk": 24303,
		"oldlace": 24386,
		"otaku": 24879,
		"morningglory": 28605,
		"peach": 28649,
		"wiley": 29279,
		"chronic": 30776,
		"limegreen": 32373,
		"skyblue": 33032,
		"belleblue": 33151,
		"egyptiankohl": 33603,
		"spangled": 35046,
		"slyboots": 35891,
		"coralsunrise": 35984,
		"purplehaze": 36117,
		"thundergrey": 36339,
		"bloodred": 37922,
		"tiger": 38178,
		"wonky": 39190,
		"azaleablush": 39883,
		"sapphire": 39968,
		"bobtail": 39984,
		"icy": 41190,
		"laperm": 41306,
		"birman": 41989,
		"wuvme": 42342,
		"bananacream": 43236,
		"calicool": 43288,
		"gerbil": 43415,
		"tongue": 43651,
		"whixtensions": 44545,
		"cloudwhite": 44559,
		"beard": 45012,
		"grim": 45392,
		"selkirk": 46085,
		"scarlet": 49328,
		"barkbrown": 52360,
		"sandalwood": 56021,
		"chestnut": 57796,
		"emeraldgreen": 62854,
		"googly": 71331,
		"amur": 74612,
		"salmon": 76448,
		"cymric": 77036,
		"spock": 78343,
		"gold": 78378,
		"orangesoda": 81256,
		"ragdoll": 81807,
		"raisedbrow": 84129,
		"aquamarine": 84434,
		"cottoncandy": 86562,
		"ragamuffin": 86884,
		"chocolate": 92308,
		"himalayan": 92561,
		"simple": 92954,
		"topaz": 94127,
		"shadowgrey": 95697,
		"mauveover": 97434,
		"saycheese": 99234,
		"sphynx": 100603,
		"munchkin": 100722,
		"coffee": 103161,
		"sizzurp": 109516,
		"mintgreen": 110190,
		"soserious": 111785,
		"greymatter": 112157,
		"royalpurple": 113682,
		"lemonade": 116138,
		"swampgreen": 118319,
		"strawberry": 126391,
		"happygokitty": 131015,
		"crazy": 140880,
		"luckystripe": 142438,
		"pouty": 144905,
		"thicccbrowz": 162990,
		"kittencream": 189420,
		"granitegrey": 200555,
		"totesbasic": 247274
	};
	/* BUILD:DEX-END */

	const rarity = {
		"gold": number => number <= 10,
		"purple": number => number <= 100,
		"orange": number => number <= 500,
		"blue": number => number <= 1000,
		"green": number => number <= 10000,
		"silver": number => number <= 100000,
		"black": number => number > 100000
	};

	const getRarity = number => Object.keys(rarity).find(r => rarity[r](number));
	const span = document.createElement("small");
	span.className = "Cattribute-type";

	function init() {
		document.querySelectorAll(".Cattribute-title").forEach(el => {
			const number = rares[el.textContent.trim()] || -1;
			if (number > -1 && !el.classList.contains("ckrh-processed")) {
				el.classList.add("ckrh-processed");
				el.style.color = getRarity(number);
				span.textContent = number;
				span.title = lastUpdate;
				el.insertAdjacentElement("afterend", span.cloneNode(true));
			}
		});
	}

	let timer;
	new MutationObserver(() => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (document.querySelector(".Cattribute-title")) {
				init();
			}
		}, 500);
	}).observe(document.body, {
		childList: true,
		subtree: true
	});
})();
