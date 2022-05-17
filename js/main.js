console.log("ESTAMO ACTIVO!");

const familias_censadas = [];

const tabla = document.getElementById("tabla-familiares");
const tableBody = tabla.children[0];

function agregar_familia_tabla(familia) {
    console.log("En la funcion", familia);
    const rw = document.createElement('tr');
    
    for(let prop in familia) {
        console.log(familia[prop]);
        const td = document.createElement('td');
        td.innerHTML = familia[prop];
        rw.appendChild(td);
    }
    
    tableBody.appendChild(rw);
}


function Familia (cant, edad1, edad2, salario) {
    this.cant = cant;
    this.edad1 = edad1;
    this.edad2 = edad2;
    this.salario = salario;

}

const formLogic = (event) => {
    event.preventDefault();

    let form = event.target;
    let el = form.elements;

    let cant_de_familiares = el['cant_de_familiares'].value;
    let edad_familiar1 = el['edad_familiar1'].value;
    let edad_familiar2 = el['edad_familiar2'].value;
    let salario_de_la_casa = el['salario_de_la_casa'].value;

    const fam1 = new Familia(
        cant_de_familiares, 
        edad_familiar1, 
        edad_familiar2, 
        salario_de_la_casa);
    
    // familias.push(fam1);    
    agregar_familia_tabla(fam1);
    form.reset();
}


/** Add event listener */
const form = document.getElementById("censo-form");
form.addEventListener('submit', formLogic);


