require("FontTeletext10x18Ascii").add(Graphics);

function render() {
  var date = new Date();
  var hour = date.getHours(), minutes = date.getMinutes();
  g.reset();
  g.setBgColor(0.25, 0.25, 0.25);
  g.clear(false);
  g.setColor(1, 1, 1);
  g.setFont("Teletext10x18Ascii", 2);
  var time = (hour % 12 > 0 ? hour % 12: 12) + ":" + ("0" + minutes).substr(-2) + " " + (hour < 12 ? "AM" : "PM");
  g.drawString(time, (g.getWidth() - g.stringWidth(time)) / 2, (g.getHeight() - g.getFontHeight()) / 5);
  g.setColor(0, 1, 0);
  g.drawCircle(g.getWidth() / 2, g.getHeight() * 2 / 3, 60);
  g.drawCircle(g.getWidth() / 2, g.getHeight() * 2 / 3, 59);
  g.drawCircle(g.getWidth() / 2, g.getHeight() * 2 / 3, 58);
  g.drawCircle(g.getWidth() / 2, g.getHeight() * 2 / 3, 57);
  g.drawCircle(g.getWidth() / 2, g.getHeight() * 2 / 3, 56);
  g.setColor(0, 0, 1);
  var angle = Math.PI / 2 - (date.getSeconds() * 1000 + date.getMilliseconds()) / 60000 * 2 * Math.PI;
  var x = Math.cos(angle);
  var y = Math.sin(angle);
  var vertices = [g.getWidth() / 2 - y * 2, g.getHeight() * 2 / 3 - x * 2, g.getWidth() / 2 + y * 2, g.getHeight() * 2 / 3 + x * 2, g.getWidth() / 2 + y * 2 + x * 50, g.getHeight() * 2 / 3 + x * 2 - y * 50, g.getWidth() / 2 - y * 2 + x * 50, g.getHeight() * 2 / 3 - x * 2 - y * 50];
  g.fillPoly(vertices);
}

render();
setInterval(render, 20);
