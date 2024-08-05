
// ALERTE NAVIGATEUR POUR LE FORM

document.getElementById("contactform").addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const autorisationContact = document.querySelector('input[name="autorisation_contact"]:checked');


    if (nom && prenom && email && autorisationContact) {
        alert('Bien recu, je reviens vers toi asap ! :)')
    }
    else {
        alert('Complete correctement stp');
    }
});


// DARK MODE 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton= document.getElementById("toggle-dark-mode");
    const body= document.body;

    // Vérifie si le mode sombre est déjà activé (si la classe "dark-mode" est appliquée)
    const isDarkMode = body.classList.contains('dark-mode');

    // Met à jour le texte du bouton en fonction de l'état actuel
    toggleButton.textContent = isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre';

    toggleButton.addEventListener('click', () => {
    // Bascule la classe "dark-mode" sur le body
    body.classList.toggle('dark-mode');
});

});