class Student {
    constructor(studentName, email) {
        this.studentName = studentName;
        this.email = email;
    }
}

class Bootcamp {
    constructor(campName, level, students = []) {
        this.campName = campName;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if ((!studentToRegister.studentName) || (!studentToRegister.email)) {  //do the ! instead of === so that you catch all falsey values
            console.log('Invalid name or email');
            return false;
        }
    }

    for(existingStudent of this.students) {  //unclear if you need the variable declaration word const, let or var
        if (student.email === studentToRegister.email) {
            console.log("email is already registered");
            return false;
        }
    }

    this.students.push(studentToRegister);
    console.log(`${studentToRegister.name} registered successfully!`);
    return true;

    listStudents() {
        if(this.students.length === 0) {
            console.log(`No students are registered to the ${this.campName}`);
            return false;
        }
        
        console.log(`The students registered in ${this.campName} are: `);
        for (let student of this.students) {
            console.log(`Name: ${student.studentName} | Email: ${student.email}`);
        }
        return true;
    }
}



testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.studentName === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}


reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};
runTest(reactBootcamp, testStudent);