english.controller("generalCtrl", function ($scope) {
	cover = function (band, album) {
		if (band == "5fdp") {
			band = "5fdp-";
			if(album == "twsohatwsohv1") {
				album = "the-wrong-side-of-heaven-and-the-righteous-side-of-hell-volume-1.png";
			}
			if(album == "twsohatwsohv2") {
				album = "the-wrong-side-of-heaven-and-the-righteous-side-of-hell-volume-2.png";
			}
			if(album == "gys") {
				album = "got-your-six.png";
			}
			if(album == "pes") {
				album = "pre-emptive-strike.png";
			}
		}
		if (band == "audioslave") {
			band = "audioslave.png";
			if (album == "audioslave") {
				album = "";
			}
		}
		if (band == "fm") {
			band = "fort-minor-";
			if(album == "trt") {
				album = "the-rising-tied.png";
			}
		}
		if (band == "lp") {
			band = "linkin-park-";
			if(album == "brwmi") {
				album = "ft-busta-rhymes-we-made-it.png";
			}
			if(album == "ht") {
				album = "hybrid-theory.png";
			}
			if(album == "htep") {
				album = "hybrid-theory-ep.png";
			}
			if(album == "mtm") {
				album = "minutes-to-midnight.png";
			}
			if(album == "ats") {
				album = "a-thousand-suns.png";
			}
			if(album == "meteora") {
				album = "meteora.png";
			}
			if(album == "lt") {
				album = "living-things.png";
			}
			if(album == "oml") {
				album = "one-more-light.png";
			}
			if(album == "thp") {
				album = "the-hunting-party.png";
			}
			if(album == "blackbirds") {
				album = "blackbirds-single.png";
			}
		}
		band = band + album;
		return band;
	};
	bandName = function (band) {
		if (band == "5fdp") {
		  band = "Five Finger Death Punch";
		}
		if (band == "audio") {
		  band = "Audioslave";
		}
		if (band == "fm") {
		  band = "Fort Minor";
		}
		if (band == "lp") {
		  band = "Linkin Park";
		}
		if (band == "lpftbr") {
		  band = "Linkin Park Feat. Busta Rhymes";
		}
		return band;
	};

	$scope.fiveFingerDeathPunch = [{band: bandName("5fdp"), coverAlbum: cover("5fdp", "twsohatwsohv1"), genre: "metal", songName: "Wrong Side Of Heaven", url: "https://www.azlyrics.com/lyrics/fivefingerdeathpunch/wrongsideofheaven.html"},
		   						   {band: bandName("5fdp"), coverAlbum: cover("5fdp", "gys"), genre: "metal", songName: "I Apologize", url: "https://www.azlyrics.com/lyrics/fivefingerdeathpunch/iapologize.html"}									
								  ];
	$scope.audioslave = [{band: bandName("audio"), coverAlbum: cover("audioslave", "audioslave"), genre: "metal", songName: "Discograph Complete", url: "http://www.taringa.net/comunidades/linkinparktaringa/7314323/Fort-Minor-Discografia-MediaFire-320-Kbps.html"},
						{band: bandName("audio"), coverAlbum: cover("audioslave", "audioslave"), genre: "metal", songName: "Like a Stone", url: "https://www.azlyrics.com/lyrics/audioslave/likeastone.html"}
						];
	$scope.fortMinor = [{band: bandName("fm"), coverAlbum: cover("fm", "trt"), genre: "metal", songName: "Believe Me", url: "https://www.azlyrics.com/lyrics/fortminor/believeme.html"},
						{band: bandName("fm"), coverAlbum: cover("fm", "trt"), genre: "metal", songName: "Where'd You Go", url: "https://www.azlyrics.com/lyrics/fortminor/wheredyougo.html"}
						];
	$scope.linkinPark = [{band: bandName("lpftbr"), coverAlbum: cover("lp", "brwmi"), genre: "metal", genre: "metal", songName: "We Made It", url: "https://genius.com/Busta-rhymes-we-made-it-lyrics"},
						{band: bandName("lp"), coverAlbum: cover("lp", "blackbirds"), genre: "metal", songName: "Blackbirds", url: "https://www.azlyrics.com/lyrics/linkinpark/blackbirds.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "htep"), genre: "metal", songName: "Carousel", url: "https://www.azlyrics.com/lyrics/linkinpark/carousel.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "htep"), genre: "metal", songName: "High Voltage", url: "https://www.azlyrics.com/lyrics/linkinpark/highvoltage.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Papercut", url: "https://www.azlyrics.com/lyrics/linkinpark/papercut.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "One Step Closer", url: "https://www.azlyrics.com/lyrics/linkinpark/onestepcloser.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "With You", url: "https://www.azlyrics.com/lyrics/linkinpark/withyou.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Points Of Authority", url: "https://www.azlyrics.com/lyrics/linkinpark/pointsofauthority.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Crawling", url: "https://www.azlyrics.com/lyrics/linkinpark/crawling.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Runaway", url: "https://www.azlyrics.com/lyrics/linkinpark/runaway.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "By Myself", url: "https://www.azlyrics.com/lyrics/linkinpark/bymyself.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "In The End", url: "https://www.azlyrics.com/lyrics/linkinpark/intheend.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "A Place For My Head", url: "https://www.azlyrics.com/lyrics/linkinpark/aplaceformyhead.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Forgotten", url: "https://www.azlyrics.com/lyrics/linkinpark/forgotten.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Cure For The Itch", url: "https://www.azlyrics.com/lyrics/linkinpark/curefortheitch.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ht"), genre: "metal", songName: "Pushing Me Away", url: "https://www.azlyrics.com/lyrics/linkinpark/pushingmeaway.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Don't Stay", url: "https://www.azlyrics.com/lyrics/linkinpark/dontstay.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Somewhere I Belong", url: "https://www.azlyrics.com/lyrics/linkinpark/somewhereibelong.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Lying From You", url: "https://www.azlyrics.com/lyrics/linkinpark/lyingfromyou.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Hit The Floor", url: "https://www.azlyrics.com/lyrics/linkinpark/hitthefloor.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Easier To Run", url: "https://www.azlyrics.com/lyrics/linkinpark/easiertorun.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Faint", url: "https://www.azlyrics.com/lyrics/linkinpark/faint.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Figure.09", url: "https://www.azlyrics.com/lyrics/linkinpark/figure09.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Breaking The Habit", url: "https://www.azlyrics.com/lyrics/linkinpark/breakingthehabit.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "From The Inside", url: "https://www.azlyrics.com/lyrics/linkinpark/fromtheinside.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Nobody's Listening", url: "https://genius.com/Linkin-park-nobodys-listening-lyrics"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Session", url: "http://www.metrolyrics.com/session-lyrics-linkin-park.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "meteora"), genre: "metal", songName: "Numb", url: "https://www.azlyrics.com/lyrics/linkinpark/numb.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "Leave Out All The Rest", url: "https://www.azlyrics.com/lyrics/linkinpark/leaveoutalltherest.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "Bleed It Out", url: "https://www.azlyrics.com/lyrics/linkinpark/bleeditout.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "Shadow Of The Day", url: "https://www.azlyrics.com/lyrics/linkinpark/shadowoftheday.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "What I've Done", url: "https://www.azlyrics.com/lyrics/linkinpark/whativedone.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "No More Sorrow", url: "https://www.azlyrics.com/lyrics/linkinpark/nomoresorrow.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "mtm"), genre: "metal", songName: "Valentine's Day", url: "https://www.azlyrics.com/lyrics/linkinpark/valentinesday.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Waiting For The End", url: "https://www.azlyrics.com/lyrics/linkinpark/waitingfortheend.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Blackout", url: "https://www.azlyrics.com/lyrics/linkinpark/blackout.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Wretches And Kings", url: "https://www.azlyrics.com/lyrics/linkinpark/wretchesandkings.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Wisdom, Justice And Love", url: "https://www.azlyrics.com/lyrics/linkinpark/wisdomjusticeandlove.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Iridescent", url: "https://www.azlyrics.com/lyrics/linkinpark/iridescent.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "Fallout", url: "https://www.azlyrics.com/lyrics/linkinpark/fallout.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "ats"), genre: "metal", songName: "The Catalyst", url: "https://www.azlyrics.com/lyrics/linkinpark/thecatalyst.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "lt"), genre: "metal", songName: "Burn It Down", url: "https://www.azlyrics.com/lyrics/linkinpark/burnitdown.html"},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Keys To The Kingdom", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "All For Nothing", url: ""},
						{band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Guilty All The Same", url: "https://genius.com/Linkin-park-guilty-all-the-same-lyrics"},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "The Summoning", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "War", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Wastelands", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Until It's Gone", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Rebellion", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Mark The Graves", url: ""},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Drawbar", url: ""},
						{band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "Final Masquerade", url: "https://www.azlyrics.com/lyrics/linkinpark/finalmasquerade.html"},
						// {band: bandName("lp"), coverAlbum: cover("lp", "thp"), genre: "metal", songName: "A Line In The Sand", url: ""},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Nobody Can Save Me", url: "https://www.azlyrics.com/lyrics/linkinpark/nobodycansaveme.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Good Goodbye", url: "https://genius.com/Linkin-park-good-goodbye-lyrics"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Talking To Myself", url: "https://genius.com/Linkin-park-talking-to-myself-lyrics"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Battle Symphony", url: "https://www.azlyrics.com/lyrics/linkinpark/battlesymphony.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Invisible", url: "https://www.azlyrics.com/lyrics/linkinpark/invisible.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Heavy", url: "https://genius.com/Linkin-park-heavy-lyrics"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Sorry for Now", url: "https://www.azlyrics.com/lyrics/linkinpark/sorryfornow.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Halfway Right", url: "https://lyricsfa.com/2017/03/13/linkin-park-halfway-right-lyrics/"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "One More Light", url: "https://www.azlyrics.com/lyrics/linkinpark/onemorelight.html"},
						{band: bandName("lp"), coverAlbum: cover("lp", "oml"), genre: "metal", songName: "Sharp Edges", url: "https://www.azlyrics.com/lyrics/linkinpark/sharpedges.html"},
					// {band: bandName("lp"), coverAlbum: cover("lp", ""), genre: "metal", songName: "", url: ""}
					];
});


// {url: "",
// 					 titleMovie: "", subTitleMovie: "", genreMovie: "", onOffLink: ""}

// {url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""}

// {band: "", songName: "", url: "", coverSong: ""}