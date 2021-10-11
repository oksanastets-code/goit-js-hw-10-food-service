const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEMA = 'current-thema';
const savedThema = localStorage.getItem(THEMA);

const refs = {
    switchEl: document.querySelector('#theme-switch-toggle'),
    targetEl: document.querySelector('body'),
};

// by loading page
onLoadPage();
function onLoadPage() {
    if (savedThema) {
        console.log('you load this page NOT for the first time');
        refs.targetEl.classList.add(savedThema);
        } else {
        console.log('you load this page for the first time');
        refs.targetEl.classList.add(Theme.LIGHT);
        localStorage.setItem(THEMA, refs.targetEl.className);
    }
}

// Change thema
refs.switchEl.addEventListener('change', onThemeSwitch);
function onThemeSwitch() {
    refs.targetEl.classList.toggle(Theme.DARK);
    refs.targetEl.classList.toggle(Theme.LIGHT)
    localStorage.setItem(THEMA, refs.targetEl.className);
};

// Switch position
ifChecked();
function ifChecked() {
    if (refs.targetEl.classList.contains(Theme.DARK)) {
        refs.switchEl.setAttribute('checked', 'true')
    };
}