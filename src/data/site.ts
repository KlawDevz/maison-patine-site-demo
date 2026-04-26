export type GalleryCategory =
  | "facade"
  | "ambiance"
  | "mise-en-scene"
  | "details"
  | "objets"
  | "ensemble";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

type Activity = {
  title: string;
  description: string;
};

type MetaPage = {
  title: string;
  description: string;
  canonicalPath: string;
};

type SiteData = {
  common: {
    brand: string;
    activityLine: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
    openingHours: string;
    social: {
      instagramLabel: string;
      instagramUrl: string;
      facebookLabel: string;
      facebookUrl: string;
    };
    footer: {
      legalLine: string;
    };
  };
  metaByPage: {
    home: MetaPage;
    presentation: MetaPage;
    activites: MetaPage;
    galerie: MetaPage;
    contact: MetaPage;
  };
  pages: {
    home: {
      heroTitle: string;
      heroTagline: string;
      heroText: string;
      quickBlocks: Array<{ title: string; text: string; href: string; cta: string }>;
    };
    presentation: {
      title: string;
      lead: string;
      paragraphs: string[];
      locationNote: string;
    };
    activites: {
      title: string;
      intro: string;
      items: Activity[];
      closing: string;
    };
    galerie: {
      title: string;
      intro: string;
      items: GalleryItem[];
      note: string;
    };
    contact: {
      title: string;
      intro: string;
      availabilityNote: string;
    };
  };
};

export const siteData: SiteData = {
  common: {
    brand: "Maison Patine",
    activityLine: "Brocante - Décoration - Artisanat",
    phoneDisplay: "06 73 28 95 58",
    phoneHref: "tel:+33673289558",
    email: "maisonpatine@outlook.fr",
    address: "20 rue Vigarozy, 09500 Mirepoix",
    postalCode: "09500",
    city: "Mirepoix",
    region: "Ariège",
    country: "FR",
    openingHours: "Mardi au samedi - 10h00 à 18h30",
    social: {
      instagramLabel: "maisonpatine_",
      instagramUrl: "https://www.instagram.com/maisonpatine_/",
      facebookLabel: "MaisonPatine",
      facebookUrl: "https://www.facebook.com/MaisonPatine"
    },
    footer: {
      legalLine: "© 2026 Maison Patine - Mirepoix"
    }
  },
  metaByPage: {
    home: {
      title: "Maison Patine - Brocante, Décoration et Artisanat à Mirepoix",
      description:
        "Maison Patine à Mirepoix : une boutique de caractère autour de la brocante, de la décoration et de l'artisanat.",
      canonicalPath: "/"
    },
    presentation: {
      title: "Présentation - Maison Patine",
      description: "Découvrez l'identité de Maison Patine : une boutique de caractère à Mirepoix autour de la brocante, de la décoration et de l'artisanat.",
      canonicalPath: "/presentation"
    },
    activites: {
      title: "Activités - Maison Patine",
      description: "Brocante, décoration, artisanat et achats de meubles anciens : découvrez les activités de Maison Patine.",
      canonicalPath: "/activites"
    },
    galerie: {
      title: "Galerie - Maison Patine",
      description:
        "Parcourez l'univers Maison Patine par ambiances : façade, intérieur, détails décoratifs et pièces de caractère.",
      canonicalPath: "/galerie"
    },
    contact: {
      title: "Contact - Maison Patine",
      description: "Contactez Maison Patine par téléphone, email ou via les réseaux sociaux.",
      canonicalPath: "/contact"
    }
  },
  pages: {
    home: {
      heroTitle: "Maison Patine",
      heroTagline: "Un atelier-boutique sensible entre brocante, décoration et artisanat.",
      heroText:
        "Nous composons des ambiances vivantes avec des pièces choisies pour leur matière, leur patine et leur histoire. Une destination de caractère au cœur de Mirepoix.",
      quickBlocks: [
        {
          title: "Comprendre notre univers",
          text: "Découvrez l'identité Maison Patine, notre regard sur les matières et la façon dont nous composons chaque scène.",
          href: "/presentation",
          cta: "Voir la présentation"
        },
        {
          title: "Explorer nos activités",
          text: "Brocante, décoration et artisanat se répondent pour proposer une expérience chaleureuse et cohérente.",
          href: "/activites",
          cta: "Voir les activités"
        },
        {
          title: "Préparer votre visite",
          text: "Retrouvez les informations utiles, les horaires et les canaux de contact pour organiser votre passage.",
          href: "/contact",
          cta: "Voir la page contact"
        }
      ]
    },
    presentation: {
      title: "Qui sommes-nous ?",
      lead:
        "Maison Patine est une maison de curiosités décoratives à Mirepoix, pensée pour celles et ceux qui aiment les matières vraies, la patine et les objets qui racontent une histoire.",
      paragraphs: [
        "Notre sélection se construit autour d'un équilibre précis : des pièces authentiques, des objets utiles et une écriture décorative chaleureuse.",
        "Chaque meuble, chaque textile et chaque détail est choisi pour sa présence, sa fonctionnalité et son potentiel dans un intérieur habité.",
        "La boutique évolue au fil des trouvailles et des saisons, avec une attention constante aux harmonies de couleur, de matière et de lumière."
      ],
      locationNote: "Mirepoix - Ariège"
    },
    activites: {
      title: "Nos activités",
      intro:
        "Maison Patine s'articule autour de quatre univers complémentaires pour proposer une expérience de boutique cohérente, sensible et durable.",
      items: [
        {
          title: "Brocante",
          description:
            "Objets anciens, trouvailles et pièces de caractère pour celles et ceux qui recherchent l'authenticité."
        },
        {
          title: "Décoration",
          description:
            "Sélection d'objets décoratifs et d'ambiances pour composer des intérieurs personnels et accueillants."
        },
        {
          title: "Artisanat",
          description:
            "Pièces travaillées avec soin, finitions singulières et attention portée aux détails."
        },
        {
          title: "Achats de meubles et objets anciens",
          description:
            "Maison Patine achète également meubles et objets anciens après échange et évaluation."
        }
      ],
      closing:
        "Chaque univers reste lisible et modulable, afin d'accompagner vos projets de décoration au rythme des nouvelles trouvailles."
    },
    galerie: {
      title: "La boutique en images",
      intro:
        "La galerie rassemble des visuels d'ambiance pour restituer l'univers Maison Patine. Ces images sont temporaires en attendant la série photo définitive du client.",
      items: [
        {
          src: "/images/placeholders/facade-antique-01.webp",
          alt: "Façade d'une boutique d'antiquités et de décoration",
          category: "facade"
        },
        {
          src: "/images/placeholders/ambiance-interieur-01.webp",
          alt: "Ambiance intérieure chaleureuse avec meubles anciens",
          category: "ambiance"
        },
        {
          src: "/images/placeholders/mise-en-scene-01.webp",
          alt: "Mise en scène vintage avec objets anciens",
          category: "mise-en-scene"
        },
        {
          src: "/images/placeholders/details-vintage-01.webp",
          alt: "Détail décoratif de pendule ancienne et vases vintage",
          category: "details"
        },
        {
          src: "/images/placeholders/objets-antique-01.webp",
          alt: "Objets chinés en vitrine d'antiquaire",
          category: "objets"
        },
        {
          src: "/images/placeholders/ensemble-boutique-01.webp",
          alt: "Vue d'ensemble d'une devanture de boutique vintage",
          category: "ensemble"
        }
      ],
      note: "Ces visuels d'inspiration seront remplacés par les photos client sans impact sur la structure de page ni sur le parcours utilisateur."
    },
    contact: {
      title: "Restons en contact",
      intro:
        "Le plus simple est de nous joindre par téléphone ou par email. Vous pouvez aussi suivre les nouveautés sur nos réseaux sociaux.",
      availabilityNote:
        "Réponse selon disponibilité en boutique."
    }
  }
};
