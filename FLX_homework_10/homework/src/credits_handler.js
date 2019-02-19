/* Your code goes here */
class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
        this.index = 1;
    }

    addCard() {
        let maxIndex = 3;
        if (this.index > maxIndex) {
            console.log('Too many cards!')
        } else {
            this.cards.push(userCard(this.index++))
        }
    }

    getCardByKey(index) {
        let el = 0;
        return this.cards.filter(function(item) {
            return item.getCardOptions().key === index;
        })[el]
    }
}

function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];

    function putLog(type, amount) {
        historyLogs.push({
            type: type,
            amount: amount.toFixed(1),
            date: `${(new Date()).toLocaleDateString('en-US')}, ${(new Date()).toLocaleTimeString()}`
        });
    }

    function charge(amount) {
        if (balance < amount || transactionLimit < amount) {
            console.log('Put credit or increase transaction limit!');
            return false;
        } else {
            balance -= amount;
            putLog('Withdrawal of credits', amount);
            return true;
        }
    }

    return {
        getCardOptions: function() {
            return {
                key: index,
                balance: balance.toFixed(1),
                transactionLimit: transactionLimit,
                historyLogs: historyLogs
            }
        },
        putCredits: function(amount) {
            balance += amount;
            putLog('Received credits', amount);
        },
        takeCredits: charge,
        setTransactionLimit: function(limit) {
            transactionLimit = limit;
            putLog('Transaction limit change', limit);
        },
        transferCredits: function(amount, card) {
            let tax = 1.005;
            let amountToTransfer = amount * tax;

            if (charge(amountToTransfer)) {
                card.putCredits(amount);
            }
        }
    };
}