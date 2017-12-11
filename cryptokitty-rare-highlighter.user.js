// ==UserScript==
// @name        Cryptokitty rare highlighter
// @version     0.1.0
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

	// 2017.12.11: copy/paste from https://cryptokittydex.com/
	const rare = `royalblue 146  wingtips 728  wolfgrey 819  oldlace 973  mainecoon 1,489  gerbil 2,059 violet 2,232  cerulian 2,663  cottoncandy 3,119  fabulous 3,591  chartreux 4,136  jaguar 4,735 whixtensions 7,729  dali 7,862  bubblegum 7,921  googly 9,230  peach 9,409  otaku 9,940 skyblue 11,556  tigerpunk 11,561  limegreen 13,340  bloodred 14,396  scarlet 14,461  beard 15,326 cloudwhite 15,889  calicool 17,320  laperm 17,546  barkbrown 18,099  emeraldgreen 19,892 tongue 19,931  chestnut 20,199  gold 20,599  spock 21,435  mauveover 26,264  shadowgrey 31,242 cymric 31,821  coffee 32,007  salmon 34,641  royalpurple 35,826  mintgreen 36,081  swampgreen 37,664 lemonade 37,699  chocolate 38,167  sphynx 38,420  topaz 38,444  simple 38,898  greymatter 38,930 saycheese 39,106  orangesoda 39,756  aquamarine 40,548  munchkin 41,838  raisedbrow 43,225 soserious 44,249  happygokitty 44,267  ragamuffin 47,057  sizzurp 47,345  strawberry 47,356 himalayan 49,078  pouty 50,731  crazy 61,678  thicccbrowz 63,968  luckystripe 65,924 kittencream 91,890  granitegrey 95,717  totesbasic 110,290`.split(/[\s\d,]+/);

	/*
	const exclusive = [
		"Exclusive",
		"Genesis",
		"BugCat"
	];

	const fancy = [
		"Fancy",
		"Mistletoe",
		"Dracula",
		"ShipCat"
		"DuCat"
	];
	*/

	function init() {
		const len = rare.length,
			half = Math.ceil(len / 2);
		document.querySelectorAll(".ListAttributes-item").forEach(el => {
			const index = rare.indexOf(el.textContent.trim());
			if (index > -1 && !el.classList.contains("rare-processed")) {
				el.classList.add("rare-processed");
				el.textContent += ` (${index}/${len})`;
				if (index <= half) {
					el.style.border = "1px solid red";
				}
			}
		});
	}

	let timer;
	new MutationObserver(() => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (document.querySelector(".ListAttributes-item")) {
				init();
			}
		}, 500);
	}).observe(document.body, {
		childList: true,
		subtree: true
	});
})();
