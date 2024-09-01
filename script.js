// Get the elements
const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const commentBtn = document.getElementById('comment-btn');
const commentsContainer = document.getElementById('comments');

// Initialize the comments array
let comments = [];

// Add event listeners
commentText.addEventListener('input', () => {
  commentBtn.disabled = commentText.value.trim() === '';
});

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const comment = {
    text: commentText.value.trim(),
    author: 'Анонимно',
    reactions: [] // Add a reactions array to each comment
  };
  comments.push(comment);
  commentText.value = '';
  renderComments();
});

// Render comments function
function renderComments() {
  commentsContainer.innerHTML = '';
  comments.forEach((comment) => {
    const commentHTML = `
      <div class="comment-block">
        <span class="comment-author">${comment.author}</span>
        <span class="comment-text">${comment.text}</span>
      </div>
    `;
    commentsContainer.insertAdjacentHTML('beforeend', commentHTML);
  });
}

// Initialize the comment button
commentBtn.disabled = true;