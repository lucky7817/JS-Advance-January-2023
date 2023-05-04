function editElement(element, strMatch, replacer) {
    while(element.textContent.includes(strMatch)) {
        element.textContent = element.textContent.replace(strMatch, replacer);
    }
}