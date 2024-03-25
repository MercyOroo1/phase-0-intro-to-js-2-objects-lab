// Write your solution in this file!
let employee = {
    name : "Mark",
    streetAddres : "12 uptown"

}
function  updateEmployeeWithKeyAndValue (employee,key,value) {
    let newEmployee= {...employee}
  newEmployee[key]=value
       return newEmployee
}
const newHire = updateEmployeeWithKeyAndValue ()

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    let deleteEmployee = {...employee}
    delete deleteEmployee[key]
    return deleteEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
   delete employee[key]
   return employee
}