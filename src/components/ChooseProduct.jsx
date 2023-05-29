import { Box, Typography, TableCell, TableContainer, TableRow, TableHead, Table } from "@mui/material";

const ChooseProduct = (props) => {

    const { product } = props;
    console.log(product)

    return (
        <Box sx={{ display: "flex", flexDirection: "column", }}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: 3, mt: 3 }} >
                <img style={{ width: "220px", objectFit: "fill", height: "200px", alignSelf: "center" }}
                    src={product.img}
                    alt={product.description}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>Описание</Typography>
                    <Typography variant="body2">
                        {product.description}
                    </Typography>
                </Box>

            </Box>
            <Box>
                <Typography>Технические характеристики</Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 300 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Технические характеристики</TableCell>
                                <TableCell align="left">Память</TableCell>
                                <TableCell align="left">Габариты</TableCell>
                                <TableCell align="left">Процессор</TableCell>
                                <TableCell align="left">Видео</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>

            </Box>
        </Box>
    );
}

export default ChooseProduct;