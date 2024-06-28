export default class FetchFailed extends Error {
    constructor(message = "Échec de la récupération des données") {
        super(message);
        this.name = "FetchFailed";
    }
}
