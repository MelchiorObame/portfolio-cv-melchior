# DESIGN.md — Portfolio Melchior Obame

> Document de référence du système de design. Il décrit les décisions, les contraintes et les règles qui régissent l'apparence et le comportement du portfolio. Toute modification visuelle significative doit rester cohérente avec ce document.

---

## 1. Vue d'ensemble

Le portfolio est conçu comme une **publication éditoriale interactive** — ni SaaS, ni application utilitaire. Chaque décision formelle s'inspire de la typographie de presse haut de gamme et de l'esthétique des galeries contemporaines : beaucoup d'espace, des contrastes marqués, une animation significative mais non distrayante.

### Principes fondateurs

| Principe | Traduction concrète |
|---|---|
| **Éditorial** | Texte mis en valeur, polices serif en affichage, hiérarchie de tailles drastiques |
| **Matière** | Grain film sur tout l'écran, textures hachurées CSS, blobs flous en arrière-plan |
| **Sobriété animée** | Les animations révèlent le contenu, elles ne le performent pas |
| **Système, pas cas par cas** | Toute couleur vient d'un token CSS, toute taille d'une valeur `clamp()` |

---

## 2. Couleurs

### Architecture du système

Les couleurs ne sont jamais codées en dur dans les composants. Toutes les valeurs passent par des **variables CSS scoped** appliquées sur `<html>` via `data-palette`, consommées dans Tailwind via `theme.extend.colors`.

```
CSS Variable  →  Tailwind token  →  Classe utilitaire
--accent      →  accent          →  bg-accent / text-accent / border-accent
```

### Palettes

Le portfolio propose 4 palettes commutables en temps réel via le TweaksPanel. La palette active par défaut est **ink** (sombre).

#### Cream — palette claire par défaut (CSS `:root`)

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#f3ece1` | Fond principal |
| `--bg-2` | `#ebe2d3` | Fond de sections alternées |
| `--ink` | `#181612` | Texte principal |
| `--ink-2` | `#4a4438` | Texte secondaire |
| `--ink-3` | `#847d6f` | Labels, métadonnées, placeholders |
| `--line` | `rgba(24,22,18, 0.12)` | Séparateurs, bordures de cartes |
| `--card` | `#ffffffcc` | Fond des cartes (légèrement translucide) |
| `--accent` | `#ff5a1f` | CTA, icônes actives, barres de progression |
| `--accent-ink` | `#ffffff` | Texte sur fond accent |
| `--secondary` | `#2c5e4f` | Blobs décoratifs, gradients sport |
| `--highlight` | `#e9d8a6` | Blobs décoratifs, visuels lecture |

#### Ink — palette sombre (défaut runtime)

| Token | Valeur notoire |
|---|---|
| `--bg` | `#0f0f0e` |
| `--bg-2` | `#1a1a18` |
| `--accent` | `#ff7a4d` (légèrement plus doux qu'en clair) |
| `--card` | `#1c1c1ad9` |

#### Moss — palette naturelle

Accent vert `#4e7c3a`, fond parcheminé `#ecead5`, secondary brun `#6b4423`.

#### Rose — palette chaude

Accent rose `#c84b6b`, fond crème rosé `#f5e6e3`, secondary bordeaux `#803a3a`.

### Tokens partagés (toutes palettes)

| Variable | Valeur | Rôle |
|---|---|---|
| `--grain` | `0.06` | Opacité de la texture grain |
| `--radius` | `18px` | Rayon de bordure des cartes |
| `--container` | `1400px` | Largeur max du contenu |
| `--pad-section` | `clamp(80px, 10vw, 160px)` | Espacement vertical des sections |

### Accent personnalisable (cream uniquement)

Sur la palette cream, l'utilisateur peut définir un accent arbitraire via le TweaksPanel. La valeur est appliquée directement : `document.documentElement.style.setProperty('--accent', hex)`. Les autres palettes ont un accent fixe adapté à leur fond.

### À ne pas faire

- Ne jamais écrire `color: #ff5a1f` dans un composant. Utiliser `text-accent`.
- Ne jamais utiliser `bg-accent/50` — Tailwind ne résout pas l'opacité sur des tokens `var()`. Utiliser `style={{ opacity: 0.5 }}` ou un token alpha dédié.
- Ne pas introduire de nouvelle couleur sans la déclarer pour les 4 palettes.

---

## 3. Typographie

### Familles

| Rôle | Famille | Token Tailwind | Chargement |
|---|---|---|---|
| **Display** | Instrument Serif | `font-display` | Google Fonts, italic subset |
| **Corps** | Space Grotesk | `font-sans` | Google Fonts, 300–700 |
| **Mono** | JetBrains Mono | `font-mono` | Google Fonts, 400 |

### Hiérarchie

#### Titre héro (h1)
```
font-display  text-[clamp(80px,14vw,220px)]  leading-[0.88]  tracking-[-0.04em]
```
Taille maximale du portfolio — réservée exclusivement au nom.

#### Titres de section (h2)
```
font-display  text-[clamp(48px,7vw,112px)]  leading-[0.95]  tracking-[-0.02em]
```
Usage systématique : le mot-clé éditorial est mis en italic `text-ink-2`.
```html
<h2>Mes <span class="italic text-ink-2">autres</span> espaces.</h2>
```

#### Eyebrow (indicateur de section)
```
font-mono  text-[13px]  tracking-[0.14em]  uppercase  text-ink-2
```
Accompagné d'une icône Feather 14px `text-accent`, dans une pill avec bordure `border-[var(--line)]`.

#### Corps de texte
```
font-sans  text-[17px]  leading-[1.55]
```
Défini sur `body` — hérité partout sauf override explicite.

#### Labels / métadonnées
```
font-mono  text-xs  text-ink-3  uppercase  tracking-[0.10em]
```

#### Tag chip
```
font-mono  text-[11px]  px-2.5 py-1  bg-[var(--bg-2)]  rounded-full
```

### Règles typographiques

- Les titres de section utilisent toujours `[text-wrap:balance]` sur les longues lignes.
- L'italic `Instrument Serif` est une voix distincte — utilisé pour les mots-clés éditoriaux, jamais pour de l'emphase fonctionnelle.
- Le mono n'est jamais utilisé pour du texte courant : uniquement labels, eyebrows, tags, snippets.

---

## 4. Layout

### Grille et container

```css
.container {
  max-width: 1400px;                  /* --container */
  padding: 0 clamp(20px, 4vw, 56px);
  margin: 0 auto;
}
```

Toutes les sections utilisent `.container` directement — chaque section définit sa propre mise en page interne.

### Espacement vertical

L'espacement entre sections est défini via `padding: var(--pad-section) 0` sur chaque `<section>`.

| Mode | Valeur |
|---|---|
| Comfy (défaut) | `clamp(80px, 10vw, 160px)` |
| Compact | `clamp(56px, 7vw, 110px)` (via `data-density="compact"`) |

### Grilles internes fréquentes

| Section | Grille |
|---|---|
| Hero | `grid-cols-1 md:grid-cols-[1.4fr_1fr]` |
| Projects | `grid-cols-12` (cartes span 4–12) |
| Skills | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| Languages | `grid-cols-2 md:grid-cols-4` |
| Passions | `grid-cols-1 md:grid-cols-3` |
| PhotoGallery | `grid-cols-6 auto-rows-[140px]` |

### Nav

Position fixe `top-0 z-50`. Hauteur et opacité de fond animées via `useTransform(scrollY)` — transparente au sommet, frostée après 60px de scroll. Une seule instance `<nav>` avec toutes les propriétés animées via `useMotionTemplate`.

---

## 5. Élévation & profondeur

Le portfolio utilise plusieurs couches pour créer de la profondeur sans ombres portées classiques.

### Couches (du fond vers l'avant)

| Z-index | Élément |
|---|---|
| `-10` | Blobs décoratifs (arrière-plan) |
| `0` | Contenu de section |
| `40` | Barre de progression scroll |
| `50` | Navigation fixe |
| `999` | Grain overlay (`body::before`) |
| `9999` | Curseur personnalisé |
| Dialog | Radix UI (portail dans `body`) |

### Techniques de profondeur

**Blobs** : cercles `blur-[60px] opacity-35` en position absolue sur certaines sections. Couleurs : `accent`, `secondary`, `highlight`. Opacité maximale : 0.4.

**Grain** : texture SVG fractalNoise fixée sur `body::before` en `mix-blend-mode: multiply`. Opacité : `--grain: 0.06`.

**Cartes** : `bg-card` (translucide) + `border border-[var(--line)]` + `rounded-card`. Pas de `box-shadow`.

**Nav frostée** : `backdrop-filter: blur(14px)` animé via `useMotionTemplate` sur le `<motion.nav>` unique.

---

## 6. Formes & bordures

### Rayon de bordure

| Token | Valeur | Usage |
|---|---|---|
| `rounded-card` | `18px` | Cartes projets, passions, langues |
| `rounded-full` | 9999px | Pills de nav, boutons CTA, eyebrows, tags |
| `rounded-lg` | 8px | Cellules galerie, petites chips |

### Formes récurrentes

**Pill** (eyebrow, boutons) : `rounded-full px-4–8 py-2–4 border`.

**Card** : `rounded-card overflow-hidden border border-[var(--line)] bg-card`.

**Tag chip** : `rounded-full font-mono text-[11px] px-2.5 py-1 bg-[var(--bg-2)]`.

---

## 7. Composants

### Eyebrow

Indicateur de section. Icône Feather + texte mono en pill.

```tsx
<Eyebrow icon={FiBriefcase}>Expériences — 02</Eyebrow>
```

- Icône : 14px, `text-accent`
- Texte : `text-[13px] tracking-[0.14em] uppercase`
- Conteneur : `inline-flex items-center gap-3 px-4 py-2.5 border border-[var(--line)] rounded-full`
- Marge inférieure systématique : `mb-8`

### Section → icône

| Section | Icône Feather |
|---|---|
| À propos | `FiUser` |
| Expériences | `FiBriefcase` |
| Projets | `FiCode` |
| Skills | `FiCpu` |
| Formation | `FiBookOpen` |
| Certifications | `FiAward` |
| Langues | `FiGlobe` |
| Passions | `FiHeart` |
| Photographie | `FiCamera` |
| Liens | `FiExternalLink` |
| Contact | `FiMail` |

### RevealWrapper

Enveloppe tout bloc avec un fondu-montée au scroll.

```tsx
<RevealWrapper delay={0.12}>…</RevealWrapper>
```

- Variante Framer Motion : `fadeUp` (`y: 32 → 0`, `opacity: 0 → 1`, durée `0.65s`, ease `[0.22,1,0.36,1]`)
- `useInView({ once: true, amount: 0.15 })`
- Désactivé si `theme.animations === 'none'`

### WordReveal

Révèle un titre mot par mot. Wrap les strings en `<motion.span>` avec délai croissant.

```tsx
<WordReveal as="h2" className="…">
  Travaillons <span className="italic">ensemble.</span>
</WordReveal>
```

- Délai par mot : `index × 0.06s`

### AnimatedNumber

Count-up déclenché à l'entrée dans le viewport.

- Durée : 1.8s, easing `easeOutCubic`
- `useInView({ once: true, amount: 0.5 })`

### TagChip

Pill mono minuscule, fond `bg-2`, pas de bordure.

### StatusPill

Badge "Disponible 2026" animé. Point pulsé + texte.

- Pulse CSS : `animation: pulse 2s ease-out infinite`
- Fond : `bg-[var(--bg-2)]`, bordure `border-[var(--line)]`

### CVModal

Dialog Radix UI avec overlay frosté et animation spring.

- Overlay : `fixed inset-0 bg-[var(--bg)]/80 backdrop-blur-md`
- Panel : `max-w-sm rounded-card p-8`, spring `stiffness: 400, damping: 30`
- Lien de téléchargement : `/cv/Profile.pdf`

### TweaksPanel

Panneau de contrôle du thème (palette, densité, animations, accent). Gated `import.meta.env.DEV` — absent en production.

- Position : `fixed bottom-6 right-6 z-[9000]`
- Toggle : `AnimatePresence` + `panelVariant`

### Curseur personnalisé

Deux éléments fixes : `#cursor-ring` (36px anneau) et `#cursor-dot` (6px point). `mix-blend-mode: difference` — invariant à la palette. Sur éléments interactifs : anneau → 64px avec fond blanc 8%. Désactivé sur `(hover: none)`.

---

## 8. Animations

### Tokens (motionVariants.ts)

| Nom | Description | Durée |
|---|---|---|
| `fadeUp` | Opacité 0→1, y 32→0 | 0.65s |
| `staggerContainer` | `staggerChildren: 0.08s` | — |
| `staggerChild` | Même courbe que fadeUp | 0.5s |
| `wordVariant` | Délai = `custom × 0.06s` | 0.55s |
| `panelVariant` | Spring stiffness 400 / damping 30 | — |
| `barFill(pct)` | Largeur 0→`pct`% | 1.2s |

### Modes d'animation

| Mode (`data-anim`) | Comportement |
|---|---|
| `marked` (défaut) | Toutes animations actives, marquee 30s |
| `subtle` | Marquee ralenti à 60s, animations conservées |
| `none` | `animation: none !important` + `transition: none !important` sur tout |

### Animations CSS pures

| Élément | Animation | Durée |
|---|---|---|
| Marquee héro | `marquee 30s linear infinite` | 30s (60s subtle) |
| Sticker héro | `spin 20s linear infinite` | 20s |
| Cercles sport | `float 6s ease-in-out infinite` | 6s |
| Dot status | `pulse 2s ease-out infinite` | 2s |

### À ne pas faire

- Ne pas déclencher une animation sans `useInView({ once: true })` — les révélations ne doivent pas se rejouer.
- Ne pas dépasser `delay: 0.5s` sur un `RevealWrapper` — l'utilisateur ne doit pas attendre le contenu.
- Ne pas animer des propriétés de layout (width, height, top, left) — préférer `transform` et `opacity`.
- Ne pas inliner les variants Framer Motion — les centraliser dans `motionVariants.ts`.

---

## 9. Comportement responsive

### Breakpoints (Tailwind défaut)

| Breakpoint | Largeur | Ajustements principaux |
|---|---|---|
| `sm` | 640px | Masquer colonnes secondaires (host des liens) |
| `md` | 768px | Grilles 1→2 ou 1→3 colonnes, héro 1→2 colonnes |
| `lg` | 1024px | Skills 2→4 colonnes |
| `xl+` | 1280px+ | Titres atteignent leur taille `clamp` maximale |

### Règles spécifiques

- **PhotoGallery** : `max-sm:grid-cols-2 max-sm:row-span-1` — toutes les cellules 1×1 sur mobile.
- **Container padding** : `clamp(20px, 4vw, 56px)` — jamais de bords collants sur petit écran.
- **Curseur** : désactivé sur `(hover: none)` — mobiles tactiles utilisent le curseur système.
- **Polices** : toutes les tailles utilisent `clamp()` — aucune valeur fixe sur les titres.

---

## 10. Ce qu'il ne faut pas faire

### Design

- ❌ Ajouter une ombre portée (`box-shadow`) sur une carte — le système utilise la bordure semi-transparente.
- ❌ Utiliser une couleur en dehors du système de tokens, même ponctuellement.
- ❌ Centrer du texte courant — seuls le Contact et certains blocs héro sont centrés.
- ❌ Mettre du texte `font-display` roman (non-italic) dans un rôle purement décoratif.
- ❌ Ajouter un bouton sans `rounded-full` — tous les boutons sont des pills.

### Code

- ❌ `bg-accent/50` — l'opacité Tailwind ne fonctionne pas sur les tokens `var()`.
- ❌ Deux `<nav>` superposés pour simuler une transition scroll — une seule nav avec `useTransform`.
- ❌ Animer sans vérifier `theme.animations === 'none'` via `useTheme()`.
- ❌ Ajouter une section sans `<Eyebrow>` + `<RevealWrapper>` au minimum.
- ❌ Hardcoder une durée d'animation en dehors de `motionVariants.ts`.

---

## 11. Guide d'itération

### Ajouter une section

1. Créer `src/components/sections/NomSection.tsx`
2. Choisir une icône Feather (`fi`) non encore utilisée dans le mapping ci-dessus
3. Envelopper dans `<section id="slug">` + `<div className="container">`
4. Ouvrir avec `<RevealWrapper><Eyebrow icon={FiXxx}>Titre — NN</Eyebrow></RevealWrapper>`
5. Suivre avec `<RevealWrapper><h2 …></RevealWrapper>` pour le titre de section
6. Ajouter le slug dans `useActiveSection.ts`
7. Ajouter un lien dans `Nav.tsx`
8. Importer et insérer dans `App.tsx`

### Ajouter une palette

1. Déclarer `:root[data-palette='nom']` dans `globals.css` avec au minimum `--bg`, `--ink`, `--accent`
2. Étendre le type `Palette` dans `src/types/portfolio.ts`
3. Ajouter le bouton dans `TweaksPanel.tsx`
4. Vérifier le contraste : minimum 4.5:1 entre `--ink` et `--bg`

### Modifier une animation

1. Éditer ou créer la variante dans `src/lib/motionVariants.ts`
2. Ne pas inliner les variants dans les composants
3. Tester avec les 3 modes (marked / subtle / none)

---

## 12. Lacunes connues

| Lacune | Impact | Piste de résolution |
|---|---|---|
| `bg-accent/50` non fonctionnel | Impossible d'utiliser l'opacité Tailwind sur `var()` | Définir un token `--accent-10: rgba(…, 0.1)` par palette |
| PhotoGallery sans images réelles | Motif hachuré placeholder | Ajouter des photos dans `public/photos/` et des `<img>` dans les cellules |
| Formulaire contact via `mailto:` | Dépend du client mail, pas de confirmation serveur | Intégrer Resend ou Formspree |
| Palette ink comme défaut runtime | Divergence entre défaut CSS (cream) et défaut JS (ink) | Intentionnel — ink est plus impactant au premier chargement |
| Pas de respect de `prefers-color-scheme` | Le système ignore la préférence OS sombre/clair | Lire la préférence OS au montage et initialiser la palette en conséquence |
| TweaksPanel absent en production | Outil de design inaccessible aux visiteurs | Intentionnel — ou prévoir un easter egg pour l'activer |
