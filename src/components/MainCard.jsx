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
}));

export default function MainCard() {
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
                  className={classes.inputSlider}
                  valueLabelDisplay="auto"
                  defaultValue={8}
                  min={1}
                  step={1}
                  max={15}
                  marks
                />
              </Grid>
              <Button variant="contained" className={classes.button}>
                <HiLightningBolt /> Generate Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container item xs={12} className={classes.passwordSection}>
          <Grid xs={6} item>
            <Card className={classes.passwordContainer} fullWidth>
              <Typography
                component="overline"
                variant="overline"
                align="center"
              >
                <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }} />
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.passwordContainer} fullWidth>
              <Typography
                component="overline"
                variant="overline"
                align="center"
              >
                <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }} />
              </Typography>
            </Card>
          </Grid>

          {/* <Grid item xs={6}>
            <Card className={classes.passwordContainer} fullWidth>
              <Typography
                component="overline"
                variant="overline"
                align="center"
              >
                <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }} />
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.passwordContainer} fullWidth>
              <Typography
                component="overline"
                variant="overline"
                align="center"
              >
                <BsThreeDots style={{ color: "#202B3C", fontSize: 20 }}  />
              </Typography>
            </Card>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}
