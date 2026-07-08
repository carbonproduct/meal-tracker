const WEIGHT_DATA = [
    { 
        date: "Mercoledì 8 Luglio 2026", 
        weight: 68.8,
        metrics: {
            bmi: 21.2,
            fatPct: 16.1,       // % Grasso corporeo
            fatMassKg: 11.1,    // Massa grassa in kg
            musclePct: 79.6,    // % Massa muscolare della composizione
            muscleMassKg: 54.8, // Massa muscolare totale in kg
            leanMassKg: 57.7,   // Massa magra complessiva in kg
            waterPct: 57.6,     // Percentuale acqua %
            visceralFat: 8.0,   // Grasso viscerale / addominale
            boneMassKg: 2.9,    // Massa ossea in kg
            bonePct: 4.3,       // Percentuale massa ossea
            bmr: 1477           // Metabolismo basale espresso in kcal
        },
        nutritionistNotes: {
            status: "Ricomposizione Corporea Positiva",
            considerations: "Il calo ponderale (-0.3 kg) non è perdita muscolare. I dati evidenziano un'eccellente sgrassatura selettiva (riduzione della massa grassa e del grasso addominale) preservando e ottimizzando la percentuale di tessuto contrattile.",
            strategy: "Continuare con la dieta isocalorica ad alto volume e cibi ancestrali. Monitorare la digestione. Se il peso scende sotto i 68.5 kg, incrementare la quota di carboidrati complessi per evitare deficit energetici eccessivi dovuti al pendolarismo in bici e alle 3 sessioni di pesi."
        },
        userNotes: "Sensazione netta di riduzione del grasso addominale inserito nelle scorse settimane. Ottimo feedback visivo allo specchio: più muscoloso, denso e tirato. L'allenamento intenso (bici + palestra + rower) sta pagando."
    },
    { 
        date: "Venerdì 26 Giugno 2026", 
        weight: 69.1, 
        metrics: {
            bmi: 21.3,
            fatPct: 16.8, 
            fatMassKg: 11.6,
            musclePct: 78.9,
            muscleMassKg: 54.5,
            leanMassKg: 57.5,
            waterPct: 57.1,
            visceralFat: 8.5,
            boneMassKg: 2.9,
            bonePct: 4.2,
            bmr: 1485
        },
        nutritionistNotes: {
            status: "Baseline Iniziale",
            considerations: "Fissazione dei parametri antropometrici di partenza del piano alimentare.",
            strategy: "Adattamento metabolico al volume dei pasti senza ricorrere a integratori artificiali."
        },
        userNotes: "Peso pre-dieta registrato prima delle modifiche strutturali ai pasti." 
    }
];

const JOURNAL_DATA = [
    {
        date: "Mercoledì 8 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-08",
        meals: [
            { tag: "Idratazione", slot: "Idratazione", content: "In corso...", status: "In corso", notes: "Monitorare i liquidi visto l'allenamento in palestra programmato." },
            { tag: "Attività", slot: "Attività", content: "Sessione in palestra pomeridiana", status: "Pianificato", notes: "Quarto giorno consecutivo. Focus su sovraccarichi per stimolare la crescita muscolare." }
        ]
    },
    {
        date: "Martedì 7 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-07",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 caffè, quota di frutta secca consigliata", status: "Perfetto", notes: "Abitudine della frutta secca mattutina consolidata con successo." },
            { tag: "Pranzo", slot: "Pranzo", content: "Pasta in bianco con burro + 240g bastoncini di merluzzo (fish fingers)", status: "Flessibile", notes: "Assenza di verdure a pranzo compensata alla grande a cena. Ottima quota proteica dal merluzzo (panatura leggera ideale per il surplus di massa)." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana + 1 pacchetto piccolo di cracker al cheddar (~3.4g proteine)", status: "Flessibile", notes: "Crackers usati come test energetico pomeridiano." },
            { tag: "Cena", slot: "Cena (Pasto Unico)", content: "Maxi porzione di pasta con abbondanti ceci, tonnellate di spinaci, salsa di pomodoro e olio EVO", status: "Perfetto", notes: "Pasto unico immenso che raggruppa tutti i macro serali previsti. Ottimo volume di verdure e ottima combinazione di carboidrati e proteine vegetali dai ceci." }
        ]
    },
    {
        date: "Lunedì 6 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-06",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 caffè, 10g semi di girasole, 20g anacardi", status: "Perfetto", notes: "Raggiunto con precisione il target di 30g di frutta secca/semi mattutini." },
            { tag: "Pranzo", slot: "Pranzo", content: "150g pasta con 250g zucchine + 1/3 tortilla de patata (2 uova, patate)", status: "Perfetto", notes: "Centrato perfettamente l'obiettivo di 150g di pasta e l'alto volume di verdure (250g)." },
            { tag: "Merenda", slot: "Merenda (Snack)", content: "~40g di pane fresco", status: "Flessibile", notes: "Mangiato nel pomeriggio appena comprato dal panettiere." },
            { tag: "Cena", slot: "Cena", content: "Fette di pane multiple con pomodori, avocado, funghi e olio EVO + l'ultima fetta di tortilla de patata (1/6)", status: "Ottimo", notes: "Ottima combinazione di carboidrati e grassi sani dall'avocado e dall'olio EVO. Finita la tortilla." },
            { tag: "Idratazione", slot: "Idratazione", content: "Molta acqua durante il giorno + 0.5L di acqua con 1/2 cucchiaio di zucchero e un pizzico di sale", status: "Perfetto", notes: "Strategia idrica eccellente per supportare l'attività fisica e reintegrare i minerali con il caldo." },
            { tag: "Attività", slot: "Attività", content: "1 ora di ciclismo intenso nel pomeriggio + Sessione in palestra alle 16:00 (Rower/Vogatore: serie da 500m)", status: "Perfetto", notes: "Allenamento ad altissima intensità. Sessione combinata di cardio e vogatore completata con successo nonostante la fatica." }
        ]
    },
    {
        date: "Domenica 5 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-05",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "2 caffè, 1 fetta di pane con burro", status: "Flessibile", notes: "Rientro controllato nella routine casalinga." },
            { tag: "Idratazione", slot: "Idratazione", content: "Molta acqua durante la giornata", status: "Perfetto", notes: "Target idratazione di 2.5L pienamente supportato." },
            { tag: "Attività", slot: "Attività", content: "1 pinta di birra + sessione di ciclismo e camminata", status: "Attivo", notes: "Alcol ampiamente bilanciato dall'attività cardiovascolare in bicicletta." },
            { tag: "Cena", slot: "Cena", content: "1 pizza surgelata ai peperoni + 1/3 tortilla de patata (2 uova, patate, cipolla)", status: "Mass Fuel", notes: "Utilizzo intelligente degli avanzi. Uova inserite come switch proteico serale." }
        ]
    }
];
