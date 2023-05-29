import { Container, Grid } from "@mui/material";
import CardProducts from "../components/CardProduct";
import { cards } from "../components/data/DataProducts";


const Products = (props) => {


    return (
        <Container fixed sx={{ mt: 3 }}>
            <Grid container spacing={2}>

                {cards.map((row) => (
                    <CardProducts props={row} />
                )


                )}

            </Grid>


        </Container>


    );
};

export default Products;