import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function About() {

    const { element_id } = useParams();

    const [data, setData] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        fetch("test-api.json")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))
    }, [id])

    const cliqued = () => {
        if (id > data.length - 1) {
            setId((prevId) => (prevId - 4));
        } else {
            setId((prevId) => (prevId + 1));
        }
        console.log(id);
    }

    return (
        <div>
            <h3 onClick={cliqued}>Click to slide the information</h3>
            { data.length > 0 ? (<p>clique : { data[id - 1].name }</p>) : (<p>clique : en chargement...</p>)}
            <p>id {id}</p>
        </div>
    )
}

export default About;