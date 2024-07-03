import { createElement } from "../utils/dom.js";

export default () => {
    const navigationInstruction = createElement("div", document.body, "navigation-instructions");
    const pInstruction = createElement("p", navigationInstruction, null, "Utilisez les touches directionnelles");
    createElement("span", pInstruction, "arrow", " ← gauche & ");
    createElement("span", pInstruction, "arrow", "droite →  ");
    pInstruction.appendChild(document.createTextNode("pour changer les miniatures."));
};
