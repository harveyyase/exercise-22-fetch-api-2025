const btn = document.getElementById("submitSearch");
const input = document.getElementById("searchWord");
const img = document.querySelector("#imageContainer img");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
    feedback.textContent = ""; 
    const searchTerm = input.value.trim();
    const apiKey = '1f73FMrHe8NxqoPOP57gqZ5syZVxdNtB'; 

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            img.src = data.data.images.original.url; 
            input.value = ""; 
        })
        .catch(error => {
            feedback.textContent = "Error: " + error.message;
        });
});
