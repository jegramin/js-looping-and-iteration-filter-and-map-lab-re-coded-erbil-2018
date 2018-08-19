// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(name){
    if(name.revenue > revenue){
      return {name: name.name, revenue: name.revenue};
    }
  })
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(name){
    return name.name;
  })
}

function exactMatch(drivers,attr, value){
  return drivers.filter(function(driver){
    if(driver.attr === value ){
      return {name: name.name, revenue: name.revenue}
    }
  })
}