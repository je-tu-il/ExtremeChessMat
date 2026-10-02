# ExtremeChessMat ♟️

**ExtremeChessMat** est un entraîneur interactif de finales d'échecs conçu pour maîtriser les mats les plus techniques avec pièces légères :
- ♗♗ **Roi + 2 Fous vs Roi** (Méthode de la boîte et resserrement des diagonales).
- ♗♘ **Roi + Fou + Cavalier vs Roi** (La finale académique par excellence, manœuvre en W et orientation vers le bon coin).
- ♘♘ **Roi + 2 Cavaliers vs Roi** (Technique de barrage, confinement et exploitation des erreurs).

---

## ✨ Fonctionnalités clés

- 📖 **Mode Cours / Tutoriel enrichi** : Explications théoriques pas-à-pas avec diagrammes interactifs pour comprendre les plans gagnants et éviter le piège mortel du **PAT**.
- 🎯 **Mode Suivi & Guidé** : Jouez vos coups en temps réel. Dès qu'un coup sous-optimal ou dangereux est joué, il est intercepté et l'échiquier vous montre la case optimale en vert.
- 💡 **Indice & Conseil du meilleur coup** : Interroge la solution optimale avec calcul de distance au mat.
- ⚔️ **Mode Pratique Libre** : Affrontez une IA défensive qui tente d'exploiter la règle des 50 coups, de forcer le pat ou de capturer toute pièce en l'air.
- 🧠 **Architecture Hybride (En ligne + Hors-ligne)** :
  - Connexion automatique aux **tables de finales Syzygy** (API Lichess publique gratuite, sans clé API requise) pour des coups parfaits à 100%.
  - Moteur local **Minimax Alpha-Beta** profondeur 4 intégré avec détection d'attaques et de gaffes en cas d'utilisation hors-ligne.
- 📱 **Interface responsive** : Thème dark moderne et fluide sur mobile, tablette et desktop.

---

## 🚀 Utilisation locale ou GitHub Pages

Le projet est entièrement en HTML/CSS/JavaScript vanilla sans aucune dépendance ni build requis :
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/je-tu-il/ExtremeChessMat.git
   ```
2. Ouvrez simplement `index.html` dans n'importe quel navigateur moderne.

Déployable directement sur **GitHub Pages** en activant l'hébergement depuis les paramètres de votre dépôt (`Settings > Pages > Branch: main`).
