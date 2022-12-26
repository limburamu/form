import { useEffect, useState } from "react";

const Address = () => {
    const [pageState, setPageState] = useState();

    useEffect(() => {

    }, []);

    return (
        <div>
            <input type="text" name="Municipality" placeholder="Municipality" onChange={(e) => { setPageState(e.target.value) }} required />
            <input type="text" name="District" placeholder="District" onChange={(e) => { setPageState(e.target.value) }} required />
            <button onClick={setPageState + 1}>Next</button>
        </div>
    )
}



export default Address;