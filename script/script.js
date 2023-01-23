function verification() {
    error = false;

    let nom = document.getElementById("name").value;
        if (nom == "") {
            document.getElementById("erreurNom").innerHTML = "Erreur";
            error = true;
        } else {
            document.getElementById("erreurNom").innerHTML = "";

        }

    let prenom = document.getElementById("lastName").value;
        if (nom == "") {
            document.getElementById("erreurPrenom").innerHTML = "Erreur";
            error = true;
        } else {
            document.getElementById("erreurPrenom").innerHTML = "";

        }

    let mail = document.getElementById("mail").value;
        if (nom == "") {
            document.getElementById("erreurMail").innerHTML = "Erreur";
            error = true;
        } else {
            document.getElementById("erreurMail").innerHTML = "";
        }

    let message = document.getElementById("message").value;
        if (nom == "") {
            document.getElementById("erreurMessage").innerHTML = "Erreur";
            error = true;
        } else {
            document.getElementById("erreurMessage").innerHTML = "";
        }

        if(error===true){
            return false
        }else{
            return true
        }
}