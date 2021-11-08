perspective = (el, event) => {
    var elrect = el.getBoundingClientRect();
    var inY = event.clientY - elrect.top;
    var inX = event.clientX - elrect.left;
    var percentY = inY / el.clientHeight;
    var percentX = inX / el.clientWidth;
    var odchylka = 10;
    el.style.transition = "transform 0s";
    el.style.transform = "perspective(900px) rotateX(" + -((percentY * odchylka) - (odchylka / 2)) + "deg) rotateY(" + ((percentX * odchylka) - (odchylka / 2)) + "deg)";
}
perspectiveOut = (el) => {
    el.style.transition = "transform .3s";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
}