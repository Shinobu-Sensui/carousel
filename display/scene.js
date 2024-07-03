import { createElement } from "../utils/dom.js"


(() => {
    const main = createElement('div', document.body, "main")
    const scene = createElement('div', main, "scene")
    const containerMode = createElement('div', main, "containerModes")
    const imgCount = createElement("div", main, "imgCount")
})()