let message = document.querySelector(".message-body");

message.innerHTML = "";

let login = sessionStorage.getItem("login");
let senha = sessionStorage.getItem("senha");

message.innerHTML = `
    Login: ${login} <br />
    Senha: ${senha}
`;