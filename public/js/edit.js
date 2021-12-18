const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const artist_bio = document.querySelector('#artist-bio').value.trim();
  const spotify_embed_code = document.querySelector('#spotify-embed-code').value.trim();
  const artist_img = document.querySelector('#artist-img').value.trim();
  const twitter_embed_code = document.querySelector('#twitter-embed-code').value.trim();
  const project_id = document.getElementsByClassName('btn hover:bg-green-600 hover:text-green-200 text-white-700 mx-5 my-10 px-6 py-2 rounded-lg text-5xl')[0].id;

  // accept user input and edit existing info in DB
  if (name && artist_bio && spotify_embed_code && artist_img && twitter_embed_code) {
    const response = await fetch(`/api/projects/${project_id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, artist_bio, spotify_embed_code, artist_img, twitter_embed_code }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to edit project');
    }
  }
};

document
  .querySelector('.edit-project-form')
  .addEventListener('submit', newFormHandler);
