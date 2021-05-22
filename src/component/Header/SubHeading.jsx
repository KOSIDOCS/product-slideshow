import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ABACB0",
    fontWeight: 400,
    textAlign: "center",
  },
}));

const SubHeading = ({ title }) => {
  const classes = useStyles();

  return <Typography className={classes.root}>{title}</Typography>;
};

export default SubHeading;
