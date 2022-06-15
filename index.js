class Receta {
    constructor (nombre, dificultad, tiempo){
        this.nombre = nombre;
        this.dificultad = dificultad;
        this.tiempo = tiempo;

    }
}

const recetas = [];
recetas.push(new Receta("Lemon Pie", "Media", "50 minutos"));
recetas.push(new Receta("pasta Frola", "Baja", "45 minutos"));
recetas.push(new Receta("cheescake", "Alta", "120 minutos"));
recetas.push(new Receta("Brownie", "Media", "50 minutos"));

for (const Receta of recetas){
    console.log (Receta)
}

