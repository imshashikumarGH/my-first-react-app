import React from "react";
import Button from "./Button.js";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const ErrorModule = (props) => {
  const BackDrop = () => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const ErrorModal = () => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop--root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay--root")
      )}
    </React.Fragment>
  );
};
export default ErrorModule;
