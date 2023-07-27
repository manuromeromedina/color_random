const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['darkgoldenrod','darkmagenta','crimson', 
'cyan', 'darkgreen', 'chocolate','white', 'green', 
'darkblue', 'yellow', 'pink', 'gray', 'lime',
'lightblue', 'puerple', 'rgb(245, 0, 131)' ,
'rgb(245, 0, 131)', 'rgb(248, 133, 194)',
'rgb(60, 0, 84)', 'rgb(5, 2, 73)', 'brown', 'darkbrown',
'lightgreen', 'orange', 'mediumvioletred', 'gold',
'teal', 'midnightblue', 'maroon','darkslategray'];

body.style.backgroundColor = 'white';
button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
    body.style.transition = '0.3s linear';
});