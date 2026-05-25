# Portfolio — Melchior Obame

Portfolio personnel de Melchior Obame, Ingénieur AI/ML/MLOps. Conçu comme une publication éditoriale interactive : typographie de presse, animations au scroll, système de thèmes multi-palettes commutable en temps réel.

**Live** → [melchiorobame.com](https://melchiorobame.com) *(à configurer)*

---

## Stack technique

| Couche | Outil | Version |
|---|---|---|
| Framework UI | React | 18 |
| Language | TypeScript | 5.6 |
| Build | Vite | 6 |
| Style | Tailwind CSS | 3 |
| Animations | Framer Motion | 11 |
| Formulaire | react-hook-form + Zod | 7 / 3 |
| Dialog | Radix UI Dialog | 1.1 |
| Icônes | react-icons (Feather) | 5 |

---

## Fonctionnalités

- **4 palettes de couleurs** — Cream, Ink (sombre), Moss, Rose — commutables sans rechargement via un panneau de contrôle développeur
- **Système de thème complet** — palette, densité (comfy/compact), niveau d'animation (marked/subtle/none)
- **Animations au scroll** — révélation mot par mot (`WordReveal`), fondu-montée (`RevealWrapper`), count-up sur les statistiques, barres de progression des langues
- **Curseur personnalisé** — anneau avec `mix-blend-mode: difference`, invariant à la palette
- **Formulaire de contact** — validation Zod inline, soumission via `mailto:`
- **CV téléchargeable** — modal Radix UI avec lien de téléchargement direct
- **Parallaxe héro** — photo card avec effet de défilement via `useScroll` + `useTransform`
- **Marquee animé** — bande défilante de mots-clés dans la section héro
- **Navigation réactive** — transparente au sommet, frostée (`backdrop-blur`) au scroll

---

## Prérequis

- Node.js ≥ 18
- npm ≥ 9

---

## Installation

```bash
git clone https://github.com/MelchiorObame/portfolio-cv-melchior.git
cd portfolio-cv-melchior
npm install
```

---

## Commandes

```bash
# Lancer le serveur de développement (avec TweaksPanel actif)
npm run dev

# Vérifier les types TypeScript et build de production
npm run build

# Prévisualiser le build de production en local
npm run preview

# Linter
npm run lint
```

Le serveur de développement démarre sur `http://localhost:5173`.

> **TweaksPanel** : en mode `dev`, un bouton ⚙ apparaît en bas à droite. Il permet de switcher les palettes, la densité et les animations en temps réel. Absent du build de production.

---

## CV

Placer le fichier PDF du CV ici :

```
public/cv/Profile.pdf
```

Il est servi statiquement par Vite et téléchargeable depuis le bouton "Mon CV" dans la navigation.

---

## Déploiement

Le projet est un SPA statique — compatible avec tout hébergeur qui sert des fichiers statiques.

```bash
npm run build
# Le dossier dist/ contient le build prêt à déployer
```

### Vercel (recommandé)

```bash
npx vercel --prod
```

Ou connecter le dépôt GitHub à Vercel — le build est détecté automatiquement (framework Vite).

---

## DESIGN.md

Le fichier [`DESIGN.md`](./DESIGN.md) est le **document de référence du système de design** du portfolio. Il documente :

- Les **4 palettes de couleurs** et leur architecture en variables CSS (tokens nommés, règles de non-duplication)
- La **typographie** — les 3 familles (Instrument Serif, Space Grotesk, JetBrains Mono), la hiérarchie de tailles, les règles d'usage
- Le **layout** — le container, l'espacement sectionnel, les grilles internes de chaque section
- L'**élévation et la profondeur** — les couches z-index, les blobs, le grain, la nav frostée
- Le **catalogue des composants** — Eyebrow, RevealWrapper, WordReveal, CVModal, TweaksPanel, curseur, et le mapping section → icône
- Les **tokens d'animation** Framer Motion et les 3 modes (marked / subtle / none)
- Le **responsive** — breakpoints et règles spécifiques
- Un **guide d'itération** : comment ajouter une section, une palette, modifier une animation
- Les **lacunes connues** avec pistes de résolution

Toute modification visuelle significative doit rester cohérente avec ce document.

---

## Personnalisation rapide

| Ce que tu veux changer | Où |
|---|---|
| Contenu (expériences, projets, compétences…) | `src/data/portfolio.ts` |
| Palette de couleurs par défaut au runtime | `src/context/ThemeContext.tsx` → `defaultTheme.palette` |
| Palette de couleurs par défaut CSS (fallback SSR) | `src/styles/globals.css` → `:root` |
| Adresse e-mail du formulaire | `src/components/sections/Contact.tsx` |
| Lien LinkedIn / GitHub | `src/data/portfolio.ts` → `socialLinks` |
| Ajouter une icône de section | `src/components/ui/Eyebrow.tsx` + icône Feather `fi` |

---

## Licence

Code source sous licence MIT.  
Design et contenu (textes, photos, CV) — tous droits réservés © Melchior Obame.
