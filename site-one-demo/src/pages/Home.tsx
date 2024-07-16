import { Container } from "@mui/system"
import { useState } from "react"
import ChevronChart from "../components/Chevron/ChevronChart"
import Form from "../components/Form"

const Home = () => {

    const [checks, setChecks] = useState<boolean[]>( [ false ] )

    return (
        <Container>
            <Form
                checks={checks}
                setChecks={setChecks}            
            />
            <ChevronChart
                checks={checks}
            />
        </Container>
    )
}
  
export default Home