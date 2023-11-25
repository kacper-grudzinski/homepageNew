const firstName = 'Kacper';
const age = 19

console.log(firstName, age)
console.log(`Nazywam się ${firstName} i mam ${age} lat.`)

alert('Cześć!');

console.log('Cześć!')

const header = document.querySelector('.page-header__heading--js');

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat.`;

console.log(header.style);

header.style.color = 'red'