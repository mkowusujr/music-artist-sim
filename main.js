/*=============================================================================
Main Buttons
=============================================================================*/ 
var effort = 0, money = 0, fanCount = 0;
var totalEffort = 0, totalMoney = 0, totalFanCount = 0;

var payRate = 12;

function onEffortClicks(){
	effort += 1;
	totalEffort += 1;
    
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
var donationRate = 2;
/*=============================================================================
Store Upgrades
=============================================================================*/ 
var micPrice = 20;
function buyMic(){
	if (money >= micPrice) {
		money -= micPrice;
		micPrice = Math.floor(Math.pow(micPrice, 1.1));
	}
}
var softwarePrice = 85;
function buySoftware(){
	if (money >= softwarePrice) {
		money -= softwarePrice;
		softwarePrice = Math.floor(Math.pow(softwarePrice, 1.2));
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
function onProduce(){
	if(effort >= 30 && effort != 0){
		money+=beatRate;
		effort -= 30;
		fanCount+= 0.25;
	}
	
}
function onVideo(){
	if(effort >= 60 && effort != 0){
		
		effort -= 60;
		fanCount+= 3.25;
		money+=(fanCount*.25);
	}
}


/*=============================================================================
Main Loop
=============================================================================*/ 
function fanSupport(){
	money += (fanCount * donationRate);
	document.getElementById('moneyTotal').innerHTML = money;
}

window.setInterval(function(){
	fanSupport();
}, 1000);


window.setInterval(function(){
	
	
	document.getElementById('effortTotal').innerHTML = effort;
    document.getElementById('effortStat').innerHTML = totalEffort;
    document.getElementById('moneyTotal').innerHTML = money;
    document.getElementById('moneyStat').innerHTML = totalMoney;
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('fansStat').innerHTML = totalFanCount;
	
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
	}
	else {
		document.getElementById('micBtn').style.opacity='1';
		document.getElementById('micBtn').style.cursor='pointer';
	}
	if (money < softwarePrice) {
		document.getElementById('softBtn').style.opacity='0.6';
		document.getElementById('softBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('softBtn').style.opacity='1';
		document.getElementById('softBtn').style.cursor='pointer';
	}
	if (money < clothesPrice) {
		document.getElementById('cloBtn').style.opacity='0.6';
		document.getElementById('cloBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('cloBtn').style.opacity='1';
		document.getElementById('cloBtn').style.cursor='pointer';
	}
	if (money < guitarPrice) {
		document.getElementById('guiBtn').style.opacity='0.6';
		document.getElementById('guiBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('guiBtn').style.opacity='1';
		document.getElementById('guiBtn').style.cursor='pointer';
	}
	if (money < cameraPrice) {
		document.getElementById('camBtn').style.opacity='0.6';
		document.getElementById('camBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('camBtn').style.opacity='1';
		document.getElementById('camBtn').style.cursor='pointer';
	}
	if (money < keysPrice) {
		document.getElementById('keyBtn').style.opacity='0.6';
		document.getElementById('keyBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('keyBtn').style.opacity='1';
		document.getElementById('keyBtn').style.cursor='pointer';
	}
	if (money < pcPrice) {
		document.getElementById('pcBtn').style.opacity='0.6';
		document.getElementById('pcBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('pcBtn').style.opacity='1';
		document.getElementById('pcBtn').style.cursor='pointer';
	}
	if (money < carPrice) {
		document.getElementById('carBtn').style.opacity='0.6';
		document.getElementById('carBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('carBtn').style.opacity='1';
		document.getElementById('carBtn').style.cursor='pointer';
	}
	if (money < midiPrice) {
		document.getElementById('midBtn').style.opacity='0.6';
		document.getElementById('midBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('midBtn').style.opacity='1';
		document.getElementById('midBtn').style.cursor='pointer';
	}
	if (money < autotunePrice) {
		document.getElementById('tunBtn').style.opacity='0.6';
		document.getElementById('tunBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('tunBtn').style.opacity='1';
		document.getElementById('tunBtn').style.cursor='pointer';
	}
	if (money < housePrice) {
		document.getElementById('houBtn').style.opacity='0.6';
		document.getElementById('houBtn').style.cursor='not-allowed';
	}
	else {
		document.getElementById('houBtn').style.opacity='1';
		document.getElementById('houBtn').style.cursor='pointer';
	}
}, 1);

