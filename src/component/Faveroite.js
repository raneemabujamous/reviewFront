import axios from "axios";
import React, { Component } from "react";
import FavCard from "./FavCard";

export class Faveroite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favItaem: [],
      showFav: false,
    };
  }
  componentDidMount = async () => {
    const reqFromPost = await axios.get(`http://localhost:8001/getFromPost`);
    this.setState({
      favItaem: reqFromPost.data,
      showFav: true,
    });
  };
  deleteitem = async (slug) => {
    console.log(slug);
    let resDelete = await axios.delete(
      `http://localhost:8001/deletedata/${slug}`
    );
    this.setState({
      favItaem: resDelete.data,
    });
  };
  render() {
    return (
      <>
        {this.state.showFav && (
          <FavCard
            favItaem={this.state.favItaem}
            deleteitem={this.deleteitem}
          />
        )}{" "}
      </>
    );
  }
}

export default Faveroite;
