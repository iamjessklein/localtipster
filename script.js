// Gives each torn-off tab a ragged, hand-torn edge.
// Each .stub carries data-h (height px), data-lift (how jagged, px) and
// data-shape (0-1 values along the tear). Edit those in index.html to reshape a stub.
(function () {
  function edge(pts, dy) {
    var bottom = pts.slice().reverse().map(function (p) {
      return p.x + '% ' + Math.max(2, p.y - dy) + 'px';
    });
    return 'polygon(0 0, 100% 0, ' + bottom.join(', ') + ')';
  }

  document.querySelectorAll('.stub').forEach(function (stub) {
    var h = parseFloat(stub.dataset.h);
    var lift = parseFloat(stub.dataset.lift);
    var shape = stub.dataset.shape.split(',').map(parseFloat);
    var n = shape.length - 1;
    var pts = shape.map(function (s, i) {
      return { x: Math.round((i / n) * 100), y: Math.max(6, h - s * lift) };
    });
    stub.style.height = h + 'px';
    stub.style.clipPath = edge(pts, 0);
    stub.firstElementChild.style.clipPath = edge(pts, 4);
  });
})();
