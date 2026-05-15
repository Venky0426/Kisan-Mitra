import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi" | "kn" | "te" | "ta" | "mr";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  home: { en: "Home", hi: "होम", kn: "ಮುಖಪುಟ", te: "హోమ్", ta: "முகப்பு", mr: "मुख्यपृष्ठ" },
  features: { en: "Features", hi: "विशेषताएं", kn: "ವೈಶಿಷ್ಟ್ಯಗಳು", te: "లక్షణాలు", ta: "அம்சங்கள்", mr: "वैशिष्ट्ये" },
  videos: { en: "Videos", hi: "वीडियो", kn: "ವೀಡಿಯೊಗಳು", te: "వీడియోలు", ta: "வீடியோக்கள்", mr: "व्हिडिओ" },
  schemes: { en: "Schemes", hi: "योजनाएं", kn: "ಯೋಜನೆಗಳು", te: "పథకాలు", ta: "திட்டங்கள்", mr: "योजना" },
  marketplace: { en: "Marketplace", hi: "मार्केटप्लेस", kn: "ಮಾರುಕಟ್ಟೆ", te: "మార్కెట్‌ప్లేస్", ta: "சந்தை", mr: "बाजारपेठ" },
  dashboard: { en: "Dashboard", hi: "डैशबोर्ड", kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", te: "డాష్‌బోర్డ్", ta: "டாஷ்போர்டு", mr: "डॅशबोर्ड" },

  heroTitle: {
    en: "Smart AI Farming Assistant for Every Indian Farmer",
    hi: "हर भारतीय किसान के लिए स्मार्ट एआई फार्मिंग सहायक",
    kn: "ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯ ರೈತರಿಗೆ ಸ್ಮಾರ್ಟ್ ಎಐ ಕೃಷಿ ಸಹಾಯಕ",
    te: "ప్రతి భారతీయ రైతుకు స్మార్ట్ AI వ్యవసాయ సహాయకుడు",
    ta: "ஒவ்வொரு இந்திய விவசாயிக்கும் ஸ்மார்ட் AI விவசாய உதவியாளர்",
    mr: "प्रत्येक भारतीय शेतकऱ्यासाठी स्मार्ट AI शेती सहाय्यक"
  },

  heroSubtext: {
    en: "Get crop advice, market prices, weather alerts & government schemes instantly.",
    hi: "फसल सलाह, बाजार मूल्य, मौसम चेतावनी और सरकारी योजनाएं तुरंत प्राप्त करें।",
    kn: "ಬೆಳೆ ಸಲಹೆ, ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು, ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ತತ್ಕ್ಷಣ ಪಡೆಯಿರಿ.",
    te: "పంట సలహా, మార్కెట్ ధరలు, వాతావరణ హెచ్చరికలు & ప్రభుత్వ పథకాలను తక్షణమే పొందండి.",
    ta: "பயிர் ஆலோசனை, சந்தை விலைகள், வானிலை எச்சரிக்கைகள் & அரசு திட்டங்களை உடனடியாகப் பெறுங்கள்.",
    mr: "पीक सल्ला, बाजार किंमती, हवामान इशारे आणि सरकारी योजना त्वरित मिळवा."
  },

  startNow: { en: "Start Now", hi: "अभी शुरू करें", kn: "ಈಗ ಪ್ರಾರಂಭಿಸಿ", te: "ఇప్పుడే ప్రారంభించండి", ta: "இப்போதே தொடங்குங்கள்", mr: "आता सुरू करा" },
  exploreFeatures: { en: "Explore Features", hi: "विशेषताएं देखें", kn: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ్వೇಷಿಸಿ", te: "లక్షణాలను అన్వేషించండి", ta: "அம்சங்களை ஆராயுங்கள்", mr: "वैशिष्ट्ये एक्सप्लोर करा" },

  cropDoctor: { en: "AI Crop Doctor", hi: "एआई फसल डॉक्टर", kn: "AI ಬೆಳೆ ವೈದ್ಯ", te: "AI పంట డాక్టర్", ta: "AI பயிர் மருத்துவர்", mr: "AI पीक डॉक्टर" },

  calculator: {
    en: "Fertilizer & Pesticide Calculator",
    hi: "उर्वरक और कीटनाशक कैलकुलेटर",
    kn: "ಗೊಬ್ಬರ ಮತ್ತು ಕೀಟನಾಶಕ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    te: "ఎరువు & పురుగుమందు కాలిక్యులేటర్",
    ta: "உர & பூச்சிக்கொல்லி கால்குலேட்டர்",
    mr: "खत आणि कीटकनाशक कॅल्क्युलेटर"
  },

  farmingCalendar: {
    en: "AI Farming Calendar",
    hi: "एआई फार्मिंग कैलेंडर",
    kn: "AI ಕೃಷಿ ಕ್ಯಾಲೆಂಡರ್",
    te: "AI వ్యవసాయ క్యాలెండర్",
    ta: "AI விவசாய நாட்காட்டி",
    mr: "AI शेती दिनदर्शिका"
  },

  language: {
    en: "English",
    hi: "हिंदी",
    kn: "ಕನ್ನಡ",
    te: "తెలుగు",
    ta: "தமிழ்",
    mr: "मराठी"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
