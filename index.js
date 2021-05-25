// Code your solution in this file!
function returnFirstTwoDrivers(){
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    let firstDrivers = drivers.splice(0,2)
        return firstDrivers;
} 

function returnLastTwoDrivers(){
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    let lastDrivers = drivers.splice(2,4)
        return lastDrivers;
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = multiplier => function(fare) {
    return fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnTwoDrivers) => returnTwoDrivers(drivers);