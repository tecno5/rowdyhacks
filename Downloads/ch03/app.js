document.getElementById('submit-question').addEventListener('click', function() {
    const question = document.getElementById('question-input').value;
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('chatgpt-response').textContent = data.answer;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
