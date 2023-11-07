let nombre = "Juan";
let apellido = "Perez";
let edad = 30;
let precio = 9.99;
let serie = [
    "Game of Thrones",
    "Breaking Bad",
    "The Wire",
    "Stranger Things",
    "The Sopranos",
];

let peliculas = [
    "Star Wars",
    "Harry Potter",
    "Avengers",
    "The Lord of the Rings",
    "The Matrix",
    "Back to the Future",
]

let diasSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];

function valorRandom(arreglo){
    return arreglo[Math.floor(Math.random() * arreglo.length)];
}
console.log(nombre + " " + apellido);
//console.log(serie[Math.floor(Math.random() * serie.length)]);
//console.log(peliculas[Math.floor(Math.random() * peliculas.length)]);
//console.log(diasSemana[Math.floor(Math.random() * diasSemana.length)]);

console.log(valorRandom(diasSemana));
console.log(valorRandom(serie));
console.log(valorRandom(peliculas));
