let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", () => {

    let inputLogin = document.querySelector("#inputLogin").value;
    let inputSenha = document.querySelector("#inputSenha").value;

    if (!inputLogin || !inputSenha) {
        swal({
            title: "Preencha todos os campos!",
            // text: "You clicked the button!",
            icon: "error",
        });
        return;
    }
    sessionStorage.setItem("login", inputLogin);
    sessionStorage.setItem("senha", inputSenha);

    window.location.href = "/login.html";
    // console.log([inputLogin, inputSenha]);
});