// script.js

// Buttons
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

// Editor
const editor = document.getElementById('editor');

// Bold Button click handler
boldBtn.addEventListener('click', () => {
    document.execCommand('bold');
});

// Italic Button click handler
italicBtn.addEventListener('click', () => {
    document.execCommand('italic');
});

// Save the document to localStorage
saveBtn.addEventListener('click', () => {
    const content = editor.innerHTML; // Get the content of the editor
    localStorage.setItem('document', content); // Save it in localStorage
    alert('Document saved!');
});

// Load the document from localStorage
loadBtn.addEventListener('click', () => {
    const savedContent = localStorage.getItem('document'); // Retrieve content from localStorage
    if (savedContent) {
        editor.innerHTML = savedContent; // Load content into the editor
    } else {
        alert('No document saved!');
    }
});
