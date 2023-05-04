function listProcessor(input) {

    let commandProcessor = (function () {
        let listArr = [];
        return {
            add: (newItem) => listArr.push(newItem),
            remove: (item) => listArr = listArr.filter(x => x !== item),
            print: () => console.log(listArr)
        }
    })();

    for (const command of input) {
        let [commandName, arg] = command.split(' ');
        commandProcessor[commandName](arg);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);