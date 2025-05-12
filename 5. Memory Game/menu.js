let menuSection;

function menuSectionRender() {
    const body = document.querySelector('body');
    menuSection = document.createElement('section');
    menuSection.className = 'menuSection';
    body.appendChild(menuSection);
}

function logoRender () {
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logoContainer';
    menuSection.appendChild(logoContainer);

    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.textContent = 'Memory game';
    logoContainer.appendChild(logo);
}

function startButtonRender() {
    const startButtonContainer = document.createElement('div');
    startButtonContainer.className = 'startButtonContainer';
    menuSection.appendChild(startButtonContainer);

    const startButton = document.createElement('input');
    startButton.className = 'startButton';
    startButton.type = 'button';
    startButton.value = 'START';
    startButtonContainer.appendChild(startButton);
}

export function menuRender() {
    menuSectionRender();
    logoRender();
    startButtonRender();
}