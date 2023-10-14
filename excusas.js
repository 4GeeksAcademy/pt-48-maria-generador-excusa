const who = ['Tanos', 'Luke Skywalker', 'Daenerys Targaryen', 'Emperador Palpatine','Freddy Krueger', 'Harry Potter', 'Venon', 'Tom Riddle','Darth Vader'];
const action = ['se comió', 'rompió', 'pintó', 'pisó', 'mojó', 'aplastó', 'destruyó', 'saltó sobre', 'chupó', 'perdió', 'estrujó', 'revendió'];
const what = ['los deberes','a Stormbreaker', 'el santo grial','las gemmas del infinito','el destornillador sónico', 'la piedra filosofal', 'el ordenador', 'el anillo único','el Delorean', 'el sable laser', 'el trono de hierro'];
const when = ['ésta mañana en la estrella de la muerte', 'ayer por la tarde en mordor', 'ni sé cuando', 'cuando comiamos en la comarca', 'anocheciendo en Wakanda', ' hace media hora en la cuarta luna de Yavin', 'durante la clase de pociones', 'cuando acabó el partido de quidditch'];

const generadoraFrasesAleatorias = (who, action, what, when) => {
    const randomWho = who[Math.floor(Math.random()* who.length)];
    const randomAction = action[Math.floor(Math.random()* action.length)];
    const randomWhat = what[Math.floor(Math.random() *what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

const onLoad = () => {
    const excusa = document.getElementById('excusa');
    excusa.innerHTML = generadoraFrasesAleatorias(who, action, what, when);
}

window.onload = onLoad;





