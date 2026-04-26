# Visuels temporaires

Ce fichier recense les images d'inspiration utilisees en attendant la serie photo definitive du client.

## Mapping actuel

Toutes les images temporaires sont hebergees localement dans `public/images/placeholders/`.

- `src/data/site.ts` - categorie `facade`
  - local: `/images/placeholders/facade-antique-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/charming-antique-shop-front-in-historic-district-30414819/`
- `src/data/site.ts` - categorie `ambiance`
  - local: `/images/placeholders/ambiance-interieur-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/antique-shop-interior-with-vintage-collectibles-30133567/`
- `src/data/site.ts` - categorie `mise-en-scene`
  - local: `/images/placeholders/mise-en-scene-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/an-open-antique-shop-13095034/`
- `src/data/site.ts` - categorie `details`
  - local: `/images/placeholders/details-vintage-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/vintage-clock-in-an-antique-shop-window-16470625/`
- `src/data/site.ts` - categorie `objets`
  - local: `/images/placeholders/objets-antique-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/charming-vintage-antiques-display-in-shop-window-30404112/`
- `src/data/site.ts` - categorie `ensemble`
  - local: `/images/placeholders/ensemble-boutique-01.jpg`
  - source Pexels: `https://www.pexels.com/photo/store-with-decorations-15896611/`
- `src/pages/presentation.astro` - visuel hero editorial
  - local: `/images/placeholders/presentation-editorial-02.jpg`
  - source Pexels: `https://www.pexels.com/photo/antique-shop-interior-with-vintage-collectibles-30133567/`

## Remplacement quand photos client disponibles

1. Remplacer les URLs dans `src/data/site.ts` et les pages concernees.
2. Conserver les memes categories pour ne pas casser les filtres de galerie.
3. Mettre a jour les attributs `alt` pour decrire les scenes reelles.
