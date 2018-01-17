/* NOT USED ON WEBSITE */

var div1=d3.select(document.getElementById('div1'));
var div2=d3.select(document.getElementById('div2'));
var div3=d3.select(document.getElementById('div3'));
var div4=d3.select(document.getElementById('div4'));

start();

function onClick2() {
    deselect();
    div2.attr("class","selectedRadial");
}

function labelFunction(val,min,max) {

}

function deselect() {
    div2.attr("class","radial");
}

function start() {

    var rp2 = radialProgress(document.getElementById('div2'))
            .label("RADIAL 2")
            .onClick(onClick2)
            .diameter(150)
            .value(132)
            .render();
}
