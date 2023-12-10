let sumaNotas = 0;
let cantNotas = 0;

function calcular() {
    sumaNotas = 0;
    cantNotas = 0;
    for (let x = 0; x < 5; x++) {
        let notaValida = false;
        while (!notaValida) {
            let nota = Number(prompt("Ingrese una calificación"));
            if (nota >= 1 && nota <= 10) {
                sumaNotas += nota;
                cantNotas++;
                notaValida = true;
            } else {
                alert("La nota ingresada no es válida. Por favor, ingrese una nota entre 1 y 10.");
            }
        }
    }
    let promedio = sumaNotas / cantNotas;
    alert(nombreAlumno + " tiene un promedio de " + promedio);
    if (promedio >= 7) {
        alert(nombreAlumno + " ha aprobado el año. ¡Felicidades!");
    } else {
        alert(nombreAlumno + " no ha logrado aprobar el año.");
    }
}

let nombreAlumno = prompt('Ingrese el Nombre del alumno o "Fin" para terminar');
nombreAlumno = nombreAlumno.toLowerCase();
if (nombreAlumno !== "fin") {
    alert("Bienvenido " + nombreAlumno + ".");
}

while (nombreAlumno !== "fin") {
    calcular();
    nombreAlumno = prompt('Ingrese el Nombre del alumno o "Fin" para terminar');
    nombreAlumno = nombreAlumno.toLowerCase();
    if (nombreAlumno !== "fin") {
        alert("Bienvenido " + nombreAlumno + ".");
    }
}
