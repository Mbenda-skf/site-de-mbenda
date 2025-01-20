// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".upload-form");
    const fileInput = document.getElementById("file-upload");

    form.addEventListener("submit", (event) => {
        const file = fileInput.files[0];

        if (!file) {
            alert("Veuillez sélectionner un fichier avant de le télécharger.");
            event.preventDefault();
            return;
        }

        const allowedExtensions = ["pdf", "doc", "docx", "mp4", "avi"];
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            alert("Type de fichier non autorisé. Veuillez télécharger un fichier valide.");
            event.preventDefault();
        } else if (file.size > 10 * 1024 * 1024) { // Limite de 10 Mo
            alert("Le fichier est trop volumineux. Veuillez télécharger un fichier de moins de 10 Mo.");
            event.preventDefault();
        }
    });
});

