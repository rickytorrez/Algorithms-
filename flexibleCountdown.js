// Flexible Countdown 
// JavaScript

function flexibleCountdown(lowNum, highNum, mult){
    var num = highNum;
    while (num > lowNum){
        console.log(num);
        num -=mult;
    }
}

flexibleCountdown(0,2018,8)