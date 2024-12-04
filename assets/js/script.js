let herois = [];

function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function consultarNivel() {
    let nomeHeroi = document.getElementById('username').value;
    let xpHeroi = parseInt(document.getElementById('userxp').value);

    if (isNaN(xpHeroi)) {
        alert("Por favor, insira um valor numérico para XP.");
        return;
    }

    document.getElementById("result").style.display = "inline-block";
    document.getElementById("form").style.display = "none";

    let nivel = determinarNivel(xpHeroi);
    herois.push({ nome: nomeHeroi, xp: xpHeroi });

    let resultadoDiv = document.getElementById('result');
    resultadoDiv.querySelector('p').innerText = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
}

function voltar() {
    // Exibe o formulário e oculta o resultado
    document.getElementById("form").style.display = "block";
    document.getElementById("result").style.display = "none";

    // Limpa os campos de entrada
    document.getElementById('username').value = '';
    document.getElementById('userxp').value = '';
}
