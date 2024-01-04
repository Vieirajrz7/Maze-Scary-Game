function jumpScare(img) {
    document.getElementById("imgSusto").style.display = 'block';
    document.getElementById("reset").style.display = 'block';
    document.getElementById("ganhouf1").style.display = 'none';
    document.getElementById("fase2").style.display = 'none';
    document.getElementById("fase3").style.display = 'none';
    let x = document.getElementById("susto");
    x.play();
}

function passouf1() {
    document.getElementById("ladoDireito").style.display = 'none';//
    document.getElementById("ladoEsquerdo").style.display = 'none';//
    document.getElementById("ganhouf1").style.display = 'none';//
    document.getElementById("fase2").style.display = 'block';
    document.body.style.backgroundColor = '#6565c1';

}

function passouf2() {
    document.getElementById("fase2").style.display = 'none';
    document.getElementById("fase3").style.display = 'block';
}

function ganhou() {
    document.getElementById("fase3").style.display = 'none';
    document.getElementById("reset").style.display = 'block';
    document.getElementById("ganhou").style.display = 'block';
    let x = document.getElementById("somGanhou");
    x.play();

}

function comecar() {
    document.getElementById("tudo").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
}
//DA FASE 3 MINI SUSTO
function sustoSurpresa() {
    document.getElementById("miniSusto").style.display = 'block';
    let x = document.getElementById("hello");
    x.play();
}
function limpaSusto() {
    document.getElementById("miniSusto").style.display = 'none';
}

