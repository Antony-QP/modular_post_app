class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.postSubmit');
    this.forState = document.querySelector('add');
  }

  showPosts(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id=${post.id}>
          <i class="fas fa-pencil-alt"></i>
          </a>
          <a href="#" class="delete card-link" data-id=${post.id}>
          <i class="fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
      `
    })
    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    // Create div for alert
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.posts-container');
    // Get posts
    const posts = document.querySelector('#posts');
    // Insert the alert div
    container.insertBefore(div, posts);
    // Set timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput = '';
    this.bodyInput = '';
  }
}

export const ui = new UI();