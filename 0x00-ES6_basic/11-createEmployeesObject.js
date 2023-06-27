export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

console.log(createEmployeesObject('Software', [ 'Bob', 'Sylvie' ]));
