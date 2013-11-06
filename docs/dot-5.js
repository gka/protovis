new pv.Panel()
    .width(150)
    .height(150)
  .add(pv.Dot)
    .data([1, 1.2, 1.7, 1.5, .7, .2])
    .top(function(d) d * 80)
    .left(function() this.index * 25 + 10)
  .add(pv.Rule)
    .height(function() this.proto.top() - 5)
    .top(0)
  .root.render();