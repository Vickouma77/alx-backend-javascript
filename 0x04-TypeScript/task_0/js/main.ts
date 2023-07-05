interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    location: 'New York'
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'New York'
}

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

thead.appendChild(th1);
thead.appendChild(th2);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');

    const td1: HTMLTableCellElement = document.createElement('td');
    const td2: HTMLTableCellElement = document.createElement('td');

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;

    td1.style.border = '1px solid gray';
    td2.style.border = '1px solid gray';
    td1.style.padding = '.5rem';
    td2.style.padding = '.5rem';

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);

});

body.appendChild(table);
