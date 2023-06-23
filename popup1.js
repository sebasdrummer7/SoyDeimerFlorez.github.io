var btnAbrirpopup = document.getElementById('open'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirpopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});    

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
}); 