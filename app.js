let ggg = document.getElementById('general')
console.log(ggg)
let fff = document.getElementsByClassName('box')
console.log(fff)

ggg.innerHTML='<p>EN İYİ ARKADAŞIM DEFNE</p>';

function addItalic(){
    let ici = document.getElementById('ici');
    ici.classList.add('italic');
}

function createnewDiv(){
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.textContent = 'defne';
    document.body.appendChild(newDiv);
}