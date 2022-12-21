import { SearchBar } from "../SearchBar/SearchBar";
import * as API from '../../api'
import { Component } from "react";
import { AppStyle } from "./AppStyled";

export class App extends Component{
    state = {
    photos:[],
    page:1,
    query: '',
    selectedImage: false,
    }

    async componentDidUpdate(_,prevState){
    try {
      const { page, query, photos } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      const responce = await API.fetch(query,page);
      const data = responce.hits.map(({id,largeImageURL, tags, webformatURL}) => {
      return{
      id,
      largeImageURL,
      tags,
      webformatURL,
      }
      });
      this.setState({
      photos:[...photos,...data],
      })
    }
      
    } catch (error) {
      console.log(error);
    }
    }

    searchPhoto = ({searchQuery}) => {
    const {query} = this.state;
    if(searchQuery !== query){
    this.setState({
    photos:[],
    page: 1,
    })
    }
    }


  render(){
    return (
      <AppStyle>
     <SearchBar onSubmit={this.searchPhoto}/>
      </AppStyle>
    );
  
  }
};
