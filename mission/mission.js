const themeSelector = document.querySelector('select[name="theme-selector"]');
const logo = document.querySelector('img[alt="byui-logo"]');

function changeTheme() {
    // check to see what the current value of our select is.
    const selectedTheme = themeSelector.value;

    // if the value is dark then:
    if (selectedTheme === 'dark') {
        // add the dark class to the body
        document.body.classList.add('dark');
        // change the source of the logo img to point to the white logo.
        logo.src = 'byui-logo_white.png';
    } 
    else {
        // remove the dark class
        document.body.classList.remove('dark');
        // make sure the logo src is the blue logo.
        logo.src = 'byui-logo_blue.webp';
    }
}

// add an event listener to the themeSelector element here.
themeSelector.addEventListener('change', changeTheme);