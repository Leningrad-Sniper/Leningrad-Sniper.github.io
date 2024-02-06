function toggleMode() {
    const body = document.body;
    const darkModeButton = document.querySelector('.dark-mode-button');

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light mode';
    } else {
        darkModeButton.textContent = 'Dark mode';
    }
}


function like() {
    let likes = localStorage.getItem('likes') || 0;
    likes++;
    localStorage.setItem('likes', likes);
    updateLikesDislikes();
}

function dislike() {
    let dislikes = localStorage.getItem('dislikes') || 0;
    dislikes++;
    localStorage.setItem('dislikes', dislikes);
    updateLikesDislikes();
}

function updateLikesDislikes() {
    document.getElementById('likes').textContent = 'Likes: ' + (localStorage.getItem('likes') || 0);
    document.getElementById('dislikes').textContent = 'Dislikes: ' + (localStorage.getItem('dislikes') || 0);
}

