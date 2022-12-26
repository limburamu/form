import { useEffect, useState } from "react";

const Education = () => {
    const [pageState, setPageState] = useState()

    useEffect(() => {

    }, []);

    return (
        <div>
            <input type="text" name="Level" placeholder="Education Level" onChange={(e) => { setPageState(e.target.value) }} required />
            <button onClick={setPageState + 1}>Next</button>
        </div>
    )
}



export default Education