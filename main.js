let animeles_aereos = ["Aguila", "Paloma", "Loro", "Colibri"];
let animeles_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animeles_acuticos = ["Pez", "Trucha", "Salmon", "Delfin"];


cliclo_aereos:
for(let aereos of animeles_aereos){
    cliclo_terrestres:
    for(let terrestres of animeles_terrestres){
            cliclo_acuaticos:
            for(let acuticos of animeles_acuticos){
                console.count();
                // break cliclo_acuaticos;
                console.log(`Animales Acuticos: ${acuticos}`);
            }
        break cliclo_terrestres;
        console.log(`Animales Terrestres: ${terrestres}`);
    }
    break cliclo_aereos;
    console.log(`Animales Aereos: ${aereos}`);
}