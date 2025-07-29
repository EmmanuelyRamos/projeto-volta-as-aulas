// Função para formatar a data conforme o idioma
function formatDate(date, locale) {
    return new Intl.DateTimeFormat(locale).format(date);
  }
  
  
  // Função para obter o idioma do usuário (localStorage ou padrão pt)
  function getUserLang() {
    return localStorage.getItem('lang') || 'pt';
  }
  
  
  // Função para salvar o idioma
  function setUserLang(lang) {
    localStorage.setItem('lang', lang);
  }
  
  
  // Atualiza o conteúdo do site com base no idioma
  async function updateUI() {
    const lang = getUserLang();
    const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  
  
    // Carrega os textos traduzidos
    await loadLanguage(lang);
  
  
    // Atualiza a data formatada
    const dataAtual = new Date();
    const dataFormatada = formatDate(dataAtual, locale);
    const elData = document.getElementById('data-atual');
    if (elData) {
      elData.textContent = dataFormatada;
    }
  
  
    console.log('Idioma atual:', lang);
  }
  
  
  // Cria os botões para troca de idioma
  function createLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'idioma-switch';
    switcher.style.margin = '10px';
  
  
    const btnPT = document.createElement('button');
    btnPT.textContent = 'PT';
    btnPT.onclick = () => {
      setUserLang('pt');
      updateUI();
    };
  
  
    const btnEN = document.createElement('button');
    btnEN.textContent = 'EN';
    btnEN.onclick = () => {
      setUserLang('en');
      updateUI();
    };
  
  
    switcher.appendChild(btnPT);
    switcher.appendChild(btnEN);
    document.body.insertBefore(switcher, document.body.firstChild); // aparece no topo da página
  }
  
  
  // Inicia ao carregar o DOM
  document.addEventListener('DOMContentLoaded', () => {
    createLanguageSwitcher();
    updateUI();
  });
  
  
  