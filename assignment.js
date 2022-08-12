// Convert radian to degree 

function radianToDegree(inputRadian) {
    const oneRadian = 57.2958;

    if ((typeof inputRadian) == "number") {
        const convertToDegree = oneRadian * inputRadian;
        const convertTofixedNumber = convertToDegree.toFixed(2);
        const finalConvertToDegree = parseFloat(convertTofixedNumber);
        return finalConvertToDegree;
    }
    return 'please input a number'

}


// File type Checking 

function isJavaScriptFile(fileName) {
    if (typeof fileName == 'string') {
        let reversFileName = '';
        for (let i = fileName.length - 1; i >= 0; i--) {
            const element = fileName[i];
            reversFileName = reversFileName + element;
        }
        const changeNameLowercase = reversFileName.toLowerCase();
        const checkingFileType = changeNameLowercase.slice(0, 3);
        if (checkingFileType == 'sj.') {
            return true;
        }
    }
    else {
        return 'please input a string file name'
    }
    return false;
}


// Find out total oil price 

function oilPrice(dieselAmount, petrolAmount, octenAmount) {
    const dieselPerLiterPrice = 114;
    const petrolPerLiterPrice = 130;
    const octenPerLiterPrice = 135;
    if (typeof dieselAmount == 'number' && typeof petrolAmount == 'number' && typeof octenAmount == 'number') {
        const totalDieselPrice = dieselPerLiterPrice * dieselAmount;
        const totalPetrolPrice = petrolPerLiterPrice * petrolAmount;
        const totalOctenPrice = octenPerLiterPrice * octenAmount;

        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctenPrice;
        return totalOilPrice;
    }
    return 'Please input a valid number'

}


// Extra passenger total ticket price 

function publicBusFare(passenger) {

    const localBusTicketPrice = 250;
    const haveBusSit = 50;
    const haveMicroBusSit = 11;
    if (typeof passenger == 'number' && passenger > 0) {

        const reamingPeople = (passenger % haveBusSit) % haveMicroBusSit;
        const totalTicketCost = reamingPeople * localBusTicketPrice;
        return totalTicketCost;

    }
    return 'please input a valid number';

}


// Find a true friendship 

function isBestFriend(firstFriendInfo, secondFriendInfo) {

    if (typeof firstFriendInfo == 'object' && typeof secondFriendInfo == 'object') {
        if (firstFriendInfo.name == secondFriendInfo.friend && secondFriendInfo.name == firstFriendInfo.friend) {
            return true;
        }
        return false;
    }
    return 'Please input a object';
}