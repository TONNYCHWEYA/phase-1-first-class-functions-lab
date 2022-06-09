// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}
const returnLastTwoDrivers = function(array){
  return array.slice(2)
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer){
  return (function(fare){
     return fare * integer;
  })
}
function fareDoubler(fare){
const farer = createFareMultiplier(2);
 return farer(fare)
}
function fareTripler(fare){
  const farer = createFareMultiplier(3);
   return farer(fare)
  }
 function selectDifferentDrivers(array, fun){
   if(fun === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(array)
   }else if(fun === returnLastTwoDrivers){
     return returnLastTwoDrivers(array)
   }

 }
