function UserCard(key) {
    this.key = key;
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];

    this.getCardOptions = () => {
        return {
            ['key']: this.key,
            ['balance']: this.balance,
            ['transactionLimit']: this.transactionLimit,
            ['historyLogs']: this.historyLogs,
        }
    }

    this.putCredits = (cash) => {
        this.balance += cash;
        this.addHistoryLogs('Received credits', cash);
    }

    this.takeCredits = (cash) => {
        if (cash <= this.balance && cash <= this.transactionLimit) {
            this.balance -= cash;
            this.addHistoryLogs('Withdrawal of credits', cash);
        } else console.error('Перевищейний ліміт, або недостатньо коштів, Будьласка поповніть ваш рахунок :)');
    }

    this.setTransactionLimit = (newLimit) => {
        this.transactionLimit = newLimit;
        this.addHistoryLogs('Transaction limit change', newLimit);
    }

    this.transferCredits = (cash, anotherCard) => {
        if (cash * 1.05 <= this.balance && cash * 1.05 <= this.transactionLimit) {
            this.balance -= cash * 1.05;
            anotherCard.putCredits(cash);
            this.addHistoryLogs('Withdrawal of credits', cash);
        } else console.error('Перевищейний ліміт, або недостатньо коштів, Будьласка поповніть ваш рахунок :)');
    }


    this.addHistoryLogs = (operationType, credits) => {
        let time = new Date().toLocaleTimeString();
        let day = new Date().toLocaleDateString("en-US");
        this.historyLogs.push({
            operationType,
            credits,
            operationTime: `${time} ${day}`,
        })
    }
}


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let cardsLength=this.cards.length;
        if(cardsLength===3) return console.error('Максимальна кількість карток');
        this.cards.push(new UserCard(cardsLength+1))
    }

    getCardByKey(cardKey){
        if(cardKey>2||cardKey<0)return console.error(`Ви ввели неправильний номер картки!`);
        return this.cards.find(card=>card.key===cardKey)
    }

}


let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());