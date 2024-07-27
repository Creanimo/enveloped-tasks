/**
 * Convert a html string to DOM
 * @param {string} htmlString 
 * @returns {Node}
 */
async function htmlStringToElement(htmlString) {
    console.log("HTML String to convert:", htmlString); // Debugging line
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    const element = template.content.firstChild;
    console.log("Converted Element:", element); // Debugging line
    return element;
}

export { htmlStringToElement }