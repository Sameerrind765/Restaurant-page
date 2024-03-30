const tags = document.querySelectorAll(["data-tab-target"]);
console.log(tags);
console.log("webpac is working");

function loadContent(content) {
    const contentDiv = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to the Page!';
    contentDiv.appendChild(heading);
    const head_2 = document.createElement('h2');
    heading.textContent = content;
    contentDiv.appendChild(heading);
    console.log("functions is working")
}
loadContent();
