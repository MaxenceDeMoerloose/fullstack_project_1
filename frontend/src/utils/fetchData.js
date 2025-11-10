// src/utils/fetchData.js
export const fetchData = async () => {
    try {
        const res = await fetch("https://opensheet.elk.sh/1rQunUUDIxd3W8Rl875Vds7cNuYlo30dn2GXztCjy7zU/données");
        const data = await res.json();

        // Ajouter un id à chaque ligne
        const dataWithId = data.map((row, index) => ({
            id: index + 1,
            ...row
        }));

        return dataWithId; // on retourne les données
    } catch (err) {
        console.log(err);
        return []; // retourne un tableau vide en cas d'erreur
    }
};