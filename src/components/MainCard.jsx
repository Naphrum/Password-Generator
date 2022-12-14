import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Slider from "@material-ui/core/Slider";
import { HiLightningBolt } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    width: 550,
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "column",
    padding: 34,
    borderRadius: 15,
  },
  titleSection: {
    margin: 0,
    // padding: 28,
  },
  titleWhite: {
    margin: 0,
    color: "#F9FAFB",
    textAlign: "left",
  },
  titleGreen: {
    margin: 0,
    color: "#4ADF86",
    textAlign: "left",
  },
  titleText: {
    color: "#D5D4D8",
  },
  button: {
    backgroundColor: "#10B981",
    color: "#FFFFFF",
  },
  divider: {
    backgroundColor: "#2F3E53",
    marginTop: 30,
    marginBottom: 30,
    padding: 0,
  },
  passwordSection: {
    width: "100%",
  },
  passwordContainer: {
    backgroundColor: "#273549",
    margin: 10,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSlider: {
    color: "#10B981",
  },
  passwordSliderText: {
    color: "#FFFFFF",
  },
  passwordGenerationSection: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
  },
  generatePassword: {
    color: "#4ADF86",
  },
}));

export default function MainCard() {
  const [value, setValue] = React.useState(8);
  const [passwordOne, setPasswordOne] = React.useState("");
  const [passwordTwo, setPasswordTwo] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  // function displayPassword(){

  // }

  function generatePassword(value) {
    let firstPassword = "";
    let secondPassword = "";
    for (let i = 0; i < value; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length);
      let randomIndexTwo = Math.floor(Math.random() * characters.length);
      firstPassword += characters[randomIndexOne];
      secondPassword += characters[randomIndexTwo];
    }
    setPasswordOne(firstPassword);
    setPasswordTwo(secondPassword);
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.titleSection}
        >
          <Grid item>
            <Typography variant="h4" className={classes.titleWhite}>
              Generate a
            </Typography>
            <Typography variant="h4" className={classes.titleGreen}>
              random password
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle" className={classes.titleText}>
              Never use an insecure password again.
            </Typography>
          </Grid>
          <Grid container className={classes.passwordGenerationSection}>
            <Grid item>
              <Grid item>
                <Typography
                  className={classes.passwordSliderText}
                  color="textSecondary"
                >
                  Password Length
                </Typography>
                <Slider
                  value={value}
                  className={classes.inputSlider}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  min={1}
                  step={1}
                  max={15}
                  marks
                />
              </Grid>
              <Button
                variant="contained"
                onClick={() => generatePassword(value)}
                className={classes.button}
              >
                <HiLightningBolt /> Generate Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container item xs={12} className={classes.passwordSection}>
          <Grid xs={6} item>
            <Card className={classes.passwordContainer} fullWidth>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                {passwordOne ? (
                  <>
                    <Grid item>
                      <Typography
                        className="generatedPassword"
                        style={{ color: "#4ADF86" }}
                      >
                        {passwordOne}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        component="span"
                        onClick={() => {
                          navigator.clipboard.writeText(passwordOne);
                        }}
                      >
                        <MdOutlineContentCopy style={{ color: "#4ADF86" }} />
                      </IconButton>
                    </Grid>
                  </>
                ) : (
                  <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }} />
                )}
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.passwordContainer} fullWidth>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                {passwordTwo ? (
                  <>
                    <Grid item>
                      <Typography
                        className="generatedPassword"
                        style={{ color: "#4ADF86" }}
                      >
                        {passwordTwo}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        component="span"
                        onClick={() => {
                          navigator.clipboard.writeText(passwordTwo);
                        }}
                      >
                        <MdOutlineContentCopy style={{ color: "#4ADF86" }} />
                      </IconButton>
                    </Grid>
                  </>
                ) : (
                  <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }} />
                )}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
