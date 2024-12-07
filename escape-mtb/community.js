document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Get the input value
    const userInput = document.getElementById('userInput').value;

    // Create a new list item and add the text
    const newListItem = document.createElement('li');
    newListItem.textContent = userInput;

    // Append the new list item to the list
    document.getElementById('textList').appendChild(newListItem);

    // Clear the input field
    document.getElementById('userInput').value = '';
});
