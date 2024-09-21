document.getElementById('formContact').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //validacion de formulario
    if (name === "" || email === "" || message === "") {
        document.getElementById('form-message').textContent = "Por favor, completa todos los campos.";
        document.getElementById('form-message').style.color = "red";
        return;
    }

    //mensaje de envio
    document.getElementById('form-message').textContent = "Gracias por tu mensaje, " + name + ". Te contactaremos pronto.";
    document.getElementById('form-message').style.color = "green";
});
