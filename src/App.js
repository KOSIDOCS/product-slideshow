import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./component/Header/Wrapper";
import CardWrapper from "./component/Cardwrapper/CardWrapper";
import { ReadMoreBtn } from "./component/Styledcomponents/StyledComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
  },
  viewBtn: {
    position: "relative",
    top: "160px",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Wrapper />
      <CardWrapper />
      <ReadMoreBtn className={classes.viewBtn}>View all products</ReadMoreBtn>
    </div>
  );
}

export default App;
