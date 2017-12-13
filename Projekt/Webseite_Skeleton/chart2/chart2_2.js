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
config.textSize = 1.2;
config.minValue = 30;
config.maxValue = 150
config.displayPercent = false;
var gauge = loadLiquidFillGauge("fillgauge", 120, config);

function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}
