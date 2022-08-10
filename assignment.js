// 1. assignment:convert radial to degree

function radianToDegree(inputRadial) {
    const oneRadian = 57.2958;

    if ((typeof inputRadial) == "number") {
        const convertToDegree = oneRadian * inputRadial;
        return convertToDegree;
    }
    return 'please input a number'

}
const radial = 'oi';
const degree = radianToDegree(radial);
console.log(degree);


// 2.check the file name whether this is a javascript fill or not 

function isJavaScriptFile(fileName) {
    for (let i = 0; i < fileName.length; i++) {
        const element = fileName[i];
        if (element == 'javascript') {
            return true;
        }
    }
    return false;
}

const files = ['python', 'c++', 'javascript', 'react',];
const outPut = isJavaScriptFile(files);
console.log(outPut)


// 3. *dieselPerLiterPrice = 114;
//    *petrolPerLiterPrice = 114;
//    *octenPerLiterPrice = 114;

function oilPrice(diesel, petrol, octen) {
    const dieselPerLiterPrice = 114;
    const petrolPerLiterPrice = 130;
    const octenPerLiterPrice = 135;
    if (typeof diesel == 'number' && typeof petrol == 'number' && typeof octen == 'number') {
        const totalDieselPrice = dieselPerLiterPrice * diesel;
        const totalPetrolPrice = petrolPerLiterPrice * petrol;
        const totalOctenPrice = octenPerLiterPrice * octen;

        const totalCost = totalDieselPrice + totalPetrolPrice + totalOctenPrice;
        return totalCost;
    }
    return 'please input a valid number'

}
const dieselNeed = 'iu';
const petrolNeed = 15;
const octenNeed = 7;
const totalOilprice = oilPrice(dieselNeed, petrolNeed, octenNeed);
console.log(totalOilprice);


4.
// 117 participants 
// reserve bus = 50 per bus
// microbus = 11 
// remaining = publice bus
// per ticket price = 250

function publicBusFare(peoples) {
    const twoBusTotalSit = 50 * 2;
    const microbusTotalSit = 11;
    const locaBusTicketPrice = 250;

    if (typeof peoples == 'number') {
        const totalHaveSit = twoBusTotalSit + microbusTotalSit;
        let remainingPeople = peoples - totalHaveSit;
        const remaingPeopleTicketCosr = remainingPeople * locaBusTicketPrice;
        return remaingPeopleTicketCosr;
    }
    return 'please input a valid number';

}

const totalMember = 'oiet';
const localBusTotslCost = publicBusFare(totalMember);
console.log(localBusTotslCost);


function isBestFriend(friendInfo, friendInfo2) {
    // const name = friendInfo.name;
    // const name2 = friendInfo2.name;
    // const friendName = friendInfo.friend;
    // const friendName2 = friendInfo2.friend;
    if (typeof friendInfo == 'object' && typeof friendInfo2 == 'object') {
        if (friendInfo.name == friendInfo2.friend && friendInfo2.name == friendInfo.friend) {
            return true;
        }
        return false
    }
    return 'please input a object'


}
const fristFriend = { name: 'abul', friend: 'babul' };
const secondFriend = { name: 'babul', friend: 'abul' };

const originalBestFriend = isBestFriend(fristFriend, secondFriend);
console.log(originalBestFriend);