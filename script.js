document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const themeSelect = document.getElementById('themeSelect');
    const listStyleSelect = document.getElementById('listStyleSelect');
    const dynamicList = document.getElementById('dynamicList');

    const items = [
        'Learn JavaScript',
        'Build a web app',
        'Master CSS',
        'Explore APIs',
        'Deploy to server'
    ];
    function populateList(style) {
        dynamicList.innerHTML = ''; 
        dynamicList.className = ''; 

   
        dynamicList.classList.add(style);


        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            dynamicList.appendChild(li);
        });
    }

    // Function to apply the theme
    function applyTheme(theme) {
        document.body.className = ''; 
        document.body.classList.add(`theme-${theme}`);
    }

    // Function to save preferences
    function savePreferences() {
        const preferences = {
            theme: themeSelect.value,
            listStyle: listStyleSelect.value
        };
        localStorage.setItem('preferences', JSON.stringify(preferences));
    }

    // Function to load preferences
    function loadPreferences() {
        const savedPreferences = localStorage.getItem('preferences');
        if (savedPreferences) {
            const { theme, listStyle } = JSON.parse(savedPreferences);
            themeSelect.value = theme;
            listStyleSelect.value = listStyle;
            applyTheme(theme);
            populateList(listStyle);
        } else {
            // Default settings
            applyTheme('classic');
            populateList('square');
        }
    }

    // Event listeners for preference changes
    themeSelect.addEventListener('change', () => {
        applyTheme(themeSelect.value);
        savePreferences();
    });

    listStyleSelect.addEventListener('change', () => {
        populateList(listStyleSelect.value);
        savePreferences();
    });

   
    loadPreferences();
});
