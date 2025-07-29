async function loadLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    const translations = await res.json();
  
  
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  }
  
  