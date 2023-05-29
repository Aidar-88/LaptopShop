import { Container } from "@mui/material";
import { useContext } from "react";
import ChooseProduct from "../components/ChooseProduct";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App"



const OneProduct = () => {
    const data = useContext(ThemeContext)
    const id = useParams()
    const product = data.filter(item => item.id === id.id)
    return (
        <>
            <Container sx={{ mt: 3 }}>
                <ChooseProduct product={product[0]} />
            </Container>
        </>
    );
}

export default OneProduct;