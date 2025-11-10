import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const UserStyles = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 30px;
    padding: 0 9% 0 9%;
    width: 70%;
    p {
        border: 1px solid green;
    }
`

function Fetch() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("début requête")
        fetch("test-api.json")
            .then(res => res.json())
            .then((data) => setUsers(data))
            .catch(err => console.log(err))
        console.log("fin requête")
    }, [])

    return (
        <div>
            <h3>Contenu de du fetch dans les logs de la console</h3>
            { users.map(user => (
                <UserStyles key={user.id}>
                    <p>name: {user.name}</p>
                    <p>age: {user.age}</p>
                    <p>role: {user.role}</p>
                </UserStyles>
            ))}
        </div>
    )
}

export default Fetch;