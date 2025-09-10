const translations = {
  en: {
    about: "I am a Computer Science student and Web Developer (2nd year). Obsessed with coding, algorithms, and building real-world projects.",
    linksTitle: " My Links"
  },
  fr: {
    about: "Je suis étudiant en Informatique et Développeur Web (2ème année). Obsédé par le code, les algorithmes et la création de projets réels.",
    linksTitle: " Mes Liens"
  },
  ar: {
    about: "أنا طالب علوم الحاسوب ومطور ويب (السنة الثانية). مهووس بالبرمجة والخوارزميات وبناء المشاريع الواقعية.",
    linksTitle: " روابطـي"
  }
};

function setLang(lang) {
  document.getElementById("about").innerText = translations[lang].about;
  document.getElementById("links-title").innerText = translations[lang].linksTitle;
}

