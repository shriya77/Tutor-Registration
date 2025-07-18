document.getElementById("tutorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const selectedOption = document.getElementById("myDropdown").value;
  const notes = document.querySelector("textarea[name='notes']").value;

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("selectedTutor", selectedOption);
  formData.append("notes", notes);

  console.log("Sending:", Object.fromEntries(formData));

  fetch("https://script.google.com/macros/s/AKfycbw--X7aGPLDPPMC9x9FOJ0ZmbzEjzIl6SqQjFcA5-wbSE0RlA_uHn0pwkw4_8t3Pr7m0Q/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((data) => {
      alert("Registration successful! Thank you.");
      document.getElementById("tutorForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem submitting your form.");
    });
});

const translations = {
  en: {
    heading: "Meet Your Tutor",
    description: "Explore inspiring tutors and register for your journey today.",
    browseButton: "Browse Tutors",
    registerHeading: "Register",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    notesPlaceholder: "Any preferences or notes?",
    submit: "Submit",
    tutorLabel: "Choose an option:",
    availableTutors: "Available Tutors",
    daysLabel: "Days:",
    timeLabel: "Time:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  es: {
    heading: "Conoce a tu tutor",
    description: "Explora tutores inspiradores y regístrate para tu viaje hoy.",
    browseButton: "Ver tutores",
    registerHeading: "Registrarse",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Correo electrónico",
    notesPlaceholder: "¿Alguna preferencia o nota?",
    submit: "Enviar",
    tutorLabel: "Elige una opción:",
    availableTutors: "Tutores disponibles",
    daysLabel: "Días:",
    timeLabel: "Hora:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  hi: {
    heading: "अपने ट्यूटर से मिलें",
    description: "प्रेरणादायक ट्यूटर देखें और आज ही पंजीकरण करें।",
    browseButton: "ट्यूटर देखें",
    registerHeading: "पंजीकरण करें",
    namePlaceholder: "आपका नाम",
    emailPlaceholder: "ईमेल पता",
    notesPlaceholder: "कोई पसंद या टिप्पणी?",
    submit: "जमा करें",
    tutorLabel: "एक विकल्प चुनें:",
    availableTutors: "उपलब्ध ट्यूटर",
    daysLabel: "दिन:",
    timeLabel: "समय:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  ta: {
    heading: "உங்கள் ட்யூட்டரை சந்திக்கவும்",
    description: "ஊக்கமளிக்கும் ட்யூட்டர்களைப் பார்வையிட்டு, இன்று உங்கள் பயணத்தை பதிவு செய்யுங்கள்.",
    browseButton: "ட்யூட்டர்கள் பார்க்க",
    registerHeading: "பதிவு செய்க",
    namePlaceholder: "உங்கள் பெயர்",
    emailPlaceholder: "மின்னஞ்சல் முகவரி",
    notesPlaceholder: "விருப்பங்கள் அல்லது குறிப்பு?",
    submit: "சமர்ப்பிக்கவும்",
    tutorLabel: "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்:",
    availableTutors: "கிடைக்கக்கூடிய ட்யூட்டர்கள்",
    daysLabel: "நாட்கள்:",
    timeLabel: "நேரம்:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  te: {
    heading: "మీ ట్యూటర్‌ను కలవండి",
    description: "ప్రేరణాత్మక ట్యూటర్లను అన్వేషించి, మీ ప్రయాణాన్ని ఈరోజే ప్రారంభించండి.",
    browseButton: "ట్యూటర్లను వీక్షించండి",
    registerHeading: "నమోదు",
    namePlaceholder: "మీ పేరు",
    emailPlaceholder: "ఈమెయిల్ చిరునామా",
    notesPlaceholder: "ప్రాధాన్యతలు లేదా గమనికలు?",
    submit: "సమర్పించండి",
    tutorLabel: "ఒక ఎంపికను ఎంచుకోండి:",
    availableTutors: "అందుబాటులో ఉన్న ట్యూటర్లు",
    daysLabel: "రోజులు:",
    timeLabel: "సమయం:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  kn: {
    heading: "ನಿಮ್ಮ ಟ್ಯೂಟರ್ ಅನ್ನು ಭೇಟಿಯಾಗಿರಿ",
    description: "ಪ್ರೇರಣಾತ್ಮಕ ಟ್ಯೂಟರ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಇಂದೇ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
    browseButton: "ಟ್ಯೂಟರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    registerHeading: "ನೋಂದಣಿ",
    namePlaceholder: "ನಿಮ್ಮ ಹೆಸರು",
    emailPlaceholder: "ಇಮೇಲ್ ವಿಳಾಸ",
    notesPlaceholder: "ಆಯ್ಕೆಗಳು ಅಥವಾ ಟಿಪ್ಪಣಿಗಳು?",
    submit: "ಸಲ್ಲಿಸು",
    tutorLabel: "ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ:",
    availableTutors: "ಲಭ್ಯವಿರುವ ಟ್ಯೂಟರ್‌ಗಳು",
    daysLabel: "ದಿನಗಳು:",
    timeLabel: "ಸಮಯ:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  bn: {
    heading: "আপনার টিউটরের সঙ্গে দেখা করুন",
    description: "অনুপ্রেরণামূলক টিউটরদের অন্বেষণ করুন এবং আজই রেজিস্টার করুন।",
    browseButton: "টিউটর দেখুন",
    registerHeading: "রেজিস্টার করুন",
    namePlaceholder: "আপনার নাম",
    emailPlaceholder: "ইমেইল ঠিকানা",
    notesPlaceholder: "পছন্দ বা নোট?",
    submit: "জমা দিন",
    tutorLabel: "একটি বিকল্প নির্বাচন করুন:",
    availableTutors: "উপলভ্য টিউটর",
    daysLabel: "দিন:",
    timeLabel: "সময়:",
    timezoneInfo: "*Times shown in your local time zone"
  },
  mr: {
    heading: "आपल्या ट्यूटरला भेटा",
    description: "प्रेरणादायक ट्यूटर शोधा आणि आजच नोंदणी करा.",
    browseButton: "ट्यूटर पहा",
    registerHeading: "नोंदणी करा",
    namePlaceholder: "तुमचे नाव",
    emailPlaceholder: "ईमेल पत्ता",
    notesPlaceholder: "कोणत्याही पसंती किंवा टीपा?",
    submit: "सबमिट करा",
    tutorLabel: "एक पर्याय निवडा:",
    availableTutors: "उपलब्ध ट्यूटर",
    daysLabel: "दिवस:",
    timeLabel: "वेळ:",
    timezoneInfo: "*Times shown in your local time zone"
  }
};

document.querySelector('.language-selector').addEventListener('change', (e) => {
  const lang = e.target.value;
  translateSite(lang);
});

function translateSite(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelector('#hero h1').textContent = t.heading;
  document.querySelector('#hero p').textContent = t.description;
  document.querySelector('.cta-btn').textContent = t.browseButton;
  document.querySelector('#register h2').textContent = t.registerHeading;
  document.querySelector("input[name='name']").placeholder = t.namePlaceholder;
  document.querySelector("input[name='phone']").placeholder = t.emailPlaceholder;
  document.querySelector("textarea[name='notes']").placeholder = t.notesPlaceholder;
  document.querySelector("label[for='myDropdown']").textContent = t.tutorLabel;
  document.querySelector(".submit-btn").textContent = t.submit;
  document.querySelector('#tutors h2').textContent = t.availableTutors;
  document.querySelectorAll('#label-days').forEach(el => el.textContent = t.daysLabel);
  document.querySelectorAll('#label-time').forEach(el => el.textContent = t.timeLabel);
  document.getElementById('timezone-info').textContent = t.timezoneInfo;
}

// Convert tutor times to user's local time zone, using data-days and data-times attributes
function convertTutorTimes() {
  const DateTime = luxon.DateTime;

  document.querySelectorAll(".time-value").forEach(el => {
    const tz = el.dataset.timezone;
    const dayList = el.dataset.days.split(',').map(d => d.trim());
    const timeList = el.dataset.times.split(',').map(t => t.trim());

    const output = [];

    dayList.forEach(day => {
      timeList.forEach(time => {
        let dt = DateTime.now().setZone(tz);
        dt = dt.set({ weekday: DateTime.fromFormat(day, "cccc").weekday });

        const parsedTime = DateTime.fromFormat(time, "h:mma", { zone: tz });
        dt = dt.set({ hour: parsedTime.hour, minute: parsedTime.minute });

        const local = dt.setZone(DateTime.local().zoneName);
        output.push(`${local.toFormat("cccc h:mma")}`);
      });
    });

    el.textContent = output.join(", ");
  });

  const tzDisplay = document.getElementById("local-zone");
  if (tzDisplay) {
    tzDisplay.textContent = DateTime.local().zoneName;
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", convertTutorTimes);

// Toggle card flip on click
document.querySelectorAll(".flip-card-inner").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});