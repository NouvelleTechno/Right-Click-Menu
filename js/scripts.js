window.onload = () => {
    // On écoute le clic droit (ouverture du menu contextuel)
    document.addEventListener("contextmenu", function(event){
        // On a ouvert le menu
        // On empêche le "vrai" menu d'apparaître
        event.preventDefault();

        // On récupère le menu
        let menu = document.querySelector("#context-menu");

        // On met ou retire la classe active
        menu.classList.toggle("active");

        // On ouvre le menu là où se trouve la souris
        // On récupère les coordonnées de la souris
        let posX = event.clientX;
        let posY = event.clientY;

        // On calcule la position du menu pour éviter qu'il dépasse
        // Position la plus à droite "largeur fenêtre - largeur menu - 25"
        let maxX = window.innerWidth - menu.clientWidth - 25;

        // Position la plus basse "hauteur fenêtre - hauteur menu - 25"
        let maxY = window.innerHeight - menu.clientHeight - 25;

        // On vérifie si on dépasse
        if(posX > maxX){
            posX = maxX;
        }
        if(posY > maxY){
            posY = maxY;
        }

        // On positionne le menu
        menu.style.top = posY + "px";
        menu.style.left = posX + "px";
    });

    // On écoute le clic pour retirer le menu
    document.addEventListener("click", function(){
        // On va chercher le menu et on lui retire la classe "active"
        document.querySelector("#context-menu").classList.remove("active");
    });
}