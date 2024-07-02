/**
 * Récupère des données depuis une URL spécifiée.
 * 
 * @param {String} url URL des données à récupérer 
 * @returns {Promise<Array|null>} Les données récupérées ou null en cas d'erreur
 * @throws {Error} Lance une erreur si la requête échoue
 */

export default async (url) => {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            console.warn("Les données récupérées ne sont pas un tableau.");
        }
        
        return data;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des données :", error.message);
        return null;
    }
};