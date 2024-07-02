/**
 * Crée un nouvel élément DOM et l'ajoute à un parent si spécifié.
 *
 * @param {string} tag - Le type de l'élément à créer (par exemple, 'div').
 * @param {HTMLElement} [parent=null] - L'élément parent auquel l'élément créé sera ajouté.
 * @param {string} className - La classe de l'élément
 * @param {string} [texte=''] - Le texte à ajouter à l'élément créé.
 * @returns {HTMLElement|null} - Retourne l'élément créé ou null en cas d'erreur.
 */
export const createElement = (tag, parent = null, className, texte = "") => {
	const isValidTag = typeof tag !== "string";
	const isValidAttribute = className && typeof className !== "string";

	if (isValidTag || isValidAttribute) return null;

  const element = document.createElement(tag);
	
  if (className) element.className = className
	if (texte) element.textContent = texte;
	if (parent instanceof HTMLElement) parent.appendChild(element);

	return element;
};

/**
 * Ajoute des attributs à un élément DOM donné.
 *
 * @param {HTMLElement} element - L'élément DOM auquel les attributs seront ajoutés.
 * @param {Object} attributes - Un objet contenant les clés et valeurs des attributs à ajouter.
 * @returns {HTMLElement|boolean} - Retourne l'élément si les attributs sont ajoutés, false sinon.
 */
export const addAttributes = (element, attributes) => {
	const isValidElement = element instanceof HTMLElement;
	const isValidAttributes =
		typeof attributes === "object" && attributes !== null;

	if (!isValidElement || !isValidAttributes) return false;

	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});

	return element;
};

/**
 * Ajoute les styles à un élément DOM donné.
 *
 * @param {HTMLElement} element - L'élément DOM auquel les styles seront ajoutés.
 * @param {Object} styles - Un objet contenant les clés et valeurs des styles à ajouter.
 * @returns {HTMLElement|boolean} - Retourne l'élément si les styles sont ajoutés, false sinon.
 */
export const addStyles = (element, styles) => {
	if (
		!(element instanceof HTMLElement) ||
		typeof styles !== "object" ||
		styles === null
	) {
		return false;
	}

	Object.entries(styles).forEach(([key, value]) => {
		element.style[key] = value;
	});

	return element;
};

/**
 * Sélectionne un ou plusieurs éléments du DOM.
 *
 * @param {string} selector - Le sélecteur pour trouver l'élément.
 * @param {boolean} [all=false] - Si true, sélectionne tous les éléments correspondants.
 * @returns {HTMLElement|NodeList|null} - Retourne l'élément(s) trouvé(s) ou null si aucun élément n'est trouvé.
 */
export const qs = (selector, all = false) => {
	const isValidSelector = typeof selector === "string";
	const isValidAll = typeof all === "boolean";

	if (!isValidSelector || !isValidAll) return null;

	return all
		? document.querySelectorAll(selector)
		: document.querySelector(selector);
};
