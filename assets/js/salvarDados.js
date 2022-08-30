let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", () => {

    let inputLogin = document.querySelector("#inputLogin").value;
    let inputSenha = document.querySelector("#inputSenha").value;

    if (!inputLogin || !inputSenha) {
        swal({
            title: "Preencha todos os campos!",
            icon: "error",
        });
        return;
    }
    sessionStorage.setItem("login", inputLogin);
    sessionStorage.setItem("senha", inputSenha);

    window.location.href = "http://systemforweb.com.br/ptg/login.html";
});