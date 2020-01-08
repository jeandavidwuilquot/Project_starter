let click=document.querySelector('.click');
let title=document.querySelector('.title');
console.log(click);
console.log(title);

click.addEventListener('click', ()=>{
    title.classList.toggle('red')
})