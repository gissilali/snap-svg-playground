import snap from "snapsvg";
document.getElementById("app").style.background = "red";
var snapMatrix = new snap.Matrix();
const paper = snap("#app");
const line = paper.line(50, 50, 100, 50);
const startCircle = paper.circle(50, 50, 6);
const endCircle = paper.circle(100, 50, 6);

/*s.attr({
  fill: '#00ff00'
});*/

line.attr({
  fill: "#ff8g090",
  stroke: "#0971F1",
  strokeWidth: 4
});

startCircle.attr({
  fill: "#0971F1"
});

endCircle.attr({
  fill: "#0971F1"
});

endCircle.addClass("cursor-pointer");

endCircle.click(function () {
  this.attr({
    fill: "#ff0000"
  });
});

endCircle.drag(function (dx, dy, x, y, event) {
  snapMatrix.translate(x, y);
  endCircle.transform(snapMatrix);
});

//circle.mask(smallCircle)

//circle.animate({x: 200}, 1000)
