import "./display/scene.js"
import getData from "./utils/getData.js";
import displayMode from './display/modes.js'
import { displayThumbnails, thumbnailIndex } from "./display/thumbnail.js";
import handleClickModes from "./handler/handleClickModes.js";
import { transformScene } from "./utils/mode.js";
import { updateThumbnailOnKeyPress } from "./handler/updateThumbnailOnKeyPress.js";
import displayInstructions from "./display/instructions.js";


const data = await getData("./data/dragonball.json")

displayMode()
displayInstructions()
displayThumbnails(data)


handleClickModes(data)
updateThumbnailOnKeyPress(data)
transformScene(data, thumbnailIndex.current)

export { data }