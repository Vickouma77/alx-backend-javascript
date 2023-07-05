interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework = (): string => 'Currently working';

    displayName = (): string => this.firstName;
}

interface StudentConstructor {
    (firstName: string, lastName: string): StudentClass;
}

const Student: StudentConstructor = (firstName: string, lastName: string): StudentClass => {
    return new StudentClass(firstName, lastName);
}

console.log(Student('John', 'Doe').displayName());
console.log(Student('John', 'Doe').workOnHomework());