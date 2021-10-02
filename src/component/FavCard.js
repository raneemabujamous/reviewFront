import React, { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

export class FavCard extends Component {
  render() {
    return (
      <>
        {this.props.favItaem.map((obj) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{obj.title}</Card.Title>
                  <Card.Text>{obj.height}</Card.Text>
                  <Card.Text>{obj.width}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={(e) => {
                      this.props.deleteitem(obj.slug);
                    }}
                  >
                    delete item
                  </Button>
                  <Button
                    onClick={(e) => {
                      this.props.showupdateform(obj.title, obj.slug);
                    }}
                  >
                    update
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </>
    );
  }
}

export default FavCard;
