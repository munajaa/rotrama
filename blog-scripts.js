
document.getElementById('blog-form').addEventListener('submit', event => {
    event.preventDefault();
    const content = document.getElementById('blog-content').value;
    const entry = document.createElement('div');
    entry.textContent = content;
    entry.classList.add('blog-entry');
    document.getElementById('blog-entries').appendChild(entry);
    document.getElementById('blog-content').value = '';
});
