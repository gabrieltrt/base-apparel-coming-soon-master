function formvalidator() {
    // Pega o valor do campo de input com a id="mailform"
    let email = document.getElementById("mailform").value;
    // Seleciona o elemento com a id="error", neste caso, é um elemento <p></p>
    let error = document.getElementById("error");

    if (email === '') {
        error.textContext = "Please provide a valid email";
    } else if (email.indexOF('@') === -1 || email.indexof('.') === -1) {
        error.textContent = "Please provide a valid email";
    } else {
        error.textContent = ''; // Limpar mensagem de erro se for válido
        alert('E-mail Válido: ' + email);
    }


}