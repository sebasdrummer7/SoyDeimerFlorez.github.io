window.onscroll = function (){
    if(document.documentElement.onscroll >100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}
document.querySelector('.go-top-container')
.addEventListener('click' , ()=>{
    window.scroll({
        top:0,
        behavior: 'smooth'
});

});