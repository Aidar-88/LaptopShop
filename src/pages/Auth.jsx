import { Container, Typography, Box, Card, Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const Auth = () => {
    return (
        <Container sx={{ textAlign: "center", mt: 22, display: "flex", flexDirection: "column" }}>
            <Card>
                <Typography mt={3} mb={3} variant="h5" >Авторизация</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                    <TextField sx={{ mb: 2, width: "24rem" }} variant="outlined" label="Логин" />
                    <TextField sx={{ width: "24rem" }} variant="outlined" label="Пароль" />
                </Box>

                <Box mb={4} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Typography mr={6}>Нет аккаунта ? <NavLink>Регистрация</NavLink></Typography>
                    <Button width={5} variant="outlined">Войти</Button>
                </Box>
            </Card>
        </Container >
    );
}

export default Auth;