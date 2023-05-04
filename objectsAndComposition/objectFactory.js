function factory(libr, ord) {

    const result = [];

    for (const order of ord) {
        const object = {};

        for (const prop in order.template) {
            object[prop] = order.template[prop];   
        }

        for (const part of order.parts) {
            object[part] = libr[part];  
        }

        result.push(object);  
    }
    return result;
}
    const library = {

        print: function () {
            console.log(`${this.name} is printing a page`);
        },
        scan: function () {
            console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
            console.log(`${this.name} is playing '${track}' by ${artist}`);
        },

    };

    const orders = [
        {
            template: { name: 'ACME Printer' },
            parts: ['print']
        },
        {
            template: { name: 'Initech Scanner' },
            parts: ['scan']
        },
        {
            template: { name: 'ComTron Copier' },
            parts: ['scan', 'print']
        },
        {
            template: { name: 'BoomBox Stereo' },
            parts: ['play']
        }

    ];


const products = factory(library, orders);
console.log(products);

products[3].play('Frank Sinatra', 'I never gonna give up');

