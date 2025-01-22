
//-- ------------------------------------------------------>
//-- ------------------ HEADER ---------------------------->
//-- ------------------------------------------------------>

// Variable pour la visibilité de la barre de recherche 
let visibleSearchBar = false;

// Sélection des éléments du DOM
const liElements = document.querySelectorAll('.barNav ul li'); // Sélectionne tous les éléments li
const searchForm = document.querySelector('#searchForm');
const searchIcon = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar');

// Fonction pour basculer la visibilité d'un élément
function toggleVisibility(element, state) {
    if (!state) {
        element.classList.add('show'); // Ajouter la classe show
    } else {
        element.classList.remove('show'); // Supprimer la classe show
    }
    return !state; // Renvoie l'inverse de l'état pour le prochain appel
}

// Fonction pour soumettre la barre de recherche
function submitSearchBar(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const inputValue = searchBar.value; // Récupération du texte entré

    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar); // Cache la barre après soumission
    searchBar.value = ""; // Réinitialise la barre
    
    console.log(inputValue); // Tester
}

// Gérer la visibilité de la barre de recherche avec l'icône
searchIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche la propagation de l'événement pour éviter de cacher la barre immédiatement
    visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
});

// Soumission du formulaire de recherche
searchForm.addEventListener('submit', submitSearchBar);

// Récupérez les références
const header = document.getElementById('header');
const icon = document.getElementById('flecheIcon');

// Chemins des images pour la flèche
const downImage = "assets/img/header/flecheDown.svg";
const upImage = "assets/img/header/flecheUp.svg";

// Fonction pour basculer la visibilité de la barre de recherche
function toggleVisibility(element, isVisible) {
    if (isVisible) {
        element.classList.remove('show');
        element.style.opacity = 0;
        element.style.display = "none";
        return false;
    } else {
        element.classList.add('show');
        element.style.opacity = 1;
        element.style.display = "block";
        return true;
    }
}

// Gestion du clic sur le bouton déroulant
document.getElementById('deroulerHeader').addEventListener('click', () => {
    const currentSrc = icon.getAttribute('src');

    if (currentSrc === downImage) {
        icon.setAttribute('src', upImage);
        header.style.top = "0px";
    } else {
        icon.setAttribute('src', downImage);
        header.style.top = "-335px";
    }
});

// Cacher la barre de recherche si l'on clique en dehors
document.addEventListener('click', function (event) {
    if (searchBar && searchIcon && !searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        if (visibleSearchBar) {
            visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
        }
    }
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        // Si la fenêtre est large, assurez-vous que le header est visible
        header.style.top = "0px";
        icon.setAttribute('src', downImage);
    } else {
        // Si la fenêtre est petite, masquez le header et affichez la flèche
        header.style.top = "-335px";
        icon.setAttribute('src', downImage);
    }
});


//-- ------------------------------------------------------>
//-- ------------------ CAROUSEL -------------------------->
//-- ------------------------------------------------------>




//Séparation espace de travaille

