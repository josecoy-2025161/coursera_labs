// 1. Primero obtenemos la referencia al botón (esto sí va afuera)
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// 2. La función que se ejecuta al enviar
function submitFeedback() {
    // CAPTURA LOS VALORES (Justo cuando el usuario hace clic)
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Asignamos los valores al contenedor de resultados
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Mostramos el contenedor que estaba oculto
    document.getElementById('userInfo').style.display = 'block';
    
    alert('Thank you for your valuable feedback');
}

// 3. Listener para la tecla Enter
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});