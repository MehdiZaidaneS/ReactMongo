import React, { useState } from "react"





function Feedback(){
    const [countHyvä, setCountHyvä] = useState(0);
    const [countNeu, setCountNeu] = useState(0);
    const [countHuo, setCountHuo] = useState(0);

    const allVote = countHyvä + countNeu + countHuo;
    const Keskiarvo = ((countHyvä - countHuo) / allVote).toFixed(1);
    const positiivisia = (countHyvä / allVote * 100).toFixed(1);

    return(
        <div>
                <h1>anna palautetta</h1>
                <button onClick={() => setCountHyvä(countHyvä+1)}>Hyvä</button>
                <button onClick={() => setCountNeu(countNeu+1)}>Neutraali</button>
                <button onClick={() => setCountHuo(countHuo+1)}>Huono</button>
                
                <h1>statistiikka</h1>
                <h2>Hyvä {countHyvä}</h2>
                <h2>Neutraali {countNeu}</h2>
                <h2>Huono {countHuo}</h2>
                <h2>Keskiarvo {Keskiarvo}</h2>
                <h2>Positiivisia {positiivisia}</h2>
        </div>
    )
}

export default Feedback