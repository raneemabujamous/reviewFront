import axios from "axios";
import React, { Component } from "react";
import Cardapi from "./Cardapi";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromApi: [],
    };
  }
  componentDidMount = async () => {
    const reqFromApi = await axios.get(`http://localhost:8001/getDataAPI`);
    this.setState({
      dataFromApi: reqFromApi.data,
    });
  };
  addtofav = async (obj) => {
    await axios.post(`http://localhost:8001/postData`, obj);
    console.log(obj);
  };
  render() {
    return (
      <>
        <Cardapi
          dataFromApi={this.state.dataFromApi}
          addtofav={this.addtofav}
        />
      </>
    );
  }
}

export default Home;
