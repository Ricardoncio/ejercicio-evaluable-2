const posts = document.querySelectorAll(".post");

if (posts.length > 0) {
    posts.forEach( (element) => {
        element.addEventListener('click', () => {
            window.location.href = "";
        })
    })

}