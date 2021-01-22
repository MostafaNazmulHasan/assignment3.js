


function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(2)
console.log(result);






function budgetCalculator(watch,phone,laptop) {
    var total = (watch*50)+(phone*100)+(laptop*500);
    return total;
}
var result = budgetCalculator(1,2,3);
console.log(result);







function hotelCost(day) {
    if(day<=10){
        cost = day*100;
    }
    else if(day<=20){
        var firstValue = 10*100;
        var remaining = day - 10;
        var secondValue = remaining * 80;
        cost = firstValue + secondValue;
    }
    else{
        var firstValue = 10 * 100;
        var secondValue = 10 * 80;
        var remaining = day - 20;
        var thirdValue = remaining * 50;
        cost = firstValue + secondValue + thirdValue;
    }
    return cost;
}
var totalCost = hotelCost(24);
console.log (totalCost);







function megaFriend(names) {
    var max = names[0];
    for (var i =0; i < names.length; i++){
        var element = names[i];
        if(element.length > max.length){
            max = element;
        }
    }
    return max;
}

