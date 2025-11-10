import YearCard from "../../components/YearCard";
import { fetchData } from "../../utils/fetchData";
import { useEffect, useState } from "react";

function Calendar() {
    const [data, setData] = useState([]);
    const [years, setYears] = useState([]);
    useEffect(() => {
        fetchData()
            .then((res) => {
                setData(res);

                const uniqueYears = [];
                res.forEach((info) => {
                    const dateStr = info.date.split("-"); // format "dd-mm-yyyy"
                    const yearNum = Number(dateStr[2]);
                    if (!uniqueYears.includes(yearNum)) {
                        uniqueYears.push(yearNum);
                    }
                });

                uniqueYears.sort((a, b) => a - b); // trier par ordre croissant
                setYears(uniqueYears); // mettre à jour le state déjà trié
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {years.map((year, index) => (
                <YearCard key={index} year={year} />
            ))}
        </>
    );
}

export default Calendar;