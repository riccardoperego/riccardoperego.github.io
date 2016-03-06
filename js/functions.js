document.getElementById('prima-uscita').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {index: link, event: event},
    links = document.getElementById('foto-prima-uscita').getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
document.getElementById('seconda-uscita').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {index: link, event: event},
    links = document.getElementById('foto-seconda-uscita').getElementsByTagName('a');
    blueimp.Gallery(links, options);
};