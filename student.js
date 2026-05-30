console.log("Application de gestion des étudiants initialisée.");
document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Un étudiant a été ajouté !");
});