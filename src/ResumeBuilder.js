import { useEffect, useState } from "react";
import PersonDatils from "./PersonalDetails";
import Address from "./Address";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
    const [pageState, setPageState] = useState();

    useEffect(() => {

    }, []);

    if (pageState == 1)
        return (
            <PersonDatils />
        )
    if (pageState == 2)
        return (
            <Address />
        )
    if (pageState == 3)
        return (
            <Education />
        )
    if (pageState == 4)
        return (
            <Experience />
        )
    if (pageState < 1 && pageState > 4)
        return (
            <Button>Submit</Button>
        )
}

export default Resume;