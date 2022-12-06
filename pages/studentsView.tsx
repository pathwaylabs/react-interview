import Header from "../components/Header";
import {Container} from "@mui/material";

const StudentsView = () => {
    return (
        <>
            <Header/>
            <Container sx={{
                display: 'grid',
                placeItems: 'center',
                width: '100vw',
                height: '100vh'
            }}>
                Students View
            </Container>
        </>
    )
}

export default StudentsView;
