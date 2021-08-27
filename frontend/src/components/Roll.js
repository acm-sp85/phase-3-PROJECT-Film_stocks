import React from "react";
import { Container } from "react-bootstrap";

function Roll(props) {
  const roll = props.info.map((roll) => {
    return (
      <Container key={roll.id}>
        <div key={roll.id} className="" onClick={props.click}>
          <img
            src={roll.img_url}
            alt="error"
            id={roll.id}
            className="eq-avatar"
            onMouseEnter={props.handleHover}
            onClick={props.handleClick}
          ></img>
          <p>{roll.name}</p>
        </div>
      </Container>
    );
  });
  return <div className="row-of-avatars">{roll}</div>;
}

export default Roll;
