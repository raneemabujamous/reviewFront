import React, { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

export class Cardapi extends Component {
  render() {
    return (
      <>
        {this.props.dataFromApi.map((obj) => {
          return (
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{obj.title}</ListGroup.Item>
                <ListGroup.Item>{obj.width}</ListGroup.Item>
                <ListGroup.Item>{obj.height}</ListGroup.Item>
              </ListGroup>
              <Button
                variant="primary"
                onClick={(e) => this.props.addtofav(obj)}
              >
                add to faveriote
              </Button>
            </Card>
          );
        })}
      </>
    );
  }
}

export default Cardapi;
