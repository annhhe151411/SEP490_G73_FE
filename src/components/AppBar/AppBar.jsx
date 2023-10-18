//MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
//MUI icon
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// ---
//ModeSelect
import ModeSelect from "~/components/ModeSelect";
import { ReactComponent as PetIcon } from "~/assets/petsathome.svg";
import Search from "~/components/Search";
import ProfileMenu from "./Menus/ProfileMeun";
import Link from "@mui/material/Link";

const AppBar = () => {
  return (
    <>
      <Box
        px={2}
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.petCare.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={Link}
          href="/"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <AppsIcon sx={{ color: "primary.contrastText" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SvgIcon
              component={PetIcon}
              inheritViewBox
              sx={{ color: "primary.contrastText" }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "primary.contrastText",
              }}
            >
              PetCare
            </Typography>
          </Box>
        </Box>
        <Box>
          <Search />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ModeSelect />
          <Tooltip title="ShopCart">
            <Badge color="secondary" variant="dot">
              <ShoppingCartIcon sx={{ color: "primary.contrastText" }} />
            </Badge>
          </Tooltip>
          <ProfileMenu />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
