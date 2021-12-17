const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const artist_bio = document.querySelector('#artist-bio').value.trim();
  const spotify_embed_code = document.querySelector('#spotify-embed-code').value.trim();
  const artist_img = document.querySelector('#artist-img').value.trim();
  const twitter_embed_code = document.querySelector('#twitter-embed-code').value.trim();

  if (name && artist_bio && spotify_embed_code && artist_img && twitter_embed_code) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, artist_bio, spotify_embed_code, artist_img, twitter_embed_code }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  var result = confirm("Are you sure you want to delete this project?");
  if(!result){}
  else{
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};
}

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelectorAll('.delete-button')
  .forEach(elem => elem
  .addEventListener('click', delButtonHandler));
