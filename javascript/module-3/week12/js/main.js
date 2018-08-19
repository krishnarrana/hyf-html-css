// Write a function that would allow you to do this:


function createBase(baseNum) {
    return num =>  num + baseNum;
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27



// Rewrite the following code (using promise and other control flow tools/features):

const usersURL = "https://jsonplaceholder.typicode.com/users";
fetch(usersURL)
    .then(userData => userData.json())
    .then(users => {
        users.forEach(user => {
            const todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
            fetch(todosURL)
                .then(userTodoData => userTodoData.json())
                .then(userTodo => {
                    user.todos = userTodo;
                })
            console.log(users);
        });
    })