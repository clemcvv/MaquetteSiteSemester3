
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

// Cacher la barre de recherche si l'on clique en dehors
document.addEventListener('click', function(event) {
    // Vérifie si le clic est en dehors de la barre de recherche et de l'icône
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        // Si la barre est visible, la cacher
        if (visibleSearchBar) {
            visibleSearchBar = toggleVisibility(searchBar, visibleSearchBar);
        }
    }
});

//Séparation espace de travaille

