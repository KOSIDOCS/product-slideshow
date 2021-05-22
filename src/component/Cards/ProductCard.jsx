import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { ChevronRight } from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ReadMoreBtn } from "../Styledcomponents/StyledComponents";

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
    minHeight: 500,
  },
  content: {
    textAlign: "center",
  },
  heading: {
    fontSize: "2.4em",
    fontWeight: 700,
  },
});

const ProductCard = ({ img, show, title, detail }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="290"
        image={img}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.heading}
          gutterBottom
          variant="h1"
          component="h1"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {detail}
        </Typography>
      </CardContent>

      {show && (
        <CardActions>
          <ReadMoreBtn>
            Read more <ChevronRight />
          </ReadMoreBtn>
        </CardActions>
      )}
    </Card>
  );
};

export default ProductCard;
