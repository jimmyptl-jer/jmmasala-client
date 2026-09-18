export interface ProductSeoItem {
  slug: string;
  name: string;
  botanicalName: string;
  hsCode: string;
  origin: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    h1: string;
    searchIntent: string;
  };
  content: {
    commercialIntro: string;
    sourcingAndOrigin: string;
    processingStandards: string;
    packagingOptions: string[];
    containerLoading: {
      fcl20: string;
      fcl40: string;
    };
    buyerApplications: string[];
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  cluster: {
    supportingPages?: Array<{
      title: string;
      path: string;
      intent: string;
    }>;
    topicalSiblings: string[];
  };
}

export const PRODUCT_MASTER_SEO: Record<string, ProductSeoItem> = {
  "cumin-seeds-exporter-india": {
    slug: "cumin-seeds-exporter-india",
    name: "Cumin Seeds",
    botanicalName: "Cuminum cyminum",
    hsCode: "0909 31 29",
    origin: "Unjha, Gujarat",
    seo: {
      title: "Cumin Seeds Exporter India | Unjha Gujarat | JM Masala",
      description:
        "Export-grade Indian cumin seeds (jeera) from Unjha, Gujarat. 99.5% Sortex purity, high volatile oil (2.5%-4.5%), lab tested, FOB Mundra & CIF global supply.",
      primaryKeyword: "cumin seeds exporter india",
      secondaryKeywords: [
        "cumin seeds supplier india",
        "indian cumin seeds exporter",
        "cumin seeds wholesale supplier",
        "bulk cumin seeds supplier",
        "unjha cumin seeds",
        "cumin exporter gujarat",
        "cumin seeds manufacturer india",
        "jeera exporter india",
        "jeera supplier india",
        "Sortex cumin seeds exporter",
      ],
      h1: "Cumin Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies machine-cleaned and Sortex optical-graded Indian Cumin Seeds directly from Unjha, Gujarat—one of India's major commercial trading hubs for seed spices. We cater to global spice importers, industrial extractors, and food processors requiring consistent volatile essential oil, low moisture, and verified physical purity.",
      sourcingAndOrigin:
        "Procured through established APMC Unjha mandi networks during peak arrival seasons (February–April). Sourcing adjacent to the primary market yard ensures daily spot selection of fresh harvest arrivals with high natural oil retention.",
      processingStandards:
        "Multi-stage mechanical vibro-cleaning, gravity destoning, air aspiration, and high-resolution Sortex optical color sorting delivering calibrated purity from 98.0% up to 99.9%.",
      packagingOptions: [
        "25 kg and 50 kg food-grade woven PP bags with inner polyethylene liners",
        "3-ply multi-wall kraft paper bags for European and North American buyers",
        "500 kg to 1000 kg FIBC jumbo bulk bags on request",
        "Custom branded private label retail packaging (100g to 1kg pouches)",
      ],
      containerLoading: {
        fcl20: "13.0 to 14.0 Metric Tons loose stuffed (~11.0 MT palletized)",
        fcl40: "26.0 to 28.0 Metric Tons loose stuffed (~22.0 MT palletized)",
      },
      buyerApplications: [
        "Whole spice wholesale distribution and consumer repacking",
        "Curry powder blends, garam masala, and commercial seasoning formulations",
        "Oleoresin, essential oil steam distillation, and supercritical fluid extraction",
      ],
      faqs: [
        {
          question: "What cumin seed purity grades does JM Masala export?",
          answer:
            "We supply calibrated grades including Singapore Quality (99% Machine Cleaned), USA Quality (ASTA standard), Europe Quality (99.5% Sortex), and premium 99.9% Sortex lots with low admixture.",
        },
        {
          question: "How is volatile essential oil content verified in export lots?",
          answer:
            "Volatile oil is quantified via standard ISO 6571 hydro-distillation at NABL-accredited laboratories. Fresh Unjha arrivals typically test between 2.5% and 4.5% v/w.",
        },
        {
          question: "Can JM Masala meet European Union (EU) pesticide MRL requirements?",
          answer:
            "Yes. Spice lots for European buyers can be supplied against buyer-specified EU pesticide-residue (MRL) parameters and Aflatoxin thresholds, verified through accredited pre-shipment laboratory test reports.",
        },
        {
          question: "What shipping terms and container loading options are available?",
          answer:
            "We offer FOB Mundra, CIF, and CFR delivery to major global ports. A 20ft container accommodates 13-14 MT loose stuffed in 25kg/50kg bags, while a 40ft container holds 26-28 MT.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Unjha Cumin Seeds Origin Guide",
          path: "/unjha-cumin-seeds",
          intent: "Geographic Origin & Mandi Dynamics",
        },
        {
          title: "Cumin Seeds Technical Specifications",
          path: "/cumin-seeds-specifications",
          intent: "Technical Buyer Datasheet & COA",
        },
        {
          title: "Best Cumin Exporter Overview",
          path: "/best-cumin-exporter-india",
          intent: "Commercial Exporter Profile",
        },
      ],
      topicalSiblings: [
        "cumin-powder-exporter-india",
        "coriander-seeds-exporter-india",
        "fennel-seeds-exporter-india",
        "fenugreek-seeds-exporter-india",
        "ajwain-seeds-exporter-india",
        "psyllium-husk-exporter-india",
      ],
    },
  },

  "coriander-seeds-exporter-india": {
    slug: "coriander-seeds-exporter-india",
    name: "Coriander Seeds",
    botanicalName: "Coriandrum sativum",
    hsCode: "0909 21 90",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Coriander Seeds Exporter India | Dhania | JM Masala",
      description:
        "Export-grade Indian coriander seeds (Dhania) from Gujarat & Rajasthan. Eagle, Scooter & Parrot grades, Sortex cleaned, high volatile oil, FOB Mundra.",
      primaryKeyword: "coriander seeds exporter india",
      secondaryKeywords: [
        "coriander seeds supplier india",
        "coriander seeds wholesale",
        "indian coriander seeds exporter",
        "dhania exporter india",
        "coriander supplier gujarat",
        "coriander seeds bulk supplier",
        "coriander seeds manufacturer india",
        "Eagle coriander seeds exporter",
        "Scooter coriander seeds",
        "green coriander seeds supplier",
      ],
      h1: "Coriander Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala is an Indian coriander seeds exporter supplying Eagle, Scooter, and Parrot grade whole and split coriander (Dhania) sourced from premier agricultural belts across Gujarat and Rajasthan. Processed for citrusy aroma, uniform size, and low split count.",
      sourcingAndOrigin:
        "Sourced from primary mandis in northern Gujarat (Unjha, Gondal) and southeast Rajasthan (Kota, Ramganj Mandi) during the winter harvest window.",
      processingStandards:
        "Screened over multi-deck vibratory cleaners, destoned to remove field gravel, aspirated for hollow husk removal, and optical sorted for uniform color.",
      packagingOptions: [
        "20 kg and 25 kg woven PP bags with moisture-barrier inner liners",
        "Multi-wall kraft paper sacks for industrial processors",
        "Custom private label retail pouches (100g to 1kg)",
      ],
      containerLoading: {
        fcl20: "6.5 to 7.5 Metric Tons loose stuffed (light bulk density)",
        fcl40: "14.0 to 16.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Whole seed retail packaging and wholesale spice blending",
        "Cold milling for pure ground Dhania powder and curry bases",
        "Pickling, brewing, meat curing, and spice seasoning formulations",
      ],
      faqs: [
        {
          question: "Which commercial coriander varieties does JM Masala supply?",
          answer:
            "We supply Eagle Quality (standard export grade with clean aroma), Scooter Quality (green-golden bold seeds), and Parrot Quality (premium bright green selected seeds).",
        },
        {
          question: "Why does coriander load less weight in a 20ft container?",
          answer:
            "Whole coriander seeds have hollow globular structures and low bulk density (~300–350 g/L), resulting in container stuffing of approximately 6.5 to 7.5 MT per 20ft FCL.",
        },
        {
          question: "Can JM Masala supply coriander split (Dhania Dal)?",
          answer:
            "Yes. We process roasted and unroasted coriander splits (Dhania Dal) used as traditional mouth fresheners and seasoning ingredients.",
        },
        {
          question: "What lab parameters and certifications accompany shipments?",
          answer:
            "Consignments are provided with NABL-accredited COA verifying volatile oil, moisture, split percentage, pesticide residue screening, and Phytosanitary certification.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Best Coriander Exporter Overview",
          path: "/best-coriander-exporter-india",
          intent: "Commercial Exporter Profile",
        },
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Cleaning & Optical Sorting Infrastructure",
        },
        {
          title: "Quality Certifications & Testing",
          path: "/quality-certifications",
          intent: "HACCP & Lab Standards",
        },
      ],
      topicalSiblings: [
        "coriander-powder-exporter-india",
        "cumin-seeds-exporter-india",
        "fennel-seeds-exporter-india",
        "fenugreek-seeds-exporter-india",
      ],
    },
  },

  "fennel-seeds-exporter-india": {
    slug: "fennel-seeds-exporter-india",
    name: "Fennel Seeds",
    botanicalName: "Foeniculum vulgare",
    hsCode: "0909 61 29",
    origin: "Unjha, Gujarat",
    seo: {
      title: "Fennel Seeds Exporter from India | Saunf Supplier | JM Masala",
      description:
        "JM Masala supplies Indian fennel seeds (saunf) in Bold, Small and Singapore grades for bulk buyers and international importers. Request specifications, samples and export quotations.",
      primaryKeyword: "fennel seeds exporter india",
      secondaryKeywords: [
        "fennel seeds supplier india",
        "fennel seeds wholesale",
        "saunf exporter india",
        "indian fennel seeds",
        "fennel seeds bulk supplier",
        "fennel seeds gujarat",
        "fennel seeds manufacturer india",
        "Sortex green fennel seeds",
        "bold saunf exporter",
        "lakhnavi fennel seeds",
        "unjha fennel seeds exporter",
        "variyali exporter gujarat",
      ],
      h1: "Fennel Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports premium Indian fennel seeds (Saunf) from Unjha, Gujarat. Renowned for their sweet anise-like flavor, high anethole volatile oil, and vibrant green color, our lots are calibrated for food manufacturing, confectionary, and tea blending.",
      sourcingAndOrigin:
        "Procured from northern Gujarat mandi yards, where optimal arid climatic conditions produce dense, aroma-rich fennel crops during the spring harvest.",
      processingStandards:
        "Destoning, mechanical air classification to eliminate light seed stalks, and dual-channel Sortex optical grading to separate discolored brownish grains.",
      packagingOptions: [
        "25 kg and 50 kg woven polypropylene bags with inner poly-liners",
        "Carton boxes with inner moisture barrier for high-grade green fennel",
        "Custom private-label packaging for retail distribution",
      ],
      containerLoading: {
        fcl20: "12.0 to 13.5 Metric Tons loose stuffed",
        fcl40: "24.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Mouth fresheners (mukhwas) and confectionery coatings",
        "Herbal teas, botanical infusions, and beverage flavorings",
        "Culinary spice blends, bakery, and Italian sausage seasoning",
      ],
      faqs: [
        {
          question: "What grades of fennel seeds are available for export?",
          answer:
            "We provide Bold Green Fennel (premium visual appeal), Medium Green Fennel, and Machine Cleaned FAQ Grade (98%-99% purity).",
        },
        {
          question: "What is the typical moisture limit for export fennel?",
          answer:
            "Export lots are dried to a maximum moisture content of 8.0% to 9.0% to prevent mold formation during ocean voyages.",
        },
        {
          question: "What is the volatile oil content of Unjha fennel seeds?",
          answer:
            "Unjha fennel seeds typically test between 1.5% and 3.0% volatile oil, with trans-anethole as the dominant flavor component providing sweetness.",
        },
        {
          question: "Can JM Masala supply pesticide-tested fennel for Europe and the US?",
          answer:
            "Yes. We supply fennel lots tested for EU MRL pesticide residues and US FDA ASTA parameters, supported by NABL accredited lab certificates.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Unjha Fennel Seeds Origin Guide",
          path: "/unjha-fennel-seeds",
          intent: "Mandi Dynamics & Harvest Calendar",
        },
        {
          title: "Fennel Seeds Quality Grades Guide",
          path: "/blog/fennel-seeds-quality-grades-varieties-europe-usa-gulf",
          intent: "Commercial Grading & Market Standards",
        },
        {
          title: "Spice Processing & Optical Sorting",
          path: "/spice-processing-manufacturing",
          intent: "Sortex Cleaning Infrastructure",
        },
        {
          title: "Quality Certifications & Testing",
          path: "/quality-certifications",
          intent: "EU MRL & Food Safety Standards",
        },
      ],
      topicalSiblings: [
        "cumin-seeds-exporter-india",
        "coriander-seeds-exporter-india",
        "fenugreek-seeds-exporter-india",
        "ajwain-seeds-exporter-india",
      ],
    },
  },

  "fenugreek-seeds-exporter-india": {
    slug: "fenugreek-seeds-exporter-india",
    name: "Fenugreek Seeds",
    botanicalName: "Trigonella foenum-graecum",
    hsCode: "0910 99 12",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Fenugreek Seeds Exporter from India | Methi Seeds | JM Masala",
      description:
        "JM Masala supplies export-grade fenugreek (methi) seeds from India for bulk buyers, spice distributors and food manufacturers. Request specifications, samples and export quotations.",
      primaryKeyword: "fenugreek seeds exporter india",
      secondaryKeywords: [
        "fenugreek seeds supplier india",
        "methi seeds exporter",
        "methi seeds wholesale",
        "indian fenugreek seeds",
        "fenugreek seeds bulk supplier",
        "fenugreek seeds manufacturer india",
        "Sortex fenugreek seeds",
        "fenugreek seed exporter gujarat",
        "methi dana bulk supplier",
      ],
      h1: "Fenugreek Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports hard, angular golden-yellow fenugreek seeds (Methi Dana) from Gujarat and Rajasthan. Graded for high saponin, 4-hydroxyisoleucine, and mucilage content, ideal for spice blending, nutraceutical extraction, and pickle manufacturing.",
      sourcingAndOrigin:
        "Sourced from the Mehsana and Saurashtra agricultural zones of Gujarat and contiguous Rajasthan districts.",
      processingStandards:
        "Vibratory cleaning, gravity destoning to remove heavy dirt nodules, and optical color sorting up to 99.5% purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags with inner polyethylene liners",
        "Multi-wall kraft paper bags on request",
        "1000 kg FIBC jumbo bulk totes",
      ],
      containerLoading: {
        fcl20: "18.0 to 20.0 Metric Tons loose stuffed (high bulk density)",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Pickling, curry powder blends, and traditional culinary spices",
        "Nutraceutical supplements and dietary fiber functional foods",
        "Botanical galactagogue extracts and veterinary formulations",
      ],
      faqs: [
        {
          question: "Why does fenugreek load higher tonnage in containers?",
          answer:
            "Fenugreek seeds are hard, compact rhombic grains with high bulk density (~750–800 g/L), enabling container loads of up to 18–20 MT in a standard 20ft FCL.",
        },
        {
          question: "What is the purity standard for Sortex cleaned fenugreek?",
          answer:
            "Our Sortex optical-graded fenugreek seeds reach 99.0% to 99.5% purity, free from foreign matter, weed seeds, and damaged kernels.",
        },
        {
          question: "Can JM Masala supply ground fenugreek powder?",
          answer:
            "Yes. We cold-mill cleaned fenugreek seeds into 50-70 mesh powder for industrial food processing and nutraceutical encapsulation.",
        },
        {
          question: "What testing documents are provided with export shipments?",
          answer:
            "Each shipment includes NABL lab COA (moisture max 10%, purity, total ash), Phytosanitary Certificate, and Certificate of Origin.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Optical Sorting & Processing",
        },
        {
          title: "Export Operations",
          path: "/export-destinations",
          intent: "Shipping & Documentation",
        },
      ],
      topicalSiblings: [
        "fenugreek-powder-exporter-india",
        "cumin-seeds-exporter-india",
        "coriander-seeds-exporter-india",
        "fennel-seeds-exporter-india",
      ],
    },
  },

  "psyllium-husk-exporter-india": {
    slug: "psyllium-husk-exporter-india",
    name: "Psyllium Husk",
    botanicalName: "Plantago ovata",
    hsCode: "1211 90 32",
    origin: "Gujarat / Unjha",
    seo: {
      title: "Psyllium Husk Exporter India | Isabgol | JM Masala",
      description:
        "Export-grade Indian psyllium husk (Isabgol) from Unjha, Gujarat. 95%, 98%, & 99% purity, high swell volume (35-45 ml/g), food & pharma grades, FOB Mundra.",
      primaryKeyword: "psyllium husk exporter india",
      secondaryKeywords: [
        "psyllium husk supplier india",
        "isabgol exporter india",
        "isabgol husk supplier",
        "psyllium husk manufacturer india",
        "psyllium husk bulk supplier",
        "psyllium husk wholesale",
        "plantago ovata exporter india",
        "99% psyllium husk supplier",
        "pharma grade psyllium husk",
      ],
      h1: "Psyllium Husk Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "Unjha, Gujarat is the global processing epicenter for Psyllium Husk (Plantago ovata / Isabgol). JM Masala supplies food and pharmaceutical-grade psyllium husk with calibrated swell volumes (35–45 ml/g) and verified purity levels of 85%, 95%, 98%, and 99%.",
      sourcingAndOrigin:
        "Direct procurement of fresh crop Plantago ovata seeds from farmers and APMC Unjha market yards, followed by specialized mechanical de-husking.",
      processingStandards:
        "Mechanical pneumatic de-husking, multi-tier aspiration separation, metallic particle screening, and microbiology monitoring without synthetic chemicals.",
      packagingOptions: [
        "25 kg multi-wall paper bags with inner polyethylene heat-sealed liners",
        "25 kg / 50 kg PP bags with moisture-barrier inner poly-liners",
        "Fibre drums or retail pouches for private-label brands",
      ],
      containerLoading: {
        fcl20: "9.0 to 10.0 Metric Tons loose stuffed",
        fcl40: "19.0 to 20.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Pharmaceutical digestive laxatives and bowel regularity supplements",
        "Gluten-free baking as a natural binding and texturizing agent",
        "Breakfast cereals, functional dietary fiber beverages, and pet nutrition",
      ],
      faqs: [
        {
          question: "What purity grades of Psyllium Husk does JM Masala supply?",
          answer:
            "We supply 85%, 95%, 98%, and 99% purity grades, categorized by swell volume (typically 35–45 ml/g) and lightness of color.",
        },
        {
          question: "Can JM Masala supply Psyllium Husk Powder?",
          answer:
            "Yes. We supply micro-pulverized psyllium husk powder in 40 mesh, 60 mesh, and 100 mesh for beverage and capsule filling applications.",
        },
        {
          question: "How is microbiological safety maintained in psyllium export lots?",
          answer:
            "We conduct rigorous microbiological testing for Total Plate Count, Yeast & Mold, E. coli, and Salmonella, with steam sterilization options available upon request.",
        },
        {
          question: "What are the standard container stuffing quantities for Psyllium Husk?",
          answer:
            "Due to its light, airy bulk density, a 20ft container accommodates approximately 9 to 10 MT in 25kg bags, and a 40ft container carries 19 to 20 MT.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Psyllium Husk vs Seeds Guide",
          path: "/blog/psyllium-husk-vs-psyllium-seeds-explained",
          intent: "Product Comparison & Buyer Selection",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Pharma & Food Grade Compliance",
        },
      ],
      topicalSiblings: [
        "psyllium-seeds-exporter-india",
        "cumin-seeds-exporter-india",
        "sesame-seeds-exporter-india",
      ],
    },
  },

  "psyllium-seeds-exporter-india": {
    slug: "psyllium-seeds-exporter-india",
    name: "Psyllium Seeds",
    botanicalName: "Plantago ovata",
    hsCode: "1211 90 31",
    origin: "Gujarat / Unjha",
    seo: {
      title: "Psyllium Seeds Exporter India | Isabgol Seeds | JM Masala",
      description:
        "Indian psyllium seeds (Isabgol seeds) exporter from Unjha, Gujarat. Machine-cleaned, Sortex-graded 99% purity for milling, food, feed & fiber, FOB Mundra.",
      primaryKeyword: "psyllium seeds exporter india",
      secondaryKeywords: [
        "psyllium seeds supplier india",
        "isabgol seeds exporter",
        "plantago ovata seeds wholesale",
        "psyllium seeds bulk supplier",
        "psyllium seed manufacturer india",
        "isabgol seed supplier gujarat",
        "cleaned psyllium seeds",
      ],
      h1: "Psyllium Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies whole, cleaned Psyllium Seeds (Plantago ovata) directly from the agricultural heartland of Unjha, Gujarat. Exported to industrial de-huskers, animal feed formulators, and food processors requiring clean, unbroken seeds with high germination and fiber integrity.",
      sourcingAndOrigin:
        "Directly sourced during harvest arrivals (March–April) across northern Gujarat and Rajasthan mandis.",
      processingStandards:
        "Mechanical vibro-cleaning, de-dusting, and optical color sorting to reach 99.0% physical purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags with inner polyethylene liners",
        "Multi-wall kraft paper bags",
        "1000 kg FIBC jumbo bulk totes",
      ],
      containerLoading: {
        fcl20: "18.0 to 20.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Raw material for overseas psyllium husk milling facilities",
        "Equine and veterinary digestive supplements for sand colic prevention",
        "Dietary fiber and functional whole-grain food manufacturing",
      ],
      faqs: [
        {
          question: "How do Psyllium Seeds differ from Psyllium Husk?",
          answer:
            "Psyllium Seeds are whole, boat-shaped grains consisting of the fiber-rich outer husk, seed coat, and inner kernel, whereas Psyllium Husk is solely the mechanically detached epidermal layer.",
        },
        {
          question: "What is the typical container loading capacity for Psyllium Seeds?",
          answer:
            "Unlike husk, psyllium seeds are dense and load 18.0 to 20.0 Metric Tons in a 20ft FCL and up to 26–27 Metric Tons in a 40ft container.",
        },
        {
          question: "What purity standards do you supply for whole psyllium seeds?",
          answer:
            "We supply 98% machine cleaned and 99% Sortex optical cleaned whole psyllium seeds, free from extraneous stones and agricultural debris.",
        },
        {
          question: "Can psyllium seeds be used in equine and animal feed formulations?",
          answer:
            "Yes. Whole psyllium seeds are widely utilized in equine supplements to facilitate sand clearing from the digestive tract.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Psyllium Husk vs Seeds Explained",
          path: "/blog/psyllium-husk-vs-psyllium-seeds-explained",
          intent: "Comparative Ingredient Guide",
        },
        {
          title: "Unjha Sourcing Network",
          path: "/sourcing-network",
          intent: "Sourcing Infrastructure",
        },
      ],
      topicalSiblings: [
        "psyllium-husk-exporter-india",
        "sesame-seeds-exporter-india",
        "cumin-seeds-exporter-india",
      ],
    },
  },

  "sesame-seeds-exporter-india": {
    slug: "sesame-seeds-exporter-india",
    name: "Sesame Seeds",
    botanicalName: "Sesamum indicum",
    hsCode: "1207 40 90",
    origin: "Gujarat / India",
    seo: {
      title: "Sesame Seeds Exporter from India | Natural & Hulled | JM Masala",
      description:
        "JM Masala supplies natural and hulled sesame seeds from India for bulk buyers, importers, distributors and food manufacturers. Request specifications, samples and export quotations.",
      primaryKeyword: "sesame seeds exporter india",
      secondaryKeywords: [
        "sesame seeds supplier india",
        "hulled sesame seeds exporter",
        "natural white sesame seeds india",
        "black sesame seeds exporter",
        "sesame seeds wholesale supplier",
        "sesame seeds bulk exporter gujarat",
        "sesame seeds manufacturer india",
        "Sortex sesame seeds 99.98",
        "tahini sesame supplier",
      ],
      h1: "Sesame Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports premium Indian Sesame Seeds (Sesamum indicum) sourced from Gujarat's Saurashtra belt. We provide Natural White Sesame, Mechanically Hulled Sesame (up to 99.98% Sortex purity), Jet Black Sesame, and Brown Sesame for confectionery, tahini, and bakery applications.",
      sourcingAndOrigin:
        "Procured directly from Saurashtra and northern Gujarat mandis, India's foremost white sesame producing regions.",
      processingStandards:
        "Multi-stage dry mechanical hulling, aqua wash separation, hot air drying, and dual optical Sortex grading achieving 99.95% to 99.98% purity.",
      packagingOptions: [
        "25 kg and 50 kg multi-wall paper bags with inner heat-sealed liners",
        "25 kg / 50 kg food-grade PP bags",
        "1000 kg FIBC bulk jumbo bags",
      ],
      containerLoading: {
        fcl20: "19.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Bakery toppings for burger buns, bagels, and bread crusts",
        "Tahini paste and halva confectionary processing",
        "Edible cold pressed sesame oil pressing and salad dressings",
      ],
      faqs: [
        {
          question: "What is the difference between Natural and Hulled sesame seeds?",
          answer:
            "Natural sesame retains its outer edible husk (bran) with higher calcium content, while Hulled sesame has the husk mechanically removed, yielding a pearly white seed preferred for bakery toppings.",
        },
        {
          question: "What is the oil content of Indian sesame seeds?",
          answer:
            "Natural white sesame from Gujarat typically tests with an oil content between 48% and 52%, providing high extraction yields for culinary oils.",
        },
        {
          question: "What purity grades do you offer for Hulled Sesame Seeds?",
          answer:
            "We supply Hulled Sesame in 99.95% and 99.98% Sortex optical purity grades, virtually free from dark seeds and foreign contaminants.",
        },
        {
          question: "Do you supply Black Sesame Seeds for export?",
          answer:
            "Yes. We export natural black sesame seeds (Sortex cleaned, 99% to 99.5% purity) used extensively in Asian cuisine, sushi, and nutraceutical products.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Cold Pressed Oils Overview",
          path: "/cold-pressed-oils",
          intent: "Edible Oil Processing",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Testing & Compliance",
        },
      ],
      topicalSiblings: [
        "mustard-seeds-exporter-india",
        "psyllium-husk-exporter-india",
        "cumin-seeds-exporter-india",
      ],
    },
  },

  "ajwain-seeds-exporter-india": {
    slug: "ajwain-seeds-exporter-india",
    name: "Ajwain Seeds (Carom)",
    botanicalName: "Trachyspermum ammi",
    hsCode: "0910 99 14",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Ajwain Seeds Exporter India | Carom Seeds | JM Masala",
      description:
        "Export-grade Indian ajwain seeds (carom seeds) from Gujarat. High thymol volatile oil (2.5%-4%), Sortex optical cleaned, 99% purity, FOB Mundra.",
      primaryKeyword: "ajwain seeds exporter india",
      secondaryKeywords: [
        "ajwain seeds supplier india",
        "carom seeds exporter",
        "carom seeds wholesale",
        "indian ajwain exporter",
        "ajwain seeds bulk supplier",
        "ajwain seeds manufacturer india",
        "Sortex carom seeds",
        "bishops weed exporter india",
        "carom seeds bulk supply",
      ],
      h1: "Ajwain Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies export-grade Ajwain Seeds (Bishop's Weed / Carom Seeds) with intense thymol pungency and natural essential oil retention. Carefully cleaned to eliminate dust and immature grains.",
      sourcingAndOrigin:
        "Sourced from the major seed spice belts of Gujarat and Rajasthan.",
      processingStandards:
        "Fine screen cleaning, air aspiration, and Sortex grading delivering minimum 98% to 99% purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags with inner poly-liners",
        "Multi-wall kraft paper sacks for overseas distributors",
        "Private label retail packs (100g to 500g pouches)",
      ],
      containerLoading: {
        fcl20: "12.0 to 13.0 Metric Tons loose stuffed",
        fcl40: "24.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Bakery, biscuits, crackers, and traditional savory snack seasonings",
        "Herbal digestive formulations and pharmaceutical thymol extraction",
        "Spice blends, pickles, and dry rubs",
      ],
      faqs: [
        {
          question: "What gives Indian ajwain its pungent aroma?",
          answer:
            "Ajwain seeds contain 2.5% to 4.0% volatile essential oil predominantly composed of thymol, which gives it its strong medicinal aroma and digestive properties.",
        },
        {
          question: "What purity grades of ajwain seeds are available?",
          answer:
            "We supply 98% Machine Cleaned FAQ grade and 99% Sortex optical cleaned ajwain seeds with low admixture and zero foreign gravel.",
        },
        {
          question: "What is the standard container capacity for ajwain seeds?",
          answer:
            "A standard 20ft container accommodates 12.0 to 13.0 Metric Tons of ajwain seeds, while a 40ft container carries 24.0 to 26.0 Metric Tons.",
        },
        {
          question: "Can JM Masala provide pesticide residue testing for ajwain?",
          answer:
            "Yes. Shipments can be accompanied by accredited NABL lab test reports verifying pesticide MRLs, heavy metals, and microbiological criteria.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Cleaning & Optical Sorting",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Lab Testing & Standards",
        },
      ],
      topicalSiblings: [
        "mustard-seeds-exporter-india",
        "cumin-seeds-exporter-india",
        "fennel-seeds-exporter-india",
        "fenugreek-seeds-exporter-india",
      ],
    },
  },

  "mustard-seeds-exporter-india": {
    slug: "mustard-seeds-exporter-india",
    name: "Mustard Seeds (Rai)",
    botanicalName: "Brassica nigra / Brassica juncea",
    hsCode: "1207 50 90",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Mustard Seeds Exporter from India | Rai & Sarson | JM Masala",
      description:
        "JM Masala supplies Indian mustard seeds for bulk buyers, importers, distributors and food manufacturers. Request specifications, samples and export quotations.",
      primaryKeyword: "mustard seeds exporter india",
      secondaryKeywords: [
        "mustard seeds exporter india",
        "mustard seeds supplier india",
        "mustard seeds wholesale supplier",
        "indian mustard seeds",
        "bulk mustard seeds supplier",
        "mustard seeds from india",
        "mustard seeds export",
        "mustard seed supplier",
        "mustard seeds gujarat",
        "mustard seeds manufacturer india",
        "mustard seed exporter india",
        "indian mustard seed supplier",
        "rai seeds",
        "sarson seeds",
        "mustard rai",
      ],
      h1: "Mustard Seeds Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports small black/brown mustard seeds (Brassica juncea) and bold yellow mustard seeds from western India. Sourced for sharp allyl isothiocyanate pungency and high oil yields.",
      sourcingAndOrigin:
        "Procured from key agricultural yards in northern Gujarat and Rajasthan.",
      processingStandards:
        "Vibratory sieve cleaning, destoning, and gravity grading reaching 99% purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags with inner liners",
        "Jute bags for natural ventilation",
        "1000 kg FIBC jumbo bulk totes",
      ],
      containerLoading: {
        fcl20: "18.0 to 20.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Mustard condiment and paste manufacturing",
        "Pickling, seasoning blends, and whole spice tempering",
        "Cold pressed edible mustard oil extraction",
      ],
      faqs: [
        {
          question: "Which types of mustard seeds does JM Masala supply?",
          answer:
            "We supply Small Brown/Black Mustard (high pungency Rai) and Bold Yellow Mustard seeds.",
        },
        {
          question: "What is the oil content of Indian mustard seeds?",
          answer:
            "Indian brown and black mustard seeds typically test with 38% to 42% natural oil content, yielding pungent culinary oils.",
        },
        {
          question: "What container quantity is typical for mustard seeds?",
          answer:
            "Due to high grain density, a standard 20ft container carries 18.0 to 20.0 MT, while a 40ft container holds 26.0 to 27.0 MT.",
        },
        {
          question: "Can JM Masala supply Sortex-graded yellow mustard?",
          answer:
            "Yes. We supply 99% and 99.5% Sortex optical cleaned bold yellow mustard seeds with uniform coloration for condiment processing.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Cold Pressed Oils Overview",
          path: "/cold-pressed-oils",
          intent: "Edible Oil Processing",
        },
        {
          title: "Export Operations",
          path: "/export-destinations",
          intent: "Container Freight Logistics",
        },
      ],
      topicalSiblings: [
        "ajwain-seeds-exporter-india",
        "sesame-seeds-exporter-india",
        "cumin-seeds-exporter-india",
      ],
    },
  },

  "turmeric-exporter-india": {
    slug: "turmeric-exporter-india",
    name: "Turmeric Whole & Fingers",
    botanicalName: "Curcuma longa",
    hsCode: "0910 30 20",
    origin: "India (Nizamabad / Salem / Sangli)",
    seo: {
      title: "Turmeric Exporter from India | Haldi, Fingers & Powder | JM Masala",
      description:
        "JM Masala supplies Indian turmeric and haldi for bulk buyers, importers and food manufacturers. Turmeric fingers and powder available with specifications, samples and export quotations.",
      primaryKeyword: "turmeric exporter india",
      secondaryKeywords: [
        "turmeric exporter from india",
        "turmeric supplier india",
        "turmeric fingers exporter india",
        "turmeric powder exporter india",
        "indian turmeric exporter",
        "high curcumin turmeric exporter",
        "turmeric wholesale supplier",
        "turmeric bulk supplier india",
        "haldi exporter india",
        "haldi supplier india",
        "turmeric from telangana",
        "polished turmeric fingers",
      ],
      h1: "Turmeric Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies whole polished and unpolished Turmeric Fingers (Curcuma longa) sourced from India's primary turmeric growing belts. Tested for verified curcumin percentages (2.5% to 5.0%+), low moisture, and zero artificial coloring agents.",
      sourcingAndOrigin:
        "Sourced through established farmer and mandi networks across Nizamabad, Salem, Sangli, and Erode.",
      processingStandards:
        "Dry destoning, mechanical polishing (single or double polished), metallic separation, and laboratory screening for lead chromate absence.",
      packagingOptions: [
        "25 kg and 50 kg jute bags or woven PP bags with moisture-protective liners",
        "Multi-wall paper bags for international processors",
        "Custom bulk totes on request",
      ],
      containerLoading: {
        fcl20: "16.0 to 18.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Industrial grinding into pure turmeric powder and curry blends",
        "Curcumin extraction for nutraceuticals and dietary supplements",
        "Natural yellow food coloring and cosmetic formulations",
      ],
      faqs: [
        {
          question: "How is curcumin percentage certified in export lots?",
          answer:
            "Curcumin content is quantified via HPLC testing at accredited laboratories. We supply lots categorized into standard (2.0%-3.0%) and high curcumin (3.5%-5.0%+) bands.",
        },
        {
          question: "Are your turmeric fingers free from artificial colorings?",
          answer:
            "Yes. We strictly test and certify zero lead chromate or synthetic Sudan dyes in all export shipments.",
        },
        {
          question: "What is the difference between single and double polished turmeric fingers?",
          answer:
            "Single polished fingers retain a slightly matte skin with natural oils, while double polished fingers undergo secondary mechanical buffing for a smooth, bright yellow exterior.",
        },
        {
          question: "Can JM Masala supply whole turmeric bulbs (Gatta)?",
          answer:
            "Yes. We supply both turmeric fingers and round turmeric bulbs (Gatta), which are favored by industrial spice millers for high-yield grinding.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Turmeric Sourcing Network",
          path: "/sourcing-network",
          intent: "Regional Procurement Belts",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Curcumin Testing & HPLC",
        },
      ],
      topicalSiblings: [
        "turmeric-powder-exporter-india",
        "dry-ginger-exporter-india",
        "red-chilli-exporter-india",
        "black-pepper-exporter-india",
      ],
    },
  },

  "dry-ginger-exporter-india": {
    slug: "dry-ginger-exporter-india",
    name: "Dry Ginger (Sonth)",
    botanicalName: "Zingiber officinale",
    hsCode: "0910 11 10",
    origin: "India (Kerala / Gujarat)",
    seo: {
      title: "Dry Ginger Exporter India | Dried Sonth | JM Masala",
      description:
        "Export-grade Indian dry ginger (Sonth) exporter. Whole bleached & unbleached dry ginger splits & nuggets, high gingerol pungency, low moisture, FOB Mundra.",
      primaryKeyword: "dry ginger exporter india",
      secondaryKeywords: [
        "dry ginger supplier india",
        "dried ginger exporter",
        "sonth exporter india",
        "indian dry ginger wholesale",
        "dry ginger bulk supplier",
        "dry ginger manufacturer india",
        "bleached dry ginger supplier",
        "unbleached dried ginger",
        "Cochin dry ginger exporter",
      ],
      h1: "Dry Ginger Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies whole bleached and unbleached Dry Ginger (Sonth) splits and nuggets. Sourced for sharp gingerol pungency, high essential oil content, and clean visual appearance.",
      sourcingAndOrigin:
        "Sourced from the prime ginger growing belts of southern India (Cochin/Wayanad) and northern Gujarat.",
      processingStandards:
        "Hand selected, washed, sun dried, destoned, and graded for low extraneous matter.",
      packagingOptions: [
        "25 kg and 50 kg jute bags or multi-wall paper bags with inner liners",
        "Corrugated carton packaging for high-grade whole splits",
      ],
      containerLoading: {
        fcl20: "12.0 to 14.0 Metric Tons loose stuffed",
        fcl40: "24.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Cold milling for fine ground ginger powder and spice blends",
        "Bakery, gingerbread, confectionery, and chai tea formulations",
        "Nutraceutical gingerol extracts and herbal digestives",
      ],
      faqs: [
        {
          question: "What is the difference between bleached and unbleached dry ginger?",
          answer:
            "Bleached ginger is treated with a light calcium lime coating to protect against storage insects and enhance visual lightness, whereas unbleached ginger is entirely natural and untreated.",
        },
        {
          question: "What is the typical moisture content of export dry ginger?",
          answer:
            "Export quality dry ginger is dried to a maximum moisture content of 10% to 12% to guarantee shelf stability during ocean transit.",
        },
        {
          question: "Do you supply Cochin grade dry ginger?",
          answer:
            "Yes. Cochin grade dry ginger is renowned worldwide for its lemon-like nuance and rich essential oil content (1.5% to 2.5%).",
        },
        {
          question: "Can JM Masala supply fine ground ginger powder?",
          answer:
            "Yes. We cold-mill dry ginger into 60-80 mesh pure ginger powder (Sonth powder) free from synthetic carriers or fillers.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Milling & Grading",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Laboratory Analysis",
        },
      ],
      topicalSiblings: [
        "ginger-powder-exporter-india",
        "turmeric-exporter-india",
        "black-pepper-exporter-india",
        "cardamom-exporter-india",
      ],
    },
  },

  "red-chilli-exporter-india": {
    slug: "red-chilli-exporter-india",
    name: "Indian Red Chilli Whole & Stemless",
    botanicalName: "Capsicum annuum / Capsicum frutescens / Capsicum chinense",
    hsCode: "0904 21 10",
    origin: "India (Guntur / Warangal / Assam / Kerala)",
    seo: {
      title: "Red Chilli Exporter from India | Teja, Bird's Eye & King Chilli | JM Masala",
      description:
        "JM Masala supplies Indian red chillies for international importers, spice distributors, food manufacturers and bulk buyers. Request specifications, samples and export quotations.",
      primaryKeyword: "red chilli exporter india",
      secondaryKeywords: [
        "red chilli exporter india",
        "red chilli supplier india",
        "red chilli exporter from india",
        "indian red chilli supplier",
        "indian chilli exporter",
        "dry red chilli exporter",
        "dry red chilli supplier",
        "bulk red chilli supplier",
        "red chilli wholesale supplier",
        "teja chilli exporter india",
        "teja chilli supplier",
        "teja dry red chilli",
        "bird eye chilli exporter india",
        "bird eye chilli supplier",
        "king chilli exporter india",
        "king chilli supplier india",
        "stemless red chilli bulk",
        "guntur chilli exporter",
      ],
      h1: "Red Chilli Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies Indian red chillies for international importers, spice distributors, food manufacturers and bulk buyers. Our chilli range includes Teja Chilli, Bird's Eye Chilli and King Chilli, supplied according to buyer requirements for chilli type, colour, heat level, moisture, processing, cleaning, packing and destination-specific specifications.",
      sourcingAndOrigin:
        "Sourced from the premier chilli mandis of Guntur (Andhra Pradesh), Warangal (Telangana), Kerala hill tracts, and Northeast India.",
      processingStandards:
        "Manual sorting, mechanical destemming, dust extraction, rare-earth metal detection, and aflatoxin/Sudan dye screening.",
      packagingOptions: [
        "10 kg, 20 kg, and 25 kg new PP bags with PE liner",
        "5-ply corrugated export cartons for stemless and King chillies",
        "Hydraulic pressed bulk bales (up to 50 kg) for optimized container stuffing",
      ],
      containerLoading: {
        fcl20: "6.5 to 7.5 Metric Tons loose stuffed (~11.0 MT pressed bales)",
        fcl40: "14.0 to 16.0 Metric Tons loose stuffed (~22.0 to 24.0 MT pressed bales)",
      },
      buyerApplications: [
        "Industrial chilli grinding, paprika oleoresin, and capsaicin extraction",
        "Hot sauces, salsas, marinades, and commercial seasonings",
        "Repacking for international ethnic and mainstream retail channels",
      ],
      faqs: [
        {
          question: "What types of red chillies does JM Masala export from India?",
          answer:
            "JM Masala exports three principal Indian red chilli varieties: commercial high-heat Teja Chilli (S17, 50,000–85,000 SHU), fiery small Bird's Eye Chilli (Kanthari, 100,000–225,000 SHU), and the world-renowned super-hot King Chilli (Bhut Jolokia, 800,000–1,041,000+ SHU).",
        },
        {
          question: "How does JM Masala ensure low aflatoxin and pesticide compliance?",
          answer:
            "Every export consignment is tested at accredited laboratories for Aflatoxin B1/total aflatoxins and Ochratoxin A, fully complying with EU and destination market regulations.",
        },
        {
          question: "Do you supply stemless red chillies?",
          answer:
            "Yes. We supply both with-stem and 100% mechanically or hand-destemmed chillies according to buyer preference.",
        },
        {
          question: "What packing formats optimize shipping costs for whole chillies?",
          answer:
            "Whole dried chillies have low bulk density. We provide hydraulically pressed bales that almost double container stuffing tonnage to 11 MT in 20ft FCL and 22-24 MT in 40ft HC.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Teja Chilli Exporter from India",
          path: "/teja-chilli-exporter-india",
          intent: "S17 High-Heat Export",
        },
        {
          title: "Bird's Eye Chilli Exporter from India",
          path: "/bird-eye-chilli-exporter-india",
          intent: "Kanthari Heat Profile",
        },
        {
          title: "King Chilli Exporter from India",
          path: "/king-chilli-exporter-india",
          intent: "Super-Hot Ghost Pepper",
        },
      ],
      topicalSiblings: [
        "teja-chilli-exporter-india",
        "bird-eye-chilli-exporter-india",
        "king-chilli-exporter-india",
        "turmeric-exporter-india",
        "black-pepper-exporter-india",
      ],
    },
  },

  "teja-chilli-exporter-india": {
    slug: "teja-chilli-exporter-india",
    name: "Indian Teja Chilli (S17)",
    botanicalName: "Capsicum annuum var. acuminatum",
    hsCode: "0904 21 10",
    origin: "Guntur / Prakasam (Andhra Pradesh), Warangal (Telangana)",
    seo: {
      title: "Teja Chilli Exporter from India | S17 Red Chilli | JM Masala",
      description:
        "JM Masala supplies Indian Teja red chilli (S17) for bulk export. High heat 50,000–85,000 SHU, 50–70 ASTA color, whole & stemless. Request lab specs & quote.",
      primaryKeyword: "teja chilli exporter india",
      secondaryKeywords: [
        "teja chilli supplier",
        "teja dry red chilli",
        "teja chilli wholesale",
        "indian teja chilli",
        "teja chilli bulk supplier",
        "guntur teja chilli exporter",
        "s17 chilli supplier india",
      ],
      h1: "Teja Chilli Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies authentic Indian Teja Chilli (S17) from Andhra Pradesh and Telangana for bulk buyers, spice grinders, oleoresin extractors, and food manufacturers.",
      sourcingAndOrigin:
        "Procured directly from agricultural produce market committees (APMC) in Guntur and Warangal.",
      processingStandards:
        "Mechanical destemming, air aspiration, magnetic separation, and NABL laboratory testing.",
      packagingOptions: [
        "10 kg, 20 kg, and 25 kg new PP woven bags",
        "Corrugated export cartons for stemless chilli",
        "Hydraulic pressed bulk bales up to 50 kg",
      ],
      containerLoading: {
        fcl20: "6.5 to 7.5 MT loose / ~11 MT bales",
        fcl40: "14.0 to 16.0 MT loose / ~22 to 24 MT bales",
      },
      buyerApplications: [
        "Industrial grinding, hot sauces, and oleoresin capsaicin extraction",
        "Spicy seasoning rubs, meat processing, and curry powder blending",
      ],
      faqs: [
        {
          question: "What is the Scoville rating of Teja Chilli?",
          answer: "Teja S17 tests consistently between 50,000 and 85,000+ SHU via HPLC.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Red Chilli Exporter from India",
          path: "/red-chilli-exporter-india",
          intent: "Master Red Chilli Overview",
        },
      ],
      topicalSiblings: [
        "red-chilli-exporter-india",
        "bird-eye-chilli-exporter-india",
        "king-chilli-exporter-india",
      ],
    },
  },

  "bird-eye-chilli-exporter-india": {
    slug: "bird-eye-chilli-exporter-india",
    name: "Indian Bird's Eye Chilli (Kanthari)",
    botanicalName: "Capsicum frutescens",
    hsCode: "0904 21 10",
    origin: "Kerala & Northeast India",
    seo: {
      title: "Bird's Eye Chilli Exporter from India | Kanthari Chilli | JM Masala",
      description:
        "JM Masala supplies authentic Indian Bird's Eye chilli (Kanthari) for bulk international buyers. Intense heat 100,000–225,000 SHU, small conical dried pods.",
      primaryKeyword: "bird eye chilli exporter india",
      secondaryKeywords: [
        "bird eye chilli exporter india",
        "bird's eye chilli supplier",
        "kanthari chilli export",
        "indian bird eye chilli",
        "capsicum frutescens supplier",
      ],
      h1: "Bird's Eye Chilli Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies authentic Indian Bird's Eye Chilli (Kanthari) with 100,000 to 225,000+ SHU for international bulk buyers and extractors.",
      sourcingAndOrigin:
        "Sourced from Kerala Western Ghats and Northeast organic hill tracts.",
      processingStandards:
        "Sun-drying, manual grading, air aspiration, and certified chemical testing.",
      packagingOptions: [
        "10 kg and 20 kg corrugated export cartons with poly liner",
      ],
      containerLoading: {
        fcl20: "5.0 to 6.5 Metric Tons",
        fcl40: "12.0 to 14.0 Metric Tons",
      },
      buyerApplications: [
        "Gourmet hot sauces, Asian sambals, curries, and botanical extracts",
      ],
      faqs: [
        {
          question: "How hot is Indian Bird's Eye chilli?",
          answer: "It delivers intense thermal heat testing from 100,000 to 225,000+ SHU.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Red Chilli Exporter from India",
          path: "/red-chilli-exporter-india",
          intent: "Master Red Chilli Overview",
        },
      ],
      topicalSiblings: [
        "red-chilli-exporter-india",
        "teja-chilli-exporter-india",
        "king-chilli-exporter-india",
      ],
    },
  },

  "king-chilli-exporter-india": {
    slug: "king-chilli-exporter-india",
    name: "Indian King Chilli (Bhut Jolokia)",
    botanicalName: "Capsicum chinense",
    hsCode: "0904 21 10",
    origin: "Assam & Nagaland, Northeast India",
    seo: {
      title: "King Chilli Exporter from India | Bhut Jolokia Ghost Pepper | JM Masala",
      description:
        "JM Masala supplies genuine Indian King Chilli (Bhut Jolokia / Naga Chilli) for bulk export. Super-hot 800,000–1,041,000+ SHU, solar dried whole pods & flakes.",
      primaryKeyword: "king chilli exporter india",
      secondaryKeywords: [
        "king chilli exporter india",
        "bhut jolokia supplier india",
        "ghost pepper bulk export",
        "naga chilli exporter",
        "indian king chilli wholesale",
      ],
      h1: "King Chilli Exporter from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala supplies genuine Indian King Chilli (Bhut Jolokia / Ghost Pepper) testing 800,000 to 1,041,000+ SHU from Northeast India.",
      sourcingAndOrigin:
        "Contracted grower networks in Assam and Nagaland with GI tag authentication.",
      processingStandards:
        "Solar tunnel drying and controlled-temperature dehydration below 50°C.",
      packagingOptions: [
        "5 kg and 10 kg 5-ply cartons with nitrogen flush or barrier liners",
      ],
      containerLoading: {
        fcl20: "4.0 to 5.5 Metric Tons",
        fcl40: "9.0 to 12.0 Metric Tons",
      },
      buyerApplications: [
        "Specialty extreme hot sauces, defense capsaicin, and pharmaceutical extracts",
      ],
      faqs: [
        {
          question: "What is the SHU of King Chilli?",
          answer: "King Chilli tests between 800,000 and 1,041,000+ Scoville Heat Units.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Red Chilli Exporter from India",
          path: "/red-chilli-exporter-india",
          intent: "Master Red Chilli Overview",
        },
      ],
      topicalSiblings: [
        "red-chilli-exporter-india",
        "teja-chilli-exporter-india",
        "bird-eye-chilli-exporter-india",
      ],
    },
  },

  "black-pepper-exporter-india": {
    slug: "black-pepper-exporter-india",
    name: "Black Pepper",
    botanicalName: "Piper nigrum",
    hsCode: "0904 11 30",
    origin: "Malabar Coast, India",
    seo: {
      title: "Black Pepper Exporter India | MG1 FAQ Grade | JM Masala",
      description:
        "Export-grade Indian black pepper from Malabar Coast. Malabar Garbled 1 (MG1), FAQ grades, high piperine (5%-7%), density 500-570 g/L, FOB Mundra/Cochin.",
      primaryKeyword: "black pepper exporter india",
      secondaryKeywords: [
        "black pepper supplier india",
        "malabar black pepper exporter",
        "mg1 black pepper india",
        "tellicherry black pepper supplier",
        "black pepper bulk wholesale",
        "indian black pepper manufacturer",
        "black pepper corns exporter",
        "high piperine black pepper",
      ],
      h1: "Black Pepper Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports world-renowned Indian Black Pepper (Piper nigrum) from the Malabar Coast. Known for its intense aroma, bold berry size, and high natural piperine content, our lots cater to industrial seasonings, meat curing, and oleoresin extractors.",
      sourcingAndOrigin:
        "Sourced from the Western Ghats mountain forests of Kerala and Karnataka (Malabar / Coorg).",
      processingStandards:
        "Mechanical garbling, destoning, spiral separation of pinheads, air classification, and optical sorting.",
      packagingOptions: [
        "25 kg and 50 kg woven PP bags with inner poly-liners",
        "Multi-wall kraft paper sacks",
        "Custom private-label packaging for retail distribution",
      ],
      containerLoading: {
        fcl20: "15.0 to 16.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Whole spice retail packaging and tabletop peppercorn grinders",
        "Meat curing, sausage seasoning, sauces, and culinary marinades",
        "Piperine and black pepper oleoresin extraction for nutraceuticals",
      ],
      faqs: [
        {
          question: "What grades of Indian black pepper does JM Masala supply?",
          answer:
            "We supply Malabar Garbled 1 (MG1), Tellicherry Garbled Extra Bold (TGEB), Tellicherry Garbled Special Extra Bold (TGSEB), and FAQ 500-550 G/L grades.",
        },
        {
          question: "What is the bulk density and piperine content of Malabar pepper?",
          answer:
            "Our export grades feature bulk densities from 500 g/L to 570 g/L with verified piperine concentrations ranging between 5.0% and 7.5%.",
        },
        {
          question: "Can JM Masala supply steam-sterilized black pepper corns?",
          answer:
            "Yes. We offer steam-sterilized and pathogen-free lots with certified low microbiological counts (Salmonella negative, E. coli negative).",
        },
        {
          question: "What are the standard packaging and container stuffing specs?",
          answer:
            "Packed in 25kg/50kg multi-wall paper or PP bags. A 20ft container accommodates 15 to 16 MT, and a 40ft container carries 26 to 27 MT.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Piperine Testing & Standards",
        },
        {
          title: "Export Destinations",
          path: "/export-destinations",
          intent: "Global Shipping Routes",
        },
      ],
      topicalSiblings: [
        "cardamom-exporter-india",
        "dry-ginger-exporter-india",
        "red-chilli-exporter-india",
        "turmeric-exporter-india",
      ],
    },
  },

  "cardamom-exporter-india": {
    slug: "cardamom-exporter-india",
    name: "Green Cardamom (Elaichi)",
    botanicalName: "Elettaria cardamomum",
    hsCode: "0908 31 10",
    origin: "India (Kerala / Idukki)",
    seo: {
      title: "Cardamom Exporter India | Green Elaichi | JM Masala",
      description:
        "Export-grade Indian green cardamom (Elaichi) from Idukki, Kerala. Size-graded bold pods (7mm, 8mm, 8mm+), high cineole oil, vacuum packed, FOB Mundra.",
      primaryKeyword: "cardamom exporter india",
      secondaryKeywords: [
        "green cardamom supplier india",
        "elaichi exporter india",
        "indian green cardamom wholesale",
        "8mm cardamom pods exporter",
        "cardamom bulk supplier",
        "green cardamom manufacturer india",
        "bold green cardamom exporter",
        "alappuzha green cardamom",
      ],
      h1: "Green Cardamom Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports premium Indian Green Cardamom (Elettaria cardamomum)—the 'Queen of Spices'—sourced from the lush hills of Idukki, Kerala. Graded by millimeter diameter (6mm to 8mm+), our pods offer intense aroma and high essential oil content.",
      sourcingAndOrigin:
        "Procured from primary spice auctions and smallholder cooperatives across the Cardamom Hills in Kerala.",
      processingStandards:
        "Gentle biomass flue-curing, mechanical destemming, precision cylindrical sieve sizing, and manual sorting for deep green color retention.",
      packagingOptions: [
        "5 kg and 10 kg vacuum-sealed aluminium foil poly-packs in master cartons",
        "25 kg master corrugated boxes with desiccants",
        "Luxury retail packs for institutional and gifting buyers",
      ],
      containerLoading: {
        fcl20: "9.0 to 10.0 Metric Tons loose carton stuffed",
        fcl40: "18.0 to 20.0 Metric Tons loose carton stuffed",
      },
      buyerApplications: [
        "Gourmet culinary seasoning, chai tea, Arabic Gahwa coffee brewing",
        "Confectionery, chocolates, premium baked goods, and Indian sweets",
        "Essential oil distillation and luxury fragrance formulations",
      ],
      faqs: [
        {
          question: "What size grades of green cardamom does JM Masala export?",
          answer:
            "We supply 6-7mm Medium Green, 7-8mm Bold Green, and 8mm+ Super Bold Extra Green cardamom pods.",
        },
        {
          question: "How is the green color preserved during international transit?",
          answer:
            "Cardamom is packaged in multi-barrier vacuum-sealed foil pouches that shield pods from light, oxygen, and humidity, preserving fresh green color for over 18 months.",
        },
        {
          question: "What is the essential oil content of Indian cardamom?",
          answer:
            "Indian cardamom from the Western Ghats typically tests between 6.0% and 9.0% volatile oil, with high 1,8-cineole and alpha-terpinyl acetate.",
        },
        {
          question: "What documentation is provided with cardamom exports?",
          answer:
            "Consignments include Phytosanitary Certificate, Certificate of Origin, NABL lab test report verifying size, moisture, and volatile oil, and Spices Board compliance.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Packaging Solutions",
          path: "/spice-packaging",
          intent: "Vacuum Foil Technology",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Export Grade Compliance",
        },
      ],
      topicalSiblings: [
        "black-pepper-exporter-india",
        "dry-ginger-exporter-india",
        "fennel-seeds-exporter-india",
      ],
    },
  },

  "nigella-seeds-exporter-india": {
    slug: "nigella-seeds-exporter-india",
    name: "Nigella Seeds (Kalonji)",
    botanicalName: "Nigella sativa",
    hsCode: "0909 62 90",
    origin: "India (Gujarat / Madhya Pradesh)",
    seo: {
      title: "Nigella Seeds Exporter India | Kalonji | JM Masala",
      description:
        "Export-grade Indian nigella seeds (Kalonji / Black Cumin) exporter. Jet-black, 99.5% Sortex optical purity, high thymoquinone, lab tested, FOB Mundra.",
      primaryKeyword: "nigella seeds exporter india",
      secondaryKeywords: [
        "kalonji exporter india",
        "black cumin seeds supplier",
        "nigella sativa bulk exporter",
        "kalonji seeds wholesale",
        "Sortex nigella seeds",
        "black seed oil supplier india",
        "indian kalonji manufacturer",
        "99.5 nigella seeds exporter",
      ],
      h1: "Nigella Seeds Exporter & Bulk Supplier from India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala exports premium Indian nigella seeds (Nigella sativa / Kalonji / Black Cumin). Graded for deep jet-black coloration, triangular seed integrity, and high thymoquinone active compound content.",
      sourcingAndOrigin:
        "Sourced from the fertile agricultural belts of western and central India.",
      processingStandards:
        "Vibratory deck cleaning, destoning, and dual optical Sortex sorting achieving 99.5% purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags with inner poly-liners",
        "Multi-wall kraft paper bags for overseas buyers",
        "1000 kg jumbo bulk totes",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Artisanal breads, naan, bagels, and savory bakery toppings",
        "Pickles, chutney seasoning, and panch phoron spice blends",
        "Cold pressed black seed oil (thymoquinone) extraction for nutraceuticals",
      ],
      faqs: [
        {
          question: "What is the purity level of JM Masala's nigella seeds?",
          answer:
            "Our Sortex optical cleaned Nigella Seeds achieve a verified purity of 99.5%, with uniform jet-black color and minimal foreign matter.",
        },
        {
          question: "Can nigella seeds be used for cold pressed black seed oil?",
          answer:
            "Yes. Our whole kalonji seeds contain 30% to 35% natural oil with elevated thymoquinone levels, making them ideal for cold-press oil extraction.",
        },
        {
          question: "What container loading is standard for nigella seeds?",
          answer:
            "A standard 20ft container holds 14.0 to 15.0 Metric Tons, while a 40ft container accommodates 25.0 to 26.0 Metric Tons.",
        },
        {
          question: "What certificates accompany kalonji export shipments?",
          answer:
            "We provide Phytosanitary Certificate, Certificate of Origin, and NABL accredited laboratory test reports for purity, moisture, and micro parameters.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Cold Pressed Oils Overview",
          path: "/cold-pressed-oils",
          intent: "Black Seed Oil Extraction",
        },
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Optical Sorting Capabilities",
        },
      ],
      topicalSiblings: [
        "sesame-seeds-exporter-india",
        "cumin-seeds-exporter-india",
        "fenugreek-seeds-exporter-india",
        "ajwain-seeds-exporter-india",
      ],
    },
  },

  "cumin-powder-exporter-india": {
    slug: "cumin-powder-exporter-india",
    name: "Pure Cumin Powder (Ground Jeera)",
    botanicalName: "Cuminum cyminum",
    hsCode: "0909 32 00",
    origin: "Unjha, Gujarat",
    seo: {
      title: "Cumin Powder Exporter India | Ground Jeera | JM Masala",
      description:
        "100% pure cumin powder exporter from Unjha, Gujarat. Cold-milled from Sortex jeera seeds, 40-80 mesh, steam sterilized options, zero additives, FOB Mundra.",
      primaryKeyword: "cumin powder exporter india",
      secondaryKeywords: [
        "ground cumin supplier india",
        "jeera powder wholesale",
        "pure cumin powder bulk",
        "cumin powder manufacturer india",
        "cold milled cumin powder",
        "steam sterilized cumin powder",
        "private label cumin powder",
        "organic cumin powder exporter",
      ],
      h1: "Cumin Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures and exports 100% pure Ground Cumin Powder (Jeera Powder) from Unjha, Gujarat. Cold-milled from high-purity Sortex whole cumin seeds to prevent volatile oil dissipation and flavor loss.",
      sourcingAndOrigin:
        "Milled exclusively from cleaned Unjha cumin arrivals adjacent to our processing facility.",
      processingStandards:
        "Low-temperature pin-milling, fine air-classifier sieving (40–80 mesh), rare-earth magnetic separation, and optional steam sterilization.",
      packagingOptions: [
        "20 kg and 25 kg poly-lined multi-wall kraft paper sacks",
        "High-barrier aluminium foil vacuum bags",
        "Private-label retail stand-up pouches and PET jars (100g to 1kg)",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Industrial curry powder and seasoning blend formulation",
        "Snack dusting, canned foods, instant gravies, and marinades",
        "Retail repacking for international supermarket distribution",
      ],
      faqs: [
        {
          question: "How do you preserve volatile oil during cumin grinding?",
          answer:
            "We use temperature-controlled cold milling that keeps the grinding chamber cool, preventing heat buildup and preserving over 90% of natural volatile essential oils.",
        },
        {
          question: "Is JM Masala cumin powder 100% pure without fillers?",
          answer:
            "Yes. We guarantee 100% pure cumin without starch, spent cumin, husks, or artificial colors, verified by Total Ash and Acid Insoluble Ash testing.",
        },
        {
          question: "What mesh sizes are available for ground cumin?",
          answer:
            "Standard export grind is 50-60 mesh, but custom granulations from 40 mesh (coarse) to 80 mesh (fine) can be produced upon request.",
        },
        {
          question: "Do you offer steam sterilized cumin powder for EU and US buyers?",
          answer:
            "Yes. We provide validated steam sterilization that reduces microbial counts to undetectable levels without chemical residues.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Cold Milling Infrastructure",
        },
        {
          title: "Private Label Spices",
          path: "/private-label-spices",
          intent: "Retail Packaging Solutions",
        },
      ],
      topicalSiblings: [
        "cumin-seeds-exporter-india",
        "coriander-powder-exporter-india",
        "turmeric-powder-exporter-india",
        "red-chilli-powder-exporter-india",
      ],
    },
  },

  "coriander-powder-exporter-india": {
    slug: "coriander-powder-exporter-india",
    name: "Pure Coriander Powder (Ground Dhania)",
    botanicalName: "Coriandrum sativum",
    hsCode: "0909 22 00",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Coriander Powder Exporter India | Pure Dhania | JM Masala",
      description:
        "Pure Indian coriander powder (Dhania) exporter. Cold-milled from clean coriander seeds, aromatic, zero fillers, bulk export & private label, FOB Mundra.",
      primaryKeyword: "coriander powder exporter india",
      secondaryKeywords: [
        "ground coriander supplier india",
        "dhania powder wholesale",
        "pure coriander powder bulk",
        "coriander powder manufacturer india",
        "cold milled dhania powder",
        "private label coriander powder",
        "steam sterilized coriander powder",
        "bulk coriander powder exporter",
      ],
      h1: "Coriander Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures pure, fragrant Coriander Powder (Dhania Powder) cold-milled from clean Indian coriander seeds. Delivers a sweet, citrusy aroma and fine consistency without additives.",
      sourcingAndOrigin:
        "Milled from selected Eagle and Scooter grade whole coriander arrivals.",
      processingStandards:
        "Air-cooled pulverization, rare-earth magnet grids, and 50–70 mesh vibratory classification.",
      packagingOptions: [
        "20 kg and 25 kg poly-lined paper sacks",
        "Bulk woven bags with moisture barrier liners",
        "Private label retail pouches (100g to 1kg)",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Curry bases, seasoning powders, and canned food formulations",
        "Industrial meat seasonings, marinades, and dry rubs",
        "Retail spice packaging for grocery channels",
      ],
      faqs: [
        {
          question: "How does JM Masala prevent adulteration in coriander powder?",
          answer:
            "Every lot is milled solely from inspected whole seeds with zero spent coriander or cereal starch, certified through microscopic analysis and low acid-insoluble ash.",
        },
        {
          question: "What is the typical shelf life of coriander powder?",
          answer:
            "When packed in poly-lined multi-wall paper bags or barrier pouches, coriander powder retains prime aroma and quality for 18 to 24 months in dry storage.",
        },
        {
          question: "What mesh sizes can you supply?",
          answer:
            "We supply 50-60 mesh for standard culinary seasoning and up to 80 mesh for smooth sauce and paste formulations.",
        },
        {
          question: "Can you provide custom retail packaging with our private label?",
          answer:
            "Yes. We support custom private label packaging in stand-up zipper pouches, printed pillow packs, and composite cans.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Private Label Spices",
          path: "/private-label-spices",
          intent: "Retail Branding & Co-Packing",
        },
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Cold Grinding Capabilities",
        },
      ],
      topicalSiblings: [
        "coriander-seeds-exporter-india",
        "cumin-powder-exporter-india",
        "turmeric-powder-exporter-india",
        "fenugreek-powder-exporter-india",
      ],
    },
  },

  "turmeric-powder-exporter-india": {
    slug: "turmeric-powder-exporter-india",
    name: "Pure Turmeric Powder (Ground Haldi)",
    botanicalName: "Curcuma longa",
    hsCode: "0910 30 30",
    origin: "India (Erode / Salem / Sangli)",
    seo: {
      title: "Turmeric Powder Exporter India | Pure Haldi | JM Masala",
      description:
        "Pure Indian turmeric powder exporter. Certified curcumin (2.5% to 5%+), zero lead chromate, ultra-fine micro-milled, bulk & private label, FOB Mundra.",
      primaryKeyword: "turmeric powder exporter india",
      secondaryKeywords: [
        "ground turmeric supplier india",
        "haldi powder wholesale",
        "pure turmeric powder bulk",
        "turmeric powder manufacturer india",
        "high curcumin turmeric powder",
        "lead free turmeric powder",
        "private label turmeric powder",
        "steam sterilized turmeric powder",
        "salem turmeric powder exporter",
      ],
      h1: "Turmeric Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures 100% pure Turmeric Powder (Haldi Powder) with verified curcumin percentages (2.0% to 5.0%+). Free from artificial dyes, lead chromate, and metanil yellow.",
      sourcingAndOrigin:
        "Milled from selected polished turmeric fingers from prime South Indian and Maharashtra growing belts.",
      processingStandards:
        "Heavy-duty impact crushing, cryogenic/cold micro-milling (60–100 mesh), metallic separation, and strict lead testing.",
      packagingOptions: [
        "25 kg poly-lined multi-wall paper bags",
        "Vacuum foil bags for light-sensitive protection",
        "Custom private-label printed pouches and jars",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Curry powder, mustard seasonings, and golden milk latte mixes",
        "Dietary curcumin supplement capsules and functional beverages",
        "Natural yellow food coloring in noodles, cheeses, and baked goods",
      ],
      faqs: [
        {
          question: "How do you verify the absence of lead chromate in turmeric powder?",
          answer:
            "Every export lot is tested via ICP-MS at NABL-accredited laboratories to verify heavy metal levels (Lead < 2.5 ppm or buyer limits) and certify zero added lead chromate.",
        },
        {
          question: "What curcumin percentages are available in turmeric powder?",
          answer:
            "We supply standard commercial grade (2.0%-3.0% curcumin) and high-potency grades (3.5%-5.0%+ curcumin) with full HPLC test certificates.",
        },
        {
          question: "Can JM Masala supply ultra-fine turmeric powder for beverage blends?",
          answer:
            "Yes. We offer 80 to 100 mesh micro-milled turmeric powder that dissolves smoothly in golden milk lattes and functional beverage formulations.",
        },
        {
          question: "What export documentation is provided for turmeric shipments?",
          answer:
            "Each shipment includes Phytosanitary Certificate, Certificate of Origin, NABL COA for curcumin, heavy metals, moisture, and microbiological testing.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Heavy Metal & HPLC Testing",
        },
        {
          title: "Private Label Spices",
          path: "/private-label-spices",
          intent: "Retail Packaging Solutions",
        },
      ],
      topicalSiblings: [
        "turmeric-exporter-india",
        "cumin-powder-exporter-india",
        "coriander-powder-exporter-india",
        "ginger-powder-exporter-india",
      ],
    },
  },

  "red-chilli-powder-exporter-india": {
    slug: "red-chilli-powder-exporter-india",
    name: "Pure Red Chilli Powder",
    botanicalName: "Capsicum annuum",
    hsCode: "0904 22 11",
    origin: "Guntur / India",
    seo: {
      title: "Red Chilli Powder Exporter India | ASTA SHU | JM Masala",
      description:
        "Export-grade Indian red chilli powder exporter. Calibrated heat (15,000-80,000 SHU), ASTA color, aflatoxin & Sudan dye free certified supply, FOB Mundra.",
      primaryKeyword: "red chilli powder exporter india",
      secondaryKeywords: [
        "ground red chilli supplier india",
        "chilli powder wholesale",
        "pure red chilli powder bulk",
        "red chilli powder manufacturer india",
        "hot chilli powder exporter",
        "kashmiri chilli powder supplier",
        "sudan dye free chilli powder",
        "guntur chilli powder exporter",
        "degi mirch powder supplier",
      ],
      h1: "Red Chilli Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures and exports premium Indian Red Chilli Powder with calibrated Scoville Heat Units (15,000 to 80,000+ SHU) and vibrant ASTA color values. Rigorously tested for Sudan dye and aflatoxin absence.",
      sourcingAndOrigin:
        "Cold-milled from selected Teja, Sanam, and Kashmiri-type dry red chillies.",
      processingStandards:
        "Stem removal, destoning, controlled multi-stage roller/pin milling, magnet separation, and aflatoxin screening.",
      packagingOptions: [
        "25 kg poly-lined multi-wall paper bags with foil barrier",
        "Private label retail pouches (100g to 1kg)",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Sauces, marinades, seasoning blends, and snack coatings",
        "Meat processing and canned culinary preparations",
        "Retail grocery brands and foodservice bulk supply",
      ],
      faqs: [
        {
          question: "Can we request custom heat and color levels?",
          answer:
            "Yes. We formulate custom blends matching buyer requirements from mild (15,000 SHU) up to extra hot (80,000+ SHU) with ASTA color from 60 to 140+.",
        },
        {
          question: "How is Sudan dye absence certified?",
          answer:
            "All export batches undergo LC-MS/MS testing at accredited laboratories to certify the complete absence of synthetic Sudan dyes (Sudan I, II, III, IV and Para Red).",
        },
        {
          question: "What aflatoxin standards does JM Masala comply with?",
          answer:
            "We supply lots complying with strict European Union limits (Aflatoxin B1 max 5 ppb, Total max 10 ppb) as well as US FDA guidelines.",
        },
        {
          question: "Can you supply Kashmiri chilli powder for natural red color?",
          answer:
            "Yes. We supply pure Kashmiri chilli powder featuring high natural ASTA color (120-140) and mild, sweet pungency for vibrant culinary presentation.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Aflatoxin & Sudan Dye Testing",
        },
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Controlled Grinding Facilities",
        },
      ],
      topicalSiblings: [
        "red-chilli-exporter-india",
        "turmeric-powder-exporter-india",
        "cumin-powder-exporter-india",
        "coriander-powder-exporter-india",
      ],
    },
  },

  "ginger-powder-exporter-india": {
    slug: "ginger-powder-exporter-india",
    name: "Pure Ginger Powder (Sonth)",
    botanicalName: "Zingiber officinale",
    hsCode: "0910 12 10",
    origin: "India",
    seo: {
      title: "Ginger Powder Exporter India | Pure Sonth | JM Masala",
      description:
        "Pure Indian dry ginger powder (Sonth) exporter. Micro-milled from unbleached dried ginger, sharp gingerol aroma, ideal for bakery & seasonings, FOB Mundra.",
      primaryKeyword: "ginger powder exporter india",
      secondaryKeywords: [
        "dry ginger powder supplier india",
        "sonth powder wholesale",
        "pure ground ginger bulk",
        "ginger powder manufacturer india",
        "micro milled ginger powder",
        "unbleached sonth powder",
        "bulk dried ginger powder",
        "private label ginger powder",
      ],
      h1: "Ginger Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures fine micro-milled dry ginger powder (Sonth). Produced from washed, dried ginger roots to retain intense pungency and natural gingerols.",
      sourcingAndOrigin:
        "Milled from cured dry ginger rhizomes from southern India and Gujarat.",
      processingStandards:
        "Controlled low-temperature grinding and fine sieving (60–80 mesh).",
      packagingOptions: [
        "25 kg paper bags with inner polyethylene barrier liners",
        "Custom private label retail pouches",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Bakery, gingerbread, confectionery, and chai spice formulations",
        "Sauces, dry rubs, and dietary gingerol supplements",
        "Beverage syrups, ginger ale bases, and herbal teas",
      ],
      faqs: [
        {
          question: "What mesh size is standard for ginger powder?",
          answer:
            "Our standard export grind is 60 to 80 mesh, providing rapid dispersibility in dry bakery mixes and seasoning formulas.",
        },
        {
          question: "Is JM Masala ginger powder made from bleached or unbleached ginger?",
          answer:
            "We typically mill from 100% natural unbleached dry ginger to prevent any chemical residue and preserve the authentic sharp gingerol flavor.",
        },
        {
          question: "What is the typical moisture content of export ginger powder?",
          answer:
            "Our ginger powder is dried and milled to a maximum moisture content of 10.0%, preventing clumping and microbial activity.",
        },
        {
          question: "What export documentation is provided with shipments?",
          answer:
            "We provide Phytosanitary Certificate, Certificate of Origin, and NABL COA confirming moisture, ash, gingerol retention, and pathogen-free status.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Micro-Milling Technology",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Chemical & Physical Analysis",
        },
      ],
      topicalSiblings: [
        "dry-ginger-exporter-india",
        "turmeric-powder-exporter-india",
        "cumin-powder-exporter-india",
      ],
    },
  },

  "fenugreek-powder-exporter-india": {
    slug: "fenugreek-powder-exporter-india",
    name: "Pure Fenugreek Powder (Ground Methi)",
    botanicalName: "Trigonella foenum-graecum",
    hsCode: "0910 99 29",
    origin: "Gujarat / Rajasthan",
    seo: {
      title: "Fenugreek Powder Exporter India | Ground Methi | JM Masala",
      description:
        "Indian fenugreek powder (methi powder) exporter. Cold-milled from Sortex fenugreek seeds, high dietary fiber & saponins, culinary & pharma grade, FOB Mundra.",
      primaryKeyword: "fenugreek powder exporter india",
      secondaryKeywords: [
        "methi powder supplier india",
        "fenugreek powder wholesale",
        "ground fenugreek bulk supplier",
        "fenugreek powder manufacturer india",
        "pure methi powder bulk",
        "nutraceutical fenugreek powder",
        "cold milled fenugreek powder",
        "methi powder exporter gujarat",
      ],
      h1: "Fenugreek Powder Exporter & Manufacturer in India",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala manufactures finely ground golden-yellow fenugreek powder from cleaned whole seeds. Rich in natural dietary fiber, saponins, and distinctive aroma.",
      sourcingAndOrigin:
        "Milled in Gujarat from cleaned fenugreek seeds.",
      processingStandards:
        "Cold pin-milling and vibration sieving into 50–70 mesh powder.",
      packagingOptions: [
        "25 kg multi-wall paper bags with inner liners",
        "Private label retail packaging options",
      ],
      containerLoading: {
        fcl20: "14.0 to 15.0 Metric Tons loose stuffed",
        fcl40: "25.0 to 26.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Curry powders, pickle pastes, and spice mixes",
        "Nutraceutical dietary fiber capsules and formulations",
        "Herbal cosmetic and hair care products",
      ],
      faqs: [
        {
          question: "Can fenugreek powder be used in nutraceutical capsules?",
          answer:
            "Yes. Our fine 60-mesh fenugreek powder is widely used by dietary supplement manufacturers for its natural soluble fiber and saponin profile.",
        },
        {
          question: "What is the purity standard for fenugreek powder?",
          answer:
            "Our powder is 100% pure, ground exclusively from Sortex-cleaned fenugreek seeds with zero added starch, hulls, or coloring agents.",
        },
        {
          question: "What container loading capacity is typical?",
          answer:
            "A standard 20ft container carries 14.0 to 15.0 MT in 25kg multi-wall paper bags, and a 40ft container carries 25.0 to 26.0 MT.",
        },
        {
          question: "What testing reports are provided for export?",
          answer:
            "Consignments are accompanied by NABL lab reports confirming moisture (max 10%), total ash, acid-insoluble ash, and absence of pathogenic microbes.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Spice Processing & Manufacturing",
          path: "/spice-processing-manufacturing",
          intent: "Grinding Standards",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Nutraceutical Compliance",
        },
      ],
      topicalSiblings: [
        "fenugreek-seeds-exporter-india",
        "cumin-powder-exporter-india",
        "coriander-powder-exporter-india",
      ],
    },
  },

  "agro-commodities-exporter-india": {
    slug: "agro-commodities-exporter-india",
    name: "Indian Agro Commodities (Peanuts, Chickpeas, Grains)",
    botanicalName: "Various Agro Produce",
    hsCode: "1202 42 00",
    origin: "Gujarat & India",
    seo: {
      title: "Agro Commodities Exporter India | Peanuts & Grains | JM Masala",
      description:
        "Bulk exporter of Indian agricultural commodities from Gujarat: Groundnuts/Peanuts, Kabuli Chickpeas, Oilseeds & Grains with complete FOB Mundra terms.",
      primaryKeyword: "indian agro commodities exporter",
      secondaryKeywords: [
        "peanut exporter india",
        "groundnut supplier gujarat",
        "kabuli chickpeas exporter",
        "agricultural commodities exporter india",
        "bulk grains supplier india",
        "bold peanuts exporter india",
        "java peanuts supplier",
        "oilseeds exporter gujarat",
        "chickpeas bulk supplier india",
      ],
      h1: "Indian Agro Commodities Exporter & Bulk Supplier",
      searchIntent: "B2B Commercial & Bulk Export Procurement",
    },
    content: {
      commercialIntro:
        "JM Masala facilitates container-load export of key Indian agricultural commodities including Groundnuts/Peanuts (Bold & Java), Kabuli Chickpeas, Oilseeds, and Specialty Grains with FOB Mundra shipping terms.",
      sourcingAndOrigin:
        "Procured from Saurashtra and central Indian agricultural mandi yards.",
      processingStandards:
        "Machine cleaned, destoned, size-graded, and optical Sortex sorted for high purity.",
      packagingOptions: [
        "25 kg and 50 kg PP bags, jute bags, or 1000 kg jumbo bulk bags",
        "Vacuum packs for peanut kernels to prevent aflatoxin development",
      ],
      containerLoading: {
        fcl20: "19.0 to 20.0 Metric Tons loose stuffed",
        fcl40: "26.0 to 27.0 Metric Tons loose stuffed",
      },
      buyerApplications: [
        "Peanut butter manufacturing, snack roasting, and confectionery",
        "Canned pulse processing and wholesale food trade",
        "Oil milling and industrial food ingredients",
      ],
      faqs: [
        {
          question: "Which peanut varieties do you export from Gujarat?",
          answer:
            "We supply Bold Peanuts (counts 40/50, 50/60) and Java Peanuts (counts 50/60, 60/70, 70/80) with low moisture and high oil content.",
        },
        {
          question: "How is aflatoxin controlled in peanut exports?",
          answer:
            "Every export lot is tested at NABL-accredited labs for Aflatoxin B1 and Total Aflatoxins, ensuring strict compliance with EU and destination standards.",
        },
        {
          question: "What counts of Kabuli Chickpeas does JM Masala supply?",
          answer:
            "We supply machine-cleaned and Sortex-graded Kabuli Chickpeas in 42-44, 44-46, 58-60, and 75-80 count sizes.",
        },
        {
          question: "What shipping terms and container stuffing are offered?",
          answer:
            "We offer FOB Mundra, CIF, and CFR terms. A 20ft container accommodates 19 to 20 MT in 25kg/50kg bags, and a 40ft container carries 26 to 27 MT.",
        },
      ],
    },
    cluster: {
      supportingPages: [
        {
          title: "Export Destinations",
          path: "/export-destinations",
          intent: "Container Freight Logistics",
        },
        {
          title: "Quality Certifications",
          path: "/quality-certifications",
          intent: "Aflatoxin & Purity Testing",
        },
      ],
      topicalSiblings: [
        "sesame-seeds-exporter-india",
        "psyllium-seeds-exporter-india",
        "psyllium-husk-exporter-india",
      ],
    },
  },
};
