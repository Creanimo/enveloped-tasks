/**
 * Convert a html string to DOM
 * @param {string} htmlString 
 * @returns {Node}
 */
function htmlStringToElement(htmlString) {
    const parser = new DOMParser();
    const element = parser.parseFromString(htmlString, "text/html").body.firstElementChild;
    return element;
}

export { htmlStringToElement }