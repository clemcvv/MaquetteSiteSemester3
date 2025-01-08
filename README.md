# Site web à reproduire

Ce projet consiste à reproduire un site web existant. Suivez les étapes ci-dessous pour configurer et collaborer sur ce projet.

---

## Commandes Git de base

Voici les commandes Git essentielles pour collaborer efficacement sur ce projet :

### 1. Cloner le dépôt
Pour cloner le dépôt sur notre machine locale :
```bash
git clone <URL_du_dépôt>
```

### 2. Créer une branche
Créez une nouvelle branche pour travailler sur une fonctionnalité ou un bug spécifique :
```bash
git checkout -b nom-de-la-branche
```

### 3. Ajouter des modifications
Ajoutez vos modifications à l'index pour les préparer au commit :
- Ajouter tous les fichiers modifiés :  
  ```bash
  git add .
  ```
- Ajouter un fichier spécifique :  
  ```bash
  git add nom-du-fichier
  ```
Pour verifier si les fichiers ont bien été ajoutés `git status`


### 4. Créer un commit
Une fois que vous avez ajouté vos modifications, effectuez un commit en décrivant brièvement ce que vous avez changé :
```bash
git commit -m \"Description des changements\"
```

#### Bonnes pratiques pour le commit
- `feat(fichier) : ajout d'une nouvelle fonctionnalité\` — Pour l'ajout d'une fonctionnalité.
- `fix(fichier): Correction d'un bug\` — Pour la correction d'un bug.
- `test(fichier): Ajout ou modifications de tests\` — Pour les tests.
- `style(fichier): Modification de style (sans impact fonctionnel)\` — Pour les changements visuels ou de mise en forme du code (ex : indentation, formatage).

### 5. Envoyer les modifications sur le dépôt distant
Envoyez vos changements sur la branche correspondante du dépôt distant :
```bash
git push origin nom-de-la-branche
```

### 6. Mettre à jour votre branche locale
Avant de commencer à travailler, assurez-vous que votre branche locale est à jour par rapport à la branche \`main\` :
```bash
git pull origin main
```

---

## Règles de collaboration
- **Travaillez sur une branche différente de `main`**.
- **Commitez souvent** et avec des messages clairs.
- **Testez vos modifications** avant de les envoyer sur le dépôt distant.
- **Soyez précis et descriptif** dans vos messages de commit.
- **Mettez à jour la branche `main`** avant de commencer à travailler sur votre propre branche pour éviter les conflits.
- **Pas forcément push à chaque commit mais dès qu'une session de travaille terminés**
---
