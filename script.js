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


