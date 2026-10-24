# ♟️ ExtremeChessMat — Entraîneur de Finales d'Échecs Complexes

[![Live Demo](https://img.shields.io/badge/Demo%20en%20Ligne-S'entraîner%20sur%20GitHub%20Pages-success?style=for-the-badge&logo=github)](https://je-tu-il.github.io/ExtremeChessMat/)
[![Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20CSS3-F7DF1E.svg?logo=javascript)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Syzygy Tablebases](https://img.shields.io/badge/Engine-Syzygy%20%2B%20Minimax-blue.svg)](https://tablebase.lichess.ovh/)
[![Zero Install](https://img.shields.io/badge/Dependencies-0%20(Pure%20Web)-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Un entraîneur interactif et pédagogique pour maîtriser les mats les plus techniques et exigeants du jeu d'échecs :
> - ♗♗ **Roi + 2 Fous contre Roi seul** (Méthode de la boîte et resserrement des diagonales).
> - ♗♘ **Roi + Fou + Cavalier contre Roi seul** (La finale reine par excellence, manœuvre en W et orientation vers le bon coin).
> - ♘♘ **Roi + 2 Cavaliers contre Roi** (Confinement et exploitation des imprécisions).

---

## ⚡ S'entraîner Immédiatement (Sans Installation)

👉 **[Lancer ExtremeChessMat en ligne : https://je-tu-il.github.io/ExtremeChessMat/](https://je-tu-il.github.io/ExtremeChessMat/)**

Compatible PC, tablette et smartphone.

---

## ✨ Fonctionnalités Clés

- 📖 **Mode Cours / Tutoriel Interactif** :
  - Explications théoriques pas-à-pas avec diagrammes pour comprendre les plans gagnants et éviter le piège mortel du **PAT**.
- 🎯 **Mode Guidé en Temps Réel** :
  - Jouez vos coups librement. Dès qu'un coup sous-optimal ou dangereux est joué, il est intercepté et l'échiquier vous montre la case optimale en vert.
- 💡 **Calcul de Distance au Mat** :
  - Interrogez la solution optimale avec affichage du nombre exact de coups avant le mat.
- ⚔️ **Mode Pratique Libre** :
  - Affrontez une IA défensive coriace qui tente d'exploiter la règle des 50 coups, de forcer le pat ou de capturer une pièce mal protégée.
- 🧠 **Moteur Hybride (En ligne + Hors-ligne)** :
  - Connexion automatique aux **tables de finales Syzygy** (API Lichess publique gratuite) pour des coups 100% parfaits.
  - Moteur local **Minimax Alpha-Beta** profondeur 4 intégré si vous jouez sans connexion internet.
- 📱 **Interface Sombre Moderne** : Rendu ergonomique et lisible.

---

## 🛠️ Lancement Local

Aucun outil de build ni installation Node.js n'est nécessaire :

```bash
git clone https://github.com/je-tu-il/ExtremeChessMat.git
cd ExtremeChessMat
```
Ouvrez simplement `index.html` dans votre navigateur.

---

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation pour l'apprentissage et les clubs.
