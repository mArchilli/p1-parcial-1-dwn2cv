
class pista {
    ingresarDatos () {
        do {
            this.nombre = prompt("Ingrese el nombre de la pista: ").trim();
            if (!isNaN(this.nombre) || this.nombre == "") {
                alert("El valor ingresado no puede ser un numero ni enviarse vacio");
            }
        } while (!isNaN(this.nombre) || this.nombre == "");
        do {
            this.duracion = parseInt(prompt("Ingrese la duracion de la pista en segundos: "));
            if (this.duracion <= 0 || this.duracion >= 7200 || isNaN(this.duracion)) {
                alert("El valor ingresado debe ser un numero entre 0 y 7200 inclusive. Por favor ingrese otro.");
            }
        } while (this.duracion <= 0 || this.duracion >= 7200 || isNaN(this.duracion));
    }

    mostrarDatos () {
        const ul = document.createElement("ul");

        const liNombrePista = document.createElement("li");
        liNombrePista.innerText = `Nombre: ${this.nombre}`;

        const liDuracionPista = document.createElement("li");
        liDuracionPista.innerText = `Duracion: `;

        const span = document.createElement("span");
        span.innerText = this.duracion;

        liDuracionPista.append(span);
        if(this.duracion > 180){
            span.classList.add("mayor180");
        } else {
            span.classList.add("menor180");
        }
        
        ul.append(liNombrePista,liDuracionPista);
        return ul;
    }
}
