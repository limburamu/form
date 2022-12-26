import { useEffect, useState } from "react";

const PersonDatils = () => {
    const [pageState, setPageState] = useState();


    useEffect(() => {
        console.log()
    }, [])

    return (
        <div>
            <input type="text" name="fname" placeholder="First Name" onChange={(e) => { setPageState(e.target.value) }} required />
            <input type="text" name="lname" placeholder="Last Name" onChange={(e) => { sePageState(e.target.value) }} required />
            <input type="number" name="age" placeholder="Age Name" onChange={(e) => { setPageState(e.target.value) }} required />
            <input type="radio" name="gender" onChange={(e) => { setPageState(e.target.value) }} required />Male
            <input type="radio" name="gender" onChange={(e) => { setPageState(e.target.value) }} required />Female
            <button onClick={setPageState + 1}>Next</button>
        </div>
    )
}


export default PersonDatils;