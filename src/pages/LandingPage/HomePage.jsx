//MUI
import Container from "@mui/material/Container";
//Mode
import { Box } from "@mui/material";
import AppBar from "~/components/AppBar/AppBar";
import ProductMenu from "~/components/AppBar/Menus/ProductMeun";
import ServiceMeun from "~/components/AppBar/Menus/ServiceMeun";

const HomePage = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <AppBar />
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: (theme) => theme.petCare.boardBarHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductMenu />
          <ServiceMeun />
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: (theme) =>
              `calc(100vh - ${theme.petCare.appBarHeight} - ${theme.petCare.boardBarHeight})`,
            display: "flex",
            alignItems: "center",
          }}
        >
          Board Content
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
