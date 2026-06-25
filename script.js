function mostrarInfo(tipo){

    let texto = "";

    if(tipo === "agua"){
        texto =
        "A captação da água da chuva reduz o desperdício e ajuda na irrigação.";
    }

    if(tipo === "energia"){
        texto =
        "A energia solar produz eletricidade limpa e renovável.";
    }

    if(tipo === "reciclagem"){
        texto =
        "A reciclagem diminui a quantidade de resíduos enviados aos aterros.";
    }

    document.getElementById("resultado").innerHTML = texto;
}

function responder(){

    let pergunta =
    document.getElementById("pergunta").value.toLowerCase();

    let resposta = "";

    if(pergunta.includes("água")){
        resposta =
        "A reutilização da água da chuva é uma excelente prática sustentável.";
    }

    else if(pergunta.includes("energia")){
        resposta =
        "A energia solar é uma das principais fontes renováveis do futuro.";
    }

    else if(pergunta.includes("meio ambiente")){
        resposta =
        "Pequenas ações diárias podem gerar grandes impactos positivos.";
    }

    else{
        resposta =
        "Ótima pergunta! A sustentabilidade depende da união entre tecnologia e consciência ambiental.";
    }

    document.getElementById("respostaBot").innerHTML = resposta;
}
