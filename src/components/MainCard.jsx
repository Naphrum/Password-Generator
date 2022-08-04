import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { HiLightningBolt } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    width: 550,
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "column",
    padding: 34
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
    padding: 0
  },
  passwordSection: {
    // paddingLeft: 34
  },
  passwordContainer: {
    width: "100%",
    backgroundColor: "#273549",
    margin: 10
  }
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
            <h1 className={classes.titleWhite}>Generate a</h1>
            <h1 className={classes.titleGreen}>random password</h1>
          </Grid>
          <Grid item>
            <p className={classes.titleText}>
              Never use an insecure password again.
            </p>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.button}>
              <HiLightningBolt /> Generate Password
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container item xs={4} spacing={4} className={classes.passwordSection}>
          <Card className={classes.passwordContainer}>
            <Typography component="overline" variant="overline" align="center"><BsThreeDots/></Typography>
          </Card>
          <Card className={classes.passwordContainer}>
            <Typography component="overline" variant="overline" align="center"><BsThreeDots/></Typography>
          </Card>
          <Card className={classes.passwordContainer}>
            <Typography component="overline" variant="overline" align="center"><BsThreeDots/></Typography>
          </Card>
          <Card className={classes.passwordContainer}>
            <Typography component="overline" variant="overline" align="center"><BsThreeDots/></Typography>
          </Card>
        </Grid>
      </CardContent>
    </Card>
  );
}
