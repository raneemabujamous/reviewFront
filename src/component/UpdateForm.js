import React, { Component } from "react";

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateItem}>
          <input
            onChange={this.props.updateTitle}
            type="text"
            value={this.props.title}
          />
          <input type="submit" value="update data" />
        </form>
      </div>
    );
  }
}

export default UpdateForm;
