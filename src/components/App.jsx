import { SearchBar } from "./SearchBar/SearchBar";
import * as API from '../api'
import { Component } from "react";

export class App extends Component{
    state = {
    photos:[],
    page:1,
    query: '',
    selectedImage: false,
    }

    async componentDidMount(_,prevState){
    try {

      const photos = await API.fetch();
      this.setState({photos});
    } catch (error) {
      console.log('error')
    }
    }



  render(){
    return (
      <>
     <SearchBar onSubmit={1}/>
      </>
    );
  
  }

 
};
