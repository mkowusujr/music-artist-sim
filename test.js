// main button
var effort = 0;
function onEffortClicked(){
	effort += 1;
    document.getElementById('clickEfforts').innerHTML = effort;
}


// payment change later
var money = 0;
var payRate = 12;
function onPay(){
	if(effort >= 60 && effort != 0){
		money += payRate;
		effort -= 60;
	}
	document.getElementById('clickEfforts').innerHTML = effort;
	document.getElementById('moneys').innerHTML = money;
	
}


// Fanbase interactions
var fanCount = 0;
var beatRate = 3;
function onProduce(){
	if(effort >= 30 && effort != 0){
		money+=beatRate;
		effort -= 30;
		fanCount+= 0.25;
	}
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('clickEfforts').innerHTML = effort;
}
var donationRate = 2;
function fanSupport(){
	money += (fanCount * donationRate);
	document.getElementById('moneys').innerHTML = money;
}

function onDAW(){
	if(money >= 50)
	{
		money -= 50;
		document.getElementById('theDaw').style.display='none';
		document.getElementById('hide').style.display='block';
	}
	
}
function onCamera(){
	if(money >= 100)
	{
		money -= 100;
		document.getElementById('theCamera').style.display='none';
		document.getElementById('hideVideo').style.display='block';
	}
	
}
function onVideo(){
	if(effort >= 60 && effort != 0){
		
		effort -= 60;
		fanCount+= 3.25;
		money+=(fanCount*.25);
	}
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('clickEfforts').innerHTML = effort;
}
// Main Loop 
window.setInterval(function(){
	fanSupport();
}, 1000);
