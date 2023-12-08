//MENU HAMBURGUESA

/*Seleccionamos los elementos necesarios*/

const nav = document.querySelector("#nav");

const abrir = document.querySelector("#abrir");

const cerrar = document.querySelector("#cerrar");

/*Creamos evento para que al darle click al botón abrir, se muestra la nav-bar*/
abrir.addEventListener("click", () =>{
    nav.classList.add("visible")//añadimos la clase visible a la clase nav
})


/*Creamos evento para que al darle click al botón cerrar, se cierre la nav-bar*/
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");//le quitamos la clase visible a nav
})


//ACTIVACIÓN MODO NOCHE/DÍA.

//seleccionamos los elementos

const switchCont = document.getElementById("switch");
const icon = document.getElementById("icon");
const text = document.getElementById("text");

/*aqui es donde tenemos todas las variables del archivo css y através de esa variable cambiaremos el color*/ 
const rootStyles = document.documentElement.style;
//PROGRAMAMOS EVENTOS DESPUÉS DE LOCALIZAR LOS ELEMENTOS
//se programa evento, cuando se escucha click le cambiamos la clase al body
switchCont.addEventListener("click", () =>{
    document.body.classList.toggle("dark");//cambio de la clase,toggle=Es una especie de interruptor que cambia la clase
    //dentro del evento también se cambiará el icono y el texto a continuación
    if(icon.src.includes("encender.png")){
        icon.src="assets/icons/apagar.png";
        text.textContent="Modo Día";
    }else{
        icon.src="assets/icons/encender.png";
        text.textContent="Modo Noche";
    }
});



//ACTIVACIÓN SWITCH PALETA DE COLORES

//seleccionamos los elementos

const toggleColors = document.getElementById("palette-colors");

toggleColors.addEventListener("click", (e)=>{
    rootStyles.setProperty("--palette-color",e.target.dataset.color);
});




//EVENTO DOBLE MOSTRAR CARTA FOTO E ICONOS AL CARGAR LA WEB

//Para poder hacer esto hay que crear una función general onload que llame a las dos funciones onload a la vez, ya que no se pueden crear dos funciones onload de forma independiene da error y solo carga la última, Funciona OK. 

//A parte de que el efecto se muestre cuando carga la web con el evento onLoad, le añadimos una nueva clase para que cuando cargue la web se muestre la card desde un lateral 
window.onload = cargarFunciones;
function cargarFunciones(){
     efectCard();
     efectBottom();
    
}
function efectCard(){
    let card = document.querySelector(".contenido-inicio");/*No me funcionaba el evento por que estaba seleccionado con querySelectorAll, de esta forma se seleccionan todos los elementos de .contenido-inicio, seleccionando solo el elemento padre funciona ok */
    card.style.opacity = 1;
    card.classList.add("efectoCarta");
}
function efectBottom(){
    let icons = document.querySelector(".contenedor-tec");
    icons.style.opacity = 1;
    icons.classList.add("efectoBottom");
}



// EVENTO SCROLL ICONOS TECNOLOGÍAS 1.0  No borrar expliación de código pegarlo a la siguiente función

// /*En esta variable guardaremos TODOS (querySelectorAll) los elementos que tengan la clase contenedor-tec que es la que contiene los iconos que queremos animar*/

// let animacion = document.querySelectorAll(".contenedor-tec");

// //Creamos la función, ésta función consistirá en detectar la cantidad de scroll que se realiza, a partir de ahi realizaremos la animación
// function mostrarIconos(){
//     let scrollTop = document.documentElement.scrollTop;//guardamos en la variable scrollTop, la cantidad de scroll que realizamos con la propiedad scrollTop

//     for(let i = 0; i < animacion.length; i++){//contaremos cuantos elementos hay en la variable animación por que estamos usando un querySelectorAll
//         let alturaAnimacion = animacion[i].offsetTop; //detectamos la altura que hay desde el inicio de la ventana hasta donde está el elemento, con offSetTop

//         if(alturaAnimacion - 500 < scrollTop){/*le restamos 500 px a la altura para que muestre antes los iconos*/ 
//             animacion[i].style.opacity = 1; //le agregamos la clase opacity:1 a cada posición, ahora en css tiene la clase opaccity: 0
//             animacion[i].classList.add("efectoBottom");
//         }
//     }
// }
// //cuando hagamos/escuche el evento scroll se va a ejecutar la función mostrarIconos() llamará a la función 
// window.addEventListener("scroll", mostrarIconos);






//EVENTO SCROLL IMÁGENES PROYECTOS (EFECTO LATERAL)

let animacion2 = document.querySelectorAll(".fila_");/*seleccionamos el elemento fila para que cada imagen y texto de cada fila tenga un tiempo de transición distinto que le daré desde css en fila 1, fila 2, y fila 3. */ 

function mostrarProyectos(){
    let scrollTop2 = document.documentElement.scrollTop;

    for(let i = 0; i < animacion2.length; i++){
        let alturaAnimacion2 = animacion2[i].offsetTop;

        if(alturaAnimacion2 -400 < scrollTop2){
            animacion2[i].style.opacity = 1;
            //agregamos la nueva clase mostrarIzquierda que tiene el efecto extra en la animación
            animacion2[i].classList.add("mostrarIzquierda");
        }
    }
}
window.addEventListener("scroll", mostrarProyectos);


// EVENTO SCROLL TEXTO SOBRE MI (DESDE ABAJO)

let animacion3 = document.querySelectorAll(".sobremi");

function mostrarDatos(){
    let scrollTop3 = document.documentElement.scrollTop;

    for(let i = 0; i < animacion3.length; i++){
        let alturaAnimacion3 = animacion3[i].offsetTop;

        if(alturaAnimacion3 -100 < scrollTop3){;
            animacion3[i].style.opacity = 1;
            animacion3[i].classList.add("mostrarAbajo");
        }
    }
} 
window.addEventListener("scroll", mostrarDatos);


//EVENTO SCROLL LATERAL DRCH E IZQ EN CURRICULUM

let animacionLeft = document.querySelectorAll(".izquierda");
let animacionRight = document.querySelectorAll(".derecha");

function curriculum(){
    let scrollLeft = document.documentElement.scrollTop;

    for(let i = 0; i < animacionLeft.length; i++){
        let LeftAnimacion = animacionLeft[i].offsetTop;

        if(LeftAnimacion - 300 < scrollLeft){
            animacionLeft[i].style.opacity = 1;
            animacionLeft[i].classList.add("efectoLeft");
        }
    }


    let scrollRight = document.documentElement.scrollTop;

    for(let i = 0; i < animacionRight.length; i++){
        let RightAnimacion = animacionRight[i].offsetTop;

        if(RightAnimacion - 300 < scrollLeft){
            animacionRight[i].style.opacity = 1;
            animacionRight[i].classList.add("efectoDrch");
        }
    }

}
window.addEventListener("scroll", curriculum);
