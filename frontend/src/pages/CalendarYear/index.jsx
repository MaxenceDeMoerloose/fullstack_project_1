import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

function CalendarYear() {
    const { year } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
            .then((res) => {
                // 1. Filtrer uniquement les données de l’année voulue
                const filteredData = res.filter(
                    (info) => info.date.split("-")[2] === year
                );

                // 2. Trier par ordre croissant de date (jour/mois)
                const sortedData = filteredData.sort((a, b) => {
                    const [dayA, monthA] = a.date.split("-").map(Number);
                    const [dayB, monthB] = b.date.split("-").map(Number);

                    // on compare d’abord les mois, puis les jours
                    if (monthA === monthB) {
                        return dayA - dayB;
                    }
                    return monthA - monthB;
                });

                setData(sortedData);
            })
            .catch((err) => console.log(err));
    }, [year]);

    return (
        <div>
            <h2>Données pour l’année {year}</h2>
            {data.length === 0 ? (
                <p>Aucune donnée trouvée</p>
            ) : (
                data.map((element) => (
                    <div key={element.id}>Date : {element.date}</div>
                ))
            )}
            <Link to="/calendar">← Retour</Link>
        </div>
    );
}

export default CalendarYear;