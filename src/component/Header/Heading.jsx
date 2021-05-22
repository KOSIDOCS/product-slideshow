import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: "700",
    fontSize: "2.8em",
    lineHeight: 2.1,
  },
}));

const Heading = ({ title }) => {
  const classes = useStyles();

  return <Typography className={classes.root}>{title}</Typography>;
};

export default Heading;
