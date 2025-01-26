
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
        header.style.top = "-300px";
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
        header.style.top = "-300px";
        icon.setAttribute('src', downImage);
    }
});


//-- ------------------------------------------------------>
//-- ------------------ PUB ------------------------------->
//-- ------------------------------------------------------>


const images = [
    "assets/img/pub/hashEnMode1.png",
    "assets/img/pub/hashEnMode2.png",
    "assets/img/pub/hashEnMode3.png"
];

let currentIndex = 0;
const imageElement = document.querySelector(".ImagesGaucheContenu .imagePub");
const radioButtons = document.querySelectorAll(".boutonRadioPub");
const leftArrow = document.getElementById("imageSuivanteGauche");
const rightArrow = document.getElementById("imageSuivanteDroite");

// Fonction pour mettre à jour l'image affichée
function updateImage(index) {
    imageElement.src = images[index];
    radioButtons.forEach((radio, i) => {
        radio.checked = i === index;
    });
}

// Gestion des boutons radio
radioButtons.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        currentIndex = index;
        updateImage(currentIndex);
    });
});

// Gestion des flèches
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

// Initialisation de l'image par défaut
updateImage(currentIndex);



//-- ------------------------------------------------------>
//-- ------------------ CAROUSEL -------------------------->
//-- ------------------------------------------------------>


const carouselImagesContainer = document.querySelector('.carouselImages');
const carouselImageElements = document.querySelectorAll('.carousel img');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const progressBar = document.querySelector('.progress');

let currentImageIndex = 0;  // L'indice de l'image actuellement affichée
const imagesToShow = 4;      // Le nombre d'images visibles dans le carousel
const totalImageCount = carouselImageElements.length - imagesToShow + 1;  // Le nombre total d'images visibles dans le carousel

// Fonction pour mettre à jour la position du carousel et la barre de progression
function updateCarousel() {
  // Calcule la largeur d'une image avec l'espace entre elles (gap)
  const imageWidth = carouselImageElements[0].offsetWidth + parseFloat(getComputedStyle(carouselImagesContainer).gap);
  
  // Calcul du décalage en fonction de l'index actuel
  const offset = -currentImageIndex * imageWidth;
  
  // Applique le décalage pour déplacer les images du carousel
  carouselImagesContainer.style.transform = `translateX(${offset}px)`;
  
  // Mise à jour de la barre de progression
  const progressPercentage = ((currentImageIndex) / (totalImageCount - 1)) * 100; // Calcule le pourcentage en fonction de l'index
  progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;  // S'assure que la largeur ne dépasse pas 100%
}

// Écouteur pour le bouton gauche (précédent)
leftButton.addEventListener('click', () => {
  // Empêche de dépasser le premier élément du carousel
  currentImageIndex = Math.max(currentImageIndex - 1, 0);
  updateCarousel();
});

// Écouteur pour le bouton droit (suivant)
rightButton.addEventListener('click', () => {
  // Empêche de dépasser le dernier élément du carousel
  currentImageIndex = Math.min(currentImageIndex + 1, totalImageCount - 1);
  updateCarousel();
});

// Initialiser le carousel à l'état par défaut
updateCarousel();

