function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}

const printer = {name: 'ACME Printer'};
canPrint(printer);

printer.print();