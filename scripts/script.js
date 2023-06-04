document.addEventListener('mouseover', event => {
    element = event.target;
    if(element.classList.contains('linkPort')){
        const emoji = document.querySelector('#emoji');
        const background = document.querySelector('nav');

        background.style.backgroundImage = "url(https://img1.picmix.com/output/stamp/normal/1/0/3/2/832301_14b4a.gif)";
        emoji.style.display = 'block';
    }
});

document.addEventListener('mouseout', event => {
    element = event.target;
    if(element.classList.contains('linkPort')){
        const emoji = document.querySelector('#emoji');
        const background = document.querySelector('nav');

        background.style.backgroundImage = "";
        emoji.style.display = 'none';
    }
});