



let estudiantes = [
    {nombre:"carlos", edad:40},
    {nombre:"pedro", edad:25},
    {nombre:"juan", edad:33},
    {nombre:"julio", edad:48},
    {nombre:"jose", edad:22},
];
for(let estudiante of estudiantes){
    console.log(estudiante);
}


x=0
for(let i=0;i<5;i++){
    x=estudiantes[i].edad+x;
}
let promedio = x/estudiantes.length
console.log(promedio);