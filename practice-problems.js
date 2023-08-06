//--------------------Problem-1------------

function feetToInch(feet) {
    let result = feet * 12;
    return result; // 60
}

let givenFeet = 5;
let givenResult1 = feetToInch(givenFeet);
console.log(givenResult1);




//----------------Problem-2-----------------

function centimeterToMeter(y) {
    let result = 0.01 * y
    return result; // 0.6
}
let givenCentimeter = 60;
let givenResult2 = centimeterToMeter(givenCentimeter);
console.log(givenResult2);




//------------------Problem-3---------------

function paperRequirements(book1, book2, book3) {
    let pages1 = book1 * 100;
    let pages2 = book2 * 200;
    let pages3 = book3 * 300;
    let totalPages = pages1 + pages2 + pages3;
    return totalPages; //3800
}
let takenBooks = paperRequirements(5, 6, 7);
console.log(takenBooks);




//---------------Problem-4----------------------

function bestfriend(arr) {
    let biggestFriend = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let friends = arr[i];
        if (friends.length > biggestFriend.length) {
            biggestFriend = friends;
        }
    }
    return biggestFriend; //Mahmudullah
}
let friendList = ['Sakib', 'Tamim', 'Mashrafe', 'Rubel', 'Mahmudullah'];
let friendsArray = bestfriend(friendList);
console.log(friendsArray);



//--------------Problem-5-----------------------

function positiveNumber(arr) {
    let positiveNum = [];
    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i];
        if (numbers >= 0) {
            positiveNum.push(numbers);
        }
        else {
            break;
        }
    }
    return positiveNum;  //[ 2, 4, 3, 6, 5 ]
}
let givenNumbers = positiveNumber([2, 4, 3, 6, 5, -6, -2, 80, 100]);
console.log(givenNumbers);
