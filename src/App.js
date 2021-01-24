import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Header from "./Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Helmet } from "react-helmet";
import { blue, green, grey, purple } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import BtcLogo from "./icons/btc.svg";
import EtcLogo from "./icons/ETC.svg";
import PolkLogo from "./icons/POLK.svg";
import TethLogo from "./icons/TETH.svg";
import XRPLogo from "./icons/XRP.svg";
import BuySellScreen from "./icons/screenshots/buySellWGraph.png";
import FirstPage from "./icons/screenshots/firstpage.png";

// minter, sharge, bounge, twee, cashdrop, wecash, moneti, pryce, banck
//          <Grid item>
//             <Paper className={classes.paper}>
//               <Typography variant="h1" component="h2" color="#FFFFFF">
//                 h1. Heading
//               </Typography>
//             </Paper>
//           </Grid>

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperMain: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#151619",
    height: "90vw",
    width: "93vw",
    paddingTop: 5,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#eceded",
    height: "400vw",
    width: "93vw",
  },
  coinList: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#eceded",
    height: "90vw",
    width: "93vw",
    paddingTop: 5,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#151619",
    height: "25vw",
    width: "93vw",
    paddingTop: 5,
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: "10vw",
    fontWeight: 500,
    backgroundColor: "white",
  },
  input: {
    color: "white",
  },
  button: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "2vw",
    marginTop: "5vw",
    fontWeight: 500,
  },
  text: {
    marginTop: "5vw",
  },
  icon: {
    height: "8vw",
    width: "8vw",
  },
  screenshot: {
    height: "120vw",
    width: "65vw",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#717a83",
    },
    secondary: {
      main: "#eceded",
    },
    textPrimary: {
      main: "#717a83",
    },
  },
});

function GridItem({ classes }, text) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item>
      <Paper className={classes.paper}>
        <Typography variant="h1" component="h2" color="#FFFFFF">
          h1. Heading
        </Typography>
      </Paper>
    </Grid>
  );
}

function CoinList(props) {
  const { classes, coinName, initial, logo, price, precent } = props;
  return (
    <ListItem button>
      <ListItemIcon>
        <img src={logo} className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={coinName} secondary={initial} />
      <ListItemText
        primary={price}
        style={{ display: "flex", justifyContent: "flex-end" }}
      />
      <ListItemText
        primary={precent}
        style={{ display: "flex", justifyContent: "flex-end" }}
      />
    </ListItem>
  );
}

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Grid item>
          <Paper className={classes.header}>
            <Header />
          </Paper>
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <Paper className={classes.paperMain}>
              <Typography variant="h4" component="h2" color="secondary">
                <Box fontWeight="fontWeightBold">
                  Aldri vært enklere å forvalte pengene dine
                </Box>
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="E-post"
                  variant="outlined"
                  color={"secondary"}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                color="primary"
                className={classes.text}
              >
                <Box>Enklere blir det ikke.</Box>
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Kom i gang
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.coinList}>
              <List
                component="nav"
                className={classes.root}
                aria-label="contacts"
              >
                <CoinList
                  classes={classes}
                  coinName={"Bitcoin"}
                  initial={"BTC"}
                  logo={BtcLogo}
                  price={"120 000 NOK"}
                  precent={"1.2%"}
                />
                <CoinList
                  classes={classes}
                  coinName={"Ethereum"}
                  initial={"ETH"}
                  logo={EtcLogo}
                  price={"12 000 NOK"}
                  precent={"7.2%"}
                />
                <CoinList
                  classes={classes}
                  coinName={"Tether"}
                  initial={"USDT"}
                  logo={TethLogo}
                  price={"10 NOK"}
                  precent={"0.11%"}
                />
                <CoinList
                  classes={classes}
                  coinName={"Polkadot"}
                  initial={"DOT"}
                  logo={PolkLogo}
                  price={"170 NOK"}
                  precent={"1.2%"}
                />
                <CoinList
                  classes={classes}
                  coinName={"XRP"}
                  initial={"XRP"}
                  logo={XRPLogo}
                  price={"2.1 NOK"}
                  precent={"0.2%"}
                />
                <Button size="small" className={classes.margin}>
                  Vis mer >
                </Button>
              </List>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h4" component="h2" color="secondary">
                <Box fontWeight="fontWeightBold" color={"black"}>
                  Enkel handel
                </Box>
              </Typography>
              <img src={BuySellScreen} className={classes.screenshot} />
              <Typography
                variant="h6"
                component="h2"
                color="primary"
                className={classes.text}
              >
                <Box>Enkel analyse og realtidsdata gjør det lett å handle.</Box>
                <Typography variant="h4" component="h2" color="secondary">
                  <Box
                    fontWeight="fontWeightBold"
                    color={"black"}
                    className={classes.text}
                  >
                    Betaling i butikk
                  </Box>
                </Typography>
              </Typography>
              <img src={FirstPage} className={classes.screenshot} />
              <Typography
                variant="h6"
                component="h2"
                color="primary"
                className={classes.text}
              >
                <Box>
                  Gjennom eget betalingskort er det mulig å betale i både bank
                  og butikk med standard valuta og kryptovaluta.
                </Box>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
