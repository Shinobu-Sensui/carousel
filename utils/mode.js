import { thumbnailIndex } from "../display/thumbnail.js";
import { getCurrentMode } from "../handler/handleClickModes.js";
import { createElement, qs, addAttributes } from "./dom.js";

const scene = qs(".scene");

let intervalId = null;

const PATH_SERVER_DIRECTORY = "https://khayyer.io/dbz-img/";
const INFINITY_INTERVAL = 1500;

/**
 * Crée et insère une image dans la scène
 * @param {string} src URL de l'image
 * @param {number} height Hauteur de l'image en pourcentage
 * @returns {HTMLImageElement}
 */
const createSceneImg = (src, height) => {
	const sceneImg = createElement("img", scene, "sceneImg");
	addAttributes(sceneImg, { src, style: `height: ${height}%`, loading:"lazy" });
	return sceneImg;
};

/**
 * Gère le mode infini
 * @param {HTMLImageElement} img Élément image
 * @param {string[]} data Tableau des URLs d'images
 */
const handleInfinityMode = (img, data) => {
	let index = thumbnailIndex.current;
	intervalId = setInterval(() => {
		img.src = `${PATH_SERVER_DIRECTORY}${data[index]}`;
		index = (index + 1) % data.length;
	}, INFINITY_INTERVAL);
};

/**
 * Transforme la scène en fonction du mode choisi
 * @param {string[]} data Tableau des URLs d'images
 * @param {number} startIndex Index de départ dans le tableau data
 */
export const transformScene = (data, startIndex) => {

	clearInterval(intervalId);
	scene.innerHTML = "";

	const mode = getCurrentMode();
	const isBilateral = mode === "bilateral";
	const imageCount = isBilateral ? 2 : 1;
	const height = 100 / imageCount;

	for (let i = 0; i < imageCount; i++) {
		const imgSrc = `${PATH_SERVER_DIRECTORY}${data[startIndex + i]}`;
		const img = createSceneImg(imgSrc, height);

		if (mode === "infinity" && i === 0) {
			handleInfinityMode(img, data);
		}
	}
};
