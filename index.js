// Write your solution in this file!
const workerProfile = {
    name: "Alex Doe",
    streetAddress: "123 Elm Street"
  };
  
  const employee = workerProfile; 
  
  function updateEmployeeWithKeyAndValue(emp, key, value) {
    return { ...emp, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp;
  }
  
  function deleteFromEmployeeByKey(emp, key) {
    const freshCopy = { ...emp };
    delete freshCopy[key];
    return freshCopy;
  }
  
  function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
  }
  