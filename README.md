# Maison Patine - Site Vitrine V1

## Structure du projet

```
src/
├── components/
│   ├── navigation/
│   │   ├── SkipLink.astro      # Lien d'évitement accessibilité
│   │   └── ActiveNav.astro     # Navigation avec highlight actif
│   ├── sections/
│   │   ├── Hero.astro          # En-tête + navigation
│   │   ├── Presentation.astro  # Section présentation
│   │   ├── Activities.astro    # Grille des activités
│   │   ├── Gallery.astro       # Galerie photos (6 items)
│   │   ├── PracticalInfo.astro # Infos pratiques
│   │   └── ContactSocial.astro # Contact + réseaux
│   └── ui/
│       ├── Button.astro        # Bouton réutilisable
│       ├── Section.astro       # Wrapper de section
│       └── VisuallyHidden.astro # Texte screen-reader only
├── data/
│   └── site.ts                 # DONNÉES CENTRALISÉES
├── layouts/
│   └── MainLayout.astro        # Layout principal
├── pages/
│   ├── index.astro             # Page d'accueil
│   └── 404.astro               # Page 404
└── styles/
    └── global.css              # STYLES GLOBAUX (à styliser)

public/
├── favicon.svg                 # Favicon
├── robots.txt                  # SEO robots
├── sitemap.xml                 # Sitemap Google
└── site.webmanifest            # PWA manifest
```

## Fichier de données centralisé

**Tout le contenu est modifiable dans :** `src/data/site.ts`

Sections :
- `brand` : Nom de la boutique
- `meta` : SEO (title, description)
- `activityLine` : Sous-titre
- `tagline` : Phrase d'accroche
- `intro` + `positioning` : Textes présentation
- `activities[]` : Liste des 4 activités
- `practical{}` : Adresse, téléphone, email, horaires
- `social{}` : Liens Instagram/Facebook
- `gallery[]` : Images (minimum recommandé : 6)
- `footer{}` : Texte copyright

## À styliser par l'agent design

Fichiers à modifier pour le design :

1. **src/styles/global.css** - Variables CSS, utilitaires, composants
2. **Composants sections/** - Classes HTML et structure visuelle
3. **Composants ui/** - Style des boutons et éléments réutilisables

## Commandes

```bash
npm run dev      # Développement
npm run build    # Build production
npm run preview  # Preview build
```

## SEO & Accessibilité déjà intégrés

- ✅ Meta tags Open Graph
- ✅ Twitter Cards
- ✅ Sitemap XML
- ✅ Schema.org LocalBusiness (JSON-LD)
- ✅ Skip links (accessibilité)
- ✅ Landmarks ARIA
- ✅ Navigation active avec Intersection Observer
- ✅ Images lazy loading optimisé
- ✅ Favicon + Web Manifest
- ✅ Page 404 fonctionnelle

## Informations boutique

- **Nom** : Maison Patine
- **Adresse** : 20 rue Vigarozy, 09500 Mirepoix
- **Téléphone** : 06 73 28 95 58
- **Email** : maisonpatine@outlook.fr
- **Instagram** : @maisonpatine_
- **Facebook** : MaisonPatine