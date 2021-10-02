import axios from "axios";
import React, { Component } from "react";
import FavCard from "./FavCard";
import UpdateForm from "./UpdateForm";

export class Faveroite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favItaem: [],
      showFav: false,
      slugName: "",
      showUpdateform: false,
    };
  }
  componentDidMount = async () => {
    const reqFromPost = await axios.get(`http://localhost:8001/getFromPost`);
    this.setState({
      favItaem: reqFromPost.data,
      showFav: true,
      title: "",
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

  ///هاد الفنكشن بحطه ع  كبسة الابديت عشان يسمح لل غورم تاع الابديت يطلع وباخد منو قيمه الاشي الي بدي اغيره
  showupdateform = async (title, slug) => {
    this.setState({
      title: title,
      slugName: slug,
      showUpdateform: true,
    });
  };
  updateTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  updateItem = async () => {
    const request = await axios.put(
      `http://localhost:8001/updatemethod/${this.state.slugName}`,
      { title: this.state.title }
    );
    this.setState({
      favItaem: request.data,
    });
  };
  render() {
    return (
      <>
        {this.state.showFav && (
          <FavCard
            favItaem={this.state.favItaem}
            deleteitem={this.deleteitem}
            showupdateform={this.showupdateform}
            updateTitle={this.props.updateTitle}
          />
        )}
        {this.state.showUpdateform && (
          <UpdateForm
            title={this.state.title}
            updateTitle={this.updateTitle}
            updateItem={this.updateItem}
          />
        )}
      </>
    );
  }
}

export default Faveroite;
// updateTitle
// updateItem
