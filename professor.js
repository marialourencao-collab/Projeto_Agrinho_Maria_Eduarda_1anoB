function criarMissao(){

db.collection("missoes").add({

titulo:document.getElementById("titulo").value,

descricao:document.getElementById("descricao").value,

xp:Number(document.getElementById("xp").value),

criadaEm:new Date()

});

alert("Missão criada!");

}

function criarInsignia(){

db.collection("insignias").add({

nome:document.getElementById("nomeInsignia").value,

imagem:document.getElementById("imagem").value

});

alert("Insígnia criada!");

}