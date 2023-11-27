const firstName = 'Kacper';
const age = 19

console.log(firstName, age)
console.log(`Nazywam się ${firstName} i mam ${age} lat.`)

console.log('Cześć!')

const header = document.querySelector('.page-header__heading--js');

console.log(header.style);

header.style.color = 'red'

const calculate = myNumber => (myNumber+4)*7;

calculate(1);

const result = calculate(1);
console.log(result);

const deathstar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true, 
    levels:357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'Darth Vader'
    }
}

console.log(deathstar.commander.name);

console.log(deathstar['diameter']);

console.log(deathstar.name);

deathstar.fire('kolins')