//Variables

const nroPresupuesto = prompt('¿Cuál es tu presupuesto semanal?')
let cantidadPresupuesto;

//Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');
        
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}

//EventListeners

document.addEventListener('DOMContentLoaded', function () {
    if(nroPresupuesto === null || nroPresupuesto === '') {
        window.location.reload();
    } else {  
        cantidadPresupuesto = new Presupuesto(nroPresupuesto);
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})