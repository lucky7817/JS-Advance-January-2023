function addAndRemoveElements(arr) {

    let initialNum = 1;
    let result = [];

    for (const command of arr) {
        switch (command) {
            case 'add': result.push(initialNum);
                initialNum++; break;
            case 'remove': result.pop();
                initialNum++; break;
        }
    }
    if (!result.length) {
        console.log('Empty');
    }
    console.log(result.join('\n'));
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);