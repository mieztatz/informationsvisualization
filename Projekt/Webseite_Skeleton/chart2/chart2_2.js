// Config Data

var config = liquidFillGaugeDefaultSettings();
config.circleThickness = 0.1;
config.circleColor = "#ce810b";
config.textColor = "#ce810b";
config.waveTextColor = "#fff381";
config.waveColor = "#efa90e";
config.textVertPosition = 0.52;
config.waveAnimateTime = 5000;
config.waveHeight = 0.1;
config.waveAnimate = true;
config.waveCount = 2;
config.waveOffset = 0.25;
config.textSize = 1.0;
config.minValue = 46000;
config.maxValue = 82000;
config.displayPercent = false;
var gauge = loadLiquidFillGauge("fillgauge", 54541, config); // 54541 is value for 1985

/*function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}*/
