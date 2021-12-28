/*=============================================================================
Main Buttons
=============================================================================*/ 
var effort = 0, money = 0, fanCount = 0;
var payRate = 12;
var beatRate = 3;
var donationRate = 2;
function onEffortClicks(){
	effort += 1;
    document.getElementById('effortTotal').innerHTML = effort;
}
function onCollectPay(){
	if(effort >= 60 && effort != 0){
		money += payRate;
		effort -= 60;
	}
	document.getElementById('effortTotal').innerHTML = effort;
	document.getElementById('moneyTotal').innerHTML = money;
}


/*=============================================================================
Store Upgrade
=============================================================================*/ 
var dawPrice = 50; cameraPrice = 100;
function onBuyDaw(){
	if(money >= 50)
	{
		money -= 50;
		document.getElementById('musicSoftware').style.display='none';
		document.getElementById('beatMaking').style.display='block';
	}
}
function onBuyCamera(){
	if(money >= 100)
	{
		money -= 100;
		document.getElementById('camera').style.display='none';
		document.getElementById('videoMaking').style.display='block';
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
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('effortTotal').innerHTML = effort;
}
function onVideo(){
	if(effort >= 60 && effort != 0){
		
		effort -= 60;
		fanCount+= 3.25;
		money+=(fanCount*.25);
	}
	document.getElementById('fans').innerHTML = fanCount;
	document.getElementById('effortTotal').innerHTML = effort;
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
	document.getElementById('dawPrice').innerHTML = dawPrice;
	document.getElementById('cameraPrice').innerHTML = cameraPrice;
}, 1000);

