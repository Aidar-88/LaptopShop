import { Grid, Card, Typography, Box, CardContent, CardActions, Button, CardActionArea, } from "@mui/material";
import { Link } from "react-router-dom";


const CardProducts = ({ props }) => {



    const { id, title, description, img, price } = props;



    const basketHandler = () => {

    }



    return (
        <Grid item xs={12} sm={6} md={4} lg={3}  >
            <Link style={{ textDecoration: "none", display: "flex" }} to={`/products/${id}`}>
                <Card sx={{ maxWidth: 340 }}>
                    <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                        <img style={{ width: "170px", objectFit: "fill", height: "160px", alignSelf: "center" }}

                            src={img}
                            alt={title}
                        />
                        <CardContent>
                            <Box sx={{ justifyContent: "space-around" }}>
                                <Typography variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="h6">
                                    {price}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="inherit">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="text" size="small" color="primary" onClick={basketHandler}>
                                Добавить в корзину
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>



        </Grid>

    );
}

export default CardProducts;