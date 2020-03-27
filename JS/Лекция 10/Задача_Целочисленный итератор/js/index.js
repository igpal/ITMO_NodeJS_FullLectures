let itRed = new IteratorSecond(0, 255);
let itGreen = new IteratorSecond(255, 10);
let itBlue = new IteratorSecond(15, 255);

function changeStyle(){
    box.style.backgroundColor = "rgb(" + itRed.next() + ", " + 
        itGreen.next() + ", " + itBlue.next() + ")";
}

setInterval(changeStyle,10);