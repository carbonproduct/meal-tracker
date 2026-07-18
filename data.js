// ==========================================
// 1. REGISTRO ANTROPOMETRICO COMPLETO (WEIGHT & BODY COMP)
// ==========================================
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

// ==========================================
// 2. DIARIO ALIMENTARE COMPLETO (DAL 29 GIUGNO AL 18 LUGLIO)
// ==========================================
const JOURNAL_DATA = [
    {
        date: "Sabato 18 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-18",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 fette di pane con burro, origano e un pizzico di sale + 45g di mix (noci, semi di girasole, mandorle, senza anacardi)", status: "Perfetto", notes: "Ottimo l'incremento controllato della frutta secca a 45g, ideale per sostenere l'apporto calorico in massa con grassi sani." },
            { tag: "Pranzo", slot: "Pranzo (In corso)", content: "Riso al forno con salsa di pomodoro, scorza di limone e abbondante parmigiano grattugiato", status: "Perfetto", notes: "Primo piatto denso, energetico e pulito. Ottimo l'uso della scorza di limone per la freschezza e la digestione." }
        ]
    },
    {
        date: "Venerdì 17 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-17",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "Mix abbondante di 45-50g di noci, mandorle, semi di girasole e anacardi", status: "Perfetto", notes: "Quota di frutta secca leggermente maggiorata per preferenza personale, ottima mossa per la massa." },
            { tag: "Pranzo", slot: "Pranzo", content: "Orecchiette con salsa di pomodoro + 1 uovo sul lato", status: "Perfetto", notes: "Uso ottimale della pasta rimasta con l'uovo come sprint proteico rapido." },
            { tag: "Merenda", slot: "Merenda", content: "3 fette di pane con burro, origano e un pizzico di sale + 1 banana + caffè immancabili", status: "Perfetto", notes: "Spuntino solido e calorico. Ottimo abbinamento carboidrati/grassi pre-serata." },
            { tag: "Cena", slot: "Cena (Black Bear Burger)", content: "Double smash burger con double cheese, double bacon, patatine fritte + 3 birre", status: "Regola 80/20", notes: "Cena da urlo in uno dei migliori burger shop di Londra. Boost calorico pazzesco per la massa muscolare." },
            { tag: "Attività", slot: "Passi Spontanei", content: "Lunga camminata serale per completare i target di movimento", status: "Attivo", notes: "Ottimo bilanciamento metabolico per gestire la cena densa e le birre." }
        ]
    },
    {
        date: "Giovedì 16 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-16",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "Anacardi, mandorle e semi di girasole tostati", status: "Perfetto", notes: "Quota di frutta secca consigliata rispettata al rientro a Londra." },
            { tag: "Pranzo", slot: "Pranzo", content: "Orecchiette fatte in casa con burro, parmigiano e scorza di limone + 3 uova", status: "Flessibile", notes: "Orecchiette spettacolari da un amico. Ottima fonte proteica dalle uova." },
            { tag: "Merenda", slot: "Merenda (Pre-Workout)", content: "1 banana + piccolo sandwich con salmone, Philadelphia e cetriolo", status: "Perfetto", notes: "Ottimo spuntino bilanciato prima dell'allenamento." },
            { tag: "Attività", slot: "Allenamento", content: "Ottima e intensa sessione di allenamento nel pomeriggio", status: "Perfetto", notes: "Sessione di alto livello per stimolare la massa muscolare." },
            { tag: "Cena", slot: "Cena", content: "Abbondante porzione di riso con zucchine + petto di pollo sul lato (iniziata con il sandwich al salmone del pomeriggio)", status: "Perfetto", notes: "Pasto serale pulito, solido e strutturato. Carboidrati complessi dal riso e ottima quota proteica magra dal pollo." }
        ]
    },
    {
        date: "Mercoledì 15 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-15",
        meals: [
            { tag: "Colazione", slot: "Colazione (Berlino)", content: "1 uovo, bacon, un pezzetto di pane, caffè + 1 fetta piccola di anguria", status: "Flessibile", notes: "Colazione complete in trasferta con un tocco di idratazione." },
            { tag: "Pranzo", slot: "Pranzo (Piatto Unico Vietnamita)", content: "Riso fritto con uovo, manzo, cipolla croccante e insalata (porzione abbondante, >150g di riso)", status: "Perfetto", notes: "Splendido piatto unico bilanciato ad alta densità calorica." },
            { tag: "Merenda", slot: "Merenda / Viaggio", content: "2 banane + manciata di anacardi + lunga camminata verso l'aeroporto", status: "Perfetto", notes: "Carica energetica solida e molto movimento pre-volo." },
            { tag: "Cena", slot: "Cena in Aeroporto (McDonald's)", content: "Abbondanti chicken tenders, patatine fritte, 1 double cheeseburger con bacon, anacardi extra, molta acqua, 1 tè freddo al limone", status: "Regola 80/20", notes: "Cena obbligata prima del rientro a Londra. Ottimo surplus calorico complessivo." }
        ]
    },
    {
        date: "Martedì 14 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-14",
        meals: [
            { tag: "Colazione", slot: "Colazione (Berlino)", content: "1 uovo, 1 fetta piccola di pane, 1 slice di bacon, un caffè grande", status: "Flessibile", notes: "Gestione della colazione in trasferta." },
            { tag: "Pranzo", slot: "Pranzo (Berlino)", content: "Pizza Margherita + piccola zuppa di patate e porri", status: "Flessibile", notes: "Combinazione di carboidrati densi e comfort food." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana + caffè immancabili", status: "Perfetto", notes: "Ricarica classica pomeridiana." },
            { tag: "Cena", slot: "Cena (Ristorante Vegetariano)", content: "Piatto unico Mediterraneo pulito a base vegetale", status: "Ottimo", notes: "Cena pulita al rientro dall'ufficio di Berlino." }
        ]
    },
    {
        date: "Lunedì 13 Luglio 2026",
        week: "W3",
        sortDate: "2026-07-13",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 caffè, consueta quota di anacardi/frutta secca", status: "Perfetto", notes: "Quota grassi sani mattutina rispettata." },
            { tag: "Pranzo", slot: "Pranzo", content: "Pasta con fonte proteica interna + filetto di pesce", status: "Perfetto", notes: "Ottimo mix di carboidrati e doppia fonte proteica prima del viaggio." },
            { tag: "Spuntino", slot: "Snack Viaggio", content: "1 banana", status: "Perfetto", notes: "Carboidrati rapidi tenuti come scorta per il volo." },
            { tag: "Cena", slot: "Cena Tarda (Berlino)", content: "Abbondante pollo (tenders e nuggets), patatine fritte, acqua", status: "Regola 80/20", notes: "Cena molto tarda post-volo per lavoro. Ottimo surplus calorico per la massa." }
        ]
    },
    {
        date: "Domenica 12 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-12",
        meals: [
            { tag: "Pranzo", slot: "Pranzo (Festa)", content: "1 bagel con uovo, bacon e formaggio + patatine fritte di contorno", status: "Regola 80/20", notes: "Pasto da festa, ottimo per spingere le calorie totali." },
            { tag: "Attività", slot: "Movimento Festa", content: "Molto movimento e ballo durante la giornata", status: "Attivo", notes: "Disendio energetico extra compensato dal pasto denso del pranzo." },
            { tag: "Cena", slot: "Cena (Maxi Pasto)", content: "Pizza, abbondanti uova aggiuntive, molti spinaci", status: "Flessibile", notes: "Pasto serale enorme e nutriente. Ottimo volume con gli spinaci e forte boost proteico/calorico." }
        ]
    },
    {
        date: "Sabato 11 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-11",
        meals: [
            { tag: "Pranzo", slot: "Pranzo fuori", content: "Pasto completo con la fidanzata", status: "Perfetto", notes: "Rispettate le linee guida generali del piano alimentare." },
            { tag: "Cena", slot: "Cena (Barbecue & Match)", content: "Slices di pizza, burgers, torta con fragole e panna, alcolici con moderazione, acqua per idratarsi", status: "Regola 80/20", notes: "Serata conviviale per la partita. Perfetto per il surplus di massa." }
        ]
    },
    {
        date: "Venerdì 10 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-10",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 caffè, quota di frutta secca consigliata", status: "Perfetto", notes: "Routine mattutina stabile." },
            { tag: "Pranzo", slot: "Pranzo a casa", content: "Pasta (fonte principale di carbo), uova e salmone come sorgente proteica", status: "Perfetto", notes: "Pasto pulito a casa, perfetto bilanciamento macro da fonti ancestrali." }
        ]
    },
    {
        date: "Giovedì 9 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-09",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "3 caffè, quota di frutta secca consigliata", status: "Perfetto", notes: "Target centrato." },
            { tag: "Pranzo", slot: "Pranzo a casa", content: "Pasto regolare rispettando le quantità del piano", status: "Perfetto", notes: "Mangiato a casa prima del rientro in ufficio." },
            { tag: "Attività", slot: "Bici Commute", content: "6 km di pedalata agile verso l'ufficio", status: "Attivo", notes: "Ritmo blando ideale per favorire lo svuotamento gastrico." }
        ]
    },
    {
        date: "Mercoledì 8 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-08",
        meals: [
            { tag: "Idratazione", slot: "Idratazione", content: "Completata con successo", status: "Perfetto", notes: "Monitoraggio regolare dei liquidi." },
            { tag: "Attività", slot: "Attività", content: "Sessione in palestra pomeridiana", status: "Perfetto", notes: "Quarto giorno consecutivo. Focus su sovraccarichi per stimolare la crescita muscolare." }
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
    },
    {
        date: "Venerdì 3 Luglio 2026",
        week: "W1",
        sortDate: "2026-07-03",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "2 caffè", status: "Mancato", notes: "Pasto mattutino e frutta secca saltati." },
            { tag: "Pranzo", slot: "Pranzo", content: "~110g riso e farro, petto di pollo a cubetti, verdure verdi miste", status: "Perfetto", notes: "Il petto di pollo rappresenta la fonte magra ideale. Ottimo rientro nel piano." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana, 2 caffè, caramelle", status: "Flessibile", notes: "Caramelle utilizzate come boost energetico rapido durante il viaggio (80/20)." },
            { tag: "Cena", slot: "Cena", content: "Sandwich (2 cosce di pollo, formaggio, insalata), pannocchia, patatine, 1 birra", status: "Approvato", notes: "Cosce di pollo esplicitamente permesse nelle note del piano del nutrizionista." }
        ]
    },
    {
        date: "Giovedì 2 Luglio 2026",
        week: "W1",
        sortDate: "2026-07-02",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "1 caffè", status: "Mancato", notes: "Saltata la colazione e la quota di frutta secca." },
            { tag: "Pranzo", slot: "Pranzo", content: "2 quesadillas (manzo e formaggio), 1 birra, acqua", status: "Regola 80/20", notes: "Viaggio a Berlino. Ottimo surplus calorico per la massa." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana", status: "Perfetto", notes: "Spuntino pomeridiano con frutta eseguito con successo." },
            { tag: "Cena", slot: "Cena", content: "Insalata mista, pasta ripiena di gamberi, avocado, menta, parmigiano e finferli, 1 birra grande", status: "Ottimo", notes: "Avocado e parmigiano usati efficacemente come sostituti dei grassi (EVO)." },
            { tag: "Attività", slot: "Attività", content: "Lunga camminata post-cena + 1 birra grande + 1 piccola", status: "Attivo", notes: "Ottimo movimento per stimolare il metabolismo (Target di 10.000 passi)." }
        ]
    },
    {
        date: "Mercoledì 1 Luglio 2026",
        week: "W1",
        sortDate: "2026-07-01",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "1 caffè, frutta secca", status: "Target Rispettato", notes: "Quota frutta secca inserita correttamente." },
            { tag: "Pranzo", slot: "Pranzo", content: "1 bratwurst, un pezzetto di pane, una porzione di patatine", status: "Regola 80/20", notes: "Viaggio a Berlino. Rientra nel 20% di flessibilità concesso." },
            { tag: "Cena", slot: "Cena", content: "80g manzo, 6 ravioli gamberi/verdure, Bibimbap bowl (80g riso, tonno, 1 uovo, verdure miste)", status: "Ottimo", notes: "Eccellente varietà di micronutrienti e proteine. Raggiunti i 200g di verdure." },
            { tag: "Extra", slot: "Extra", content: "20g semi di girasole tostati", status: "Flessibile", notes: "Ottima fonte extra di grassi sani nel post-cena." }
        ]
    },
    {
        date: "Martedì 30 Giugno 2026",
        week: "W1",
        sortDate: "2026-06-30",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "Anacardi, pistacchi, 3 caffè", status: "Perfetto", notes: "Coperta ottimamente la quota di 30g di frutta secca mattutina." },
            { tag: "Pranzo", slot: "Pranzo", content: "Pasta al pomodoro, bastoncini di merluzzo, insalata, olio EVO", status: "Flessibile", notes: "Carboidrati e verdure ok. I bastoncini aggiungono quota grassi/carbo da panatura." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana", status: "Perfetto", notes: "Quota frutta parzialmente coperta." },
            { tag: "Cena", slot: "Cena", content: "Piccola pizza, 3 uova, spinaci, insalata verde, olio EVO", status: "Flessibile", notes: "3 uova come ottimo sostituto proteico. Pizza come sostituto dei carboidrati." }
        ]
    },
    {
        date: "Lunedì 29 Giugno 2026",
        week: "W1",
        sortDate: "2026-06-29",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "1 fetta di pane con burro, 3 caffè", status: "Flessibile", notes: "Carboidrati inseriti correttamente nei macro giornalieri." },
            { tag: "Spuntino", slot: "Spuntino", content: "Spuntino saltato", status: "Mancato", notes: "Mancata la quota di 30g di frutta secca." },
            { tag: "Pranzo", slot: "Pranzo", content: "150g pasta, zucchine, gamberi, merluzzo, olio EVO", status: "Perfetto", notes: "Esatti 150g di pasta. Ottimo mix di fonti proteiche." },
            { tag: "Merenda", slot: "Merenda", content: "2 banane", status: "Perfetto", notes: "Sfruttata la quota frutta giornaliera (2 frutti medi)." },
            { tag: "Cena", slot: "Cena", content: "Pasta, salsa di pomodoro, merluzzo", status: "Perfetto", notes: "Linee guida della cena rispettate appieno." },
            { tag: "Extra", slot: "Extra", content: "100g pistacchi", status: "Surplus", notes: "Bonus calorico consistente (~560 kcal), utile per la massa ma quota grassi alta." }
        ]
    }
];
