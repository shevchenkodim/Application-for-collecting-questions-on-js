export class Question {
    static create(question) {
        return fetch('https://question-js-aeffa.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
            .then(addToLocalStorage)
    }
}

function addToLocalStorage(question) {
    localStorage.setItem('questions', JSON.stringify(question))
}
