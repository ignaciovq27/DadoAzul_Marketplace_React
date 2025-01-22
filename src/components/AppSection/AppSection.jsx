//css
import './AppSection.css'

//components
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import AppImg from '../AppImg/AppImg';

export default function AppSection() {
    return (
        <Container
            sx={{
                m: "auto",
                p: 3,
                py: 5,
                pt: 7,
            }}
        >
            <Grid container
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}

                    sx={{
                        pr: { xs: 'none', sm: '0px', md: "30px" },
                    }}
                >
                    <Typography
                        disabled={false}
                        variant="h4"
                        color="primary"
                        sx={{
                            textAlign: "left",
                        }}
                    >DESCUBRE UN MERCADO LÚDICO PARA DISFRUTRAR JUGANDO
                    </Typography>
                    <Typography
                        disabled={false}
                        variant="h6"
                        color="secondary"
                        sx={{
                            textAlign: "justify",
                            textJustify: "initial",
                            mt: "20px",
                            mb: "20px", fontWeight: "bold",
                        }}
                    >"El lugar ideal para compartir tus hobbies favoritos."
                    </Typography>
                    <Typography
                        disabled={false}
                        variant="h6"
                        color="secondary"
                        sx={{
                            textAlign: "justify",
                            textJustify: "initial",
                            mt: "20px",
                            mb: "20px",
                        }}
                    >DADOAZUL es mucho más que un marketplace; es el punto de encuentro para coleccionistas, jugadores y entusiastas de los juegos de tablero, figuras, accesorios y mucho más. Aquí puedes explorar una amplia variedad de hobbies, intercambiar con otros miembros de la comunidad y fortalecer un espacio vibrante que celebra el amor por el juego y la diversión.
                    </Typography>
                </Grid >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ display: { xs: 'flex', sm: 'flex' } }}
                    justifyContent={"center"}
                    textAlign={"center"}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            m: "auto",
                            mx: "2px",
                        }}
                        textAlign={"center"}
                    ><AppImg
                            src="\imgs\Section_Img_01.png"
                            alt="Section_Img_01"
                            imgClass="imgBorderRadius imgShadow imgSize"
                        />
                    </Typography>
                </Grid >
            </Grid>
        </Container>
    )
}