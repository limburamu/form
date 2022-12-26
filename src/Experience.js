import { useEffect, useState } from "react";

const Experience = () => {
    const [pageState, setPageState] = useState()

    useEffect(() => {

    }, []);

    return (
        <div>
            <input type="text" name="Field" placeholder="Field" onChange={(e) => { setPageState(e.target.value) }} required />
            <input type="number" name="Duration" placeholder="Duration" onChange={(e) => { setPageState(e.target.value) }} required />
            <button onClick={setPageState + 1}>Submit</button>
        </div>
    )
}



export default Experience