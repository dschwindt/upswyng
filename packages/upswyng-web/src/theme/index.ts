import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const spacing = (factor: number): string => `${0.25 * factor}rem`;

const palette = {
  common: { black: "#000", white: "#fff" },
  background: { paper: "#262626", default: "#3a3a3a" },
  primary: {
    main: "#F05A28",
    contrastText: "#000",
  },
  secondary: {
    main: "#F4BD21",
    contrastText: "#000",
  },
  error: {
    main: "#BC2222",
    contrastText: "#fff",
  },
  text: {
    primary: "#fff",
    secondary: "#CECECE",
    disabled: "#fff",
  },
  action: {
    active: "#fff",
  },
};

const typography = {
  fontFamily: '"Open Sans","Helvetica","Arial",sans-serif',
  fontSize: 16,
  h1: {
    fontSize: "1.75rem",
    fontWeight: 400,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 400,
    marginBottom: spacing(1),
  },
  h3: {
    fontSize: "1.2rem",
    fontWeight: 300,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
  },
  subtitle2: {
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
  },
} as { [name: string]: React.CSSProperties };

const theme = createMuiTheme({
  palette,
  spacing,
  typography,
  shape: {
    borderRadius: 0,
  },
});

export default theme;
