const emojisGrid = document.querySelector('.emojis-grid');

// Fetch data from API
function fetchExistingEmojis() {
  const API = "https://emojihub.yurace.pro/api/all";
  fetch(API)
    .then(response => response.json())
    .then(emojis => {
      emojis.forEach(emoji => {
        addExistingEmoji(emoji.htmlCode[0]);
      });
    })
    .catch(error => console.error('Error fetching existing emojis:', error));
}

// Function to add an existing emoji to the grid
function addExistingEmoji(htmlCode) {
  const emojiItem = document.createElement('div');
  emojiItem.classList.add('emoji-item');
  emojiItem.innerHTML = htmlCode;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteEmoji(emojiItem);
  });

  emojiItem.appendChild(deleteButton);

  emojisGrid.appendChild(emojiItem);
}

// Function to delete an emoji
function deleteEmoji(emojiItem) {
  emojiItem.remove();
}

// Fetch existing emojis when the page loads
fetchExistingEmojis();