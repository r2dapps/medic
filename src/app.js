// @ts-nocheck
/**
     * MEDIC: Family Medicine Management Architecture
     * Storage: IndexedDB (Pure Vanilla JS, 16 Stores, Versioned, Indexed)
     * Role-Aware, Mobile-First, Multilingual (EN, TE, HI)
     */

    // --- Multilingual Translation Dictionary ---
    const TRANSLATIONS = {
      en: {
        appName: 'MEDIC',
        home: 'Home',
        family: 'Family',
        medicines: 'Medicines',
        purchases: 'Purchases',
        settings: 'Settings',
        todaySchedule: "TODAY'S SCHEDULE",
        upcomingDose: "UPCOMING DOSE",
        addMed: 'Add Medicine',
        addMember: 'Add Member',
        householdHeading: 'Household Profiles',
        householdSub: 'Manage family members & assigned caretakers',
        householdDetails: 'Household Details',
        medsTitle: 'Medicines & Stock',
        medsSub: 'Prescriptions and remaining inventory',
        purchaseTitle: 'Medicine Expenses',
        purchaseSub: 'Track pharmacy purchases and price history',
        newPurchase: 'New Purchase',
        thisMonth: 'This Month',
        totalSpent: 'Total Spent',
        purchaseHistory: 'Purchase History',
        settingsTitle: 'Settings & Privacy',
        settingsSub: 'App preferences and data management',
        language: 'Language',
        fontSize: 'Text Size',
        fontSizeSub: 'Adjust for comfortable reading',
        activeRole: 'Active Role',
        roleSub: 'Simulate permissions for other devices',
        vibration: 'Vibration Feedback',
        vibrationSub: 'Haptic confirmation on key actions',
        doseReminders: 'Dose Reminders',
        backupTitle: 'Data & Backup',
        backupSub: "All household data is stored securely in your browser's private offline database (IndexedDB). No personal health data is uploaded to any cloud.",
        exportBackup: 'Export Backup',
        restoreBackup: 'Restore Backup',
        taken: 'Taken',
        skip: 'Skip',
        morning: 'Morning',
        noon: 'Noon',
        evening: 'Evening',
        night: 'Night',
        afterFood: 'After Food',
        beforeFood: 'Before Food (Empty Stomach)',
        withFood: 'With Food',
        anytime: 'Anytime',
        listenAudio: 'Listen',
        readingMedicine: 'Reading medicine instructions...',
        todayScheduleTab: "Today's Schedule",
        calendarHistoryTab: "Dose Calendar",
        adherenceRate: "Adherence",
        activeStreak: "Streak",
        dosesLogged: "Logged",
        todayBtn: "Today",
        doseLogFor: "Dose Log for",
        allTaken: "All Taken",
        partialTaken: "Partial",
        missed: "Missed",
        noMedsScheduled: "No medicines scheduled for this day.",
        daysStreak: "Days",
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      te: {
        appName: 'MEDIC',
        home: 'హోమ్',
        family: 'కుటుంబం',
        medicines: 'మందులు',
        purchases: 'కొనుగోళ్లు',
        settings: 'సెట్టింగ్లు',
        todaySchedule: 'నేటి మందుల పట్టిక',
        upcomingDose: 'తదుపరి మందు సమయం',
        addMed: 'మందు జోడించు',
        addMember: 'సభ్యుడిని చేర్చు',
        householdHeading: 'కుటుంబ ప్రొఫైల్స్',
        householdSub: 'కుటుంబ సభ్యులు మరియు సహాయకుల వివరాలు',
        householdDetails: 'ఇంటి వివరాలు',
        medsTitle: 'మందుల నిల్వ',
        medsSub: 'వైద్యుల ప్రిస్క్రిప్షన్ & నిల్వ రికార్డులు',
        purchaseTitle: 'మందుల ఖర్చులు',
        purchaseSub: 'ఫార్మసీ కొనుగోళ్లు మరియు ధరల చరిత్ర',
        newPurchase: 'కొత్త కొనుగోలు',
        thisMonth: 'ఈ నెల ఖర్చు',
        totalSpent: 'మొత్తం ఖర్చు',
        purchaseHistory: 'కొనుగోలు చరిత్ర',
        settingsTitle: 'సెట్టింగ్లు & గోప్యత',
        settingsSub: 'యాప్ ప్రాధాన్యతలు & డేటా నిర్వహణ',
        language: 'భాష',
        fontSize: 'అక్షర పరిమాణం',
        fontSizeSub: 'చదవడానికి అనువుగా మార్చుకోండి',
        activeRole: 'యాక్టివ్ పాత్ర',
        roleSub: 'ఇతర పరికరాల అనుమతులు అనుకరించు',
        vibration: 'వైబ్రేషన్ ఫీడ్‌బ్యాక్',
        vibrationSub: 'ముఖ్యమైన చర్యలపై వైబ్రేషన్ సూచన',
        doseReminders: 'మందుల రిమైండర్లు',
        backupTitle: 'డేటా & బ్యాకప్',
        backupSub: 'మీ ఆరోగ్య డేటా మీ పరికరంలో మాత్రమే సురక్షితంగా నిల్వ ఉంటుంది.',
        exportBackup: 'బ్యాకప్ డౌన్‌లోడ్',
        restoreBackup: 'బ్యాకప్ పునరుద్ధరణ',
        taken: 'వేసుకున్నారు',
        skip: 'దాటవేయి',
        morning: 'ఉదయం (Morning)',
        noon: 'మధ్యాహ్నం (Noon)',
        evening: 'సాయంత్రం (Evening)',
        night: 'రాత్రి (Night)',
        afterFood: 'భోజనం తర్వాత (After Food)',
        beforeFood: 'భోజనానికి ముందు (Before Food)',
        withFood: 'భోజనంతో పాటు (With Food)',
        anytime: 'ఎప్పుడైనా (Anytime)',
        listenAudio: 'వినండి',
        readingMedicine: 'మందుల వివరాలు చదువుతోంది...',
        todayScheduleTab: "నేటి షెడ్యూల్",
        calendarHistoryTab: "క్యాలెండర్ చరిత్ర",
        adherenceRate: "క్రమశిక్షణ",
        activeStreak: "వరుస రోజులు",
        dosesLogged: "నమోదైనవి",
        todayBtn: "ఈ రోజు",
        doseLogFor: "తేదీ మందుల వివరాలు",
        allTaken: "అన్నీ వేసుకున్నారు",
        partialTaken: "కొన్ని మాత్రమే",
        missed: "మిస్ అయ్యాయి",
        noMedsScheduled: "ఈ రోజు ఎలాంటి మందులు నిర్ణయించబడలేదు.",
        daysStreak: "రోజులు",
        weekdaysShort: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
        months: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్']
      },
      hi: {
        appName: 'MEDIC',
        home: 'होम',
        family: 'परिवार',
        medicines: 'दवाइयाँ',
        purchases: 'दवा खरीद',
        settings: 'सेटिंग्स',
        todaySchedule: 'आज का टाइमटेबल',
        upcomingDose: 'अगली खुराक',
        addMed: 'दवा जोड़ें',
        addMember: 'सदस्य जोड़ें',
        householdHeading: 'परिवार के सदस्य',
        householdSub: 'परिवार के सदस्यों और देखभालकर्ताओं का प्रबंधन',
        householdDetails: 'परिवार का विवरण',
        medsTitle: 'दवाइयाँ और स्टॉक',
        medsSub: 'प्रिस्क्रिप्शन और शेष दवाइयों की गिनती',
        purchaseTitle: 'दवाइयों का खर्च',
        purchaseSub: 'मेडिकल स्टोर खरीद और बिल का इतिहास',
        newPurchase: 'नई खरीद दर्ज करें',
        thisMonth: 'इस महीने का खर्च',
        totalSpent: 'कुल खर्च',
        purchaseHistory: 'खरीद इतिहास',
        settingsTitle: 'सेटिंग्स और गोपनीयता',
        settingsSub: 'ऐप प्राथमिकताएं और डेटा प्रबंधन',
        language: 'भाषा (Language)',
        fontSize: 'अक्षरों का आकार',
        fontSizeSub: 'सुविधाजनक पढ़ने के लिए बदलें',
        activeRole: 'सक्रिय भूमिका',
        roleSub: 'अन्य डिवाइस की अनुमतियां जांचें',
        vibration: 'वाइब्रेशन फीडबैक',
        vibrationSub: 'कार्यों पर हल्का कंपन',
        doseReminders: 'दवा याद दिलाने वाले रिमाइंडर',
        backupTitle: 'डेटा और बैकअप',
        backupSub: 'आपकी स्वास्थ्य जानकारी आपके फोन के सुरक्षित डेटाबेस में ही रहती है।',
        exportBackup: 'बैकअप डाउनलोड करें',
        restoreBackup: 'बैकअप रीस्टोर करें',
        taken: 'ले ली',
        skip: 'छोड़ें',
        morning: 'सुबह (Morning)',
        noon: 'दोपहर (Noon)',
        evening: 'शाम (Evening)',
        night: 'रात (Night)',
        afterFood: 'खाने के बाद (After Food)',
        beforeFood: 'खाने से पहले (Before Food)',
        withFood: 'खाने के साथ (With Food)',
        anytime: 'किसी भी समय (Anytime)',
        listenAudio: 'सुनें',
        readingMedicine: 'दवा का विवरण सुनाया जा रहा है...',
        todayScheduleTab: "आज का शेड्यूल",
        calendarHistoryTab: "कैलेंडर इतिहास",
        adherenceRate: "अनुपालन",
        activeStreak: "लगातार दिन",
        dosesLogged: "दर्ज खुराकें",
        todayBtn: "आज",
        doseLogFor: "तारीख का दवा विवरण",
        allTaken: "सभी खुराकें ली गईं",
        partialTaken: "कुछ खुराकें ली गईं",
        missed: "छूट गईं",
        noMedsScheduled: "इस दिन के लिए कोई दवा निर्धारित नहीं है।",
        daysStreak: "दिन",
        weekdaysShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
        months: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']
      }
    };

    // --- Verified Indian Medicine Catalogue (NLEM 2022 & CDSCO Standards) ---
    const INDIAN_MED_CATALOGUE = [
      { id: 'cat_1', brand: "Telma 40", generic: "Telmisartan", strength: "40 mg", form: "Tablet", mfr: "Glenmark Pharmaceuticals", category: "Blood Pressure / Hypertension", source: "CDSCO / NLEM", foodTiming: "After Food" },
      { id: 'cat_2', brand: "Telma H", generic: "Telmisartan + Hydrochlorothiazide", strength: "40mg/12.5mg", form: "Tablet", mfr: "Glenmark", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_3', brand: "Telma 20", generic: "Telmisartan", strength: "20 mg", form: "Tablet", mfr: "Glenmark", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_4', brand: "Telma AM", generic: "Telmisartan + Amlodipine", strength: "40mg/5mg", form: "Tablet", mfr: "Glenmark", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_5', brand: "Amlong 5", generic: "Amlodipine", strength: "5 mg", form: "Tablet", mfr: "Micro Labs", category: "Blood Pressure / Hypertension", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_6', brand: "Amlong 2.5", generic: "Amlodipine", strength: "2.5 mg", form: "Tablet", mfr: "Micro Labs", category: "Blood Pressure / Hypertension", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_7', brand: "Cilacar 10", generic: "Cilnidipine", strength: "10 mg", form: "Tablet", mfr: "J.B. Chemicals", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_8', brand: "Cilacar 5", generic: "Cilnidipine", strength: "5 mg", form: "Tablet", mfr: "J.B. Chemicals", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_9', brand: "Cilacar 20", generic: "Cilnidipine", strength: "20 mg", form: "Tablet", mfr: "J.B. Chemicals", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_10', brand: "Starpress XL 25", generic: "Metoprolol Succinate", strength: "25 mg", form: "Tablet", mfr: "Lupin Ltd", category: "Heart and Cardiovascular Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_11', brand: "Starpress XL 50", generic: "Metoprolol Succinate", strength: "50 mg", form: "Tablet", mfr: "Lupin Ltd", category: "Heart and Cardiovascular Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_12', brand: "Ecosprin 75", generic: "Aspirin", strength: "75 mg", form: "Tablet", mfr: "USV Ltd", category: "Heart and Cardiovascular Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_13', brand: "Ecosprin 150", generic: "Aspirin", strength: "150 mg", form: "Tablet", mfr: "USV Ltd", category: "Heart and Cardiovascular Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_14', brand: "Ecosprin AV 75/20", generic: "Aspirin + Atorvastatin", strength: "75mg/20mg", form: "Capsule", mfr: "USV Ltd", category: "Heart and Cardiovascular Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_15', brand: "Atorva 10", generic: "Atorvastatin", strength: "10 mg", form: "Tablet", mfr: "Zydus Cadila", category: "Cholesterol", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_16', brand: "Atorva 20", generic: "Atorvastatin", strength: "20 mg", form: "Tablet", mfr: "Zydus Cadila", category: "Cholesterol", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_17', brand: "Atorva 40", generic: "Atorvastatin", strength: "40 mg", form: "Tablet", mfr: "Zydus Cadila", category: "Cholesterol", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_18', brand: "Rosuvas 10", generic: "Rosuvastatin", strength: "10 mg", form: "Tablet", mfr: "Sun Pharma", category: "Cholesterol", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_19', brand: "Rosuvas 20", generic: "Rosuvastatin", strength: "20 mg", form: "Tablet", mfr: "Sun Pharma", category: "Cholesterol", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_20', brand: "Concor 5", generic: "Bisoprolol", strength: "5 mg", form: "Tablet", mfr: "Merck Ltd", category: "Heart and Cardiovascular Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_21', brand: "Losar 50", generic: "Losartan", strength: "50 mg", form: "Tablet", mfr: "Unichem Labs", category: "Blood Pressure / Hypertension", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_22', brand: "Olmesar 20", generic: "Olmesartan Medoxomil", strength: "20 mg", form: "Tablet", mfr: "Macleods Pharma", category: "Blood Pressure / Hypertension", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_23', brand: "Envas 5", generic: "Enalapril", strength: "5 mg", form: "Tablet", mfr: "Cadila Pharma", category: "Blood Pressure / Hypertension", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_24', brand: "Glycomet 500", generic: "Metformin", strength: "500 mg", form: "Tablet", mfr: "USV Ltd", category: "Type 2 Diabetes", source: "NLEM", foodTiming: "With Food" },
      { id: 'cat_25', brand: "Glycomet 850", generic: "Metformin", strength: "850 mg", form: "Tablet", mfr: "USV Ltd", category: "Type 2 Diabetes", source: "NLEM", foodTiming: "With Food" },
      { id: 'cat_26', brand: "Glycomet 1000 SR", generic: "Metformin Sustained Release", strength: "1000 mg", form: "Tablet", mfr: "USV Ltd", category: "Type 2 Diabetes", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_27', brand: "Glycomet-GP 1", generic: "Metformin + Glimepiride", strength: "500mg/1mg", form: "Tablet", mfr: "USV Ltd", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_28', brand: "Glycomet-GP 2", generic: "Metformin + Glimepiride", strength: "500mg/2mg", form: "Tablet", mfr: "USV Ltd", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_29', brand: "Amaryl 1", generic: "Glimepiride", strength: "1 mg", form: "Tablet", mfr: "Sanofi India", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_30', brand: "Amaryl 2", generic: "Glimepiride", strength: "2 mg", form: "Tablet", mfr: "Sanofi India", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_31', brand: "Januvia 100", generic: "Sitagliptin", strength: "100 mg", form: "Tablet", mfr: "MSD Pharma", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_32', brand: "Galvus 50", generic: "Vildagliptin", strength: "50 mg", form: "Tablet", mfr: "Novartis India", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_33', brand: "Galvus Met 50/500", generic: "Vildagliptin + Metformin", strength: "50mg/500mg", form: "Tablet", mfr: "Novartis India", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "With Food" },
      { id: 'cat_34', brand: "Forxiga 10", generic: "Dapagliflozin", strength: "10 mg", form: "Tablet", mfr: "AstraZeneca", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_35', brand: "Jardiance 10", generic: "Empagliflozin", strength: "10 mg", form: "Tablet", mfr: "Boehringer Ingelheim", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_36', brand: "Rybelsus 3", generic: "Semaglutide", strength: "3 mg", form: "Tablet", mfr: "Novo Nordisk", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_37', brand: "Rybelsus 7", generic: "Semaglutide", strength: "7 mg", form: "Tablet", mfr: "Novo Nordisk", category: "Type 2 Diabetes", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_38', brand: "Human Mixtard 30/70", generic: "Biphasic Isophane Insulin", strength: "100 IU/ml", form: "Injection", mfr: "Novo Nordisk", category: "Type 1 Diabetes", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_39', brand: "Lantus Solostar", generic: "Insulin Glargine", strength: "100 IU/ml", form: "Injection", mfr: "Sanofi", category: "Type 1 Diabetes", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_40', brand: "Dolo 650", generic: "Paracetamol", strength: "650 mg", form: "Tablet", mfr: "Micro Labs Ltd", category: "Fever and Pain", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_41', brand: "Calpol 500", generic: "Paracetamol", strength: "500 mg", form: "Tablet", mfr: "GSK India", category: "Fever and Pain", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_42', brand: "Calpol 650", generic: "Paracetamol", strength: "650 mg", form: "Tablet", mfr: "GSK India", category: "Fever and Pain", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_43', brand: "Crocin 650", generic: "Paracetamol Advance", strength: "650 mg", form: "Tablet", mfr: "GlaxoSmithKline", category: "Fever and Pain", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_44', brand: "Crocin 120 Syrup", generic: "Paracetamol Paediatric", strength: "120 mg/5ml", form: "Syrup", mfr: "GSK India", category: "Fever and Pain", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_45', brand: "Meftal-Spas", generic: "Mefenamic Acid + Dicyclomine", strength: "250mg/10mg", form: "Tablet", mfr: "Blue Cross Labs", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_46', brand: "Meftal 500", generic: "Mefenamic Acid", strength: "500 mg", form: "Tablet", mfr: "Blue Cross Labs", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_47', brand: "Combiflam", generic: "Ibuprofen + Paracetamol", strength: "400mg/325mg", form: "Tablet", mfr: "Sanofi India", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_48', brand: "Zerodol-P", generic: "Aceclofenac + Paracetamol", strength: "100mg/325mg", form: "Tablet", mfr: "Ipca Laboratories", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_49', brand: "Zerodol-SP", generic: "Aceclofenac + Paracetamol + Serratiopeptidase", strength: "100mg/325mg/15mg", form: "Tablet", mfr: "Ipca Laboratories", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_50', brand: "Voveran 50 GE", generic: "Diclofenac Sodium", strength: "50 mg", form: "Tablet", mfr: "Novartis India", category: "Bone and Joint Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_51', brand: "Ultracet", generic: "Tramadol + Paracetamol", strength: "37.5mg/325mg", form: "Tablet", mfr: "Janssen India", category: "Fever and Pain", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_52', brand: "Pan 40", generic: "Pantoprazole", strength: "40 mg", form: "Tablet", mfr: "Alkem Laboratories", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_53', brand: "Pan-D", generic: "Pantoprazole + Domperidone SR", strength: "40mg/30mg", form: "Capsule", mfr: "Alkem Laboratories", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_54', brand: "Pantocid 40", generic: "Pantoprazole", strength: "40 mg", form: "Tablet", mfr: "Sun Pharma", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_55', brand: "Pantocid-D SR", generic: "Pantoprazole + Domperidone", strength: "40mg/30mg", form: "Capsule", mfr: "Sun Pharma", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_56', brand: "Omez 20", generic: "Omeprazole", strength: "20 mg", form: "Capsule", mfr: "Dr. Reddy's Labs", category: "Gastric and Acid Reflux", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_57', brand: "Omez-D", generic: "Omeprazole + Domperidone", strength: "20mg/10mg", form: "Capsule", mfr: "Dr. Reddy's Labs", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_58', brand: "Razo 20", generic: "Rabeprazole", strength: "20 mg", form: "Tablet", mfr: "Dr. Reddy's Labs", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_59', brand: "Rablet 20", generic: "Rabeprazole Sodium", strength: "20 mg", form: "Tablet", mfr: "Lupin Ltd", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_60', brand: "Gelusil MPS", generic: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone", strength: "Standard", form: "Syrup", mfr: "Pfizer Ltd", category: "Gastric and Acid Reflux", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_61', brand: "Digene Gel", generic: "Magnesium Hydroxide + Simethicone + Sodium Carboxymethylcellulose", strength: "Standard", form: "Syrup", mfr: "Abbott India", category: "Gastric and Acid Reflux", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_62', brand: "Cremaffin", generic: "Liquid Paraffin + Milk of Magnesia", strength: "Standard", form: "Syrup", mfr: "Abbott India", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_63', brand: "Duphalac", generic: "Lactulose", strength: "10 g/15ml", form: "Syrup", mfr: "Abbott India", category: "Gastric and Acid Reflux", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_64', brand: "Thyronorm 25", generic: "Thyroxine Sodium", strength: "25 mcg", form: "Tablet", mfr: "Abbott India", category: "Thyroid", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_65', brand: "Thyronorm 50", generic: "Thyroxine Sodium", strength: "50 mcg", form: "Tablet", mfr: "Abbott India", category: "Thyroid", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_66', brand: "Thyronorm 75", generic: "Thyroxine Sodium", strength: "75 mcg", form: "Tablet", mfr: "Abbott India", category: "Thyroid", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_67', brand: "Thyronorm 100", generic: "Thyroxine Sodium", strength: "100 mcg", form: "Tablet", mfr: "Abbott India", category: "Thyroid", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_68', brand: "Thyronorm 12.5", generic: "Thyroxine Sodium", strength: "12.5 mcg", form: "Tablet", mfr: "Abbott India", category: "Thyroid", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_69', brand: "Eltroxin 50", generic: "Levothyroxine Sodium", strength: "50 mcg", form: "Tablet", mfr: "GlaxoSmithKline", category: "Thyroid", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_70', brand: "Eltroxin 100", generic: "Levothyroxine Sodium", strength: "100 mcg", form: "Tablet", mfr: "GlaxoSmithKline", category: "Thyroid", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_71', brand: "Montair LC", generic: "Montelukast + Levocetirizine", strength: "10mg/5mg", form: "Tablet", mfr: "Cipla Ltd", category: "Asthma", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_72', brand: "Montair 10", generic: "Montelukast", strength: "10 mg", form: "Tablet", mfr: "Cipla Ltd", category: "Asthma", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_73', brand: "Allegra 120", generic: "Fexofenadine Hydrochloride", strength: "120 mg", form: "Tablet", mfr: "Sanofi India", category: "Respiratory Care", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_74', brand: "Allegra 180", generic: "Fexofenadine Hydrochloride", strength: "180 mg", form: "Tablet", mfr: "Sanofi India", category: "Respiratory Care", source: "CDSCO", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_75', brand: "Cetriz 10", generic: "Cetirizine", strength: "10 mg", form: "Tablet", mfr: "Alkem Laboratories", category: "Respiratory Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_76', brand: "Levocet 5", generic: "Levocetirizine", strength: "5 mg", form: "Tablet", mfr: "Hetero Healthcare", category: "Respiratory Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_77', brand: "Asthalin Inhaler", generic: "Salbutamol", strength: "100 mcg/puff", form: "Inhaler", mfr: "Cipla Ltd", category: "Asthma", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_78', brand: "Seroflo 250 Synchrobreathe", generic: "Salmeterol + Fluticasone Propionate", strength: "25mcg/250mcg", form: "Inhaler", mfr: "Cipla Ltd", category: "Asthma", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_79', brand: "Budecort 200 Inhaler", generic: "Budesonide", strength: "200 mcg", form: "Inhaler", mfr: "Cipla Ltd", category: "Asthma", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_80', brand: "Ascoril-D Plus", generic: "Dextromethorphan + Phenylephrine + Chlorpheniramine", strength: "Standard", form: "Syrup", mfr: "Glenmark", category: "Respiratory Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_81', brand: "Alex Syrup", generic: "Chlorpheniramine + Dextromethorphan + Phenylephrine", strength: "Standard", form: "Syrup", mfr: "Glenmark", category: "Respiratory Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_82', brand: "Cheston Cold", generic: "Cetirizine + Paracetamol + Phenylephrine", strength: "Standard", form: "Tablet", mfr: "Cipla Ltd", category: "Respiratory Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_83', brand: "Augmentin 625 Duo", generic: "Amoxicillin and Potassium Clavulanate", strength: "625 mg", form: "Tablet", mfr: "GSK India", category: "Respiratory Care", source: "CDSCO", foodTiming: "With Food" },
      { id: 'cat_84', brand: "Augmentin 375", generic: "Amoxicillin and Potassium Clavulanate", strength: "375 mg", form: "Tablet", mfr: "GSK India", category: "Respiratory Care", source: "CDSCO", foodTiming: "With Food" },
      { id: 'cat_85', brand: "Azithral 500", generic: "Azithromycin", strength: "500 mg", form: "Tablet", mfr: "Alembic Pharmaceuticals", category: "Respiratory Care", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_86', brand: "Azithral 250", generic: "Azithromycin", strength: "250 mg", form: "Tablet", mfr: "Alembic Pharmaceuticals", category: "Respiratory Care", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_87', brand: "Taxim-O 200", generic: "Cefixime", strength: "200 mg", form: "Tablet", mfr: "Alkem Laboratories", category: "Respiratory Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_88', brand: "Cifran 500", generic: "Ciprofloxacin", strength: "500 mg", form: "Tablet", mfr: "Sun Pharma", category: "General Supplements", source: "NLEM", foodTiming: "Before Food (Empty Stomach)" },
      { id: 'cat_89', brand: "Mahacef 200", generic: "Cefixime", strength: "200 mg", form: "Tablet", mfr: "Mankind Pharma", category: "Respiratory Care", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_90', brand: "Clavam 625", generic: "Amoxicillin and Potassium Clavulanate", strength: "625 mg", form: "Tablet", mfr: "Alkem Laboratories", category: "Respiratory Care", source: "CDSCO", foodTiming: "With Food" },
      { id: 'cat_91', brand: "Norflox-TZ", generic: "Norfloxacin + Tinidazole", strength: "400mg/600mg", form: "Tablet", mfr: "Cipla Ltd", category: "Gastric and Acid Reflux", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_92', brand: "Shelcal 500", generic: "Calcium + Vitamin D3", strength: "500 mg", form: "Tablet", mfr: "Torrent Pharma", category: "Bone and Joint Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_93', brand: "Shelcal-HD", generic: "Calcium Carbonate + Vitamin D3", strength: "500mg/500IU", form: "Tablet", mfr: "Torrent Pharma", category: "Bone and Joint Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_94', brand: "Becosules Z", generic: "Vitamin B-Complex with Vitamin C and Zinc", strength: "Standard", form: "Capsule", mfr: "Pfizer Ltd", category: "Vitamin Deficiency", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_95', brand: "Neurobion Forte", generic: "Vitamin B-Complex + Vitamin B12", strength: "Standard", form: "Tablet", mfr: "Procter & Gamble Health", category: "Vitamin Deficiency", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_96', brand: "Evion 400", generic: "Vitamin E (Tocopheryl Acetate)", strength: "400 mg", form: "Capsule", mfr: "Procter & Gamble Health", category: "Vitamin Deficiency", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_97', brand: "Limcee 500", generic: "Vitamin C (Ascorbic Acid)", strength: "500 mg", form: "Tablet", mfr: "Abbott India", category: "Vitamin Deficiency", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_98', brand: "Zincovit", generic: "Multivitamin + Multimineral with Zinc", strength: "Standard", form: "Tablet", mfr: "Apex Laboratories", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_99', brand: "Supradyn Daily", generic: "Multivitamin + Minerals + Amino Acids", strength: "Standard", form: "Tablet", mfr: "Bayer India", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_100', brand: "Uprise-D3 60K", generic: "Cholecalciferol (Vitamin D3)", strength: "60,000 IU", form: "Capsule", mfr: "Alkem Laboratories", category: "Bone and Joint Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_101', brand: "Tayo 60K", generic: "Vitamin D3 Chewable", strength: "60,000 IU", form: "Tablet", mfr: "Sun Pharma", category: "Bone and Joint Care", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_102', brand: "Livogen Z", generic: "Ferrous Fumarate + Folic Acid + Zinc", strength: "Standard", form: "Tablet", mfr: "Merck Ltd", category: "Vitamin Deficiency", source: "NLEM", foodTiming: "After Food" },
      { id: 'cat_103', brand: "Orofer XT", generic: "Ferrous Ascorbate + Folic Acid", strength: "100mg/1.5mg", form: "Tablet", mfr: "Emcure Pharma", category: "Vitamin Deficiency", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_104', brand: "Nexito 10", generic: "Escitalopram", strength: "10 mg", form: "Tablet", mfr: "Sun Pharma", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_105', brand: "Vertin 16", generic: "Betahistine Dihydrochloride", strength: "16 mg", form: "Tablet", mfr: "Abbott India", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_106', brand: "Stugeron 25", generic: "Cinnarizine", strength: "25 mg", form: "Tablet", mfr: "Johnson & Johnson", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_107', brand: "Gabapin NT", generic: "Gabapentin + Nortriptyline", strength: "100mg/10mg", form: "Tablet", mfr: "Intas Pharma", category: "General Supplements", source: "CDSCO", foodTiming: "After Food" },
      { id: 'cat_108', brand: "Moxicip Eye Drops", generic: "Moxifloxacin Ophthalmic", strength: "0.5% w/v", form: "Drops", mfr: "Cipla Ltd", category: "Respiratory Care", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_109', brand: "Ciplox Eye Drops", generic: "Ciprofloxacin Ophthalmic", strength: "0.3% w/v", form: "Drops", mfr: "Cipla Ltd", category: "Respiratory Care", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_110', brand: "Betadine 10% Ointment", generic: "Povidone Iodine", strength: "10% w/w", form: "Ointment", mfr: "Win-Medicare", category: "General Supplements", source: "NLEM", foodTiming: "Anytime" },
      { id: 'cat_111', brand: "Candid-B Cream", generic: "Clotrimazole + Beclomethasone Dipropionate", strength: "1%/0.025%", form: "Cream", mfr: "Glenmark", category: "General Supplements", source: "CDSCO", foodTiming: "Anytime" },
      { id: 'cat_112', brand: "Volini Gel", generic: "Diclofenac + Methyl Salicylate + Menthol", strength: "Standard", form: "Ointment", mfr: "Sun Pharma", category: "Bone and Joint Care", source: "CDSCO", foodTiming: "Anytime" }
    ];

    // --- Application State ---
    const AppState = {
      db: null,
      household: null,
      caretaker: null,
      members: [],
      medicines: [],
      purchases: [],
      todayDoses: [],
      activeMemberId: 'ALL',
      activeRole: 'CARETAKER',
      settings: {
        haptics: true,
        notifications: false,
        language: 'en',
        fontSize: 'normal'
      },
      calendar: {
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
        selectedDateKey: formatDateKey(new Date()),
        viewMode: 'today'
      }
    };

    // --- Deterministic Timezone-Safe Date Key Formatter ---
    function formatDateKey(dateObj) {
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth() + 1).padStart(2, '0');
      const d = String(dateObj.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    // --- Custom UI Confirmation Modal Helper ---
    function customConfirm(title, message) {
      return new Promise((resolve) => {
        const modal = document.getElementById('confirmModal');
        const titleEl = document.getElementById('confirmModalTitle');
        const msgEl = document.getElementById('confirmModalMessage');
        const cancelBtn = document.getElementById('confirmCancelBtn');
        const proceedBtn = document.getElementById('confirmProceedBtn');

        titleEl.textContent = title;
        msgEl.textContent = message;
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const cleanUp = () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          cancelBtn.onclick = null;
          proceedBtn.onclick = null;
        };

        cancelBtn.onclick = () => {
          cleanUp();
          resolve(false);
        };
        proceedBtn.onclick = () => {
          cleanUp();
          resolve(true);
        };
      });
    }

    // --- Haptic Feedback Helper ---
    function triggerHaptic(type = 'light') {
      if (!AppState.settings.haptics || !navigator.vibrate) return;
      try {
        if (type === 'light') navigator.vibrate(12);
        else if (type === 'success') navigator.vibrate([15, 40, 15]);
        else if (type === 'warning') navigator.vibrate([30, 40, 30]);
      } catch (err) {}
    }

    // --- Toast / Notification Banner ---
    function showToast(msg, type = 'info') {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      const toastIcon = document.getElementById('toastIcon');
      
      toastMsg.textContent = msg;
      if (type === 'success') {
        toastIcon.className = 'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-emerald-100 text-status-success';
        toastIcon.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
      } else if (type === 'warning') {
        toastIcon.className = 'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-status-warning';
        toastIcon.innerHTML = '<i data-lucide="alert-triangle" class="w-4 h-4"></i>';
      } else {
        toastIcon.className = 'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-teal-subtle text-teal-primary';
        toastIcon.innerHTML = '<i data-lucide="info" class="w-4 h-4"></i>';
      }
      lucide.createIcons({ root: toastIcon });

      toast.classList.remove('opacity-0', '-translate-y-24');
      toast.classList.add('opacity-100', 'translate-y-0');

      setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-24');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, 2600);
    }

    // --- Zero-Dependency Web Audio API Dose Alarm Synthesizer ---
    class AlarmAudioEngine {
      constructor() {
        this.ctx = null;
      }

      getContext() {
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        return this.ctx;
      }

      // Plays pleasant harmonic medical reminder chime (D5: 587Hz -> A5: 880Hz -> D6: 1175Hz)
      playChime(type = 'chime') {
        try {
          const ctx = this.getContext();
          if (!ctx) return false;

          const now = ctx.currentTime;
          const notes = type === 'urgent'
            ? [659.25, 659.25, 880.0]
            : [587.33, 880.0, 1174.66];

          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.16);

            gain.gain.setValueAtTime(0.0001, now + idx * 0.16);
            gain.gain.exponentialRampToValueAtTime(0.25, now + idx * 0.16 + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.16 + 0.42);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.16);
            osc.stop(now + idx * 0.16 + 0.45);
          });
          return true;
        } catch (e) {
          console.warn('Audio chime warning:', e);
          return false;
        }
      }
    }
    const AlarmEngine = new AlarmAudioEngine();

    // --- APPLY TRANSLATIONS REACTIVELY ---
    function applyTranslations() {
      const lang = AppState.settings.language || 'en';
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

      // Nav
      document.getElementById('nav-t-home').textContent = t.home;
      document.getElementById('nav-t-family').textContent = t.family;
      document.getElementById('nav-t-meds').textContent = t.medicines;
      document.getElementById('nav-t-purchases').textContent = t.purchases;
      document.getElementById('nav-t-settings').textContent = t.settings;

      // Headers & Titles
      document.getElementById('t-appName').textContent = t.appName;
      document.getElementById('t-todayDoses').textContent = t.todaySchedule;
      document.getElementById('t-upcomingDose').textContent = t.upcomingDose;
      document.getElementById('t-addMedBtn').textContent = t.addMed;
      document.getElementById('t-addMemberBtn').textContent = t.addMember;
      document.getElementById('t-householdHeading').textContent = t.householdHeading;
      document.getElementById('t-householdSub').textContent = t.householdSub;
      document.getElementById('t-householdDetails').textContent = t.householdDetails;
      document.getElementById('t-medsTitle').textContent = t.medsTitle;
      document.getElementById('t-medsSub').textContent = t.medsSub;
      document.getElementById('t-addMedHeader').textContent = t.addMed;
      document.getElementById('t-purchaseTitle').textContent = t.purchaseTitle;
      document.getElementById('t-purchaseSub').textContent = t.purchaseSub;
      document.getElementById('t-newPurchaseBtn').textContent = t.newPurchase;
      document.getElementById('t-thisMonth').textContent = t.thisMonth;
      document.getElementById('t-totalSpent').textContent = t.totalSpent;
      document.getElementById('t-purchaseHistory').textContent = t.purchaseHistory;
      document.getElementById('t-settingsTitle').textContent = t.settingsTitle;
      document.getElementById('t-settingsSub').textContent = t.settingsSub;
      document.getElementById('t-languageLabel').textContent = t.language;
      document.getElementById('t-fontSizeLabel').textContent = t.fontSize;
      document.getElementById('t-fontSizeSub').textContent = t.fontSizeSub;
      document.getElementById('t-roleLabel').textContent = t.activeRole;
      document.getElementById('t-roleSub').textContent = t.roleSub;
      document.getElementById('t-hapticsLabel').textContent = t.vibration;
      document.getElementById('t-hapticsSub').textContent = t.vibrationSub;
      document.getElementById('t-notifLabel').textContent = t.doseReminders;
      document.getElementById('t-backupTitle').textContent = t.backupTitle;
      document.getElementById('t-backupSub').textContent = t.backupSub;
      document.getElementById('t-exportBtn').textContent = t.exportBackup;
      document.getElementById('t-restoreBtn').textContent = t.restoreBackup;

      // Calendar & Dose History Localized Labels
      if (document.getElementById('t-todayScheduleTab')) document.getElementById('t-todayScheduleTab').textContent = t.todayScheduleTab;
      if (document.getElementById('t-calendarHistoryTab')) document.getElementById('t-calendarHistoryTab').textContent = t.calendarHistoryTab;
      if (document.getElementById('t-adherenceRate')) document.getElementById('t-adherenceRate').textContent = t.adherenceRate;
      if (document.getElementById('t-activeStreak')) document.getElementById('t-activeStreak').textContent = t.activeStreak;
      if (document.getElementById('t-dosesLogged')) document.getElementById('t-dosesLogged').textContent = t.dosesLogged;
      if (document.getElementById('calTodayBtn')) document.getElementById('calTodayBtn').textContent = t.todayBtn;
      if (document.getElementById('t-legAll')) document.getElementById('t-legAll').textContent = t.allTaken;
      if (document.getElementById('t-legPartial')) document.getElementById('t-legPartial').textContent = t.partialTaken;
      if (document.getElementById('t-legMissed')) document.getElementById('t-legMissed').textContent = t.missed;
    }

    // --- MULTILINGUAL SCHEDULE & TIMING HELPERS ---
    function getTimeCategory(timeSlot) {
      const lower = (timeSlot || '').toLowerCase();
      if (lower.includes('morn')) return 'morning';
      if (lower.includes('noon') || lower.includes('afternoon') || lower.includes('13:00') || lower.includes('12:00')) return 'noon';
      if (lower.includes('eve') || lower.includes('18:00') || lower.includes('17:00')) return 'evening';
      if (lower.includes('night') || lower.includes('bed') || lower.includes('21:00') || lower.includes('22:00')) return 'night';

      const m = (timeSlot || '').match(/(\d+):(\d+)\s*(AM|PM)?/i);
      if (m) {
        let hour = parseInt(m[1], 10);
        const meridian = (m[3] || '').toUpperCase();
        if (meridian === 'PM' && hour < 12) hour += 12;
        if (meridian === 'AM' && hour === 12) hour = 0;

        if (hour >= 4 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 16) return 'noon';
        if (hour >= 16 && hour < 20) return 'evening';
        return 'night';
      }
      return 'morning';
    }

    function localizeTimeSlot(timeSlot, lang = 'en', includeTime = true) {
      const cat = getTimeCategory(timeSlot);
      const labels = {
        en: { morning: 'Morning', noon: 'Afternoon / Noon', evening: 'Evening', night: 'Night' },
        te: { morning: 'ఉదయం (Morning)', noon: 'మధ్యాహ్నం (Noon)', evening: 'సాయంత్రం (Evening)', night: 'రాత్రి (Night)' },
        hi: { morning: 'सुबह (Morning)', noon: 'दोपहर (Noon)', evening: 'शाम (Evening)', night: 'रात (Night)' }
      };
      const l = labels[lang] || labels.en;
      const slotName = l[cat] || timeSlot;
      return includeTime ? `${slotName} • ${timeSlot}` : slotName;
    }

    function localizeTimeSlotShort(timeSlot, lang = 'en') {
      const cat = getTimeCategory(timeSlot);
      const shortLabels = {
        en: { morning: 'AM', noon: 'NOON', evening: 'EVE', night: 'NIGHT' },
        te: { morning: 'ఉదయం', noon: 'మధ్యాహ్నం', evening: 'సాయంత్రం', night: 'రాత్రి' },
        hi: { morning: 'सुबह', noon: 'दोपहर', evening: 'शाम', night: 'रात' }
      };
      const l = shortLabels[lang] || shortLabels.en;
      return l[cat] || (timeSlot.split(' ')[1] || 'AM');
    }

    function localizeFoodTiming(foodTiming, lang = 'en', includeEnglish = true) {
      const lower = (foodTiming || '').toLowerCase();
      const labels = {
        en: {
          after: 'After Food',
          before: 'Before Food (Empty Stomach)',
          with: 'With Food',
          anytime: 'Anytime'
        },
        te: {
          after: includeEnglish ? 'భోజనం తర్వాత (After Food)' : 'భోజనం తర్వాత',
          before: includeEnglish ? 'భోజనానికి ముందు (Before Food)' : 'భోజనానికి ముందు',
          with: includeEnglish ? 'భోజనంతో పాటు (With Food)' : 'భోజనంతో పాటు',
          anytime: includeEnglish ? 'ఎప్పుడైనా (Anytime)' : 'ఎప్పుడైనా'
        },
        hi: {
          after: includeEnglish ? 'खाने के बाद (After Food)' : 'खाने के बाद',
          before: includeEnglish ? 'खाने से पहले (Before Food)' : 'खाने से पहले',
          with: includeEnglish ? 'खाने के साथ (With Food)' : 'खाने के साथ',
          anytime: includeEnglish ? 'किसी भी समय (Anytime)' : 'किसी भी समय'
        }
      };
      const l = labels[lang] || labels.en;
      if (lower.includes('before') || lower.includes('empty')) return l.before;
      if (lower.includes('with')) return l.with;
      if (lower.includes('any')) return l.anytime;
      return l.after;
    }

    // --- Universal Web Speech API Engine (Pre-Cached Indian Accent for Chrome, Safari, Edge, Android & iOS) ---
    let cachedSystemVoices = [];
    function preloadSystemVoices() {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        cachedSystemVoices = window.speechSynthesis.getVoices() || [];
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => {
            cachedSystemVoices = window.speechSynthesis.getVoices() || [];
            updateTtsIndicator();
          };
        }
      }
    }
    preloadSystemVoices();

    function getBestIndianVoice(targetLang) {
      const voices = cachedSystemVoices.length > 0 ? cachedSystemVoices : (window.speechSynthesis ? window.speechSynthesis.getVoices() : []);
      if (!voices || voices.length === 0) return null;

      const lang = (targetLang || 'en').toLowerCase();

      // Priority 1: Aarti voice (Microsoft Aarti Online Natural or Google Aarti)
      const aarti = voices.find(v => v.name.toLowerCase().includes('aarti'));
      if (aarti) return aarti;

      // Priority 2: Safari / Apple iOS & macOS Indian voices (Rishi, Sangeeta, Veena, Lekha, Neel, Isha, Karan)
      const appleIndianNames = ['rishi', 'sangeeta', 'veena', 'lekha', 'neel', 'isha', 'karan'];
      for (const name of appleIndianNames) {
        const v = voices.find(voice => voice.name.toLowerCase().includes(name));
        if (v && (lang === 'en' || v.lang.toLowerCase().includes(lang))) return v;
      }

      // Priority 3: Google Chrome & Android Indian Voices (Google English India, Google हिन्दी, Google తెలుగు, en-in-x, hi-in-x, te-in-x)
      if (lang === 'te') {
        const teVoice = voices.find(v => v.lang.startsWith('te') || v.name.toLowerCase().includes('telugu') || v.name.toLowerCase().includes('mohan'));
        if (teVoice) return teVoice;
      } else if (lang === 'hi') {
        const hiVoice = voices.find(v => v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi') || v.name.toLowerCase().includes('kalpana') || v.name.toLowerCase().includes('hemant'));
        if (hiVoice) return hiVoice;
      }
      const googleInd = voices.find(v => (v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('chrome')) && (v.lang.toLowerCase().includes('in') || v.name.toLowerCase().includes('india')));
      if (googleInd) return googleInd;

      // Priority 4: Microsoft Indian Voices (Heera, Ravi, Neerja, Kalpana, Hemant, Mohan)
      const msIndianNames = ['neerja', 'heera', 'ravi', 'kalpana', 'hemant', 'mohan'];
      for (const name of msIndianNames) {
        const v = voices.find(voice => voice.name.toLowerCase().includes(name));
        if (v) return v;
      }

      // Priority 5: Any voice with lang ending in -IN or _IN
      const anyIndian = voices.find(v => {
        const l = v.lang.toLowerCase().replace('_', '-');
        return l === 'en-in' || l === 'hi-in' || l === 'te-in' || l.endsWith('-in') || v.name.toLowerCase().includes('india');
      });
      if (anyIndian) return anyIndian;

      // Priority 6: Standard language match
      return voices.find(v => v.lang.toLowerCase().startsWith(lang)) || null;
    }

    function updateTtsIndicator() {
      const ind = document.getElementById('ttsDetectedVoice');
      if (!ind) return;
      const lang = (AppState.settings && AppState.settings.language) || 'en';
      const voice = getBestIndianVoice(lang);
      if (voice) {
        ind.textContent = `Active: ${voice.name.split('-')[0].trim()}`;
      } else {
        ind.textContent = 'Natural Indian Accent Engine (Ready)';
      }
    }

    function speakMedicineDose(medName, strength, doseUnits, timeSlot, foodTiming) {
      if (!('speechSynthesis' in window)) {
        showToast('Speech audio is not supported in this browser', 'warning');
        return;
      }

      window.speechSynthesis.cancel();

      const lang = AppState.settings.language || 'en';
      const slotText = localizeTimeSlot(timeSlot, lang, false);
      const foodText = localizeFoodTiming(foodTiming, lang, false);

      let speechText = '';
      let langCode = 'en-IN';

      if (lang === 'te') {
        langCode = 'te-IN';
        speechText = `${medName}, ${strength || ''}. మోతాదు, ${doseUnits || '1'}. ${slotText} సమయం, ${foodText} వేసుకోండి.`;
      } else if (lang === 'hi') {
        langCode = 'hi-IN';
        speechText = `${medName}, ${strength || ''}. मात्रा, ${doseUnits || '1'}. ${slotText} का समय, ${foodText} लें.`;
      } else {
        langCode = 'en-IN';
        speechText = `${medName}, ${strength || ''}. Please take ${doseUnits || '1'}. Scheduled for ${slotText}, ${foodText}.`;
      }

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = langCode;
      utterance.rate = 0.88; // Natural conversational cadence for medical guidance
      utterance.pitch = 1.04; // Natural human voice inflection

      const selectedVoice = getBestIndianVoice(lang);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Safari/iOS WebKit safety timeout
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 40);

      const voiceLabel = selectedVoice ? ` (${selectedVoice.name.split('-')[0].trim()})` : '';
      showToast(`🔊 Reading: ${medName}${voiceLabel}`, 'info');
    }

    // --- ENFORCE ROLE PERMISSIONS ON UI ---
    function applyRolePermissions() {
      const role = AppState.activeRole || 'CARETAKER';

      // 1. Household & Member Management permissions (Caretaker only)
      const editHouseholdBtn = document.getElementById('editHouseholdBtn');
      const addMemberBtn = document.getElementById('addMemberBtn');
      if (editHouseholdBtn) {
        editHouseholdBtn.style.display = (role === 'CARETAKER') ? 'flex' : 'none';
      }
      if (addMemberBtn) {
        addMemberBtn.style.display = (role === 'CARETAKER') ? 'flex' : 'none';
      }

      // 2. Medicine Creation & OCR (Caretaker & Adult only; hidden for Family Member view)
      const addMedBtn = document.getElementById('addMedBtn');
      const scanMedBtn = document.getElementById('scanMedBtn');
      if (addMedBtn) {
        addMedBtn.style.display = (role === 'FAMILY_MEMBER') ? 'none' : 'flex';
      }
      if (scanMedBtn) {
        scanMedBtn.style.display = (role === 'FAMILY_MEMBER') ? 'none' : 'flex';
      }

      // 3. Purchase Recording (Caretaker & Adult only; hidden for Family Member)
      const newPurchaseBtn = document.getElementById('newPurchaseBtn');
      if (newPurchaseBtn) {
        newPurchaseBtn.style.display = (role === 'FAMILY_MEMBER') ? 'none' : 'flex';
      }

      // 4. Medicine Details Modal Actions
      const deleteMedBtn = document.getElementById('detailDeleteMedBtn');
      const editMedBtn = document.getElementById('detailEditMedBtn');
      const adjustStockBtn = document.getElementById('detailAdjustStockBtn');
      if (deleteMedBtn) {
        deleteMedBtn.style.display = (role === 'CARETAKER') ? 'block' : 'none';
      }
      if (editMedBtn) {
        editMedBtn.style.display = (role === 'CARETAKER') ? 'block' : 'none';
      }
      if (adjustStockBtn) {
        adjustStockBtn.style.display = (role === 'FAMILY_MEMBER') ? 'none' : 'block';
      }

      // 5. Data Management (Reset and Restore restricted to Caretaker)
      const resetDataBtn = document.getElementById('resetDataBtn');
      if (resetDataBtn) {
        if (role === 'CARETAKER') {
          resetDataBtn.disabled = false;
          resetDataBtn.classList.remove('opacity-40', 'cursor-not-allowed');
          resetDataBtn.title = 'Reset all data';
        } else {
          resetDataBtn.disabled = true;
          resetDataBtn.classList.add('opacity-40', 'cursor-not-allowed');
          resetDataBtn.title = 'Only Caretaker can reset data';
        }
      }
    }

    // Apply font size globally to root document element so all rem-based Tailwind utility classes scale
    function applyFontSize() {
      const root = document.documentElement;
      const body = document.getElementById('appBody');
      const size = (AppState.settings && AppState.settings.fontSize) || 'normal';
      
      root.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-extra');
      root.classList.add(`font-scale-${size}`);

      if (size === 'large') {
        root.style.fontSize = '17px';
        if (body) body.style.fontSize = '17px';
      } else if (size === 'extra') {
        root.style.fontSize = '19px';
        if (body) body.style.fontSize = '19px';
      } else {
        root.style.fontSize = '15px';
        if (body) body.style.fontSize = '15px';
      }
    }

    // --- INDEXEDDB ENGINE ---
    const DB_NAME = 'MEDIC_FamilyMed_DB';
    const DB_VERSION = 1;

    function initIndexedDB() {
      return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);

        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains('Households')) db.createObjectStore('Households', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('Caretakers')) db.createObjectStore('Caretakers', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('FamilyMembers')) {
            const store = db.createObjectStore('FamilyMembers', { keyPath: 'id' });
            store.createIndex('householdId', 'householdId', { unique: false });
          }
          if (!db.objectStoreNames.contains('Conditions')) db.createObjectStore('Conditions', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('MedicineCatalogue')) {
            const catStore = db.createObjectStore('MedicineCatalogue', { keyPath: 'id' });
            catStore.createIndex('brand', 'brand', { unique: false });
            catStore.createIndex('generic', 'generic', { unique: false });
          }
          if (!db.objectStoreNames.contains('MemberMedicines')) {
            const medStore = db.createObjectStore('MemberMedicines', { keyPath: 'id' });
            medStore.createIndex('memberId', 'memberId', { unique: false });
            medStore.createIndex('householdId', 'householdId', { unique: false });
          }
          if (!db.objectStoreNames.contains('MedicineSchedules')) {
            const schStore = db.createObjectStore('MedicineSchedules', { keyPath: 'id' });
            schStore.createIndex('medicineId', 'medicineId', { unique: false });
            schStore.createIndex('memberId', 'memberId', { unique: false });
          }
          if (!db.objectStoreNames.contains('DoseHistory')) {
            const doseStore = db.createObjectStore('DoseHistory', { keyPath: 'id' });
            doseStore.createIndex('medicineId', 'medicineId', { unique: false });
            doseStore.createIndex('memberId', 'memberId', { unique: false });
            doseStore.createIndex('dateKey', 'dateKey', { unique: false });
          }
          if (!db.objectStoreNames.contains('MedicineInventory')) {
            const invStore = db.createObjectStore('MedicineInventory', { keyPath: 'medicineId' });
            invStore.createIndex('householdId', 'householdId', { unique: false });
          }
          if (!db.objectStoreNames.contains('InventoryAdjustments')) {
            const adjStore = db.createObjectStore('InventoryAdjustments', { keyPath: 'id' });
            adjStore.createIndex('medicineId', 'medicineId', { unique: false });
          }
          if (!db.objectStoreNames.contains('Purchases')) {
            const purStore = db.createObjectStore('Purchases', { keyPath: 'id' });
            purStore.createIndex('householdId', 'householdId', { unique: false });
            purStore.createIndex('date', 'date', { unique: false });
          }
          if (!db.objectStoreNames.contains('PurchaseItems')) {
            const itemStore = db.createObjectStore('PurchaseItems', { keyPath: 'id' });
            itemStore.createIndex('purchaseId', 'purchaseId', { unique: false });
            itemStore.createIndex('medicineId', 'medicineId', { unique: false });
          }
          if (!db.objectStoreNames.contains('RefillHistory')) db.createObjectStore('RefillHistory', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('OCRRecords')) db.createObjectStore('OCRRecords', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('NotificationSettings')) db.createObjectStore('NotificationSettings', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('ApplicationSettings')) db.createObjectStore('ApplicationSettings', { keyPath: 'id' });
        };

        req.onsuccess = (e) => {
          AppState.db = e.target.result;
          resolve(AppState.db);
        };
        req.onerror = (e) => reject(e.target.error);
      });
    }

    function dbGetAll(storeName) {
      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }

    function dbPut(storeName, value) {
      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.put(value);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }

    function dbDelete(storeName, key) {
      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.delete(key);
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      });
    }

    // --- LOAD APP STATE ---
    async function loadAppState() {
      const households = await dbGetAll('Households');
      AppState.household = households[0] || null;
      AppState.members = await dbGetAll('FamilyMembers');
      AppState.medicines = await dbGetAll('MemberMedicines');
      AppState.purchases = await dbGetAll('Purchases');
      const purchaseItems = await dbGetAll('PurchaseItems');

      // Attach items to purchases
      AppState.purchases.forEach(p => {
        p.items = purchaseItems.filter(i => i.purchaseId === p.id);
      });

      // Synchronize latest stock
      const inventories = await dbGetAll('MedicineInventory');
      const invMap = {};
      inventories.forEach(i => invMap[i.medicineId] = i.currentQuantity);
      AppState.medicines.forEach(m => {
        if (invMap[m.id] !== undefined) {
          m.currentStock = invMap[m.id];
        }
      });

      // Load app settings
      const savedSettings = await dbGetAll('ApplicationSettings');
      if (savedSettings && savedSettings.length > 0) {
        const pref = savedSettings[0];
        AppState.settings.language = pref.language || 'en';
        AppState.settings.haptics = pref.haptics !== undefined ? pref.haptics : true;
        AppState.settings.fontSize = pref.fontSize || 'normal';
        AppState.activeRole = pref.activeRole || AppState.activeRole || 'CARETAKER';

        document.getElementById('settingLanguage').value = AppState.settings.language;
        document.getElementById('settingHaptics').checked = AppState.settings.haptics;
        document.getElementById('settingFontSize').value = AppState.settings.fontSize;
        if (document.getElementById('settingRole')) {
          document.getElementById('settingRole').value = AppState.activeRole;
        }
      }

      await computeTodayDoses();
      applyTranslations();
      applyFontSize();
      updateTtsIndicator();
      renderAll();
    }

    // --- COMPUTE TODAY'S DOSES ---
    async function computeTodayDoses() {
      const todayStr = new Date().toISOString().split('T')[0];
      const doseHistory = await dbGetAll('DoseHistory');
      const historyMap = {};
      doseHistory.filter(d => d.dateKey === todayStr).forEach(d => {
        historyMap[`${d.medicineId}_${d.timeSlot}`] = d;
      });

      const list = [];
      AppState.medicines.forEach(med => {
        if (AppState.activeMemberId !== 'ALL' && med.memberId !== AppState.activeMemberId) {
          return;
        }

        const member = AppState.members.find(m => m.id === med.memberId);
        (med.schedules || []).forEach(timeSlot => {
          const key = `${med.id}_${timeSlot}`;
          const existing = historyMap[key];
          list.push({
            medicineId: med.id,
            medicineName: med.brand,
            strength: med.strength,
            dosageForm: med.dosageForm,
            unitsPerDose: med.unitsPerDose || 1,
            foodTiming: med.foodTiming,
            memberId: med.memberId,
            memberName: member ? member.name : 'Family Member',
            timeSlot,
            status: existing ? existing.status : 'PENDING',
            takenTime: existing ? existing.recordedTime : null,
            dateKey: todayStr
          });
        });
      });

      list.sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
      AppState.todayDoses = list;
    }

    // --- TRANSACTIONAL DOSE RECORDING ---
    async function recordDoseStatus(medicineId, timeSlot, newStatus) {
      const todayStr = new Date().toISOString().split('T')[0];
      const doseKey = `${medicineId}_${timeSlot}_${todayStr}`;

      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(['DoseHistory', 'MedicineInventory', 'MemberMedicines'], 'readwrite');
        const doseStore = tx.objectStore('DoseHistory');
        const invStore = tx.objectStore('MedicineInventory');
        const medStore = tx.objectStore('MemberMedicines');

        const doseReq = doseStore.get(doseKey);
        doseReq.onsuccess = () => {
          const existing = doseReq.result;
          const wasTaken = existing && existing.status === 'TAKEN';
          const isNowTaken = newStatus === 'TAKEN';

          doseStore.put({
            id: doseKey,
            medicineId,
            timeSlot,
            dateKey: todayStr,
            status: newStatus,
            recordedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });

          if (!wasTaken && isNowTaken) {
            const invReq = invStore.get(medicineId);
            invReq.onsuccess = () => {
              const inv = invReq.result || { medicineId, currentQuantity: 0 };
              const med = AppState.medicines.find(m => m.id === medicineId);
              const deductUnits = med ? (med.unitsPerDose || 1) : 1;
              inv.currentQuantity = Math.max(0, (inv.currentQuantity || 0) - deductUnits);
              inv.lastUpdated = new Date().toISOString();
              invStore.put(inv);

              if (med) {
                med.currentStock = inv.currentQuantity;
                medStore.put(med);
              }
            };
          } else if (wasTaken && !isNowTaken) {
            const invReq = invStore.get(medicineId);
            invReq.onsuccess = () => {
              const inv = invReq.result || { medicineId, currentQuantity: 0 };
              const med = AppState.medicines.find(m => m.id === medicineId);
              const deductUnits = med ? (med.unitsPerDose || 1) : 1;
              inv.currentQuantity = (inv.currentQuantity || 0) + deductUnits;
              inv.lastUpdated = new Date().toISOString();
              invStore.put(inv);

              if (med) {
                med.currentStock = inv.currentQuantity;
                medStore.put(med);
              }
            };
          }
        };

        tx.oncomplete = async () => {
          triggerHaptic('success');
          await loadAppState();
          resolve(true);
        };
        tx.onerror = () => reject(tx.error);
      });
    }

    // --- CALENDAR & DOSE HISTORY ENGINE ---
    async function computeMonthAdherenceData(year, month) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayIndex = new Date(year, month, 1).getDay();
      const todayKey = formatDateKey(new Date());

      const allHistory = await dbGetAll('DoseHistory');
      const historyMap = {};
      allHistory.forEach(d => {
        historyMap[`${d.dateKey}_${d.medicineId}_${d.timeSlot}`] = d;
      });

      const dayStatusMap = {};
      let totalScheduledUpToToday = 0;
      let totalTakenUpToToday = 0;

      const activeMeds = AppState.medicines.filter(m => {
        return AppState.activeMemberId === 'ALL' || m.memberId === AppState.activeMemberId;
      });

      for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const doses = [];

        activeMeds.forEach(med => {
          (med.schedules || []).forEach(slot => {
            const hist = historyMap[`${dateKey}_${med.id}_${slot}`];
            const member = AppState.members.find(m => m.id === med.memberId);
            doses.push({
              medicineId: med.id,
              medicineName: med.brand,
              strength: med.strength,
              dosageForm: med.dosageForm,
              unitsPerDose: med.unitsPerDose || 1,
              foodTiming: med.foodTiming,
              memberId: med.memberId,
              memberName: member ? member.name : 'Family Member',
              timeSlot: slot,
              status: hist ? hist.status : (dateKey > todayKey ? 'UPCOMING' : 'PENDING'),
              recordedTime: hist ? hist.recordedTime : null,
              dateKey
            });
          });
        });

        const scheduled = doses.length;
        const taken = doses.filter(d => d.status === 'TAKEN').length;
        const skipped = doses.filter(d => d.status === 'SKIPPED').length;

        let compliance = 'NO_DOSES';
        if (scheduled > 0) {
          if (dateKey > todayKey && taken === 0 && skipped === 0) {
            compliance = 'FUTURE';
          } else if (taken === scheduled) {
            compliance = 'FULL';
          } else if (taken > 0 || skipped > 0) {
            compliance = 'PARTIAL';
          } else {
            compliance = 'MISSED';
          }

          if (dateKey <= todayKey) {
            totalScheduledUpToToday += scheduled;
            totalTakenUpToToday += taken;
          }
        }

        dayStatusMap[dateKey] = {
          day,
          dateKey,
          scheduled,
          taken,
          skipped,
          compliance,
          doses
        };
      }

      const adherenceRate = totalScheduledUpToToday > 0 
        ? Math.round((totalTakenUpToToday / totalScheduledUpToToday) * 100) 
        : 100;

      // Active Streak: Consecutive full adherence days up to today
      let streak = 0;
      const cursor = new Date();
      while (true) {
        const cKey = formatDateKey(cursor);
        const st = dayStatusMap[cKey];
        if (!st) {
          if (cKey < `${year}-${String(month + 1).padStart(2, '0')}-01`) break;
        } else {
          if (st.scheduled > 0) {
            if (st.compliance === 'FULL') {
              streak++;
            } else {
              break;
            }
          }
        }
        cursor.setDate(cursor.getDate() - 1);
        if (streak > 365) break;
      }

      return {
        daysInMonth,
        firstDayIndex,
        todayKey,
        dayStatusMap,
        totalScheduledUpToToday,
        totalTakenUpToToday,
        adherenceRate,
        streak
      };
    }

    async function renderCalendarScreen() {
      const todaySection = document.getElementById('todayScheduleSection');
      const calSection = document.getElementById('calendarHistorySection');
      const btnToday = document.getElementById('btnViewTodaySchedule');
      const btnCal = document.getElementById('btnViewCalendarHistory');

      if (!todaySection || !calSection || !btnToday || !btnCal) return;

      const isCal = AppState.calendar.viewMode === 'calendar';
      if (isCal) {
        todaySection.classList.add('hidden');
        calSection.classList.remove('hidden');
        btnCal.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all bg-white shadow-xs text-teal-primary flex items-center justify-center gap-1.5 touch-target';
        btnToday.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-charcoal-muted hover:text-charcoal flex items-center justify-center gap-1.5 touch-target';
      } else {
        todaySection.classList.remove('hidden');
        calSection.classList.add('hidden');
        btnToday.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all bg-white shadow-xs text-teal-primary flex items-center justify-center gap-1.5 touch-target';
        btnCal.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-charcoal-muted hover:text-charcoal flex items-center justify-center gap-1.5 touch-target';
        return;
      }

      const lang = (AppState.settings && AppState.settings.language) || 'en';
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const calData = await computeMonthAdherenceData(AppState.calendar.selectedYear, AppState.calendar.selectedMonth);

      // 1. Stats Cards
      const statAdh = document.getElementById('calStatAdherence');
      const statStreak = document.getElementById('calStatStreak');
      const statLogged = document.getElementById('calStatLogged');
      if (statAdh) statAdh.textContent = `${calData.adherenceRate}%`;
      if (statStreak) statStreak.textContent = `${calData.streak} ${t.daysStreak || 'Days'}`;
      if (statLogged) statLogged.textContent = `${calData.totalTakenUpToToday}/${calData.totalScheduledUpToToday}`;

      // 2. Month Navigation Title
      const monthTitle = document.getElementById('calCurrentMonthYear');
      if (monthTitle) {
        const mName = (t.months && t.months[AppState.calendar.selectedMonth]) || 'Month';
        monthTitle.textContent = `${mName} ${AppState.calendar.selectedYear}`;
      }

      // 3. Weekday Headers
      const weekdayContainer = document.getElementById('calWeekdayHeader');
      if (weekdayContainer && t.weekdaysShort) {
        weekdayContainer.innerHTML = t.weekdaysShort.map(w => `
          <div class="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider py-0.5">${w}</div>
        `).join('');
      }

      // 4. Days Grid
      const daysGrid = document.getElementById('calDaysGrid');
      if (daysGrid) {
        daysGrid.innerHTML = '';

        // Preceding blank padding cells
        for (let i = 0; i < calData.firstDayIndex; i++) {
          const blank = document.createElement('div');
          blank.className = 'aspect-square min-h-[38px] opacity-0 pointer-events-none';
          daysGrid.appendChild(blank);
        }

        // Days 1 .. N
        for (let day = 1; day <= calData.daysInMonth; day++) {
          const dateKey = `${AppState.calendar.selectedYear}-${String(AppState.calendar.selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayInfo = calData.dayStatusMap[dateKey] || { scheduled: 0, taken: 0, compliance: 'NO_DOSES' };
          const isSelected = dateKey === AppState.calendar.selectedDateKey;
          const isToday = dateKey === calData.todayKey;

          let dotClass = '';
          if (dayInfo.compliance === 'FULL') {
            dotClass = 'bg-status-success';
          } else if (dayInfo.compliance === 'PARTIAL') {
            dotClass = 'bg-status-warning';
          } else if (dayInfo.compliance === 'MISSED') {
            dotClass = 'bg-status-danger';
          }

          const dayCell = document.createElement('button');
          dayCell.type = 'button';
          dayCell.className = `aspect-square min-h-[38px] flex flex-col items-center justify-center rounded-xl p-1 transition-all touch-target text-center relative ${
            isSelected 
              ? 'ring-2 ring-teal-primary bg-teal-subtle text-teal-primary font-black shadow-xs' 
              : isToday 
                ? 'border border-teal-primary/50 bg-teal-50/30 text-charcoal font-bold' 
                : 'hover:bg-surface-subtle text-charcoal font-semibold'
          }`;

          dayCell.innerHTML = `
            <span class="text-xs leading-none">${day}</span>
            <div class="h-1.5 flex items-center justify-center mt-0.5">
              ${dotClass ? `<span class="w-1.5 h-1.5 rounded-full ${dotClass}"></span>` : ''}
            </div>
          `;

          dayCell.addEventListener('click', () => {
            triggerHaptic('light');
            AppState.calendar.selectedDateKey = dateKey;
            renderCalendarScreen();
          });

          daysGrid.appendChild(dayCell);
        }
      }

      // 5. Selected Day Detail Drawer
      renderCalendarDayDetails(calData);
      lucide.createIcons();
    }

    function renderCalendarDayDetails(calData) {
      const heading = document.getElementById('calSelectedDateHeading');
      const badge = document.getElementById('calSelectedDayBadge');
      const list = document.getElementById('calSelectedDoseList');
      if (!heading || !badge || !list) return;

      const lang = (AppState.settings && AppState.settings.language) || 'en';
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const selKey = AppState.calendar.selectedDateKey || calData.todayKey;
      const dayInfo = calData.dayStatusMap[selKey] || { scheduled: 0, taken: 0, doses: [] };

      // Format selected date heading
      const parts = selKey.split('-');
      const dObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      heading.textContent = dObj.toLocaleDateString(lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      badge.textContent = `${dayInfo.taken}/${dayInfo.scheduled} ${t.taken || 'Taken'}`;
      if (dayInfo.compliance === 'FULL') {
        badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-status-success';
      } else if (dayInfo.compliance === 'PARTIAL') {
        badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-status-warning';
      } else if (dayInfo.compliance === 'MISSED') {
        badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-status-danger';
      } else {
        badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-subtle text-charcoal-muted';
      }

      list.innerHTML = '';
      if (!dayInfo.doses || dayInfo.doses.length === 0) {
        list.innerHTML = `
          <div class="p-5 text-center text-xs text-charcoal-muted bg-surface-subtle rounded-xl border border-surface-border">
            ${t.noMedsScheduled || 'No medicines scheduled for this day.'}
          </div>
        `;
        return;
      }

      dayInfo.doses.forEach(dose => {
        const isTaken = dose.status === 'TAKEN';
        const isSkipped = dose.status === 'SKIPPED';
        const isToday = selKey === calData.todayKey;

        const card = document.createElement('div');
        card.className = `p-3 bg-surface-subtle border border-surface-border rounded-xl transition-all ${
          isTaken ? 'bg-emerald-50/40 border-emerald-200' : isSkipped ? 'bg-amber-50/40 border-amber-200' : ''
        }`;

        let statusBadgeHtml = '';
        if (isTaken) {
          statusBadgeHtml = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-status-success bg-emerald-100 px-2 py-0.5 rounded-md"><i data-lucide="check" class="w-3 h-3"></i> ${t.taken || 'Taken'} ${dose.recordedTime || ''}</span>`;
        } else if (isSkipped) {
          statusBadgeHtml = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-status-warning bg-amber-100 px-2 py-0.5 rounded-md"><i data-lucide="skip-forward" class="w-3 h-3"></i> ${t.skip || 'Skipped'}</span>`;
        } else if (dose.status === 'UPCOMING') {
          statusBadgeHtml = `<span class="text-[10px] font-semibold text-charcoal-muted bg-white border border-surface-border px-2 py-0.5 rounded-md">Scheduled</span>`;
        } else {
          statusBadgeHtml = `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-status-danger bg-rose-100 px-2 py-0.5 rounded-md"><i data-lucide="clock" class="w-3 h-3"></i> ${t.missed || 'Missed'}</span>`;
        }

        card.innerHTML = `
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0 flex-1 space-y-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-sm text-charcoal truncate">${dose.medicineName}</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white border border-surface-border text-charcoal-muted">${dose.strength || ''}</span>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-subtle text-teal-primary">${dose.memberName}</span>
              </div>
              <div class="text-xs text-charcoal-muted flex items-center gap-1.5 flex-wrap">
                <span>${localizeTimeSlot(dose.timeSlot, lang)}</span>
                <span>•</span>
                <span>${localizeFoodTiming(dose.foodTiming, lang)}</span>
              </div>
            </div>
            <div class="shrink-0 flex flex-col items-end gap-1.5">
              ${statusBadgeHtml}
              ${isToday && !isTaken ? `
                <button class="record-take-btn text-[11px] font-bold bg-teal-primary text-white px-2.5 py-1 rounded-lg touch-target" data-medid="${dose.medicineId}" data-time="${dose.timeSlot}">
                  Take
                </button>
              ` : ''}
            </div>
          </div>
        `;
        list.appendChild(card);
      });
    }

    function initCalendarEvents() {
      const btnToday = document.getElementById('btnViewTodaySchedule');
      const btnCal = document.getElementById('btnViewCalendarHistory');
      const btnPrev = document.getElementById('calPrevMonthBtn');
      const btnNext = document.getElementById('calNextMonthBtn');
      const btnJumpToday = document.getElementById('calTodayBtn');

      if (btnToday) {
        btnToday.addEventListener('click', () => {
          triggerHaptic('light');
          AppState.calendar.viewMode = 'today';
          renderCalendarScreen();
        });
      }

      if (btnCal) {
        btnCal.addEventListener('click', () => {
          triggerHaptic('light');
          AppState.calendar.viewMode = 'calendar';
          renderCalendarScreen();
        });
      }

      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          triggerHaptic('light');
          if (AppState.calendar.selectedMonth === 0) {
            AppState.calendar.selectedMonth = 11;
            AppState.calendar.selectedYear--;
          } else {
            AppState.calendar.selectedMonth--;
          }
          renderCalendarScreen();
        });
      }

      if (btnNext) {
        btnNext.addEventListener('click', () => {
          triggerHaptic('light');
          if (AppState.calendar.selectedMonth === 11) {
            AppState.calendar.selectedMonth = 0;
            AppState.calendar.selectedYear++;
          } else {
            AppState.calendar.selectedMonth++;
          }
          renderCalendarScreen();
        });
      }

      if (btnJumpToday) {
        btnJumpToday.addEventListener('click', () => {
          triggerHaptic('light');
          const now = new Date();
          AppState.calendar.selectedYear = now.getFullYear();
          AppState.calendar.selectedMonth = now.getMonth();
          AppState.calendar.selectedDateKey = formatDateKey(now);
          renderCalendarScreen();
        });
      }
    }

    // --- TRANSACTIONAL PURCHASE RECORDING & EDITING ---
    async function savePurchaseTransactional(purchaseData, itemsList, isEdit = false) {
      if (AppState.activeRole === 'FAMILY_MEMBER') {
        showToast('Family Members (View Mode) cannot record purchases', 'warning');
        return false;
      }
      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(['Purchases', 'PurchaseItems', 'MedicineInventory', 'MemberMedicines'], 'readwrite');
        const purStore = tx.objectStore('Purchases');
        const itemStore = tx.objectStore('PurchaseItems');
        const invStore = tx.objectStore('MedicineInventory');
        const medStore = tx.objectStore('MemberMedicines');

        // Put purchase header
        purStore.put(purchaseData);

        // Put purchase items and update inventory
        for (const item of itemsList) {
          itemStore.put(item);

          if (item.medicineId && !isEdit) {
            const invReq = invStore.get(item.medicineId);
            invReq.onsuccess = () => {
              let inv = invReq.result || {
                medicineId: item.medicineId,
                householdId: purchaseData.householdId,
                currentQuantity: 0
              };
              inv.currentQuantity = (inv.currentQuantity || 0) + Number(item.quantity || 0);
              inv.lastPurchaseDate = purchaseData.date;
              inv.lastPurchasePrice = Number(item.price || 0);
              invStore.put(inv);

              const medReq = medStore.get(item.medicineId);
              medReq.onsuccess = () => {
                const med = medReq.result;
                if (med) {
                  med.currentStock = inv.currentQuantity;
                  medStore.put(med);
                }
              };
            };
          }
        }

        tx.oncomplete = async () => {
          triggerHaptic('success');
          await loadAppState();
          resolve(true);
        };
        tx.onerror = () => reject(tx.error);
      });
    }

    // Delete purchase with stock reversal
    async function deletePurchaseTransactional(purchaseId) {
      if (AppState.activeRole !== 'CARETAKER') {
        showToast('Only Primary Caretakers can delete purchase records', 'warning');
        return false;
      }
      return new Promise((resolve, reject) => {
        const tx = AppState.db.transaction(['Purchases', 'PurchaseItems', 'MedicineInventory', 'MemberMedicines'], 'readwrite');
        const purStore = tx.objectStore('Purchases');
        const itemStore = tx.objectStore('PurchaseItems');
        const invStore = tx.objectStore('MedicineInventory');
        const medStore = tx.objectStore('MemberMedicines');

        const pur = AppState.purchases.find(p => p.id === purchaseId);
        if (pur && pur.items) {
          pur.items.forEach(it => {
            if (it.medicineId) {
              const invReq = invStore.get(it.medicineId);
              invReq.onsuccess = () => {
                const inv = invReq.result;
                if (inv) {
                  inv.currentQuantity = Math.max(0, (inv.currentQuantity || 0) - Number(it.quantity || 0));
                  invStore.put(inv);

                  const medReq = medStore.get(it.medicineId);
                  medReq.onsuccess = () => {
                    const med = medReq.result;
                    if (med) {
                      med.currentStock = inv.currentQuantity;
                      medStore.put(med);
                    }
                  };
                }
              };
            }
            itemStore.delete(it.id);
          });
        }

        purStore.delete(purchaseId);

        tx.oncomplete = async () => {
          triggerHaptic('warning');
          await loadAppState();
          resolve(true);
        };
        tx.onerror = () => reject(tx.error);
      });
    }

    // --- OCR ENGINE: PREPROCESSING & EXTRACTION ---
    let ocrWorker = null;
    let cameraStream = null;

    async function initOcrWorker() {
      if (!ocrWorker) {
        ocrWorker = await Tesseract.createWorker('eng');
      }
    }

    function preprocessImageForOCR(canvas, ctx, imgElement) {
      canvas.width = imgElement.naturalWidth || imgElement.videoWidth;
      canvas.height = imgElement.naturalHeight || imgElement.videoHeight;
      
      const maxDim = 1600;
      if (canvas.width > maxDim || canvas.height > maxDim) {
        const ratio = Math.min(maxDim / canvas.width, maxDim / canvas.height);
        canvas.width = Math.floor(canvas.width * ratio);
        canvas.height = Math.floor(canvas.height * ratio);
      }

      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imgData.data;

      for (let i = 0; i < d.length; i += 4) {
        const v = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
        const contrast = 1.35;
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        const finalColor = factor * (v - 128) + 128;
        d[i] = d[i + 1] = d[i + 2] = finalColor > 140 ? 255 : (finalColor < 90 ? 0 : finalColor);
      }
      ctx.putImageData(imgData, 0, 0);
      return canvas.toDataURL('image/png');
    }

    function parseIndianMedicineText(rawText) {
      const clean = rawText.replace(/\r\n/g, '\n');
      const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);

      let extracted = {
        brand: '',
        strength: '',
        generic: '',
        form: 'Tablet',
        mfr: '',
        confidence: 'Moderate'
      };

      const strengthRegex = /(\d+(\.\d+)?\s*(mg|mcg|gm|ml|%))/i;
      for (const line of lines) {
        const match = line.match(strengthRegex);
        if (match && !extracted.strength) {
          extracted.strength = match[0];
        }
      }

      if (/capsule/i.test(rawText)) extracted.form = 'Capsule';
      else if (/syrup|suspension|oral liquid/i.test(rawText)) extracted.form = 'Syrup';
      else if (/inhaler|rotacap/i.test(rawText)) extracted.form = 'Inhaler';
      else if (/drops/i.test(rawText)) extracted.form = 'Drops';
      else if (/ointment|cream/i.test(rawText)) extracted.form = 'Cream';
      else extracted.form = 'Tablet';

      let highestScore = 0;
      let matchedCatalogItem = null;

      for (const item of INDIAN_MED_CATALOGUE) {
        const brandRegex = new RegExp(item.brand.split(' ')[0], 'i');
        const genericRegex = new RegExp(item.generic.split(' ')[0], 'i');
        
        let score = 0;
        if (brandRegex.test(rawText)) score += 50;
        if (genericRegex.test(rawText)) score += 30;
        if (rawText.toLowerCase().includes(item.strength.toLowerCase())) score += 20;

        if (score > highestScore) {
          highestScore = score;
          matchedCatalogItem = item;
        }
      }

      if (matchedCatalogItem && highestScore >= 50) {
        extracted.brand = matchedCatalogItem.brand;
        extracted.generic = matchedCatalogItem.generic;
        extracted.strength = matchedCatalogItem.strength;
        extracted.form = matchedCatalogItem.form;
        extracted.mfr = matchedCatalogItem.mfr;
        extracted.confidence = 'High (Catalogue Verified)';
      } else {
        extracted.brand = lines[0] || 'Extracted Medicine';
        extracted.mfr = lines.find(l => /mfg|pharm|ltd|laboratories/i.test(l)) || '';
        extracted.confidence = 'Needs Verification';
      }

      return extracted;
    }

    // --- UI RENDERERS ---
    function renderAll() {
      renderProfileHeader();
      renderHomeScreen();
      renderCalendarScreen();
      renderFamilyScreen();
      renderMedicinesScreen();
      renderPurchasesScreen();
      applyRolePermissions();
      lucide.createIcons();
    }

    function renderProfileHeader() {
      const activeMember = AppState.members.find(m => m.id === AppState.activeMemberId);
      const nameElem = document.getElementById('profileName');
      const avatarElem = document.getElementById('profileAvatar');
      const roleBadge = document.getElementById('roleBadge');

      if (AppState.activeMemberId === 'ALL') {
        nameElem.textContent = 'All Family';
        avatarElem.textContent = 'ALL';
      } else if (activeMember) {
        nameElem.textContent = activeMember.name.split(' ')[0];
        avatarElem.textContent = activeMember.name[0];
      }

      if (AppState.activeRole === 'CARETAKER') {
        roleBadge.textContent = 'CARETAKER (FULL)';
        roleBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-subtle text-teal-primary uppercase tracking-wider';
      } else if (AppState.activeRole === 'ADULT') {
        roleBadge.textContent = 'ADULT (ROUTINE)';
        roleBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 uppercase tracking-wider';
      } else {
        roleBadge.textContent = 'MEMBER (VIEW)';
        roleBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-subtle text-charcoal-muted uppercase tracking-wider';
      }
      applyRolePermissions();
    }

    function renderHomeScreen() {
      const dateOpts = { weekday: 'short', day: 'numeric', month: 'short' };
      document.getElementById('currentDateDisplay').textContent = new Date().toLocaleDateString('en-IN', dateOpts);

      const takenCount = AppState.todayDoses.filter(d => d.status === 'TAKEN').length;
      const totalCount = AppState.todayDoses.length;
      document.getElementById('scheduleProgress').textContent = `${takenCount}/${totalCount} Taken`;

      // Refill & Low Stock Warnings with member highlight
      const alertsContainer = document.getElementById('homeAlertsContainer');
      alertsContainer.innerHTML = '';

      AppState.medicines.forEach(med => {
        const mem = AppState.members.find(m => m.id === med.memberId);
        const dailyRate = (med.schedules ? med.schedules.length : 1) * (med.unitsPerDose || 1);
        const daysLeft = dailyRate > 0 ? Math.floor((med.currentStock || 0) / dailyRate) : 99;

        if (daysLeft <= (med.refillThresholdDays || 5)) {
          const alert = document.createElement('div');
          alert.className = 'p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs';
          alert.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
              <i data-lucide="alert-circle" class="w-4 h-4 text-status-warning shrink-0"></i>
              <div class="min-w-0">
                <div class="font-bold text-charcoal truncate">${med.brand}</div>
                <div class="text-charcoal-muted flex items-center gap-1.5 mt-0.5">
                  <span class="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-bold">${mem ? mem.name : 'Family'}</span>
                  <span>${med.currentStock} left (~${daysLeft}d)</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button class="whatsapp-refill-btn px-2 py-1.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded-lg font-semibold flex items-center gap-1 touch-target" data-medid="${med.id}" title="Order Refill on WhatsApp">
                <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i> <span class="hidden sm:inline">WhatsApp</span>
              </button>
              <button class="quick-refill-btn px-2.5 py-1.5 bg-amber-600 text-white rounded-lg font-semibold shadow-xs" data-medid="${med.id}">
                Refill
              </button>
            </div>
          `;
          alertsContainer.appendChild(alert);
        }
      });

      // Next Scheduled Dose Spotlight (Fluid & Non-Cluttering with prominent name badge & TTS Speaker)
      const nextDoseCard = document.getElementById('nextDoseContent');
      const pendingDoses = AppState.todayDoses.filter(d => d.status === 'PENDING');
      if (pendingDoses.length > 0) {
        const next = pendingDoses[0];
        nextDoseCard.innerHTML = `
          <div class="upcoming-dose-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div class="space-y-1 min-w-0 flex-1">
              <div class="inline-flex items-center gap-1.5 bg-white/25 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide">
                <i data-lucide="user" class="w-3.5 h-3.5 shrink-0"></i>
                <span class="truncate">${next.memberName}</span>
              </div>
              <div class="flex items-center gap-2 mt-1 min-w-0">
                <div class="text-xl font-bold leading-tight break-words">${next.medicineName}</div>
                <button class="speak-dose-btn p-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white touch-target flex items-center justify-center shrink-0" 
                  title="Listen to medicine instructions" 
                  data-medname="${next.medicineName}" 
                  data-strength="${next.strength || ''}" 
                  data-dose="${next.unitsPerDose} ${next.dosageForm}" 
                  data-time="${next.timeSlot}" 
                  data-food="${next.foodTiming}">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="text-xs opacity-90">${next.strength} • ${next.unitsPerDose} ${next.dosageForm} • ${localizeFoodTiming(next.foodTiming, AppState.settings.language)}</div>
              <div class="text-xs font-semibold opacity-95">Scheduled: ${localizeTimeSlot(next.timeSlot, AppState.settings.language)}</div>
            </div>
            <button class="upcoming-dose-btn record-take-btn w-full sm:w-auto px-5 py-2.5 bg-white text-teal-primary font-bold rounded-xl text-xs shadow-sm touch-target shrink-0 text-center" data-medid="${next.medicineId}" data-time="${next.timeSlot}">
              Take Now
            </button>
          </div>
        `;
      } else if (totalCount > 0) {
        nextDoseCard.innerHTML = `
          <div class="text-lg font-bold">All Doses Completed</div>
          <div class="text-xs opacity-90">Great job! All prescribed medicines have been taken today.</div>
        `;
      } else {
        nextDoseCard.innerHTML = `
          <div class="text-lg font-bold">No Doses Scheduled</div>
          <div class="text-xs opacity-90">Tap '+ Add Medicine' to set a prescribed routine.</div>
        `;
      }

      // Today's Schedule List (Spacious Two-Tier Anti-Cluttering Design & TTS speaker)
      const todayList = document.getElementById('todayScheduleList');
      todayList.innerHTML = '';

      if (AppState.todayDoses.length === 0) {
        todayList.innerHTML = `<div class="p-6 text-center text-xs text-charcoal-muted bg-white border border-surface-border rounded-2xl">No medicines scheduled for this profile.</div>`;
        return;
      }

      AppState.todayDoses.forEach(dose => {
        const isTaken = dose.status === 'TAKEN';
        
        const card = document.createElement('div');
        card.className = `p-3.5 bg-white border border-surface-border rounded-2xl dose-card transition-all ${isTaken ? 'opacity-65 bg-emerald-50/40' : ''}`;
        
        card.innerHTML = `
          <div class="dose-card-inner flex items-start justify-between gap-2.5">
            <div class="flex items-start gap-2.5 min-w-0 flex-1">
              <div class="w-10 h-10 rounded-xl ${isTaken ? 'bg-emerald-100 text-status-success' : 'bg-surface-subtle text-teal-primary'} flex flex-col items-center justify-center shrink-0">
                <span class="text-[11px] font-bold leading-none">${dose.timeSlot.split(' ')[0]}</span>
                <span class="text-[9px] uppercase font-semibold leading-none mt-0.5">${localizeTimeSlotShort(dose.timeSlot, AppState.settings.language)}</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="px-2 py-0.5 rounded-md bg-teal-subtle text-teal-dark font-bold text-[11px] tracking-wide shrink-0">
                    ${dose.memberName}
                  </span>
                  <span class="text-xs font-semibold text-charcoal-muted">(${localizeFoodTiming(dose.foodTiming, AppState.settings.language)})</span>
                </div>
                <div class="font-bold text-sm text-charcoal mt-1 flex items-center gap-1.5 flex-wrap">
                  <span class="break-words leading-snug">${dose.medicineName}</span>
                  <span class="text-xs font-normal text-charcoal-muted shrink-0">${dose.strength}</span>
                  <button class="speak-dose-btn p-1 text-teal-primary hover:bg-teal-subtle rounded-md touch-target shrink-0" 
                    title="Listen to medicine instructions" 
                    data-medname="${dose.medicineName}" 
                    data-strength="${dose.strength || ''}" 
                    data-dose="${dose.unitsPerDose} ${dose.dosageForm}" 
                    data-time="${dose.timeSlot}" 
                    data-food="${dose.foodTiming}">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
                <div class="text-xs text-charcoal-muted mt-0.5">
                  ${dose.unitsPerDose} ${dose.dosageForm}
                </div>
              </div>
            </div>

            <div class="dose-card-actions flex items-center gap-1.5 shrink-0">
              ${isTaken ? `
                <span class="text-xs font-semibold text-status-success flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-lg">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> Taken
                </span>
                <button class="undo-dose-btn p-1.5 text-charcoal-muted hover:bg-surface-subtle rounded-lg touch-target" data-medid="${dose.medicineId}" data-time="${dose.timeSlot}" title="Undo dose">
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                </button>
              ` : `
                <button class="record-skip-btn px-2.5 py-1.5 text-xs text-charcoal-muted font-medium hover:bg-surface-subtle rounded-xl touch-target" data-medid="${dose.medicineId}" data-time="${dose.timeSlot}">
                  Skip
                </button>
                <button class="record-take-btn px-3 py-1.5 text-xs bg-teal-primary text-white font-semibold rounded-xl flex items-center gap-1 touch-target shadow-xs" data-medid="${dose.medicineId}" data-time="${dose.timeSlot}">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> Taken
                </button>
              `}
            </div>
          </div>
        `;
        todayList.appendChild(card);
      });
    }

    function renderFamilyScreen() {
      const list = document.getElementById('familyMembersList');
      list.innerHTML = '';

      document.getElementById('householdNameDisplay').textContent = AppState.household ? AppState.household.name : 'My Household';

      AppState.members.forEach(m => {
        const medCount = AppState.medicines.filter(med => med.memberId === m.id).length;
        const card = document.createElement('div');
        card.className = 'bg-white border border-surface-border rounded-2xl p-4 flex items-center justify-between';
        card.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-teal-subtle text-teal-primary font-bold flex items-center justify-center text-sm">
              ${m.name[0]}
            </div>
            <div>
              <div class="font-bold text-sm text-charcoal">${m.name}</div>
              <div class="text-xs text-charcoal-muted">${m.relation} • ${m.age || '--'} yrs</div>
              <div class="text-[11px] text-teal-dark mt-0.5">${m.conditions || 'No conditions listed'}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2 py-1 rounded-lg bg-surface-subtle text-charcoal">
              ${medCount} Meds
            </span>
            <button class="edit-member-btn p-2 text-charcoal-muted hover:text-teal-primary hover:bg-surface-subtle rounded-lg touch-target" data-memid="${m.id}">
              <i data-lucide="edit-2" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        list.appendChild(card);
      });
    }

    function renderMedicinesScreen() {
      const pillsContainer = document.getElementById('medProfileFilterPills');
      pillsContainer.innerHTML = '';

      const createPill = (id, label, active) => {
        const btn = document.createElement('button');
        btn.className = `px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${active ? 'bg-teal-primary text-white' : 'bg-white border border-surface-border text-charcoal-muted'}`;
        btn.textContent = label;
        btn.onclick = () => {
          AppState.activeMemberId = id;
          renderAll();
        };
        return btn;
      };

      pillsContainer.appendChild(createPill('ALL', 'All Family', AppState.activeMemberId === 'ALL'));
      AppState.members.forEach(m => {
        pillsContainer.appendChild(createPill(m.id, m.name.split(' ')[0], AppState.activeMemberId === m.id));
      });

      // Health Category Filters for Medicines View
      const catPillsContainer = document.getElementById('medCategoryFilterPills');
      if (catPillsContainer) {
        catPillsContainer.innerHTML = '';
        if (!AppState.activeCategoryFilter) AppState.activeCategoryFilter = 'ALL';
        
        const catOptions = [
          { id: 'ALL', label: 'All Categories' },
          { id: 'Type 2 Diabetes', label: '🍬 Diabetes' },
          { id: 'Blood Pressure / Hypertension', label: '🩸 Blood Pressure' },
          { id: 'Gastric and Acid Reflux', label: '🔥 Acidity' },
          { id: 'Fever and Pain', label: '💊 Fever & Pain' },
          { id: 'Heart and Cardiovascular Care', label: '🫀 Heart & Lipids' },
          { id: 'Thyroid', label: '🦋 Thyroid' },
          { id: 'Respiratory Care', label: '🫁 Asthma' },
          { id: 'Vitamin Deficiency', label: '🥗 Vitamins' }
        ];

        catOptions.forEach(opt => {
          const catBtn = document.createElement('button');
          const isAct = AppState.activeCategoryFilter === opt.id;
          catBtn.className = `px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors ${isAct ? 'bg-teal-primary text-white' : 'bg-surface-subtle border border-surface-border text-charcoal-muted hover:bg-surface'}`;
          catBtn.textContent = opt.label;
          catBtn.onclick = () => {
            AppState.activeCategoryFilter = opt.id;
            renderMedicinesScreen();
            lucide.createIcons();
          };
          catPillsContainer.appendChild(catBtn);
        });
      }

      const searchVal = (document.getElementById('medSearchInput').value || '').toLowerCase();
      const medList = document.getElementById('medicineInventoryList');
      medList.innerHTML = '';

      const filtered = AppState.medicines.filter(m => {
        const matchMember = AppState.activeMemberId === 'ALL' || m.memberId === AppState.activeMemberId;
        const matchCat = !AppState.activeCategoryFilter || AppState.activeCategoryFilter === 'ALL' || 
                         (m.category && (m.category === AppState.activeCategoryFilter || m.category.includes(AppState.activeCategoryFilter.split(' ')[0])));
        const matchSearch = m.brand.toLowerCase().includes(searchVal) || 
                            (m.generic && m.generic.toLowerCase().includes(searchVal)) ||
                            (m.category && m.category.toLowerCase().includes(searchVal));
        return matchMember && matchCat && matchSearch;
      });

      if (filtered.length === 0) {
        medList.innerHTML = `<div class="p-8 text-center text-xs text-charcoal-muted bg-white border border-surface-border rounded-2xl">No medicines found matching criteria.</div>`;
        return;
      }

      filtered.forEach(med => {
        const member = AppState.members.find(mem => mem.id === med.memberId);
        const dailyRate = (med.schedules ? med.schedules.length : 1) * (med.unitsPerDose || 1);
        const daysLeft = dailyRate > 0 ? Math.floor((med.currentStock || 0) / dailyRate) : 99;
        const isLow = daysLeft <= (med.refillThresholdDays || 5);

        const card = document.createElement('div');
        card.className = 'bg-white border border-surface-border rounded-2xl p-4 space-y-3';
        card.innerHTML = `
          <div class="flex items-start justify-between">
            <div>
              <div class="font-bold text-base text-charcoal flex items-center gap-1.5">
                ${med.brand}
                <span class="text-xs font-normal text-charcoal-muted">(${med.strength})</span>
              </div>
              <div class="text-xs text-charcoal-muted">${med.generic || ''} • ${med.dosageForm}</div>
              <div class="text-[11px] font-bold text-teal-dark mt-1 flex items-center gap-1 flex-wrap">
                <span class="bg-teal-subtle px-2 py-0.5 rounded">${member ? member.name : 'Family'}</span>
                <span class="text-charcoal-muted font-normal">• ${med.category}</span>
              </div>
            </div>
            <button class="med-detail-btn p-2 text-charcoal-muted hover:bg-surface-subtle rounded-lg touch-target" data-medid="${med.id}">
              <i data-lucide="more-vertical" class="w-4 h-4"></i>
            </button>
          </div>

          <div class="grid grid-cols-3 gap-2 bg-surface p-2.5 rounded-xl text-center text-xs">
            <div>
              <div class="text-[10px] text-charcoal-muted">Remaining</div>
              <div class="font-bold text-sm ${isLow ? 'text-status-warning' : 'text-charcoal'}">${med.currentStock || 0}</div>
            </div>
            <div>
              <div class="text-[10px] text-charcoal-muted">Routine</div>
              <div class="font-bold text-sm text-charcoal">${(med.schedules || []).length}x/day</div>
            </div>
            <div>
              <div class="text-[10px] text-charcoal-muted">Duration</div>
              <div class="font-bold text-sm ${isLow ? 'text-status-warning' : 'text-teal-primary'}">~${daysLeft} days</div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-1 text-xs">
            <span class="text-[11px] text-charcoal-muted">${med.foodTiming}</span>
            <div class="flex items-center gap-2">
              <button class="whatsapp-refill-btn text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 touch-target text-xs" data-medid="${med.id}" title="Order on WhatsApp">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp
              </button>
              <button class="quick-refill-btn text-teal-primary font-semibold flex items-center gap-1 touch-target" data-medid="${med.id}">
                <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Refill
              </button>
            </div>
          </div>
        `;
        medList.appendChild(card);
      });
    }

    function renderPurchasesScreen() {
      let thisMonthTotal = 0;
      let allTimeTotal = 0;
      const curMonth = new Date().toISOString().slice(0, 7);

      AppState.purchases.forEach(p => {
        const amt = Number(p.totalAmount || 0);
        allTimeTotal += amt;
        if (p.date && p.date.startsWith(curMonth)) {
          thisMonthTotal += amt;
        }
      });

      document.getElementById('expThisMonth').textContent = `₹${thisMonthTotal.toLocaleString('en-IN')}`;
      document.getElementById('expAllTime').textContent = `₹${allTimeTotal.toLocaleString('en-IN')}`;
      document.getElementById('expTxCountMonth').textContent = `${AppState.purchases.filter(p => p.date && p.date.startsWith(curMonth)).length} purchases this month`;
      document.getElementById('expAvgMonth').textContent = `₹${Math.round(allTimeTotal / Math.max(1, AppState.purchases.length))} avg/bill`;

      const list = document.getElementById('purchasesList');
      list.innerHTML = '';

      if (AppState.purchases.length === 0) {
        list.innerHTML = `<div class="p-8 text-center text-xs text-charcoal-muted bg-white border border-surface-border rounded-2xl">No purchases recorded yet.</div>`;
        return;
      }

      const sorted = [...AppState.purchases].sort((a, b) => b.date.localeCompare(a.date));

      sorted.forEach(p => {
        const items = p.items || [];
        const card = document.createElement('div');
        card.className = 'bg-white border border-surface-border rounded-2xl p-4 space-y-2';
        
        card.innerHTML = `
          <div class="flex items-start justify-between">
            <div>
              <div class="text-xs font-semibold text-charcoal-muted">${p.date} • ${p.paymentMode || 'Cash'}</div>
              <div class="font-bold text-sm text-charcoal">${p.pharmacy || 'Chemist Store'}</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-base font-bold text-teal-primary">₹${p.totalAmount}</div>
              <button class="edit-purchase-btn p-1.5 text-charcoal-muted hover:text-teal-primary rounded-lg touch-target" data-purid="${p.id}" title="Edit Purchase">
                <i data-lucide="edit-3" class="w-4 h-4"></i>
              </button>
              <button class="delete-purchase-btn p-1.5 text-charcoal-muted hover:text-status-danger rounded-lg touch-target" data-purid="${p.id}" title="Delete Purchase">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <div class="divide-y divide-surface-border pt-1">
            ${items.map(it => `
              <div class="py-1.5 flex items-center justify-between text-xs">
                <span class="text-charcoal font-medium">${it.medicineName} (${it.quantity} units)</span>
                <span class="text-charcoal-muted font-semibold">₹${it.price}</span>
              </div>
            `).join('')}
          </div>

          ${p.notes ? `<div class="text-[11px] text-charcoal-muted bg-surface p-2 rounded-lg">${p.notes}</div>` : ''}
        `;
        list.appendChild(card);
      });
    }

    // --- PURCHASE ITEM ROW CREATION HELPER ---
    function addPurchaseItemRow(prefillMedId = '', prefillPrice = '', prefillQty = 10) {
      const container = document.getElementById('purchaseItemsContainer');
      const rowId = `p_row_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;

      const row = document.createElement('div');
      row.className = 'p-3 bg-surface rounded-xl border border-surface-border space-y-2 purchase-item-row';
      row.id = rowId;

      row.innerHTML = `
        <div class="flex items-center justify-between">
          <select class="p-item-med w-2/3 bg-white border border-surface-border rounded-lg px-2 py-1.5 text-xs font-semibold">
            <option value="">Select Prescribed Medicine...</option>
            ${AppState.medicines.map(m => `
              <option value="${m.id}" ${m.id === prefillMedId ? 'selected' : ''}>${m.brand} (${m.strength})</option>
            `).join('')}
          </select>
          <button type="button" class="remove-p-row text-charcoal-muted hover:text-status-danger p-1">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] font-semibold text-charcoal-muted mb-0.5">Quantity (Units/Strips)</label>
            <input type="number" class="p-item-qty w-full bg-white border border-surface-border rounded-lg px-2 py-1 text-xs" value="${prefillQty}" required>
          </div>
          <div>
            <label class="block text-[10px] font-semibold text-charcoal-muted mb-0.5">Price Paid (₹)</label>
            <input type="number" class="p-item-price w-full bg-white border border-surface-border rounded-lg px-2 py-1 text-xs" value="${prefillPrice || 120}" required>
          </div>
        </div>
      `;

      container.appendChild(row);
      lucide.createIcons({ root: row });

      row.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('input', recalculatePurchaseTotal);
      });
      row.querySelector('.remove-p-row').onclick = () => {
        row.remove();
        recalculatePurchaseTotal();
      };

      recalculatePurchaseTotal();
    }

    function recalculatePurchaseTotal() {
      let total = 0;
      document.querySelectorAll('.purchase-item-row').forEach(r => {
        const p = Number(r.querySelector('.p-item-price').value || 0);
        total += p;
      });
      document.getElementById('purchaseTotalDisplay').textContent = `₹${total}`;
    }

    // --- NAVIGATION TAB SWITCHER ---
    function initNavigation() {
      const views = ['viewHome', 'viewFamily', 'viewMedicines', 'viewPurchases', 'viewSettings'];
      const navButtons = document.querySelectorAll('.nav-btn');

      navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          triggerHaptic('light');
          const target = btn.dataset.nav;

          views.forEach(v => {
            const el = document.getElementById(v);
            if (v === target) {
              el.classList.remove('hidden');
              el.classList.add('block');
            } else {
              el.classList.remove('block');
              el.classList.add('hidden');
            }
          });

          navButtons.forEach(b => {
            b.classList.remove('text-teal-primary');
            b.classList.add('text-charcoal-muted');
          });
          btn.classList.remove('text-charcoal-muted');
          btn.classList.add('text-teal-primary');
        });
      });
    }

    // --- CAMERA & OCR CONTROLS ---
    function initOcrUI() {
      const modal = document.getElementById('ocrModal');
      const startCamBtn = document.getElementById('startCamBtn');
      const capturePicBtn = document.getElementById('capturePicBtn');
      const fileInput = document.getElementById('fileImageInput');
      const cameraVideo = document.getElementById('cameraVideo');
      const cropCanvas = document.getElementById('cropCanvas');
      const imgPreview = document.getElementById('imagePreview');
      const placeholder = document.getElementById('cameraPlaceholder');
      const scanLine = document.getElementById('scanLine');

      const stopCamera = () => {
        if (cameraStream) {
          cameraStream.getTracks().forEach(t => t.stop());
          cameraStream = null;
        }
        cameraVideo.classList.add('hidden');
        capturePicBtn.classList.add('hidden');
        startCamBtn.classList.remove('hidden');
      };

      document.getElementById('closeOcrModalBtn').onclick = () => {
        stopCamera();
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      startCamBtn.onclick = async () => {
        try {
          cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
            audio: false
          });
          cameraVideo.srcObject = cameraStream;
          cameraVideo.classList.remove('hidden');
          placeholder.classList.add('hidden');
          imgPreview.classList.add('hidden');
          startCamBtn.classList.add('hidden');
          capturePicBtn.classList.remove('hidden');
        } catch (err) {
          showToast('Camera access blocked or unavailable', 'warning');
        }
      };

      capturePicBtn.onclick = () => {
        triggerHaptic('light');
        const ctx = cropCanvas.getContext('2d');
        const processedUrl = preprocessImageForOCR(cropCanvas, ctx, cameraVideo);
        stopCamera();
        imgPreview.src = processedUrl;
        imgPreview.classList.remove('hidden');
        placeholder.classList.add('hidden');
        runOcrOnImage(processedUrl);
      };

      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const ctx = cropCanvas.getContext('2d');
            const processedUrl = preprocessImageForOCR(cropCanvas, ctx, img);
            imgPreview.src = processedUrl;
            imgPreview.classList.remove('hidden');
            cameraVideo.classList.add('hidden');
            placeholder.classList.add('hidden');
            runOcrOnImage(processedUrl);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      };
    }

    async function runOcrOnImage(imageDataUrl) {
      const processBar = document.getElementById('ocrProcessBar');
      const scanLine = document.getElementById('scanLine');
      const reviewSection = document.getElementById('ocrReviewSection');

      processBar.classList.remove('hidden');
      reviewSection.classList.add('hidden');
      scanLine.classList.remove('hidden');

      try {
        await initOcrWorker();
        const ret = await ocrWorker.recognize(imageDataUrl);
        const parsed = parseIndianMedicineText(ret.data.text);

        scanLine.classList.add('hidden');
        processBar.classList.add('hidden');
        reviewSection.classList.remove('hidden');

        document.getElementById('ocrExtractedName').value = parsed.brand;
        document.getElementById('ocrExtractedStrength').value = parsed.strength;
        document.getElementById('ocrExtractedComp').value = parsed.generic;
        document.getElementById('ocrExtractedForm').value = parsed.form;
        document.getElementById('ocrExtractedMfr').value = parsed.mfr;
        document.getElementById('ocrConfidenceBadge').textContent = `Match: ${parsed.confidence}`;

        triggerHaptic('success');
      } catch (err) {
        scanLine.classList.add('hidden');
        processBar.classList.add('hidden');
        showToast('OCR engine error. Enter manually.', 'warning');
      }
    }

    document.getElementById('applyOcrToMedBtn').onclick = () => {
      document.getElementById('ocrModal').classList.add('hidden');
      document.getElementById('ocrModal').classList.remove('flex');

      document.getElementById('medFormBrand').value = document.getElementById('ocrExtractedName').value;
      document.getElementById('medFormStrength').value = document.getElementById('ocrExtractedStrength').value;
      document.getElementById('medFormGeneric').value = document.getElementById('ocrExtractedComp').value;
      document.getElementById('medFormDosageForm').value = document.getElementById('ocrExtractedForm').value;

      openMedicineModal();
    };

    // --- MODAL CONTROLS & EVENT BINDINGS ---
    // --- MODAL CONTROLS & HEALTH CATEGORY INTELLISENSE ---
    let activeModalCategory = 'ALL';

    function renderModalCategoryChips() {
      const container = document.getElementById('medModalCategoryChips');
      const badge = document.getElementById('medCategoryBadge');
      if (!container) return;

      container.innerHTML = '';
      const cats = [
        { id: 'ALL', label: '✨ All (112+)' },
        { id: 'Type 2 Diabetes', label: '🍬 Diabetes' },
        { id: 'Blood Pressure / Hypertension', label: '🩸 Blood Pressure' },
        { id: 'Gastric and Acid Reflux', label: '🔥 Acidity' },
        { id: 'Fever and Pain', label: '💊 Fever & Pain' },
        { id: 'Heart and Cardiovascular Care', label: '🫀 Heart' },
        { id: 'Thyroid', label: '🦋 Thyroid' },
        { id: 'Respiratory Care', label: '🫁 Asthma' },
        { id: 'Vitamin Deficiency', label: '🥗 Vitamins' },
        { id: 'Antibiotics & Infections', label: '🛡️ Antibiotics' }
      ];

      const count = activeModalCategory === 'ALL' 
        ? INDIAN_MED_CATALOGUE.length 
        : INDIAN_MED_CATALOGUE.filter(m => m.category === activeModalCategory || (m.category && m.category.includes(activeModalCategory.split(' ')[0]))).length;

      if (badge) {
        badge.textContent = activeModalCategory === 'ALL' 
          ? `All ${count} Medicines` 
          : `${count} Verified Medicines`;
      }

      cats.forEach(c => {
        const chip = document.createElement('button');
        chip.type = 'button';
        const isAct = activeModalCategory === c.id;
        chip.className = `px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors ${isAct ? 'bg-teal-primary text-white shadow-xs' : 'bg-surface-subtle border border-surface-border text-charcoal-muted hover:bg-surface'}`;
        chip.textContent = c.label;
        chip.onclick = () => {
          activeModalCategory = c.id;
          renderModalCategoryChips();
          
          const catSelect = document.getElementById('medFormCategory');
          if (c.id !== 'ALL' && catSelect) {
            const matchOpt = Array.from(catSelect.options).find(o => o.value === c.id || o.value.includes(c.id.split(' ')[0]));
            if (matchOpt) catSelect.value = matchOpt.value;
          }

          const brandInput = document.getElementById('medFormBrand');
          if (brandInput) {
            brandInput.dispatchEvent(new Event('input'));
          }
        };
        container.appendChild(chip);
      });
    }

    function openMedicineModal(editMed = null) {
      if (AppState.activeRole === 'FAMILY_MEMBER') {
        showToast('Prescription management is restricted to Caretakers', 'warning');
        return;
      }
      const modal = document.getElementById('medicineModal');
      const memberSelect = document.getElementById('medFormMemberId');
      const catSelect = document.getElementById('medFormCategory');
      const customCatContainer = document.getElementById('customCategoryContainer');
      const customCatField = document.getElementById('customCategoryField');
      const schedulePattern = document.getElementById('medSchedulePattern');
      const slotsContainer = document.getElementById('slotsScheduleContainer');
      const suggestionsBox = document.getElementById('medBrandSuggestions');
      if (suggestionsBox) suggestionsBox.classList.add('hidden');
      const autofillBadge = document.getElementById('medAutofillBadge');
      if (autofillBadge) autofillBadge.classList.add('hidden');

      memberSelect.innerHTML = AppState.members.map(m => `
        <option value="${m.id}" ${AppState.activeMemberId === m.id ? 'selected' : ''}>${m.name} (${m.relation})</option>
      `).join('');

      // Auto-detect member diagnosed health condition when selecting member
      const detectMemberConditionCategory = () => {
        const activeMem = AppState.members.find(m => m.id === memberSelect.value);
        if (activeMem && activeMem.conditions) {
          const condLower = activeMem.conditions.toLowerCase();
          if (condLower.includes('diabet')) activeModalCategory = 'Type 2 Diabetes';
          else if (condLower.match(/(hypertens|bp|blood pressure)/)) activeModalCategory = 'Blood Pressure / Hypertension';
          else if (condLower.includes('thyroid')) activeModalCategory = 'Thyroid';
          else if (condLower.match(/(heart|cardiac|cholesterol)/)) activeModalCategory = 'Heart and Cardiovascular Care';
          else if (condLower.match(/(asthma|respirat)/)) activeModalCategory = 'Respiratory Care';
          else if (condLower.match(/(acidity|gastric)/)) activeModalCategory = 'Gastric and Acid Reflux';
          else activeModalCategory = 'ALL';
        } else {
          activeModalCategory = 'ALL';
        }
        renderModalCategoryChips();
      };

      memberSelect.onchange = () => {
        if (!editMed) detectMemberConditionCategory();
      };

      // Category toggle listener
      catSelect.onchange = () => {
        if (catSelect.value === 'CUSTOM_CATEGORY') {
          customCatContainer.classList.remove('hidden');
        } else {
          customCatContainer.classList.add('hidden');
        }
      };

      // Schedule Pattern listener
      schedulePattern.onchange = () => {
        if (schedulePattern.value === 'SLOTS') {
          slotsContainer.classList.remove('hidden');
        } else {
          slotsContainer.classList.add('hidden');
        }
      };

      if (editMed) {
        document.getElementById('medicineModalTitle').textContent = 'Edit Medicine Routine';
        document.getElementById('medFormId').value = editMed.id;
        document.getElementById('medFormMemberId').value = editMed.memberId;
        document.getElementById('medFormBrand').value = editMed.brand;
        document.getElementById('medFormGeneric').value = editMed.generic || '';
        document.getElementById('medFormStrength').value = editMed.strength || '';
        document.getElementById('medFormDosageForm').value = editMed.dosageForm;
        
        // Category check
        activeModalCategory = editMed.category || 'ALL';
        renderModalCategoryChips();

        const knownOptions = Array.from(catSelect.options).map(o => o.value);
        if (knownOptions.includes(editMed.category)) {
          catSelect.value = editMed.category;
          customCatContainer.classList.add('hidden');
        } else {
          catSelect.value = 'CUSTOM_CATEGORY';
          customCatContainer.classList.remove('hidden');
          customCatField.value = editMed.category || '';
        }

        document.getElementById('medFormUnitsPerDose').value = editMed.unitsPerDose;
        document.getElementById('medFormFoodTiming').value = editMed.foodTiming;
        document.getElementById('medFormStock').value = editMed.currentStock;
        document.getElementById('medFormRefillDays').value = editMed.refillThresholdDays;
        
        schedulePattern.value = editMed.schedulePattern || 'SLOTS';
        schedulePattern.dispatchEvent(new Event('change'));
      } else {
        document.getElementById('medicineModalTitle').textContent = 'Prescribed Medicine';
        document.getElementById('medFormId').value = '';
        customCatContainer.classList.add('hidden');
        customCatField.value = '';
        schedulePattern.value = 'SLOTS';
        slotsContainer.classList.remove('hidden');
        detectMemberConditionCategory();
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // --- Google-Like Medicine Intellisense Autocomplete (NLEM/CDSCO Standard) ---
    function initMedicineIntellisense() {
      const brandInput = document.getElementById('medFormBrand');
      const suggestionsBox = document.getElementById('medBrandSuggestions');
      const autofillBadge = document.getElementById('medAutofillBadge');
      if (!brandInput || !suggestionsBox) return;

      let selectedIndex = -1;
      let currentMatches = [];

      function renderSuggestions(matches, query) {
        currentMatches = matches;
        selectedIndex = -1;
        if (!matches || matches.length === 0) {
          suggestionsBox.innerHTML = '';
          suggestionsBox.classList.add('hidden');
          return;
        }

        const qLower = (query || '').toLowerCase();
        suggestionsBox.innerHTML = matches.map((item, idx) => {
          const bName = item.brand;
          const matchIdx = qLower ? bName.toLowerCase().indexOf(qLower) : -1;
          let brandHtml = bName;
          if (matchIdx !== -1) {
            brandHtml = `${bName.substring(0, matchIdx)}<span class="text-teal-primary font-extrabold underline">${bName.substring(matchIdx, matchIdx + qLower.length)}</span>${bName.substring(matchIdx + qLower.length)}`;
          }

          return `
            <div class="intellisense-item p-3 hover:bg-teal-50/80 cursor-pointer transition-colors flex items-center justify-between text-left" data-index="${idx}">
              <div class="space-y-0.5 flex-1 pr-2">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-sm text-charcoal">${brandHtml}</span>
                  <span class="text-[11px] font-semibold text-teal-dark bg-teal-subtle px-1.5 py-0.5 rounded">${item.strength || ''}</span>
                  <span class="text-[10px] uppercase font-bold text-charcoal-muted border border-surface-border px-1.5 py-0.2 rounded">${item.form || 'Tab'}</span>
                </div>
                <div class="text-xs text-charcoal-muted truncate">
                  <span class="font-medium text-charcoal">${item.generic}</span> • ${item.mfr}
                </div>
                <div class="text-[10px] text-teal-primary font-medium flex items-center gap-1 mt-0.5">
                  <i data-lucide="shield-check" class="w-3 h-3"></i>
                  <span>${item.category} • ${item.source || 'NLEM/CDSCO'}</span>
                </div>
              </div>
              <div class="text-[10px] text-teal-dark font-semibold bg-surface-subtle border border-surface-border px-2 py-1 rounded-lg shrink-0">
                ↵ Auto-Fill
              </div>
            </div>
          `;
        }).join('');

        suggestionsBox.classList.remove('hidden');
        lucide.createIcons({ root: suggestionsBox });
      }

      function selectMedicine(item) {
        brandInput.value = item.brand;
        const genInput = document.getElementById('medFormGeneric');
        const strInput = document.getElementById('medFormStrength');
        const formSelect = document.getElementById('medFormDosageForm');
        const catSelect = document.getElementById('medFormCategory');
        const foodSelect = document.getElementById('medFormFoodTiming');

        if (genInput) genInput.value = item.generic || '';
        if (strInput) strInput.value = item.strength || '';
        if (formSelect && item.form) {
          const matchOpt = Array.from(formSelect.options).find(o => o.value.toLowerCase().includes(item.form.toLowerCase()));
          if (matchOpt) formSelect.value = matchOpt.value;
        }
        if (catSelect && item.category) {
          const matchCat = Array.from(catSelect.options).find(o => o.value.toLowerCase() === item.category.toLowerCase() || o.value.toLowerCase().includes(item.category.toLowerCase().split('/')[0].trim()));
          if (matchCat) catSelect.value = matchCat.value;
        }
        if (foodSelect && item.foodTiming) {
          const matchFood = Array.from(foodSelect.options).find(o => o.value.toLowerCase().includes(item.foodTiming.toLowerCase().split(' ')[0]));
          if (matchFood) foodSelect.value = matchFood.value;
        }

        suggestionsBox.classList.add('hidden');
        if (autofillBadge) {
          autofillBadge.classList.remove('hidden');
          autofillBadge.classList.add('flex');
          setTimeout(() => {
            autofillBadge.classList.add('hidden');
            autofillBadge.classList.remove('flex');
          }, 3500);
        }
        triggerHaptic('light');
        showToast(`Auto-filled: ${item.brand} (${item.generic})`, 'info');
      }

      brandInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        let dataset = INDIAN_MED_CATALOGUE;
        if (activeModalCategory && activeModalCategory !== 'ALL') {
          dataset = INDIAN_MED_CATALOGUE.filter(m => m.category === activeModalCategory || (m.category && m.category.includes(activeModalCategory.split(' ')[0])));
        }

        if (query.length < 1) {
          if (activeModalCategory && activeModalCategory !== 'ALL') {
            renderSuggestions(dataset.slice(0, 8), '');
          } else {
            suggestionsBox.classList.add('hidden');
          }
          return;
        }

        const p1 = [];
        const p2 = [];
        const p3 = [];

        dataset.forEach(item => {
          const bLower = item.brand.toLowerCase();
          const gLower = (item.generic || '').toLowerCase();
          const cLower = (item.category || '').toLowerCase();

          if (bLower.startsWith(query)) {
            p1.push(item);
          } else if (bLower.includes(query)) {
            p2.push(item);
          } else if (gLower.includes(query) || cLower.includes(query)) {
            p3.push(item);
          }
        });

        // Fallback to broader catalogue if category specific yielded few results
        if (p1.length + p2.length < 2 && dataset !== INDIAN_MED_CATALOGUE) {
          INDIAN_MED_CATALOGUE.forEach(item => {
            if (!dataset.includes(item)) {
              const bLower = item.brand.toLowerCase();
              if (bLower.startsWith(query)) p1.push(item);
              else if (bLower.includes(query)) p2.push(item);
            }
          });
        }

        const combined = [...p1, ...p2, ...p3].slice(0, 8);
        renderSuggestions(combined, query);
      });

      brandInput.addEventListener('focus', () => {
        if (!brandInput.value.trim() && activeModalCategory && activeModalCategory !== 'ALL') {
          brandInput.dispatchEvent(new Event('input'));
        }
      });

      brandInput.addEventListener('keydown', (e) => {
        if (suggestionsBox.classList.contains('hidden') || currentMatches.length === 0) return;

        const items = suggestionsBox.querySelectorAll('.intellisense-item');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = (selectedIndex + 1) % items.length;
          items.forEach((it, i) => it.classList.toggle('bg-teal-50', i === selectedIndex));
          items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = (selectedIndex - 1 + items.length) % items.length;
          items.forEach((it, i) => it.classList.toggle('bg-teal-50', i === selectedIndex));
          items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
          if (selectedIndex >= 0 && selectedIndex < currentMatches.length) {
            e.preventDefault();
            selectMedicine(currentMatches[selectedIndex]);
          }
        } else if (e.key === 'Escape') {
          suggestionsBox.classList.add('hidden');
        }
      });

      suggestionsBox.addEventListener('click', (e) => {
        const itemElem = e.target.closest('.intellisense-item');
        if (itemElem) {
          const idx = parseInt(itemElem.dataset.index, 10);
          if (currentMatches[idx]) {
            selectMedicine(currentMatches[idx]);
          }
        }
      });

      document.addEventListener('click', (e) => {
        if (!brandInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
          suggestionsBox.classList.add('hidden');
        }
      });
    }

    // --- WhatsApp Refill Order Generator (High-Impact Indian Healthcare Feature) ---
    function sendWhatsAppRefill(medId = null) {
      const householdName = AppState.household ? AppState.household.name : 'Our Household';
      let lines = [];

      if (medId) {
        const med = AppState.medicines.find(m => m.id === medId);
        if (!med) return;
        const mem = AppState.members.find(m => m.id === med.memberId);
        lines.push(`Namaste! Please deliver pharmacy medicine refill for *${householdName}*:`);
        lines.push(`• *${med.brand}* (${med.generic || ''} ${med.strength || ''}) - 2 Strips / Packs`);
        if (mem) lines.push(`Patient: ${mem.name} (${mem.relation})`);
      } else {
        const lowStock = AppState.medicines.filter(m => {
          const daily = (m.schedules ? m.schedules.length : 1) * (m.unitsPerDose || 1);
          const days = daily > 0 ? Math.floor((m.currentStock || 0) / daily) : 99;
          return days <= (m.refillThresholdDays || 7);
        });

        const targetList = lowStock.length > 0 ? lowStock : AppState.medicines.slice(0, 6);
        if (targetList.length === 0) {
          showToast('No medicines currently registered to order', 'warning');
          return;
        }

        lines.push(`Namaste! Please deliver medicine refill for *${householdName}*:`);
        targetList.forEach((m, idx) => {
          const mem = AppState.members.find(mem => mem.id === m.memberId);
          const patientStr = mem ? ` [Patient: ${mem.name}]` : '';
          lines.push(`${idx + 1}. *${m.brand}* (${m.generic || ''} ${m.strength || ''}) - 2 Strips${patientStr}`);
        });
      }

      lines.push(`\n(Sent via MEDIC Health App)`);
      const fullText = lines.join('\n');
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp Pharmacy Refill Order...', 'success');
    }

    function initModals() {
      initMedicineIntellisense();
      // Medicine Modal
      document.getElementById('closeMedModalBtn').onclick = () => {
        document.getElementById('medicineModal').classList.add('hidden');
        document.getElementById('medicineModal').classList.remove('flex');
      };
      document.getElementById('addDoseQuickBtn').onclick = () => openMedicineModal();
      document.getElementById('addMedHeaderBtn').onclick = () => openMedicineModal();
      document.getElementById('openScannerFromFormBtn').onclick = () => {
        document.getElementById('medicineModal').classList.add('hidden');
        document.getElementById('medicineModal').classList.remove('flex');
        document.getElementById('ocrModal').classList.remove('hidden');
        document.getElementById('ocrModal').classList.add('flex');
      };
      document.getElementById('scanMedHeaderBtn').onclick = () => {
        document.getElementById('ocrModal').classList.remove('hidden');
        document.getElementById('ocrModal').classList.add('flex');
      };

      // Member Modal & "Other" relation toggle
      const relSelect = document.getElementById('memberRelField');
      const customRelContainer = document.getElementById('customRelContainer');
      relSelect.onchange = () => {
        if (relSelect.value === 'Other') {
          customRelContainer.classList.remove('hidden');
        } else {
          customRelContainer.classList.add('hidden');
        }
      };

      document.getElementById('addMemberBtn').onclick = () => {
        if (AppState.activeRole !== 'CARETAKER') {
          showToast('Only Caretakers can add family members', 'warning');
          return;
        }
        document.getElementById('memberForm').reset();
        document.getElementById('memberIdField').value = '';
        document.getElementById('memberModalTitle').textContent = 'Add Family Member';
        customRelContainer.classList.add('hidden');
        document.getElementById('memberModal').classList.remove('hidden');
        document.getElementById('memberModal').classList.add('flex');
      };
      document.getElementById('closeMemberModalBtn').onclick = () => {
        document.getElementById('memberModal').classList.add('hidden');
        document.getElementById('memberModal').classList.remove('flex');
      };

      // Household Modal
      document.getElementById('editHouseholdBtn').onclick = () => {
        if (AppState.activeRole !== 'CARETAKER') {
          showToast('Only Caretakers can edit household settings', 'warning');
          return;
        }
        document.getElementById('householdNameInput').value = AppState.household ? AppState.household.name : 'Sharma Family';
        document.getElementById('householdModal').classList.remove('hidden');
        document.getElementById('householdModal').classList.add('flex');
      };
      document.getElementById('closeHouseholdModalBtn').onclick = () => {
        document.getElementById('householdModal').classList.add('hidden');
        document.getElementById('householdModal').classList.remove('flex');
      };

      // Purchase Modal
      document.getElementById('recordPurchaseBtn').onclick = () => {
        document.getElementById('purchaseForm').reset();
        document.getElementById('purchaseEditId').value = '';
        document.getElementById('purchaseModalTitle').textContent = 'Record Medicine Purchase';
        document.getElementById('purchaseDateField').value = new Date().toISOString().split('T')[0];
        document.getElementById('purchaseItemsContainer').innerHTML = '';
        addPurchaseItemRow();
        document.getElementById('purchaseModal').classList.remove('hidden');
        document.getElementById('purchaseModal').classList.add('flex');
      };
      document.getElementById('closePurchaseModalBtn').onclick = () => {
        document.getElementById('purchaseModal').classList.add('hidden');
        document.getElementById('purchaseModal').classList.remove('flex');
      };
      document.getElementById('addPurchaseItemRowBtn').onclick = () => addPurchaseItemRow();
      document.getElementById('scanBillBtn').onclick = () => {
        document.getElementById('ocrModal').classList.remove('hidden');
        document.getElementById('ocrModal').classList.add('flex');
      };

      // Profile Switcher Sheet
      document.getElementById('profileSelectorBtn').onclick = () => {
        const sheet = document.getElementById('profileSheet');
        const container = document.getElementById('profileSheetOptions');
        container.innerHTML = `
          <button class="w-full text-left p-3 rounded-xl border border-surface-border text-sm font-semibold flex items-center justify-between ${AppState.activeMemberId === 'ALL' ? 'bg-teal-subtle text-teal-primary' : 'bg-surface'}" data-memid="ALL">
            <span>All Family Profiles</span>
            <i data-lucide="check" class="w-4 h-4 ${AppState.activeMemberId === 'ALL' ? '' : 'hidden'}"></i>
          </button>
        `;
        AppState.members.forEach(m => {
          const isAct = AppState.activeMemberId === m.id;
          const btn = document.createElement('button');
          btn.className = `w-full text-left p-3 rounded-xl border border-surface-border text-sm font-semibold flex items-center justify-between ${isAct ? 'bg-teal-subtle text-teal-primary' : 'bg-surface'}`;
          btn.dataset.memid = m.id;
          btn.innerHTML = `
            <span>${m.name} (${m.relation})</span>
            <i data-lucide="check" class="w-4 h-4 ${isAct ? '' : 'hidden'}"></i>
          `;
          container.appendChild(btn);
        });
        lucide.createIcons({ root: container });

        container.querySelectorAll('button').forEach(b => {
          b.onclick = () => {
            AppState.activeMemberId = b.dataset.memid;
            sheet.classList.add('hidden');
            sheet.classList.remove('flex');
            renderAll();
          };
        });

        sheet.classList.remove('hidden');
        sheet.classList.add('flex');
      };

      document.getElementById('closeProfileSheetBtn').onclick = () => {
        document.getElementById('profileSheet').classList.add('hidden');
        document.getElementById('profileSheet').classList.remove('flex');
      };

      // Detail Modal Close
      document.getElementById('closeMedDetailBtn').onclick = () => {
        document.getElementById('medicineDetailModal').classList.add('hidden');
        document.getElementById('medicineDetailModal').classList.remove('flex');
      };
    }

    // --- FORM SUBMISSIONS (VALIDATION & PERSISTENCE) ---
    function initForms() {
      // 1. Household Name Update
      document.getElementById('householdForm').onsubmit = async (e) => {
        e.preventDefault();
        const newName = document.getElementById('householdNameInput').value.trim();
        if (!newName) return;

        if (!AppState.household) {
          AppState.household = { id: `hh_${Date.now()}`, name: newName, createdDate: new Date().toISOString() };
        } else {
          AppState.household.name = newName;
        }

        await dbPut('Households', AppState.household);
        triggerHaptic('success');
        showToast('Household name updated', 'success');
        document.getElementById('householdModal').classList.add('hidden');
        document.getElementById('householdModal').classList.remove('flex');
        await loadAppState();
      };

      // 2. Family Member Save / Edit
      document.getElementById('memberForm').onsubmit = async (e) => {
        e.preventDefault();
        const id = document.getElementById('memberIdField').value || `m_${Date.now()}`;
        const rawRel = document.getElementById('memberRelField').value;
        const customRel = document.getElementById('customRelField').value.trim();
        const finalRel = rawRel === 'Other' && customRel ? customRel : rawRel;

        const member = {
          id,
          householdId: AppState.household ? AppState.household.id : 'hh_default',
          name: document.getElementById('memberNameField').value.trim(),
          relation: finalRel,
          age: Number(document.getElementById('memberAgeField').value) || null,
          conditions: document.getElementById('memberConditionsField').value.trim()
        };

        await dbPut('FamilyMembers', member);
        triggerHaptic('success');
        showToast('Family member saved', 'success');
        document.getElementById('memberModal').classList.add('hidden');
        document.getElementById('memberModal').classList.remove('flex');
        await loadAppState();
      };

      // 3. Prescribed Medicine Save
      document.getElementById('medicineForm').onsubmit = async (e) => {
        e.preventDefault();
        const id = document.getElementById('medFormId').value || `med_${Date.now()}`;
        
        // Category check
        const catSelectVal = document.getElementById('medFormCategory').value;
        const customCatVal = document.getElementById('customCategoryField').value.trim();
        const finalCategory = catSelectVal === 'CUSTOM_CATEGORY' ? (customCatVal || 'Other') : catSelectVal;

        // Schedule Pattern Computation
        const pattern = document.getElementById('medSchedulePattern').value;
        let schedules = [];

        if (pattern === 'SLOTS') {
          const formatTime = (time24) => {
            if (!time24) return '';
            const [h, m] = time24.split(':');
            const hour = parseInt(h, 10);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const hour12 = hour % 12 || 12;
            return `${String(hour12).padStart(2, '0')}:${m} ${ampm}`;
          };

          if (document.getElementById('checkMorning').checked) {
            schedules.push(formatTime(document.getElementById('timeMorningVal').value));
          }
          if (document.getElementById('checkAfternoon').checked) {
            schedules.push(formatTime(document.getElementById('timeAfternoonVal').value));
          }
          if (document.getElementById('checkEvening').checked) {
            schedules.push(formatTime(document.getElementById('timeEveningVal').value));
          }
          if (document.getElementById('checkNight').checked) {
            schedules.push(formatTime(document.getElementById('timeNightVal').value));
          }
        } else if (pattern === 'HOURLY_4') {
          schedules = ['06:00 AM', '10:00 AM', '02:00 PM', '06:00 PM', '10:00 PM'];
        } else if (pattern === 'HOURLY_6') {
          schedules = ['06:00 AM', '12:00 PM', '06:00 PM', '12:00 AM'];
        } else if (pattern === 'HOURLY_8') {
          schedules = ['08:00 AM', '04:00 PM', '12:00 AM'];
        } else if (pattern === 'HOURLY_12') {
          schedules = ['08:00 AM', '08:00 PM'];
        } else if (pattern === 'AS_NEEDED') {
          schedules = ['As Needed'];
        }

        if (schedules.length === 0) {
          showToast('Please select at least one routine time', 'warning');
          return;
        }

        const med = {
          id,
          householdId: AppState.household ? AppState.household.id : 'hh_default',
          memberId: document.getElementById('medFormMemberId').value,
          brand: document.getElementById('medFormBrand').value.trim(),
          generic: document.getElementById('medFormGeneric').value.trim(),
          strength: document.getElementById('medFormStrength').value.trim(),
          dosageForm: document.getElementById('medFormDosageForm').value,
          category: finalCategory,
          unitsPerDose: Number(document.getElementById('medFormUnitsPerDose').value) || 1,
          foodTiming: document.getElementById('medFormFoodTiming').value,
          schedulePattern: pattern,
          schedules,
          currentStock: Number(document.getElementById('medFormStock').value) || 0,
          refillThresholdDays: Number(document.getElementById('medFormRefillDays').value) || 5,
          createdDate: new Date().toISOString()
        };

        await dbPut('MemberMedicines', med);
        await dbPut('MedicineInventory', {
          medicineId: id,
          householdId: med.householdId,
          currentQuantity: med.currentStock,
          unitsPerDose: med.unitsPerDose,
          lastUpdated: new Date().toISOString()
        });

        triggerHaptic('success');
        showToast('Prescribed routine saved', 'success');
        document.getElementById('medicineModal').classList.add('hidden');
        document.getElementById('medicineModal').classList.remove('flex');
        await loadAppState();
      };

      // 4. Purchase Form Save (With Edit & Delete Support)
      document.getElementById('purchaseForm').onsubmit = async (e) => {
        e.preventDefault();
        const rows = document.querySelectorAll('.purchase-item-row');
        if (rows.length === 0) {
          showToast('Add at least one purchased medicine', 'warning');
          return;
        }

        const editId = document.getElementById('purchaseEditId').value;
        const purchaseId = editId || `pur_${Date.now()}`;
        const date = document.getElementById('purchaseDateField').value;
        const pharmacy = document.getElementById('purchasePharmacyField').value.trim();
        const payMode = document.getElementById('purchasePayMode').value;
        const notes = document.getElementById('purchaseNotes').value.trim();

        let totalAmt = 0;
        const items = [];

        rows.forEach((r, idx) => {
          const medId = r.querySelector('.p-item-med').value;
          const medObj = AppState.medicines.find(m => m.id === medId);
          const qty = Number(r.querySelector('.p-item-qty').value) || 0;
          const price = Number(r.querySelector('.p-item-price').value) || 0;

          totalAmt += price;
          items.push({
            id: `pi_${purchaseId}_${idx}`,
            purchaseId,
            medicineId: medId,
            medicineName: medObj ? medObj.brand : 'Prescription Medicine',
            quantity: qty,
            price
          });
        });

        const purchaseData = {
          id: purchaseId,
          householdId: AppState.household ? AppState.household.id : 'hh_default',
          date,
          pharmacy: pharmacy || 'Local Pharmacy',
          totalAmount: totalAmt,
          paymentMode: payMode,
          notes
        };

        await savePurchaseTransactional(purchaseData, items, Boolean(editId));
        showToast(editId ? 'Purchase record updated' : 'Purchase recorded & stock updated', 'success');
        document.getElementById('purchaseModal').classList.add('hidden');
        document.getElementById('purchaseModal').classList.remove('flex');
      };
    }

    // --- DELEGATED DYNAMIC ACTIONS ---
    function initDynamicActions() {
      document.addEventListener('click', async (e) => {
        // Speak Medicine Details & Routine Timings (TTS)
        const speakBtn = e.target.closest('.speak-dose-btn');
        if (speakBtn) {
          e.stopPropagation();
          const { medname, strength, dose, time, food } = speakBtn.dataset;
          speakMedicineDose(medname, strength, dose, time, food);
          return;
        }

        // WhatsApp Pharmacy Refill Order
        const waRefillBtn = e.target.closest('.whatsapp-refill-btn');
        if (waRefillBtn) {
          e.stopPropagation();
          const medId = waRefillBtn.dataset.medid;
          sendWhatsAppRefill(medId);
          return;
        }

        // Take Dose
        const takeBtn = e.target.closest('.record-take-btn');
        if (takeBtn) {
          const medId = takeBtn.dataset.medid;
          const time = takeBtn.dataset.time;
          await recordDoseStatus(medId, time, 'TAKEN');
          showToast('Marked as Taken', 'success');
          return;
        }

        // Skip Dose
        const skipBtn = e.target.closest('.record-skip-btn');
        if (skipBtn) {
          const medId = skipBtn.dataset.medid;
          const time = skipBtn.dataset.time;
          await recordDoseStatus(medId, time, 'SKIPPED');
          showToast('Dose Skipped', 'info');
          return;
        }

        // Undo Dose
        const undoBtn = e.target.closest('.undo-dose-btn');
        if (undoBtn) {
          const medId = undoBtn.dataset.medid;
          const time = undoBtn.dataset.time;
          await recordDoseStatus(medId, time, 'PENDING');
          showToast('Dose Reset to Pending', 'info');
          return;
        }

        // Quick Refill from alerts or cards
        const refillBtn = e.target.closest('.quick-refill-btn');
        if (refillBtn) {
          const medId = refillBtn.dataset.medid;
          document.getElementById('purchaseForm').reset();
          document.getElementById('purchaseEditId').value = '';
          document.getElementById('purchaseModalTitle').textContent = 'Record Medicine Purchase';
          document.getElementById('purchaseDateField').value = new Date().toISOString().split('T')[0];
          document.getElementById('purchaseItemsContainer').innerHTML = '';
          addPurchaseItemRow(medId, 150);
          document.getElementById('purchaseModal').classList.remove('hidden');
          document.getElementById('purchaseModal').classList.add('flex');
          return;
        }

        // Edit Family Member
        const editMemberBtn = e.target.closest('.edit-member-btn');
        if (editMemberBtn) {
          const memId = editMemberBtn.dataset.memid;
          const member = AppState.members.find(m => m.id === memId);
          if (!member) return;

          document.getElementById('memberIdField').value = member.id;
          document.getElementById('memberNameField').value = member.name;
          document.getElementById('memberAgeField').value = member.age || '';
          document.getElementById('memberConditionsField').value = member.conditions || '';

          const relSelect = document.getElementById('memberRelField');
          const customRelContainer = document.getElementById('customRelContainer');
          const customRelField = document.getElementById('customRelField');

          const standardRels = ['Self', 'Father', 'Mother', 'Grandfather', 'Grandmother', 'Spouse', 'Brother', 'Sister', 'Son', 'Daughter'];
          if (standardRels.includes(member.relation)) {
            relSelect.value = member.relation;
            customRelContainer.classList.add('hidden');
          } else {
            relSelect.value = 'Other';
            customRelContainer.classList.remove('hidden');
            customRelField.value = member.relation;
          }

          document.getElementById('memberModalTitle').textContent = 'Edit Family Member';
          document.getElementById('memberModal').classList.remove('hidden');
          document.getElementById('memberModal').classList.add('flex');
          return;
        }

        // Edit Purchase
        const editPurBtn = e.target.closest('.edit-purchase-btn');
        if (editPurBtn) {
          const purId = editPurBtn.dataset.purid;
          const pur = AppState.purchases.find(p => p.id === purId);
          if (!pur) return;

          document.getElementById('purchaseEditId').value = pur.id;
          document.getElementById('purchaseModalTitle').textContent = 'Edit Purchase Record';
          document.getElementById('purchaseDateField').value = pur.date;
          document.getElementById('purchasePharmacyField').value = pur.pharmacy || '';
          document.getElementById('purchasePayMode').value = pur.paymentMode || 'UPI';
          document.getElementById('purchaseNotes').value = pur.notes || '';

          const container = document.getElementById('purchaseItemsContainer');
          container.innerHTML = '';

          (pur.items || []).forEach(it => {
            addPurchaseItemRow(it.medicineId, it.price, it.quantity);
          });

          document.getElementById('purchaseModal').classList.remove('hidden');
          document.getElementById('purchaseModal').classList.add('flex');
          return;
        }

        // Delete Purchase
        const deletePurBtn = e.target.closest('.delete-purchase-btn');
        if (deletePurBtn) {
          const purId = deletePurBtn.dataset.purid;
          const confirmed = await customConfirm('Delete Purchase Record?', 'This will also deduct the purchased quantities from medicine stock.');
          if (confirmed) {
            await deletePurchaseTransactional(purId);
            showToast('Purchase deleted and inventory adjusted', 'info');
          }
          return;
        }

        // Open Medicine Details & History
        const detailBtn = e.target.closest('.med-detail-btn');
        if (detailBtn) {
          const medId = detailBtn.dataset.medid;
          const med = AppState.medicines.find(m => m.id === medId);
          if (!med) return;

          document.getElementById('detailMedName').textContent = med.brand;
          document.getElementById('detailMedSub').textContent = `${med.generic || ''} • ${med.strength} • ${med.dosageForm}`;
          document.getElementById('detailCurrentStock').textContent = med.currentStock || 0;
          
          const dailyRate = (med.schedules ? med.schedules.length : 1) * (med.unitsPerDose || 1);
          document.getElementById('detailDailyUsage').textContent = `${dailyRate}/day`;
          const daysLeft = dailyRate > 0 ? Math.floor((med.currentStock || 0) / dailyRate) : 99;
          document.getElementById('detailDaysLeft').textContent = `${daysLeft} d`;

          const purchaseItems = await dbGetAll('PurchaseItems');
          const medItems = purchaseItems.filter(i => i.medicineId === med.id);
          const historyContainer = document.getElementById('detailPriceHistory');
          historyContainer.innerHTML = '';

          if (medItems.length === 0) {
            historyContainer.innerHTML = `<div class="text-charcoal-muted">No purchase records for this item.</div>`;
          } else {
            medItems.forEach(it => {
              const pur = AppState.purchases.find(p => p.id === it.purchaseId);
              const row = document.createElement('div');
              row.className = 'p-2.5 bg-surface rounded-xl flex items-center justify-between border border-surface-border';
              row.innerHTML = `
                <div>
                  <div class="font-bold text-charcoal">₹${it.price} for ${it.quantity} units</div>
                  <div class="text-[10px] text-charcoal-muted">${pur ? pur.date : 'Recorded'} • ${pur ? pur.pharmacy : ''}</div>
                </div>
                <div class="text-[11px] font-semibold text-teal-primary">
                  ₹${(it.price / Math.max(1, it.quantity)).toFixed(1)}/unit
                </div>
              `;
              historyContainer.appendChild(row);
            });
          }

          // Edit Medicine Routine
          document.getElementById('detailEditMedBtn').onclick = () => {
            document.getElementById('medicineDetailModal').classList.add('hidden');
            document.getElementById('medicineDetailModal').classList.remove('flex');
            openMedicineModal(med);
          };

          // Adjust Stock
          document.getElementById('detailAdjustStockBtn').onclick = async () => {
            const newStockStr = prompt('Enter corrected stock count:', med.currentStock);
            if (newStockStr !== null && !isNaN(newStockStr)) {
              med.currentStock = Number(newStockStr);
              await dbPut('MemberMedicines', med);
              await dbPut('MedicineInventory', {
                medicineId: med.id,
                householdId: med.householdId,
                currentQuantity: med.currentStock,
                unitsPerDose: med.unitsPerDose,
                lastUpdated: new Date().toISOString()
              });
              triggerHaptic('success');
              showToast('Stock count adjusted', 'success');
              document.getElementById('medicineDetailModal').classList.add('hidden');
              document.getElementById('medicineDetailModal').classList.remove('flex');
              await loadAppState();
            }
          };

          // Delete Medicine
          document.getElementById('detailDeleteMedBtn').onclick = async () => {
            const confirmed = await customConfirm('Delete Medicine?', `Remove ${med.brand} from prescribed routines?`);
            if (confirmed) {
              await dbDelete('MemberMedicines', med.id);
              await dbDelete('MedicineInventory', med.id);
              showToast('Medicine removed', 'info');
              document.getElementById('medicineDetailModal').classList.add('hidden');
              document.getElementById('medicineDetailModal').classList.remove('flex');
              await loadAppState();
            }
          };

          document.getElementById('medicineDetailModal').classList.remove('hidden');
          document.getElementById('medicineDetailModal').classList.add('flex');
        }
      });
    }

    // --- SETTINGS, EXPORT, RESTORE & ROLE EMULATION ---
    function initSettings() {
      // Language Change
      document.getElementById('settingLanguage').addEventListener('change', async (e) => {
        AppState.settings.language = e.target.value;
        await dbPut('ApplicationSettings', { id: 'app_settings', ...AppState.settings });
        applyTranslations();
        renderAll();
        showToast('Language updated', 'success');
      });

      // Font Size scale
      document.getElementById('settingFontSize').addEventListener('change', async (e) => {
        AppState.settings.fontSize = e.target.value;
        await dbPut('ApplicationSettings', { id: 'app_settings', ...AppState.settings });
        applyFontSize();
        showToast('Text size updated', 'success');
      });

      // Role Change for Single-Device Emulation
      document.getElementById('settingRole').addEventListener('change', async (e) => {
        AppState.activeRole = e.target.value;
        AppState.settings.activeRole = e.target.value;
        await dbPut('ApplicationSettings', { id: 'app_settings', ...AppState.settings, activeRole: e.target.value });
        showToast(`Role switched to ${AppState.activeRole}`, 'info');
        renderProfileHeader();
        applyRolePermissions();
      });

      // Haptics Toggle
      document.getElementById('settingHaptics').addEventListener('change', async (e) => {
        AppState.settings.haptics = e.target.checked;
        await dbPut('ApplicationSettings', { id: 'app_settings', ...AppState.settings });
        if (AppState.settings.haptics) triggerHaptic('light');
        showToast('Haptic preferences saved', 'info');
      });

      // Notification Permission
      document.getElementById('reqNotificationBtn').addEventListener('click', async () => {
        if (!('Notification' in window)) {
          showToast('Notifications are not supported in this browser', 'warning');
          return;
        }
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          showToast('Notifications enabled', 'success');
          document.getElementById('notifStatusText').textContent = 'Notifications active';
          document.getElementById('reqNotificationBtn').textContent = 'Active';
          document.getElementById('reqNotificationBtn').disabled = true;
        } else {
          showToast('Notification permission denied', 'warning');
        }
      });

      // Test Alarm Sound Chime
      const testAlarmBtn = document.getElementById('testAlarmBtn');
      if (testAlarmBtn) {
        testAlarmBtn.addEventListener('click', () => {
          AlarmEngine.playChime('chime');
          triggerHaptic('success');
          showToast('🔔 Playing dose reminder chime...', 'info');
        });
      }

      // Test Indian Voice TTS in Settings
      const testVoiceBtn = document.getElementById('testVoiceBtn');
      if (testVoiceBtn) {
        testVoiceBtn.addEventListener('click', () => {
          speakMedicineDose('Dolo 650', '650 mg', '1 Tablet', '08:00 AM', 'After Food');
          updateTtsIndicator();
        });
      }

      // WhatsApp Pharmacy Order Button in Purchases
      const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
      if (whatsappOrderBtn) {
        whatsappOrderBtn.addEventListener('click', () => {
          sendWhatsAppRefill();
        });
      }

      // --- ALL 16 INDEXEDDB STORES FOR COMPLETE BACKUP & RESTORE ---
      const ALL_DB_STORES = [
        'Households', 'Caretakers', 'FamilyMembers', 'Conditions',
        'MedicineCatalogue', 'MemberMedicines', 'MedicineSchedules',
        'DoseHistory', 'MedicineInventory', 'InventoryAdjustments',
        'Purchases', 'PurchaseItems', 'RefillHistory', 'OCRRecords',
        'NotificationSettings', 'ApplicationSettings'
      ];

      // Export Comprehensive JSON Backup
      async function exportFullDatabase(isBeforeWiping = false) {
        try {
          const exportTimestamp = new Date().toISOString();
          const fullBackup = {
            appName: 'MEDIC',
            exportDate: exportTimestamp,
            version: DB_VERSION,
            isPreWipeBackup: isBeforeWiping,
            recordCounts: {},
            data: {}
          };

          for (const store of ALL_DB_STORES) {
            try {
              const records = await dbGetAll(store);
              fullBackup.data[store] = records || [];
              fullBackup.recordCounts[store] = (records || []).length;
            } catch (err) {
              fullBackup.data[store] = [];
              fullBackup.recordCounts[store] = 0;
            }
          }

          // Aliases for legacy & third-party compatibility
          fullBackup.households = fullBackup.data.Households;
          fullBackup.caretakers = fullBackup.data.Caretakers;
          fullBackup.members = fullBackup.data.FamilyMembers;
          fullBackup.conditions = fullBackup.data.Conditions;
          fullBackup.catalogue = fullBackup.data.MedicineCatalogue;
          fullBackup.medicines = fullBackup.data.MemberMedicines;
          fullBackup.schedules = fullBackup.data.MedicineSchedules;
          fullBackup.doseHistory = fullBackup.data.DoseHistory;
          fullBackup.inventory = fullBackup.data.MedicineInventory;
          fullBackup.inventoryAdjustments = fullBackup.data.InventoryAdjustments;
          fullBackup.purchases = fullBackup.data.Purchases;
          fullBackup.purchaseItems = fullBackup.data.PurchaseItems;
          fullBackup.refillHistory = fullBackup.data.RefillHistory;
          fullBackup.ocrRecords = fullBackup.data.OCRRecords;
          fullBackup.notifications = fullBackup.data.NotificationSettings;
          fullBackup.settings = fullBackup.data.ApplicationSettings;

          const jsonStr = JSON.stringify(fullBackup, null, 2);
          const blob = new Blob([jsonStr], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          const pad = (n) => String(n).padStart(2, '0');
          const d = new Date();
          const fileDate = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
          a.download = isBeforeWiping ? `MEDIC_PreWipe_Backup_${fileDate}.json` : `MEDIC_Backup_${fileDate}.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          showToast(isBeforeWiping ? 'Pre-wipe backup downloaded successfully' : 'Full backup exported successfully', 'success');
          return true;
        } catch (e) {
          console.error('Export error:', e);
          showToast('Failed to export backup file', 'warning');
          return false;
        }
      }

      // Calculate Total Database Storage Size and Breakdown
      async function calculateDatabaseStats() {
        const counts = {
          households: 0,
          members: 0,
          medicines: 0,
          schedules: 0,
          purchases: 0,
          purchaseItems: 0,
          inventory: 0,
          doseHistory: 0,
          settings: 0,
          totalRecords: 0
        };

        const collectedData = {};
        for (const store of ALL_DB_STORES) {
          try {
            const records = await dbGetAll(store);
            collectedData[store] = records || [];
            const len = (records || []).length;
            counts.totalRecords += len;
            if (store === 'FamilyMembers') counts.members = len;
            else if (store === 'MemberMedicines') counts.medicines = len;
            else if (store === 'MedicineSchedules') counts.schedules = len;
            else if (store === 'Purchases') counts.purchases = len;
            else if (store === 'PurchaseItems') counts.purchaseItems = len;
            else if (store === 'DoseHistory') counts.doseHistory = len;
            else if (store === 'MedicineInventory') counts.inventory = len;
          } catch(e) {}
        }

        const jsonStr = JSON.stringify(collectedData);
        const bytes = new Blob([jsonStr]).size;
        const totalSizeKB = (bytes / 1024).toFixed(1);

        return {
          totalSizeKB,
          bytes,
          counts,
          data: collectedData
        };
      }

      // Safe Wipe Routine (Releases DB lock, clears storage, deletes DB)
      async function wipeAllApplicationData() {
        try {
          // Close IndexedDB connection to prevent deleteDatabase from hanging
          if (AppState.db) {
            AppState.db.close();
            AppState.db = null;
          }

          // Clear web storage
          try { localStorage.clear(); } catch(e){}
          try { sessionStorage.clear(); } catch(e){}

          let completed = false;
          const finish = () => {
            if (completed) return;
            completed = true;
            showToast('All data successfully cleared', 'info');
            setTimeout(() => window.location.reload(), 300);
          };

          const req = indexedDB.deleteDatabase(DB_NAME);
          req.onsuccess = finish;
          req.onerror = finish;
          req.onblocked = finish;

          // Safety timeout in case onblocked or browser lock occurs
          setTimeout(finish, 800);
        } catch (err) {
          console.error('Wipe error:', err);
          window.location.reload();
        }
      }

      // Wire Export Button
      document.getElementById('exportDataBtn').addEventListener('click', async () => {
        await exportFullDatabase(false);
      });

      // Wire Import File Input (With Full Schedule & All Stores Support)
      document.getElementById('importDataInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const data = JSON.parse(event.target.result);
            // Validation
            const hasDataPayload = data.data && typeof data.data === 'object';
            const hasRootHouseholds = Array.isArray(data.households);
            const hasRootMedicines = Array.isArray(data.medicines);

            if (!hasDataPayload && !hasRootHouseholds && !hasRootMedicines) {
              throw new Error('Unrecognized MEDIC backup structure');
            }

            let restoredCount = 0;
            const restoreList = async (storeName, items) => {
              if (Array.isArray(items)) {
                for (const item of items) {
                  await dbPut(storeName, item);
                  restoredCount++;
                }
              }
            };

            // Restore all stores (handles both structured data object and legacy root arrays)
            await restoreList('Households', (data.data && data.data.Households) || data.households || []);
            await restoreList('Caretakers', (data.data && data.data.Caretakers) || data.caretakers || []);
            await restoreList('FamilyMembers', (data.data && data.data.FamilyMembers) || data.members || []);
            await restoreList('Conditions', (data.data && data.data.Conditions) || data.conditions || []);
            await restoreList('MedicineCatalogue', (data.data && data.data.MedicineCatalogue) || data.catalogue || []);
            await restoreList('MemberMedicines', (data.data && data.data.MemberMedicines) || data.medicines || []);
            // CRITICAL FIX: Restore schedules!
            await restoreList('MedicineSchedules', (data.data && data.data.MedicineSchedules) || data.schedules || []);
            await restoreList('DoseHistory', (data.data && data.data.DoseHistory) || data.doseHistory || []);
            await restoreList('MedicineInventory', (data.data && data.data.MedicineInventory) || data.inventory || []);
            await restoreList('InventoryAdjustments', (data.data && data.data.InventoryAdjustments) || data.inventoryAdjustments || []);
            await restoreList('Purchases', (data.data && data.data.Purchases) || data.purchases || []);
            await restoreList('PurchaseItems', (data.data && data.data.PurchaseItems) || data.purchaseItems || []);
            await restoreList('RefillHistory', (data.data && data.data.RefillHistory) || data.refillHistory || []);
            await restoreList('OCRRecords', (data.data && data.data.OCRRecords) || data.ocrRecords || []);
            await restoreList('NotificationSettings', (data.data && data.data.NotificationSettings) || data.notifications || []);
            await restoreList('ApplicationSettings', (data.data && data.data.ApplicationSettings) || data.settings || []);

            showToast(`Backup restored successfully (${restoredCount} records)`, 'success');
            await loadAppState();
            renderAll();
          } catch (err) {
            console.error('Import error:', err);
            showToast('Failed to restore backup file: invalid format', 'warning');
          } finally {
            // Reset input value so user can re-import same file if needed
            e.target.value = '';
          }
        };
        reader.readAsText(file);
      });

      // Wire Wipe Data Modal Prompt
      const wipeModal = document.getElementById('wipeDataModal');
      const wipeSizeBadge = document.getElementById('wipeDataSizeBadge');
      const wipeBreakdown = document.getElementById('wipeDataBreakdown');
      const wipeExportBtn = document.getElementById('wipeExportFirstBtn');
      const wipeExportText = document.getElementById('wipeExportBtnText');
      const wipeCancelBtn = document.getElementById('wipeCancelBtn');
      const wipeConfirmBtn = document.getElementById('wipeConfirmBtn');

      document.getElementById('resetDataBtn').addEventListener('click', async () => {
        // Enforce role permission check
        if (AppState.activeRole !== 'CARETAKER') {
          showToast('Action restricted: Only Caretakers can wipe application data', 'warning');
          return;
        }

        // Calculate size & record counts
        wipeSizeBadge.textContent = 'Calculating...';
        wipeBreakdown.innerHTML = '<div class="py-1">Inspecting offline records...</div>';
        if (wipeExportText) wipeExportText.textContent = 'Export Backup Before Wiping';
        
        wipeModal.classList.remove('hidden');
        wipeModal.classList.add('flex');
        lucide.createIcons({ root: wipeModal });

        const stats = await calculateDatabaseStats();
        wipeSizeBadge.textContent = `~${stats.totalSizeKB} KB (${stats.counts.totalRecords} Records)`;
        wipeBreakdown.innerHTML = `
          <div class="grid grid-cols-2 gap-1 text-[11px]">
            <div>• Family Members: <span class="font-bold text-charcoal">${stats.counts.members}</span></div>
            <div>• Prescriptions: <span class="font-bold text-charcoal">${stats.counts.medicines}</span></div>
            <div>• Doses Logged: <span class="font-bold text-charcoal">${stats.counts.doseHistory}</span></div>
            <div>• Purchases: <span class="font-bold text-charcoal">${stats.counts.purchases}</span></div>
          </div>
        `;
      });

      wipeExportBtn.addEventListener('click', async () => {
        const exported = await exportFullDatabase(true);
        if (exported && wipeExportText) {
          wipeExportText.textContent = '✓ Backup Exported Successfully';
          wipeExportBtn.classList.remove('bg-white');
          wipeExportBtn.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-300');
        }
      });

      wipeCancelBtn.addEventListener('click', () => {
        wipeModal.classList.add('hidden');
        wipeModal.classList.remove('flex');
      });

      wipeConfirmBtn.addEventListener('click', async () => {
        wipeConfirmBtn.disabled = true;
        wipeConfirmBtn.textContent = 'Clearing...';
        await wipeAllApplicationData();
      });
    }

    // --- FIRST TIME USER ONBOARDING ---
    function setupOnboardingFlow() {
      const obScreen = document.getElementById('onboardingScreen');
      obScreen.classList.remove('hidden');
      obScreen.classList.add('flex');

      document.getElementById('obCompleteBtn').onclick = async () => {
        const hhName = document.getElementById('obHouseholdName').value.trim() || 'My Family';
        const ctName = document.getElementById('obCaretakerName').value.trim() || 'Caretaker';
        const ctRel = document.getElementById('obCaretakerRel').value;
        const memName = document.getElementById('obMemberName').value.trim() || 'Father';
        const memRel = document.getElementById('obMemberRel').value;

        const householdId = `hh_${Date.now()}`;
        const caretakerId = `ct_${Date.now()}`;

        // 1. Household
        await dbPut('Households', {
          id: householdId,
          name: hhName,
          createdDate: new Date().toISOString()
        });

        // 2. Caretaker
        await dbPut('Caretakers', {
          id: caretakerId,
          householdId,
          name: ctName,
          role: 'CARETAKER'
        });

        // 3. Initial Members (Caretaker self & Member)
        await dbPut('FamilyMembers', {
          id: `m_${Date.now()}_1`,
          householdId,
          name: ctName,
          relation: ctRel,
          age: null,
          conditions: 'General Health'
        });

        await dbPut('FamilyMembers', {
          id: `m_${Date.now()}_2`,
          householdId,
          name: memName,
          relation: memRel,
          age: null,
          conditions: ''
        });

        // Preload verified catalogue
        for (const c of INDIAN_MED_CATALOGUE) {
          await dbPut('MedicineCatalogue', c);
        }

        obScreen.classList.add('hidden');
        obScreen.classList.remove('flex');
        showToast(`Welcome ${ctName}! Household created.`, 'success');
        await loadAppState();
      };
    }

    // --- Dose Reminder Alarm Background Scheduler ---
    let lastAlarmCheckedMin = '';
    function startDoseAlarmScheduler() {
      setInterval(() => {
        try {
          if (!AppState.todayDoses || AppState.todayDoses.length === 0) return;

          const now = new Date();
          const currentHour = now.getHours();
          const currentMin = now.getMinutes();
          const checkKey = `${now.toDateString()}_${currentHour}:${currentMin}`;
          if (checkKey === lastAlarmCheckedMin) return;
          lastAlarmCheckedMin = checkKey;

          const isPM = currentHour >= 12;
          const h12 = currentHour % 12 || 12;
          const pad = (n) => String(n).padStart(2, '0');
          const timeSlot1 = `${pad(h12)}:${pad(currentMin)} ${isPM ? 'PM' : 'AM'}`;
          const timeSlot2 = `${h12}:${pad(currentMin)} ${isPM ? 'PM' : 'AM'}`;
          const time24 = `${pad(currentHour)}:${pad(currentMin)}`;

          const dueDoses = AppState.todayDoses.filter(d => {
            if (d.status !== 'PENDING') return false;
            const slot = (d.timeSlot || '').trim().toUpperCase();
            return slot === timeSlot1.toUpperCase() || slot === timeSlot2.toUpperCase() || slot.startsWith(time24);
          });

          if (dueDoses.length > 0) {
            AlarmEngine.playChime('chime');
            triggerHaptic('success');

            dueDoses.forEach(dose => {
              showToast(`⏰ Dose Reminder: ${dose.medicineName} (${dose.foodTiming}) for ${dose.memberName}!`, 'info');
              if ('Notification' in window && Notification.permission === 'granted') {
                try {
                  new Notification(`MEDIC Dose Alert: ${dose.medicineName}`, {
                    body: `${dose.unitsPerDose} ${dose.dosageForm} for ${dose.memberName} (${dose.foodTiming})`,
                    icon: 'favicon.svg'
                  });
                } catch(e){}
              }
            });
          }
        } catch(e) {}
      }, 15000);
    }

    // --- PROGRESSIVE WEB APP (PWA) INSTALLATION & OFFLINE CONTROLLER ---
    let deferredPwaPrompt = null;

    function isAppStandalone() {
      return window.matchMedia('(display-mode: standalone)').matches || 
             window.navigator.standalone === true || 
             document.referrer.includes('android-app://');
    }

    function isIosDevice() {
      return /iphone|ipad|ipod/i.test(navigator.userAgent || '') && !window.MSStream;
    }

    function isAndroidDevice() {
      return /android/i.test(navigator.userAgent || '');
    }

    function updatePwaInstallUI() {
      const isStandalone = isAppStandalone();
      const statusText = document.getElementById('pwaInstallStatusText');
      const installBtn = document.getElementById('settingInstallPwaBtn');
      const btnText = document.getElementById('settingInstallBtnText');
      const banner = document.getElementById('pwaInstallBanner');

      if (isStandalone) {
        if (statusText) statusText.textContent = 'App installed & running in standalone mode';
        if (btnText) btnText.textContent = 'Installed ✓';
        if (installBtn) {
          installBtn.classList.remove('bg-teal-primary', 'hover:bg-teal-dark');
          installBtn.classList.add('bg-emerald-100', 'text-emerald-800', 'pointer-events-none');
        }
        if (banner) banner.classList.add('hidden');
      } else {
        if (statusText) statusText.textContent = 'Works 100% offline with dose alarms';
        if (btnText) btnText.textContent = 'Install';
      }
    }

    function showPwaGuideModal(osType = 'auto') {
      const modal = document.getElementById('pwaGuideModal');
      const content = document.getElementById('pwaGuideContent');
      if (!modal || !content) return;

      const isIos = osType === 'ios' || (osType === 'auto' && isIosDevice());
      const isAndroid = osType === 'android' || (osType === 'auto' && isAndroidDevice());

      if (isIos) {
        content.innerHTML = `
          <div class="p-3 bg-teal-50 border border-teal-200 rounded-xl space-y-2">
            <div class="font-bold text-teal-dark flex items-center gap-1.5">
              <span>Apple iOS (iPhone / iPad) Installation:</span>
            </div>
            <ol class="list-decimal list-inside space-y-1.5 text-charcoal">
              <li>Open MEDIC in <strong>Safari</strong> browser.</li>
              <li>Tap the <strong>Share button</strong> <span class="inline-block px-1.5 py-0.5 bg-white border rounded text-[11px] font-bold">⎋</span> (square with arrow pointing up) on the bottom toolbar.</li>
              <li>Scroll down the share sheet and tap <strong>"Add to Home Screen"</strong> <span class="inline-block px-1.5 py-0.5 bg-white border rounded text-[11px] font-bold">＋</span>.</li>
              <li>Tap <strong>Add</strong> in the top right corner.</li>
            </ol>
            <p class="text-[11px] text-teal-dark font-medium pt-1">
              ✓ MEDIC icon will appear on your home screen with zero browser bars and 100% offline access.
            </p>
          </div>
        `;
      } else if (isAndroid) {
        content.innerHTML = `
          <div class="p-3 bg-teal-50 border border-teal-200 rounded-xl space-y-2">
            <div class="font-bold text-teal-dark">Android (Chrome / Samsung Internet):</div>
            <ol class="list-decimal list-inside space-y-1.5 text-charcoal">
              <li>Tap the <strong>Menu (3 dots)</strong> <span class="inline-block px-1.5 py-0.5 bg-white border rounded text-[11px] font-bold">⋮</span> in the top-right corner.</li>
              <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
              <li>Confirm by tapping <strong>Install</strong>.</li>
            </ol>
            <p class="text-[11px] text-teal-dark font-medium pt-1">
              ✓ Enjoy full offline dose alarms and rapid launches like a native Android APK.
            </p>
          </div>
        `;
      } else {
        content.innerHTML = `
          <div class="p-3 bg-teal-50 border border-teal-200 rounded-xl space-y-2">
            <div class="font-bold text-teal-dark">Desktop (Chrome / Edge / Windows / Mac):</div>
            <ol class="list-decimal list-inside space-y-1.5 text-charcoal">
              <li>Look for the <strong>Install icon</strong> <span class="inline-block px-1.5 py-0.5 bg-white border rounded text-[11px] font-bold">⊕</span> on the right side of the address bar.</li>
              <li>Or click the <strong>3 dots menu</strong> <span class="inline-block px-1.5 py-0.5 bg-white border rounded text-[11px] font-bold">⋮</span> and select <strong>"Install MEDIC"</strong>.</li>
              <li>Click <strong>Install</strong> to launch as a standalone desktop window.</li>
            </ol>
          </div>
        `;
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    async function triggerPwaInstall() {
      if (isAppStandalone()) {
        showToast('MEDIC is already installed on this device!', 'info');
        return;
      }

      if (deferredPwaPrompt) {
        try {
          deferredPwaPrompt.prompt();
          const choice = await deferredPwaPrompt.userChoice;
          if (choice && choice.outcome === 'accepted') {
            showToast('Installing MEDIC app...', 'success');
            const banner = document.getElementById('pwaInstallBanner');
            if (banner) banner.classList.add('hidden');
          }
          deferredPwaPrompt = null;
          updatePwaInstallUI();
        } catch (e) {
          showPwaGuideModal('auto');
        }
      } else {
        // iOS or browser without beforeinstallprompt
        showPwaGuideModal('auto');
      }
    }

    function initPwaInstaller() {
      // Register Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js').then((reg) => {
            console.log('MEDIC Service Worker registered:', reg.scope);
          }).catch((err) => {
            console.log('MEDIC Service Worker note:', err);
          });
        });
      }

      // Capture beforeinstallprompt (Android, Chrome, Edge)
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPwaPrompt = e;

        // If not standalone and not dismissed this session, reveal banner after 3 seconds
        if (!isAppStandalone() && !sessionStorage.getItem('medic_pwa_dismissed')) {
          setTimeout(() => {
            const banner = document.getElementById('pwaInstallBanner');
            if (banner && !isAppStandalone()) {
              banner.classList.remove('hidden');
              lucide.createIcons({ root: banner });
            }
          }, 2500);
        }
        updatePwaInstallUI();
      });

      // App Installed event
      window.addEventListener('appinstalled', () => {
        deferredPwaPrompt = null;
        const banner = document.getElementById('pwaInstallBanner');
        if (banner) banner.classList.add('hidden');
        showToast('🎉 MEDIC successfully installed on your device!', 'success');
        updatePwaInstallUI();
      });

      // Banner buttons
      const bannerInstallBtn = document.getElementById('pwaInstallBtn');
      if (bannerInstallBtn) {
        bannerInstallBtn.addEventListener('click', () => {
          triggerPwaInstall();
        });
      }

      const bannerDismissBtn = document.getElementById('pwaDismissBtn');
      if (bannerDismissBtn) {
        bannerDismissBtn.addEventListener('click', () => {
          const banner = document.getElementById('pwaInstallBanner');
          if (banner) banner.classList.add('hidden');
          sessionStorage.setItem('medic_pwa_dismissed', 'true');
        });
      }

      // Settings button
      const settingInstallBtn = document.getElementById('settingInstallPwaBtn');
      if (settingInstallBtn) {
        settingInstallBtn.addEventListener('click', () => {
          triggerPwaInstall();
        });
      }

      // Guide Modal close buttons
      const closeGuideBtn = document.getElementById('closePwaGuideBtn');
      const dismissGuideBtn = document.getElementById('dismissPwaGuideBtn');
      const guideModal = document.getElementById('pwaGuideModal');
      const hideGuide = () => {
        if (guideModal) {
          guideModal.classList.add('hidden');
          guideModal.classList.remove('flex');
        }
      };
      if (closeGuideBtn) closeGuideBtn.addEventListener('click', hideGuide);
      if (dismissGuideBtn) dismissGuideBtn.addEventListener('click', hideGuide);

      // Initial UI check
      updatePwaInstallUI();
    }

    // --- APPLICATION STARTUP SEQUENCE ---
    window.onload = async function() {
      try {
        await initIndexedDB();

        // 1. Splash screen branding delay, then reveal spinner
        setTimeout(() => {
          const spinner = document.getElementById('splashSpinnerContainer');
          if (spinner) spinner.classList.remove('opacity-0');
        }, 300);

        // Check if household exists
        const households = await dbGetAll('Households');
        const isFreshUser = households.length === 0;

        initNavigation();
        initCalendarEvents();
        initOcrUI();
        initModals();
        initForms();
        initDynamicActions();
        initSettings();
        initPwaInstaller();
        startDoseAlarmScheduler();

        // Search live filter
        document.getElementById('medSearchInput').addEventListener('input', () => {
          renderMedicinesScreen();
        });

        if (isFreshUser) {
          // Fade out splash and show First-Time Setup Wizard
          setTimeout(() => {
            const splash = document.getElementById('splashScreen');
            splash.classList.add('opacity-0');
            setTimeout(() => {
              splash.remove();
              setupOnboardingFlow();
            }, 300);
          }, 800);
        } else {
          await loadAppState();
          // Fade out splash to main view
          setTimeout(() => {
            const splash = document.getElementById('splashScreen');
            splash.classList.add('opacity-0');
            setTimeout(() => splash.remove(), 320);
          }, 700);
        }

      } catch (err) {
        console.error('MEDIC initialization error:', err);
        const splash = document.getElementById('splashScreen');
        splash.innerHTML = `
          <div class="p-6 text-center text-status-danger text-sm font-semibold">
            Unable to initialize local offline database. Please reopen the app.
          </div>
        `;
      }
    };