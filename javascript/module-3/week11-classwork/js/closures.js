// function adderFactory(x) {
//     console.log(x)
//     return n => n + x;

// }

// const addFive = adderFactory(5);
// console.log(adderFactory)
// console.log(addFive);
// console.log(addFive(3));

function createClass(students, roomNumber, time) {
    return {
        addStudent(name) {
            students.push(name);
        },
        removeStudent(name) {
        	students.splice(students.indexOf(name), 1 );
        },
        removeAllStudents() {
        	students= [];
        },
        getStudents() {
            return students;
        },
        getNumberOfStudents() {
            return students.length;
        },
        getTime() {
            return time;
        },
        changeTime(newTime) {
        	time = newTime;
        },
        isStudentInClass(student) {
        	return students.indexOf(student) !== -1 ? "Yes " : "No";
        },
    }
}

const javascript3 = createClass(['Ahmad', 'Jenny', 'Børge'], '3A', '12-16');

console.log(javascript3.getTime());
console.log(javascript3.getNumberOfStudents());
javascript3.addStudent('Birger');
console.log(javascript3.getStudents());
console.log(javascript3.isStudentInClass("Ahmad"));

