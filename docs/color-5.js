new pv.Panel()
    .width(340)
    .height(32)
  .add(pv.Panel)
    .data(pv.Colors.category10().range())
    .left(function() this.index * 34)
    .width(32)
    .fillStyle(function(d) d)
    .title(function(d) d.color)
  .root.render();