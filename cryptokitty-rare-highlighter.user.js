// ==UserScript==
// @name        Cryptokitty rare highlighter
// @version     1.0.1
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
	const lastUpdate = "Last Updated from CryptoKittydex on 2018-07-12 01:25:39 UTC";
	const rares = {
		"Genesis": 1,
		"Bug": 3,
		"universe": 19,
		"sully": 23,
		"tendertears": 34,
		"martian": 34,
		"dragontail": 43,
		"pearl": 60,
		"wowza": 75,
		"littlefoot": 76,
		"rosequartz": 79,
		"redvelvet": 100,
		"padparadscha": 123,
		"kurilian": 127,
		"cobalt": 133,
		"ruhroh": 155,
		"fangtastic": 160,
		"autumnmoon": 184,
		"buttercup": 192,
		"bornwithit": 206,
		"balinese": 277,
		"finalfrontier": 283,
		"mertail": 297,
		"lavender": 303,
		"manul": 321,
		"razzledazzle": 334,
		"unicorn": 472,
		"butterscotch": 488,
		"palejade": 495,
		"mintmacaron": 517,
		"oceanid": 528,
		"chameleon": 587,
		"highsociety": 613,
		"babypuke": 815,
		"flapflap": 835,
		"tinybox": 991,
		"Santa": 1002,
		"brownies": 1157,
		"caffeine": 1303,
		"highlander": 1370,
		"impish": 1404,
		"turtleback": 1493,
		"daemonwings": 1564,
		"buzzed": 1585,
		"trioculus": 1667,
		"garnet": 1669,
		"salty": 1675,
		"swarley": 1896,
		"twilightsparkle": 1996,
		"Dracula": 2000,
		"Elf": 2000,
		"Shipcat": 2000,
		"neckbeard": 2007,
		"daemonhorns": 2023,
		"eclipse": 2038,
		"patrickstarfish": 2074,
		"verdigris": 2116,
		"yokel": 2149,
		"seafoam": 2402,
		"koala": 2415,
		"cashewmilk": 2452,
		"flamingo": 2742,
		"cheeky": 2868,
		"shale": 2978,
		"dippedcone": 3044,
		"dragonfruit": 3097,
		"periwinkle": 3145,
		"dahlia": 3166,
		"thunderstruck": 3235,
		"rollercoaster": 3261,
		"safetyvest": 3590,
		"belch": 3616,
		"grimace": 3647,
		"pumpkin": 3779,
		"missmuffett": 3927,
		"wasntme": 4059,
		"rorschach": 4321,
		"doridnudibranch": 4830,
		"starstruck": 4933,
		"mainecoon": 4947,
		"wingtips": 5046,
		"hotrod": 5205,
		"sweetmeloncakes": 5408,
		"poisonberry": 5591,
		"royalblue": 5602,
		"manx": 6121,
		"norwegianforest": 6208,
		"harbourfog": 6272,
		"camo": 6547,
		"baddate": 6554,
		"hintomint": 7017,
		"elk": 7483,
		"alien": 7718,
		"koladiviya": 7832,
		"daffodil": 8034,
		"forgetmenot": 8185,
		"springcrocus": 8288,
		"onyx": 8635,
		"nachocheez": 8648,
		"parakeet": 9542,
		"cerulian": 9834,
		"Superduck": 10001,
		"wolfgrey": 10142,
		"lilac": 10357,
		"persian": 11159,
		"sass": 11327,
		"serpent": 11943,
		"henna": 12644,
		"cinderella": 13293,
		"stunned": 13666,
		"apricot": 13732,
		"violet": 14948,
		"frosting": 15718,
		"savannah": 16050,
		"ganado": 17092,
		"fabulous": 17132,
		"chartreux": 17297,
		"bubblegum": 17972,
		"pixiebob": 18233,
		"rascal": 18873,
		"dali": 19190,
		"leopard": 21706,
		"jaguar": 23829,
		"tigerpunk": 24358,
		"oldlace": 24705,
		"otaku": 24945,
		"cyan": 25912,
		"peach": 28709,
		"morningglory": 28982,
		"chronic": 31701,
		"limegreen": 32434,
		"wiley": 32838,
		"skyblue": 33197,
		"belleblue": 33577,
		"egyptiankohl": 34989,
		"spangled": 35388,
		"slyboots": 36849,
		"coralsunrise": 37125,
		"thundergrey": 37506,
		"purplehaze": 37552,
		"bloodred": 37970,
		"tiger": 39364,
		"wonky": 40121,
		"azaleablush": 40604,
		"bobtail": 40856,
		"sapphire": 41173,
		"laperm": 41354,
		"icy": 42549,
		"wuvme": 43311,
		"calicool": 43496,
		"gerbil": 43553,
		"birman": 43732,
		"tongue": 43857,
		"bananacream": 44605,
		"cloudwhite": 44617,
		"whixtensions": 45034,
		"beard": 45228,
		"grim": 46381,
		"selkirk": 47484,
		"scarlet": 49737,
		"barkbrown": 52688,
		"sandalwood": 57793,
		"chestnut": 58292,
		"emeraldgreen": 63123,
		"googly": 71534,
		"amur": 75683,
		"salmon": 76603,
		"cymric": 77171,
		"gold": 78562,
		"spock": 78793,
		"orangesoda": 81502,
		"ragdoll": 83572,
		"raisedbrow": 84181,
		"aquamarine": 84649,
		"ragamuffin": 87000,
		"cottoncandy": 88016,
		"chocolate": 92476,
		"himalayan": 92698,
		"simple": 93187,
		"topaz": 94425,
		"shadowgrey": 96175,
		"mauveover": 98399,
		"saycheese": 99415,
		"sphynx": 101015,
		"munchkin": 101104,
		"coffee": 104323,
		"sizzurp": 109777,
		"mintgreen": 110807,
		"soserious": 112998,
		"greymatter": 113549,
		"royalpurple": 114895,
		"lemonade": 117568,
		"swampgreen": 119692,
		"strawberry": 126797,
		"happygokitty": 132241,
		"crazy": 141148,
		"luckystripe": 142717,
		"pouty": 146307,
		"thicccbrowz": 164275,
		"kittencream": 189813,
		"granitegrey": 200835,
		"totesbasic": 248549
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
