import {nome, due} from '@jalai/utilita';
import {richiesta as coloriCarg} from '@jalai/esri-rest';

console.log("Colore:")
coloriCarg().then(v => {console.log(v.splice(1,5))})
console.log(nome + due)