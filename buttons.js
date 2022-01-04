/*=============================================================================
file: buttons.js
description: Handles the rest of the buttons
author: mathew owusu jr
==============================================================================
Store Upgrades
=============================================================================*/
function buyMic() {
    if (money >= micPrice) {
        money -= micPrice;
        micPrice = Math.floor(Math.pow(micPrice, 1.1));
        fanRate = Math.floor(Math.pow(micPrice, 0.2));
    }
}

function buySoftware() {
    if (money >= softwarePrice) {
        money -= softwarePrice;
        softwarePrice = Math.floor(Math.pow(softwarePrice, 1.2));
        fanRate = Math.floor(Math.pow(softwarePrice, 0.4));
    }
}

function buyClothes() {
    if (money >= clothesPrice) {
        money -= clothesPrice;
        clothesPrice = Math.floor(Math.pow(clothesPrice, 1.3));
    }
}

function buyGuitar() {
    if (money >= guitarPrice) {
        money -= guitarPrice;
        guitarPrice = Math.floor(Math.pow(guitarPrice, 1.1));
    }
}

function buyCamera() {
    if (money >= cameraPrice) {
        money -= cameraPrice;
        cameraPrice = Math.floor(Math.pow(cameraPrice, 1.2));
    }
}

function buyKeys() {
    if (money >= keysPrice) {
        money -= keysPrice;
        keysPrice = Math.floor(Math.pow(keysPrice, 1.3));
    }
}
function buyPC() {
    if (money >= pcPrice) {
        money -= pcPrice;
        pcPrice = Math.floor(Math.pow(pcPrice, 1.1));
    }
}

function buyCar() {
    if (money >= carPrice) {
        money -= carPrice;
        carPrice = Math.floor(Math.pow(carPrice, 1.2));
    }
}

function buyMidi() {
    if (money >= midiPrice) {
        money -= midiPrice;
        midiPrice = Math.floor(Math.pow(midiPrice, 1.3));
    }
}

function buyAutotune() {
    if (money >= autotunePrice) {
        money -= autotunePrice;
        autotunePrice = Math.floor(Math.pow(autotunePrice, 1.1));
    }
}

function buyHouse() {
    if (money >= housePrice) {
        money -= housePrice;
        housePrice = Math.floor(Math.pow(housePrice, 1.2));
    }
}

/*=============================================================================
Music Events
=============================================================================*/
function onPlay() {
    if (effort >= play) {
        effort -= play;
        effortRate += 0.25;
        play = Math.ceil(Math.pow(play, 1.05));
    }
}
function onWrite() {
    if (effort >= write) {
        effort -= write;
        effortRate += 1;
        write = Math.ceil(Math.pow(write, 1.05));
        qwritten += 1;
        songsWritten += 1;
    }
}
function onRecord() {
    if (effort >= record) {
        effort -= record;
        effortRate += 2;
        record = Math.ceil(Math.pow(record, 1.05));
        qwritten -= 1;
        qrecorded += 1;
        songsRecorded += 1;
    }
}

function onUpload() {
    if (effort >= upload) {
        effort -= upload;
        effortRate += 5;
        upload = Math.ceil(Math.pow(upload, 1.05));
        updateFanRate = Math.floor(Math.random() * fanRate);
        qrecorded -= 1;
        songsUploaded += 1;
    }
}

function onPromote() {
    if (effort >= social) {
        effort -= social;
        effortRate -= 10;
        social = Math.ceil(Math.pow(social, 1.05));
        fanCount += fanCount * 1.5; // change Later to use rand
    }
}

function onProduce() {
    if (effort >= beat) {
        effort -= beat;
        effortRate += 15;
        beat = Math.ceil(Math.pow(beat, 1.05));
        fanCount += fanCount * 1.8; // change Later to use rand
    }
}

function onVideo() {
    if (effort >= video) {
        effort -= video;
        effortRate += 25;
        video = Math.floor(Math.pow(video, 1.025));
        fanCount += fanCount * 2; // change Later to use rand
    }
}

function onTour() {
    if (effort >= show) {
        effort -= show;
        effortRate += 50;
        show = Math.floor(Math.pow(show, 1.025));
        fanCount += fanCount * 2.5; // change Later to use rand
    }
}