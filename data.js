const WEIGHT_DATA = [
    { date: "Venerdì 26 Giugno 2026", weight: 69.1, note: "Pre-diet baseline" }
];

const JOURNAL_DATA = [
    {
        date: "Martedì 7 Luglio 2026",
        week: "W2",
        sortDate: "2026-07-07",
        meals: [
            { tag: "Colazione", slot: "Colazione", content: "Frutta secca consigliata + 3 caffè", status: "Perfetto", notes: "Quota grassi sani mattutina coperta." },
            { tag: "Pranzo", slot: "Pranzo", content: "Pasta al burro + 240g bastoncini di merluzzo", status: "Flessibile", notes: "Fonte proteica magra da merluzzo. Assenza di verdure a pranzo." },
            { tag: "Merenda", slot: "Merenda", content: "1 banana + 1 pacchetto di crackers al cheddar (3.4g proteine)", status: "Flessibile", notes: "Piccolo snack salato di prova + dose di frutta pomeridiana." },
            { tag: "Cena", slot: "Cena", content: "Piatto unico abbondante: Pasta con abbondanti ceci, spinaci, salsa di pomodoro e olio EVO", status: "Ottimo", notes: "Rispettate perfettamente tutte le quantità. Eccellente apporto proteico da legumi e alta quota micronutrienti." }
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
            { tag: "Cena", slot: "Cena", content: "1 pizza surgelata ai peperoni + 1/3 tortilla de patata (2 uova, patate, cipolla)", status: "Mass Fuel", notes: "Utilizzo inteligente degli avanzi. Uova inserite come switch proteico serale." }
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
            { tag: "Colazione", slot: "Colazione", content: "1 caffè, frutta secca", status: "Perfetto", notes: "Target frutta secca rispettato." },
            { tag: "Pranzo", slot: "Pranzo", content: "1 bratwurst, un pezzetto di pane, una porzione di patatine", status: "Regola 80/20", notes: "Viaggio a Berlino. Rientra perfettamente nel 20% di flessibilità concesso." },
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
