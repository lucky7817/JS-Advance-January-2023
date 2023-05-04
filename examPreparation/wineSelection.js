class WineSelection {
    constructor(space, wines, bill) {
        this.space = space;
        this.wines = [wines];
        this.bill = bill;

    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length <= Number(this.space)) {
            throw new Error('Not enough space in the cellar.')
        } else {
            this.wines.push({ wineName: wineName, wineType: wineType, price: price, paid: false });

            for (const wine of this.wines) {
                return `You reserved a bottle of ${wine.wineName} ${wine.wineType} wine.`;


            }

        }
    }

    payWineBottle(wineName, price) {

        for (const wine of this.wines) {

            if (this.wine.wineName === wineName) {

                if (this.wines.paid === true) {
                    throw new Error(`${wineName} has already been paid.`);
                } else {
                    this.wines.paid = true;
                    this.wines.bill += Number(price);
                    return `You bought a ${wineName} for a ${price}$.`
                }
            } else {
                throw new Error(`${wineName} is not in the cellar.`);
            }
        }
    }


    openBottle(wineName) {

        for (let wine = 0; wine < this.wines.length; wine++) {

            if (this.wines[wine].wineName === wineName) {
                if (this.wines[wine].paid === false) {
                    throw new Error(`${wineName} need to be paid before open the bottle.`);
                } else  {
                    this.wines.splice(wine, 1); 
                    return `You drank a bottle of ${wineName}.`;
                }
            } else {
                throw new Error("The wine, you're looking for, is not found.");
            }
        }
    }

    cellarRevision(wineType) {
        
    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));