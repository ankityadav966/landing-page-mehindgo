export type SupportedLanguage = "en" | "hi" | "gu" | "mr" | "pa" | "ta" | "te" | "bn";

export interface Translations {
  heroTitle: string;
  heroSubtitle: string;
  bookNow: string;
  downloadApp: string;
  verifiedArtists: string;
  organicHenna: string;
  backupGuarantee: string;
  searchPlaceholder: string;
}

export const DICTIONARY: Record<SupportedLanguage, Translations> = {
  en: {
    heroTitle: "Verified Mehendi Artists At Your Doorstep",
    heroSubtitle: "Connect with verified luxury Mehndi artists. Secure booking, custom style packages, and premium organic henna.",
    bookNow: "Book Artist Now",
    downloadApp: "Download App (APK)",
    verifiedArtists: "5-Step Verified Artists",
    organicHenna: "100% Organic Henna",
    backupGuarantee: "Backup Guarantee",
    searchPlaceholder: "Search artists, cities, styles..."
  },
  hi: {
    heroTitle: "सत्यापित मेहंदी कलाकार आपके घर पर",
    heroSubtitle: "सत्यापित लक्जरी मेहंदी कलाकारों से जुड़ें। सुरक्षित बुकिंग और 100% प्राकृतिक जैविक मेहंदी।",
    bookNow: "अभी बुक करें",
    downloadApp: "ऐप डाउनलोड करें (APK)",
    verifiedArtists: "5-चरण सत्यापित कलाकार",
    organicHenna: "100% ऑर्गेनिक मेहंदी",
    backupGuarantee: "बैकअप गारंटी",
    searchPlaceholder: "कलाकार, शहर, स्टाइल खोजें..."
  },
  gu: {
    heroTitle: "તમારા ઘરે ગુણવત્તાયુક્ત મહેંદી આર્ટિસ્ટ",
    heroSubtitle: "પ્રમાણિત મહેંદી કલાકારો સાથે જોડાઓ. સુરક્ષિત બુકિંગ અને 100% ઓર્ગેનિક મહેંદી.",
    bookNow: "હમણાં જ બુક કરો",
    downloadApp: "એપ ડાઉનલોડ કરો (APK)",
    verifiedArtists: "પ્રમાણિત કલાકારો",
    organicHenna: "100% ઓર્ગેનિક મહેંદી",
    backupGuarantee: "બેકઅપ ગેરંટી",
    searchPlaceholder: "શોધો મહેંદી કલાકાર..."
  },
  mr: {
    heroTitle: "खात्रीशीर मेहंदी कलाकार तुमच्या दारी",
    heroSubtitle: "खात्रीशीर मेहंदी कलाकारांशी जोडा. सुरक्षित बुकिंग आणि 100% सेंद्रिय मेहंदी.",
    bookNow: "आत्ताच बुक करा",
    downloadApp: "ॲप डाउनलोड करा (APK)",
    verifiedArtists: "सत्यापित कलाकार",
    organicHenna: "100% सेंद्रिय मेहंदी",
    backupGuarantee: "बॅकअप हमी",
    searchPlaceholder: "शोधा मेहंदी कलाकार..."
  },
  pa: {
    heroTitle: "ਤਸਦੀਕਸ਼ੁਦਾ ਮਹਿੰਦੀ ਕਲਾਕਾਰ ਤੁਹਾਡੇ ਘਰ",
    heroSubtitle: "ਤਸਦੀਕਸ਼ੁਦਾ ਮਹਿੰਦੀ ਕਲਾਕਾਰਾਂ ਨਾਲ ਜੁੜੋ। ਸੁਰੱਖਿਅਤ ਬੁਕਿੰਗ ਅਤੇ 100% ਜੈਵਿਕ ਮਹਿੰਦੀ।",
    bookNow: "ਹੁਣੇ ਬੁੱਕ ਕਰੋ",
    downloadApp: "ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ (APK)",
    verifiedArtists: "ਤਸਦੀਕਸ਼ੁਦਾ ਕਲਾਕਾਰ",
    organicHenna: "100% ਜੈਵਿਕ ਮਹਿੰਦੀ",
    backupGuarantee: "ਬੈਕਅੱਪ ਗਰੰਟੀ",
    searchPlaceholder: "ਕਲਾਕਾਰ ਲੱਭੋ..."
  },
  ta: {
    heroTitle: "உறுதிசெய்யப்பட்ட மெஹந்தி கலைஞர்கள் உங்கள் இல்லத்தில்",
    heroSubtitle: "உயர்தர மெஹந்தி கலைஞர்களுடன் இணையுங்கள். பாதுகாப்பான முன்பதிவு மற்றும் 100% இயற்கை மருதாணி.",
    bookNow: "இப்போதே முன்பதிவு செய்யுங்கள்",
    downloadApp: "செயலியைப் பதிவிறக்கவும் (APK)",
    verifiedArtists: "சரிபார்க்கப்பட்ட கலைஞர்கள்",
    organicHenna: "100% இயற்கை மருதாணி",
    backupGuarantee: "மாற்று கலைஞர் உத்தரவாதம்",
    searchPlaceholder: "கலைஞர்களைத் தேடுங்கள்..."
  },
  te: {
    heroTitle: "ధృవీకరించబడిన మెహందీ కళాకారులు మీ ఇంటి వద్దే",
    heroSubtitle: "ధృవీకరించబడిన ప్రొఫెషనల్ మెహందీ ఆర్టిస్ట్‌లతో కనెక్ట్ అవ్వండి. సురక్షితమైన బుకింగ్ మరియు 100% సేంద్రీయ గోరింటాకు.",
    bookNow: "ఇప్పుడే బుక్ చేయండి",
    downloadApp: "యాప్‌ని డౌన్‌లోడ్ చేయండి (APK)",
    verifiedArtists: "ధృవీకరించబడిన ఆర్టిస్ట్‌లు",
    organicHenna: "100% సేంద్రీయ గోరింటాకు",
    backupGuarantee: "బ్యాకప్ గ్యారెంటీ",
    searchPlaceholder: "ఆర్టిస్ట్‌లను వెతకండి..."
  },
  bn: {
    heroTitle: "যাচাইকৃত মেহেন্দি শিল্পী আপনার দ্বারে",
    heroSubtitle: "যাচাইকৃত মেহেদি শিল্পীদের সাথে সংযোগ করুন। নিরাপদ বুকিং এবং ১০০% অর্গানিক মেহেদি।",
    bookNow: "এখনই বুক করুন",
    downloadApp: "অ্যাপ ডাউনলোড করুন (APK)",
    verifiedArtists: "যাচাইকৃত শিল্পী",
    organicHenna: "১০০% অর্গানিক মেহেদি",
    backupGuarantee: "ব্যাকআপ গ্যারান্টি",
    searchPlaceholder: "মেহেদি শিল্পী খুঁজুন..."
  }
};
