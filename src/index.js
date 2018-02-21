// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};

    if (currency <= 0) {
        return (result)
    } else if (currency >= 10000) {
        return ({error: "You are rich, my friend! We don't have so much coins for exchange"})
    } else {

        let remainder = 0;
        //Получение колличества 50-центовых монет. {"H":1,"Q":1,"D":1,"N":1,"P":1}
        if (currency >= 50) {
            result["H"] = Math.floor(currency / 50);
            remainder = currency % 50;
        } else {
            remainder = currency;
        };
        //Получение колличества 25-центовых монет.
        if (remainder >= 25) {
            result["Q"] = Math.floor(remainder / 25);
            remainder = remainder % 25;
        };
        //Получение колличества 10-центовых монет.
        if (remainder >= 10) {
            result["D"] = Math.floor(remainder / 10);
            remainder = remainder % 10;
        };
        //Получение колличества 5-центовых монет.
        if (remainder >= 5) {
            result["N"] = Math.floor(remainder / 5);
            remainder = remainder % 5;
        };
        //Получение колличества 5-центовых монет.
        if (remainder >= 1) {
            result["P"] = Math.floor(remainder / 1);
        };

        return (result);
    }
};