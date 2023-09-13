import artistas from "./modulo/artistas.mjs";

let i = 0;

for (const artista of artistas) {
    i++;
    console.log(`${i}º artista: ${artista}`);
};