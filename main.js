var draw = e => {
    var point = document.createElement('div');
    point.classList.add('squared');
    document.body.appendChild(point);
    point.style.left = (e.pageX - 15)+ 'px';
    point.style.top = (e.pageY - 15) + 'px';
    console.log(e.type);
    console.log(e.pageX, e.pageY);
};

// window.addEventListener('mousemove', draw); // el mouse te sigue

window.addEventListener ('mousedown', () => {
  window.addEventListener ('mousemove', draw);
  window.addEventListener ('mouseup', () => removeEventListener('mousemove', draw));
});    