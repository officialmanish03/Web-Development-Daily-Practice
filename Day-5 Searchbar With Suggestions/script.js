// List of suggestions
const suggestionsList = [
    "Computer",
    "Coat",
    "Coding",
    "Coffee",
    "Connection",
    "Constitution",
    "Control",
    "Content",
    "Comet",
    "Coconut",
  "Caramel Popcorn"
];

const searchBar = document.getElementById('search-bar');
const suggestionsBox = document.getElementById('suggestions');

// Show suggestions based on input
searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (query) {
        const filteredSuggestions = suggestionsList.filter(item => 
            item.toLowerCase().startsWith(query)
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = suggestion;

                // Handle suggestion click
                div.addEventListener('click', function () {
                    searchBar.value = suggestion;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                });

                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', function (e) {
    if (!searchBar.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
    }
});
