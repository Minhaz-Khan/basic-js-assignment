function publicBusFare(peoples) {

    const localBusTicketPrice = 250;
    const busSit = 50;
    const miroBusSit = 11;
    if (typeof peoples == 'number' && peoples > 0) {

        const totalreamingPeople = (peoples % busSit) % miroBusSit;
        const totalTicketCost = totalreamingPeople * localBusTicketPrice;
        return totalTicketCost;

    }
    return 'please input a valid number';

}

const totalMember = 50;
const localBusTotslCost = publicBusFare(totalMember);
console.log(localBusTotslCost);