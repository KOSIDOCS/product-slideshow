import { styled } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import IconButton from '@material-ui/core/IconButton';

export const ReadMoreBtn = styled(Button)({
  background: "#F33A59",
  border: 0,
  borderRadius: 50,
  color: "white",
  height: 28,
  padding: "23px 30px",
  textTransform: "capitalize",
  margin: "0px auto",
  marginBottom: "20px",
  "&:hover": {
    background: "#F33A09",
  },
});

export const NavBtn = styled(IconButton)({
    border: "9px",
    borderColor: "#F33A59",
});