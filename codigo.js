let buttonRight = document.getElementById("button-right");
let buttonLeft = document.getElementById("button-left");
let buttonObtener = document.querySelector(".button-send");
let body = document.getElementById("tagBody");
let pCodigo = document.getElementById("p-codigo");



// function getValue() {
// 	let bR = buttonRight.value;
// 	let bL = buttonLeft.value;
// 	body.setAttribute("style",`background: linear-gradient(to right, ${bR} , ${bL})`);
// 	// console.log(styleValue);
// }



// buttonObtener.addEventListener("click", getValue);

//ESTA SOLUCION (DE LA LINEA 20 A LA 38) ES VALIDA Y FUNCIONA, PERO RESULTA SER QUE EXISTE UN EVENTO DE MAUSE LLAMADO
//INPUT QUE OCURRE CUANDO EL VALOR DE INPUT CAMBIA
// const getData = ()=> {
// 	return new Promise((resolve, reject)=>{
// 			let bR = buttonRight.value;
// 			let bL = buttonLeft.value;
// 			let codigoCSS = `<p id="p-codigo">background: linear-gradient(to right, ${bR} , ${bL})</p>`
// 			body.setAttribute("style",`background: linear-gradient(to right, ${bR} , ${bL})`);
// 			pCodigo.innerHTML = codigoCSS;
// 	})
// }

// async function ayncFuntion() {
// 	const variable = await getData();
// 	console.log(variable);
// } 

// body.addEventListener("mouseenter", ayncFuntion); 
//cuando el cursor se pone encima del body, se ejecuta la promesa


//EN ESTA SOLUCION LO VOY HACER CON EL EVENTO DE MAUSE INPUT
function getValue() {
	let bR = buttonRight.value;
	let bL = buttonLeft.value;
	let codigoCSS = `<p id="p-codigo">background: linear-gradient(to right, ${bR}, ${bL})</p>`
	body.setAttribute("style",`background: linear-gradient(to right, ${bR}, ${bL})`);
	pCodigo.innerHTML = codigoCSS;
	// console.log("style",`background: linear-gradient(to right, ${bR} ${pC}%, ${bL})`)
}

buttonRight.addEventListener("input", getValue);	
buttonLeft.addEventListener("input", getValue);