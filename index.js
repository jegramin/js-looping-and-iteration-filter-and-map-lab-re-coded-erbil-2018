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

function exactMatch(drivers,obj){
  return drivers.filter(function(driver){
    if(driver.key === obj.name || driver.key === obj.revenue){
      return driver;
    }
  })
}