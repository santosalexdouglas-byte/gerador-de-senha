
function gerarSenha() {

    let caracteres = "";
    let senha = "";

    let tamanho = Number(document.getElementById("tamanho").value);

    if (tamanho < 1 || tamanho > 50 || !Number.isInteger(tamanho)) {
        alert("Escolha um tamanho entre 1 e 50!");
        return;
    }

    if (document.getElementById("maiusculas").checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("minusculas").checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("numeros").checked) {
        caracteres += "0123456789";
    }

    if (document.getElementById("especiais").checked) {
        caracteres += "!@#$%&*?";
    }

    if (caracteres == "") {
        alert("Selecione pelo menos uma opção!");
        return;
    }

    for (let i = 0; i < tamanho; i++) {

        let indice = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[indice];

    }

    document.getElementById("senha").value = senha;

}

function limparSenha() {

    document.getElementById("senha").value = "";

}

