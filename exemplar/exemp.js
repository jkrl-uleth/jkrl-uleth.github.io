const button = document.querySelector('button');

button.addEventListener('click', () => {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
});
