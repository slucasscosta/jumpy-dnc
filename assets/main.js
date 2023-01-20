const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const senha = document.getElementById("senha");

form.addEventListener("submit", (e) => {
e.preventDefault();

  checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const cpfValue = cpf.value;
    const senhaValue = senha.value;

    if (usernameValue === "") {
        setErrorFor(username, "Campo Obrigatório.");
    }else{
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Campo Obrigatório.");
    }else{
        setSuccessFor(email);
    }

    if (telefoneValue === "") {
        setErrorFor(telefone, "Campo Obrigatório.");
    }else{
        setSuccessFor(telefone);
    }

    if (cpfValue === "") {
        setErrorFor(cpf, "Campo Obrigatório.");
    }else{
        setSuccessFor(cpf);
    }

    if (senhaValue === "") {
        setErrorFor(senha, "Campo Obrigatório.");
    }else{
        setSuccessFor(senha);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
        });

    if (formIsValid){
        const sucesso = document.getElementById("sucesso")
        sucesso.innerHTML = "Sucesso!"
    }else{
        const erro = document.getElementById("erro")
        erro.innerHTML = "Campos Obrigatórios não registrados!"
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}