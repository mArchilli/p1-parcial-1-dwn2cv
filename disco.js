
class disco {
    pistas = [];
    duracionTotal = 0;
    cantPistas = 0;
    cantDiscos = 0;
    promDuracion = 0;
    pistaMayorDuracion = 0;
    nombrePistaMayorDuracion;

    ingresarDatos (codigos) {
        do {
            this.nombre = prompt("Ingrese el nombre del disco: ").trim();
            
        } while (!isNaN(this.nombre) || this.nombre == "");
        do {
            this.autor = prompt("Ingrese el autor o banda del disco: ").trim();
            if (!isNaN(this.autor) || this.autor == "") {
                alert("El valor ingresado no puede ser un numero ni enviarse vacio");
            }
        } while (!isNaN(this.autor) || this.autor == "");
        do {
            this.codigo = parseInt(prompt("Ingrese el CUD (Codigo Unico de Disco): "));
            if (this.codigo <= 0 || this.codigo >= 999 || isNaN(this.codigo)) {
                alert("El valor ingresado debe ser un numero entre 0 y 999 inclusive. ");
            } else if ((codigos.indexOf(this.codigo) != -1)) {
                alert("El codigo ingresado ya existe. Por favor ingrese otro.");
            }
            
        } while (this.codigo <= 0 || this.codigo >= 999 || isNaN(this.codigo) || (codigos.indexOf(this.codigo) != -1));
        do {
            let pistaNueva = new pista();
            pistaNueva.ingresarDatos();
            this.pistas.push(pistaNueva);
            this.cantPistas++;
            this.duracionTotal += pistaNueva.duracion;
            if(pistaNueva.duracion > this.pistaMayorDuracion){
                this.pistaMayorDuracion = pistaNueva.duracion;
                this.nombrePistaMayorDuracion = pistaNueva.nombre;
            }
        } while (confirm("Desea agregar otra pista?"));
    }

    mostrarDatos () {
        const div = document.createElement('div');

        const h2 = document.createElement("h2");
        h2.innerText = `${this.nombre}`;
        h2.classList.add("tituloDisco");

        const pCantPistas = document.createElement("p");
        pCantPistas.innerText = `Cantidad de pistas: ${this.cantPistas}`;

        const pDuracionTotal = document.createElement("p");
        pDuracionTotal.innerText = `Duracion total: ${this.duracionTotal}`;

        const pPromedioDuracion = document.createElement("p");
        pPromedioDuracion.innerText = `Promedio duracion: ${(this.duracionTotal / this.cantPistas)}`;

        const pPistaMayorDuracion = document.createElement("p");
        pPistaMayorDuracion.innerText = `Pista de mayor duracion: ${(this.nombrePistaMayorDuracion)} - ${(this.pistaMayorDuracion)}`;

        const pAutor = document.createElement("p");
        pAutor.innerText = `Autor: ${this.autor}`;

        const pCodigo = document.createElement("p");
        pCodigo.innerText = `Codigo: ${this.codigo}`;

        const h3 = document.createElement("h3");
        h3.innerText = `Pistas:`;
        h3.classList.add("tituloDisco");
        

        div.append(h2,pCantPistas,pDuracionTotal,pPromedioDuracion,pPistaMayorDuracion,pAutor,pCodigo,h3);

        for (let pista of this.pistas) {
            div.append(pista.mostrarDatos());
        }
        return div;
    }
}
