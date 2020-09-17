import {
  http
} from './http';
import {
  ui
} from './ui';

// Event Listener for get posts
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Event listener for delete
document.querySelector('#posts').addEventListener('click', deletePost)

// Event listener for edit state
document.querySelector('#posts').addEventListener('click', enableEdit)

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost() {
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value

  const data = {
    title,
    body
  }
  // Create post
  http.post('http://localhost:3000/posts', data)
    .then(data =>
      ui.showAlert('Post added', 'alert alert-success'),
      ui.clearFields(),
      getPosts())
    .catch(err => console.log(err))
}

// Delete Post
function deletePost(e) {
  e.preventDefault()
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure")) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert("post removed", "alert alert-success");
          getPosts();
        })
        .catch(err => console.log(err))
    }
  }
}

// Enable edit state
function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const body = e.target.parentElement.previousElementSibling.textContent

    const data = {
      id,
      title,
      body
    }

    // Fill the from with the current post
    ui.fillForm(data);
  }

  e.preventDefault()
}