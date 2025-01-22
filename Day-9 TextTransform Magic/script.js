// Get references to the elements
const textInput = document.getElementById("text-input");
const uppercaseBtn = document.getElementById("uppercase-btn");
const lowercaseBtn = document.getElementById("lowercase-btn");
const output = document.getElementById("output");

// Function to convert text to uppercase
uppercaseBtn.addEventListener("click", () => {
    const inputText = textInput.value;
    const upperText = inputText.toUpperCase();
    output.textContent = upperText;
});

// Function to convert text to lowercase
lowercaseBtn.addEventListener("click", () => {
    const inputText = textInput.value;
    const lowerText = inputText.toLowerCase();
    output.textContent = lowerText;
});
