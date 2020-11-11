import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.75px",
  },
};

function DraggableColorBox(props) {
  const { classes, color, name } = props;
  return <div className={classes.root}>{name}</div>;
}

export default withStyles(styles)(DraggableColorBox);
