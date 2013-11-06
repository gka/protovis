new pv.Panel()
    .width(150)
    .height(150)
  .add(pv.Wedge)
    .data([1, 1.2, 1.7, 1.5, .7])
    .left(75)
    .bottom(75)
    .outerRadius(function(d) Math.sqrt(d) * 50)
    .angle(2 * Math.PI / 5)
  .root.render();