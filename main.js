/*=============================================================================
Main Buttons
=============================================================================*/
var effort = 0, money = 0, fanCount = 0;
var totalEffort = 0, totalMoney = 0, totalFanCount = 0;
var effortRate = 1;
var payRate = 12;
var fanRate = 0;

function onEffortClicks(){
	effort += effortRate;
	totalEffort += effortRate;
}
function onCollectPay(){
	if(effort >= 60 && effort != 0){
		money += payRate;
		totalMoney += payRate;
		effort -= 60;
	}
}

function nameChange(){
let name = prompt("Enter Your Stage Name", "Name");
document.getElementById('nameText').innerHTML = name;
}


/*=============================================================================
Stats Section
=============================================================================*/
var beatRate = 3;
var songsWritten = 0, songsRecorded = 0, songsUploaded = 0;
var qwritten = 0, qrecorded = 0;
var updateFanRate = 0;
/*=============================================================================
Store Upgrades
=============================================================================*/
var micPrice = 20;
function buyMic(){
	if (money >= micPrice) {
		money -= micPrice;
		micPrice = Math.floor(Math.pow(micPrice, 1.1));
		fanRate = Math.floor(Math.pow(micPrice, 0.2))
	}
}
var softwarePrice = 85;
function buySoftware(){
	if (money >= softwarePrice) {
		money -= softwarePrice;
		softwarePrice = Math.floor(Math.pow(softwarePrice, 1.2));
		fanRate = Math.floor(Math.pow(softwarePrice, 0.4))
	}
}
var clothesPrice = 230;
function buyClothes(){
	if (money >= clothesPrice) {
		money -= clothesPrice;
		clothesPrice = Math.floor(Math.pow(clothesPrice, 1.3));
	}
}
var guitarPrice = 750;
function buyGuitar(){
	if (money >= guitarPrice) {
		money -= guitarPrice;
		guitarPrice = Math.floor(Math.pow(guitarPrice, 1.1));
	}
}
var cameraPrice = 980;
function buyCamera(){
	if (money >= cameraPrice) {
		money -= cameraPrice;
		cameraPrice = Math.floor(Math.pow(cameraPrice, 1.2));
	}
}
var keysPrice = 4080;
function buyKeys(){
	if (money >= keysPrice) {
		money -= keysPrice;
		keysPrice = Math.floor(Math.pow(keysPrice, 1.3));
	}
}
var pcPrice = 20000;
function buyPC(){
	if (money >= pcPrice) {
		money -= pcPrice;
		pcPrice = Math.floor(Math.pow(pcPrice, 1.1));
	}
}
var carPrice = 23000000;
function buyCar(){
	if (money >= carPrice) {
		money -= carPrice;
		carPrice = Math.floor(Math.pow(carPrice, 1.2));
	}
}
var midiPrice = 953000;
function buyMidi(){
	if (money >= midiPrice) {
		money -= midiPrice;
		midiPrice = Math.floor(Math.pow(midiPrice, 1.3));
	}
}
var autotunePrice = 4040400;
function buyAutotune(){
	if (money >= autotunePrice) {
		money -= autotunePrice;
		autotunePrice = Math.floor(Math.pow(autotunePrice, 1.1));
	}
}
var housePrice = 23000000;
function buyHouse(){
	if (money >= housePrice) {
		money -= housePrice;
		housePrice = Math.floor(Math.pow(housePrice, 1.2));
	}
}


/*=============================================================================
Music Events
=============================================================================*/
var play = 60, write = 120, record = 240, upload = 360;
var beat = 600, video = 720, social = 480, show = 840;

function onPlay(){
	if(effort >= play){
		effort -= play;
		effortRate += 0.25;
		play = Math.ceil(Math.pow(play, 1.05));
	}
}
function onWrite(){
	if(effort >= write){
		effort -= write;
		effortRate += 1;
		write = Math.ceil(Math.pow(write, 1.05));
		qwritten += 1;
		songsWritten += 1;
	}
}
function onRecord(){
	if(effort >= record){
		effort -= record;
		effortRate += 2;
		record = Math.ceil(Math.pow(record, 1.05));
		qwritten -= 1;
		qrecorded += 1;
		songsRecorded += 1;
	}
}

function onUpload(){
	if(effort >= upload){
		effort -= upload;
		effortRate += 5;
		upload = Math.ceil(Math.pow(upload, 1.05));
		updateFanRate = Math.floor(Math.random() * (fanRate));
		qrecorded -= 1;
		songsUploaded += 1;
	}
}

function onPromote(){
	if(effort >= social){
		effort -= social;
		effortRate -= 10;
		social = Math.ceil(Math.pow(social, 1.05));
		fanCount += (fanCount * 1.5); // change Later to use rand
	}
}

function onProduce(){
	if(effort >= beat){
		effort -= beat;
		effortRate += 15;
		beat = Math.ceil(Math.pow(beat, 1.05));
		fanCount += (fanCount * 1.8); // change Later to use rand
	}
}

function onVideo(){
	if(effort >= video){
		effort -= video;
		effortRate += 25;
		video = Math.floor(Math.pow(video, 1.025));
		fanCount += (fanCount * 2); // change Later to use rand
	}
}

function onTour(){
	if(effort >= show){
		effort -= show;
		effortRate += 50;
		show = Math.floor(Math.pow(show, 1.025));
		fanCount += (fanCount * 2.5); // change Later to use rand
	}
}

/*=============================================================================
Game Data
=============================================================================*/
/*function saveGame(){
	var saveData = {
		effort: effort,
		totalEffort: totalEffort,
		effortRate: effortRate,
		money: money,
		fanCount: fanCount,
		totalFanCount: totalFanCount,


		var effort = 0, money = 0, fanCount = 0;
		var totalEffort = 0, totalMoney = 0, totalFanCount = 0;
		var effortRate = 1;

		var fanRate = 0;
		var beatRate = 3;
		var micPrice = 20;
		var songsWritten = 0, songsRecorded = 0, songsUploaded = 0;
		var qwritten = 0, qrecorded = 0;
		var updateFanRate = 0;
		var play = 60, write = 120, record = 240, upload = 360;
		var beat = 600, video = 720, social = 480, show = 840;
	};
}*/



/*=============================================================================
Main Loop
=============================================================================*/

function fanGen(){
	if (fanRate != 0)
		increase = Math.floor(Math.random() * (fanRate));
	if (upload > 360){
		var fanIncr = updateFanRate;
		fanCount += fanIncr;
		totalFanCount += fanIncr;
	}
}

window.setInterval(function(){
	fanGen();
}, 1000);


window.setInterval(function(){
	document.title = `$${totalMoney} Net Worth - Music Artist Sim`;
	document.getElementById('effortTotal').innerHTML = effort;
    document.getElementById('effortStat').innerHTML = totalEffort;
    document.getElementById('moneyTotal').innerHTML = money;
    document.getElementById('moneyStat').innerHTML = totalMoney;
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('fansStat').innerHTML = totalFanCount;
	document.getElementById('joy').innerHTML = effortRate;
	document.getElementById('qwritten').innerHTML = qwritten;
	document.getElementById('qrecorded').innerHTML = qrecorded;

	if (effort < 60) {
		document.getElementById('paybtn').style.opacity='0.6';
		document.getElementById('paybtn').style.cursor='not-allowed';
		document.getElementById('paybtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('paybtn').style.opacity='1';
		document.getElementById('paybtn').style.cursor='pointer';
		document.getElementById('paybtn').removeAttribute('disabled');
	}
	// Stats
	document.getElementById('songsWritten').innerHTML = songsWritten;
	document.getElementById('songsRecorded').innerHTML = songsRecorded;
	document.getElementById('songsUploaded').innerHTML = songsUploaded;

	// Prices
	document.getElementById('micPrice').innerHTML = micPrice;
	document.getElementById('softwarePrice').innerHTML = softwarePrice;
	document.getElementById('clothesPrice').innerHTML = clothesPrice;
	document.getElementById('guitarPrice').innerHTML = guitarPrice;
	document.getElementById('cameraPrice').innerHTML = cameraPrice;
	document.getElementById('keysPrice').innerHTML = keysPrice;
	document.getElementById('pcPrice').innerHTML = pcPrice;
	document.getElementById('carPrice').innerHTML = carPrice;
	document.getElementById('midiPrice').innerHTML = midiPrice;
	document.getElementById('autotunePrice').innerHTML = autotunePrice;
	document.getElementById('housePrice').innerHTML = housePrice;

	// Upgrades
	if (money < micPrice) {
		document.getElementById('micBtn').style.opacity='0.6';
		document.getElementById('micBtn').style.cursor='not-allowed';
		document.getElementById('micBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('micBtn').style.opacity='1';
		document.getElementById('micBtn').style.cursor='pointer';
		document.getElementById('micBtn').removeAttribute('disabled');
	}


	if (money < softwarePrice) {
		document.getElementById('softBtn').style.opacity='0.6';
		document.getElementById('softBtn').style.cursor='not-allowed';
		document.getElementById('softBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('softBtn').style.opacity='1';
		document.getElementById('softBtn').style.cursor='pointer';
		document.getElementById('softBtn').removeAttribute('disabled');
	}


	if (money < clothesPrice) {
		document.getElementById('cloBtn').style.opacity='0.6';
		document.getElementById('cloBtn').style.cursor='not-allowed';
		document.getElementById('cloBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('cloBtn').style.opacity='1';
		document.getElementById('cloBtn').style.cursor='pointer';
		document.getElementById('cloBtn').removeAttribute('disabled');
	}


	if (money < guitarPrice) {
		document.getElementById('guiBtn').style.opacity='0.6';
		document.getElementById('guiBtn').style.cursor='not-allowed';
		document.getElementById('guiBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('guiBtn').style.opacity='1';
		document.getElementById('guiBtn').style.cursor='pointer';
		document.getElementById('guiBtn').removeAttribute('disabled');
	}


	if (money < cameraPrice) {
		document.getElementById('camBtn').style.opacity='0.6';
		document.getElementById('camBtn').style.cursor='not-allowed';
		document.getElementById('camBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('camBtn').style.opacity='1';
		document.getElementById('camBtn').style.cursor='pointer';
		document.getElementById('camBtn').removeAttribute('disabled');
	}


	if (money < keysPrice) {
		document.getElementById('keyBtn').style.opacity='0.6';
		document.getElementById('keyBtn').style.cursor='not-allowed';
		document.getElementById('keyBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('keyBtn').style.opacity='1';
		document.getElementById('keyBtn').style.cursor='pointer';
		document.getElementById('keyBtn').removeAttribute('disabled');
	}


	if (money < pcPrice) {
		document.getElementById('pcBtn').style.opacity='0.6';
		document.getElementById('pcBtn').style.cursor='not-allowed';
		document.getElementById('pcBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('pcBtn').style.opacity='1';
		document.getElementById('pcBtn').style.cursor='pointer';
		document.getElementById('pcBtn').removeAttribute('disabled');
	}


	if (money < carPrice) {
		document.getElementById('carBtn').style.opacity='0.6';
		document.getElementById('carBtn').style.cursor='not-allowed';
		document.getElementById('carBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('carBtn').style.opacity='1';
		document.getElementById('carBtn').style.cursor='pointer';
		document.getElementById('carBtn').removeAttribute('disabled');
	}


	if (money < midiPrice) {
		document.getElementById('midBtn').style.opacity='0.6';
		document.getElementById('midBtn').style.cursor='not-allowed';
		document.getElementById('midBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('midBtn').style.opacity='1';
		document.getElementById('midBtn').style.cursor='pointer';
		document.getElementById('midBtn').removeAttribute('disabled');
	}
	if (money < autotunePrice) {
		document.getElementById('tunBtn').style.opacity='0.6';
		document.getElementById('tunBtn').style.cursor='not-allowed';
		document.getElementById('tunBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('tunBtn').style.opacity='1';
		document.getElementById('tunBtn').style.cursor='pointer';
		document.getElementById('tunBtn').removeAttribute('disabled');
	}


	if (money < housePrice) {
		document.getElementById('houBtn').style.opacity='0.6';
		document.getElementById('houBtn').style.cursor='not-allowed';
		document.getElementById('houBtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('houBtn').style.opacity='1';
		document.getElementById('houBtn').style.cursor='pointer';
		document.getElementById('houBtn').removeAttribute('disabled');
	}


	// studio
	document.getElementById('play').innerHTML = play;
	if (effort < play) {
		document.getElementById('playbtn').style.opacity='0.6';
		document.getElementById('playbtn').style.cursor='not-allowed';
		document.getElementById('playbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('playbtn').style.opacity='1';
		document.getElementById('playbtn').style.cursor='pointer';
		document.getElementById('playbtn').removeAttribute('disabled');
	}
	document.getElementById('write').innerHTML = write;
	if (effort < write) {
		document.getElementById('writebtn').style.opacity='0.6';
		document.getElementById('writebtn').style.cursor='not-allowed';
		document.getElementById('writebtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('writebtn').style.opacity='1';
		document.getElementById('writebtn').style.cursor='pointer';
		document.getElementById('writebtn').removeAttribute('disabled');
	}
	document.getElementById('record').innerHTML = record;
	if ((micPrice < 21) || (qwritten <= 0) || (effort < record)) {
		document.getElementById('recordbtn').style.opacity='0.6';
		document.getElementById('recordbtn').style.cursor='not-allowed';
		document.getElementById('recordbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('recordbtn').style.opacity='1';
		document.getElementById('recordbtn').style.cursor='pointer';
		document.getElementById('recordbtn').removeAttribute('disabled');
	}
	document.getElementById('upload').innerHTML = upload;
	if ((softwarePrice < 86) || (micPrice <21) || (qrecorded <= 0) || (effort < upload)) {
		document.getElementById('uploadbtn').style.opacity='0.6';
		document.getElementById('uploadbtn').style.cursor='not-allowed';
		document.getElementById('uploadbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('uploadbtn').style.opacity='1';
		document.getElementById('uploadbtn').style.cursor='pointer';
		document.getElementById('uploadbtn').removeAttribute('disabled');
	}
	document.getElementById('beat').innerHTML = beat;
	if ((softwarePrice < 1000) || (effort < beat)) {
		document.getElementById('beatbtn').style.opacity='0.6';
		document.getElementById('beatbtn').style.cursor='not-allowed';
		document.getElementById('beatbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('beatbtn').style.opacity='1';
		document.getElementById('beatbtn').style.cursor='pointer';
		document.getElementById('beatbtn').removeAttribute('disabled');
	}
	document.getElementById('video').innerHTML = video;
	if ((cameraPrice < 7000) || (effort < video)) {
		document.getElementById('videobtn').style.opacity='0.6';
		document.getElementById('videobtn').style.cursor='not-allowed';
		document.getElementById('videobtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('videobtn').style.opacity='1';
		document.getElementById('videobtn').style.cursor='pointer';
		document.getElementById('videobtn').removeAttribute('disabled');
	}
	document.getElementById('social').innerHTML = social;
	if ((songsUploaded %5 == 0) || (effort < social)) {
		document.getElementById('socialbtn').style.opacity='0.6';
		document.getElementById('socialbtn').style.cursor='not-allowed';
		document.getElementById('socialbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('socialbtn').style.opacity='1';
		document.getElementById('socialbtn').style.cursor='pointer';
		document.getElementById('socialbtn').removeAttribute('disabled');
	}
	document.getElementById('show').innerHTML = show;
	if ((songsUploaded %12 == 0) || (effort < show)) {
		document.getElementById('showbtn').style.opacity='0.6';
		document.getElementById('showbtn').style.cursor='not-allowed';
		document.getElementById('showbtn').setAttribute('disabled', 'disabled');
	} else {
		document.getElementById('showbtn').style.opacity='1';
		document.getElementById('showbtn').style.cursor='pointer';
		document.getElementById('showbtn').removeAttribute('disabled');
	}
}, 1);
