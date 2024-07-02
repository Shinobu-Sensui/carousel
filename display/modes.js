import modes from "../asset/svg/js/modes.js";
import { qs, createElement } from "../utils/dom.js";

export default () => {
    const containerModes = qs('.containerModes')
    if (!modes) return 

    Object.keys(modes).map((element) => {
        const containerMode = createElement('div', containerModes, `mode ${element}`)
        containerMode.innerHTML = modes[element]
        containerModes.appendChild(containerMode)
    })
}

