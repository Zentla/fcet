//variables
let animado = document.querySelectorAll('#animado');


//eventlistener
window.addEventListener('scroll', mostrarScroll);

//funciones
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for ( var i=0; i < animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado < scrollTop) {
          animado[i].style.opacity = 1;  
        }
    }
};




