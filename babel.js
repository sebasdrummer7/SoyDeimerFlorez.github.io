
window.addEventListener('scroll', myFuntion);
window.addEventListener('load', myFuntion);
function myFuntion(){
  var x = document.querySelectorAll('.description');
  for(i =0; i < x.length; i++){
      if(x[i].getBoundingClientRect().top < window.innerHeight /1.6){
          x[i].classList.add('show');
      }
      if(x[i].getBoundingClientRect().top > window.innerHeight){
          x[i].classList.remove('show');
      }
  }
}