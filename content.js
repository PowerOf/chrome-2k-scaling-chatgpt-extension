console.log("Page fully loaded on chat.openai.com");

console.log("Starting content script for chat.openai.com");

// Create a new style element
const style = document.createElement('style');
console.log("Created style element");

// Add media query CSS to the style element
style.innerHTML = `
@media (min-width: 1536px) {
    .xl\\:max-w-3xl {
      max-width: none !important;
    }
  }
  @media (min-width: 1600px) {
    .xl\\:max-w-3xl {
      max-width: 75rem !important;
    }
  }
`;
console.log("Added media queries to style element");

// Append the style element to the head of the document
document.head.appendChild(style);
console.log("Appended style element to document head");

console.log("Finished content script for chat.openai.com");