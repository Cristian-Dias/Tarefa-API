let gato=document.getElementById('gato');
let btn=document.querySelector("button");

btn.addEventListener('click', gerarGato);

function gerarGato(){
    fetch('http:\/\/aws.random.cat\/meow').then((res) => res.json()).then((data) => {
        gato.innerHTML = `<img src=${data.file} alta="cat" />`;
    });
}