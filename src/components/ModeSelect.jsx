//Mode
import { useColorScheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//ModeSelect
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
// Icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    // setAge(event.target.value);
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        sx={{
          color: "primary.contrastText",
        }}
        id="label-select-dark-light-mode"
      >
        Mode
      </InputLabel>
      <Select
        sx={{
          color: "primary.contrastText",
        }}
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlined fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeSelect;
