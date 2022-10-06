import { Components, createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const components: Components = {
  MuiButton: {
    defaultProps: {
      // The props to change the default for.
      disableElevation: true, // No more elevation, on the whole application 💣!
      variant: "contained",
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },
};

const typography: TypographyOptions = {
  label: {
    fontWeight: "bold",
    marginBottom: ".5rem",
  },
};

const theme = createTheme({
  components,
  typography,
});

export default theme;
