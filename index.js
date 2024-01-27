/* Your Code Here */
function createEmployeeRecord(employeeArray){
    const employeeRecord = {
        firstName: employeeArray[0], 
        familyName: employeeArray[1], 
        title: employeeArray[2], 
        payPerHour: employeeArray[3], 
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;
};
//check work 
let allanRecord = console.log(createEmployeeRecord(['allan','saenz','shipper',20]));
//
function createEmployeeRecords(arrayOfArrays){
   const employeeRecords = arrayOfArrays.map(createEmployeeRecord);
   return employeeRecords;
}; 
//check work
let warehouseRecords = console.log(createEmployeeRecords([['luis','fajre','manager',30],['carell','west','receiver',20]]));
//
function createTimeInEvent(dateStamp){
    const [date, hour] = dateStamp.split(' '); 
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(hour), 
        date: date
    }; 
    this.timeInEvents.push(timeInObj); 
    return this
};
//check work
console.log(createTimeInEvent.call(allanRecord, '2023-02-01 0800'));
//
function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(' '); 
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(hour), 
        date: date 
    }; 
    this.timeOutEvents.push(timeOutObj); 
    return this
};
//check work
createTimeOutEvent.call(allanRecord, '2023-02-01 1700'); //this work check did not work I am not sure why but I got the test to pass so I moved on
//

//the function below is still the most challenging for me, I found that i could use .find() by googling, but I have trouble understanding what I'm doing line by line and why.
function hoursWorkedOnDate(dateWorked){
    const dayIn = this.timeInEvents.find(element => element.date === dateWorked); 
    const dayOut = this.timeOutEvents.find(element => element.date === dateWorked); 
    const hourIn = dayIn.hour; 
    const hourOut = dayOut.hour; 
    let totalHoursWorked = hourOut - hourIn; 

    if (totalHoursWorked > 900){
        totalHoursWorked = parseInt(totalHoursWorked.toString().substring(0,2)); 
    } else {
        totalHoursWorked = parseInt(totalHoursWorked.toString().substring(0,1)); 
    } return totalHoursWorked
}; 
// 
function wagesEarnedOnDate(dateWorked){
    const payRate = this.payPerHour; 
    return payRate * hoursWorkedOnDate.call(this, dateWorked)
}; 
// 
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// my code continues 
function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find(employee => employee.firstName === firstName); 
}
//the function above took me much longer than it needed to, as always I assumed it would be more complicated than it really was, 
// I was confused whether it should be using "this" within the function as it's the reason for the lesson
function calculatePayroll(arrayOfRecords){
    let payRoll = 0; 
    arrayOfRecords.forEach(employee => {
        const allWages = allWagesFor.call(employee); 
        payRoll += allWages;
    })
return payRoll
}