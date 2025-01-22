//css
import "./AppHeader.css"

//components
import AppImg from "../AppImg/AppImg"
import Typography from '@mui/material/Typography';

export default function AppHeader() {
    return (
        <>
            <header className="appHeader-container header-img">
                <AppImg to="/" src="\imgs\Logo_02.png" width="160px" alt="Logo_Header" />
                <Typography
                    variant=""
                    component="h1"
                    sx={{ display: { xs: 'flex', sm: 'flex' }, m: 0, my: 1, px: 1.5, py: 1, lineHeight: "1.1", }}>
                    N°1 MARKETPLACE DE JUEGOS DE MESA
                </Typography>
                <hr className="hr-style"></hr>
                <Typography
                    variant=""
                    component="h3"
                    sx={{ display: { xs: 'flex', sm: 'flex' }, m: 0, my: 1, px: 1.5, py: 1, lineHeight: "1.1", }}>
                    Explora, comparte y juega en comunidad, ¡Bienvenid@!
                </Typography>
            </header>
        </>
    )
}