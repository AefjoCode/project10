let i = 0;
const h2 = document.querySelector('h2');

const number = setInterval(() => {
    i++;
    h2.innerHTML = `Loading ${i}%`;
    if( i === 100 ) {
        clearInterval(number);
    }
}, 1000);