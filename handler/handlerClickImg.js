import { createElement, qs, addAttributes} from "../utils/dom.js";

const scene = qs('.scene')
const sceneImg = createElement('img', scene, 'sceneImg')


/**
 * @param  {HTMLElement} element
 * @returns {void}
 */
export default (element) => {
    element.addEventListener('click', e => {
        addAttributes(sceneImg, {
            src:e.target.src
        })
    })
};
