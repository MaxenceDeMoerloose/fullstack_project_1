import { useState, useEffect } from "react";

function Reservation() {
    const [data, setData] = useState({})
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({password})
            })
            const result = await res.json()
            setData(result)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">send</button>
          </form>
      </div>
  );
}

export default Reservation;