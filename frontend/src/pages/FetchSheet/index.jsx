import { useEffect, useState } from 'react';
import styled from 'styled-components';


const StyleCard = styled.div`
    border: 1px solid red;
`

function FetchSheet() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://opensheet.elk.sh/1rQunUUDIxd3W8Rl875Vds7cNuYlo30dn2GXztCjy7zU/données")
            .then(res => res.json())
            .then(data => {
                const dataWithId = data.map((row, index) => ({
                    id: index + 1,
                    ...row
                }))
                setLoading(false)
                setData(dataWithId)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, []);

    if (loading) {
        return(<div>loading ...</div>)
    }

  return (
      <div>
          <div>Fetch vers https://opensheet.elk.sh/1rQunUUDIxd3W8Rl875Vds7cNuYlo30dn2GXztCjy7zU/données</div>
          {data.map((row) => (
              <StyleCard key={row.id}>
                  <p>Date: {row.date}</p>
                  <p>Personne 1: {row.personne1}</p>
                  <p>Personne 2: {row.personne2}</p>
                  <p>Lieu: {row.lieu}</p>
              </StyleCard>
          ))}
      </div>
  );
}

export default FetchSheet;