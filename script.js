function formValidator() {

    // Pega o valor do campo de input com a id="mailform"
    let email = document.getElementById("mailform").value;
    // Seleciona o elemento com a id="error", neste caso, é um elemento <p></p>
    let error = document.getElementById("error");
    // Seleciona o elemento com a id="error-icon", neste caso, é um elemento <img>
    let errorIcon = document.getElementById("error-icon")
    // Seleciona o elemento com a id="mailform", neste caso, é um elemento <input>
    let formInput = document.getElementById("mailform");



    if (email === '') {
        error.textContent = "Please provide a valid email";
        errorIcon.style.display = "inline-block"
        formInput.style.border = '2px solid #F96464'
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        errorIcon.style.display = "inline-block";
        error.textContent = "Please provide a valid email";
        formInput.style.border = '2px solid #F96464'
    } else {
        error.textContent = ''; // Limpar mensagem de erro se for válido
        errorIcon.style.display = "none";
    }

    
}