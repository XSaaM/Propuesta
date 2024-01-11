const yesBtn = document.querySelector('#yesbtn');

yesBtn.addEventListener('click', function(){
    alert('Siempre supe que aceptarias my amor, es hora de casarnos')
});

const nouBtn = document.querySelector('#noubtn');

nouBtn.addEventListener('mouseover', function(){
    const randomX=parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
    nouBtn.style.setProperty('top',randomY+'%');
    nouBtn.style.setProperty('left',randomX+'%');
    nouBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})