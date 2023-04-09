
export function createElement(type, textContent, classList, otherOptions = {}) {
    let el = document.createElement(type);
    el.textContent = textContent;
    el.classList = classList;

    if(Object.keys(otherOptions).length) {
        for(let key in otherOptions) {
            el.setAttribute(key, otherOptions[key]);
        }
    }

    return el;
}

export function appendChildren(parent, ...children) {
    children.forEach((childElement) => {
        parent.appendChild(childElement);
    });
}
