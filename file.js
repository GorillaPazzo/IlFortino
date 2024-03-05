function palindrome(text) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare the original text with its reverse
    var isPalindrome = cleanText === cleanText.split('').reverse().join('');
    // Return true if it's a palindrome, false otherwise
    return isPalindrome;
}

document.getElementById("button1").addEventListener("click", function() {
    // Retrieve the input text when the button is clicked
    var inputText = document.getElementById("textInput").value;
    // Call the palindrome function with the input text
    var result = palindrome(inputText);
    // Display the result on the webpage
    var resultElement = document.getElementById("result");
    if (result) {
        resultElement.textContent = ` ${inputText} is a palindrome.`;
    } else {
        resultElement.textContent = ` ${inputText} is not a palindrome.`;
    }
    // Make the result section appear
    resultElement.style.display = "block";
});