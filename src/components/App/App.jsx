import { fetch } from 'API';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { AppStyle } from './AppStyled';

export class App extends Component {
  state = {
    query: '',
    photo: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { query, page, photo } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
        this.setState({ isLoading: true });
        const responce = await fetch(query, page);
        const data = responce.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return {
              id,
              webformatURL,
              largeImageURL,
              tags,
            };
          }
        );
        this.setState({
          photo: [...photo, ...data],
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  searchPhoto = ({ searchQuery }) => {
    const { query } = this.state;
    if (query !== searchQuery) {
      this.setState({
        photo: [],
        page: 1,
      });
      this.setState({
        query: searchQuery,
        page: 1,
      });
    }
  };

  render() {
    const {photo} = this.state;
    return (
      <AppStyle>
        <SearchBar onSubmit={this.searchPhoto}/>
        <ImageGallery photo={photo}/>
      </AppStyle>
    );
  }
}
