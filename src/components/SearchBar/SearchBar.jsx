import PropTypes from 'prop-types';
import { Searchbar,SearchForm,SearchFormBtn,BtnLabel,FormInput } from "./SearchBarStyle"
import { MdSearch } from 'react-icons/md';



export const SearchBar = ({onSubmit})=> {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    onSubmit({ searchQuery });
    e.target.reset();
  };

return(
    <Searchbar>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormBtn type="submit" >
      <BtnLabel>Search</BtnLabel>
      <MdSearch size={35} />
    </SearchFormBtn>

    <FormInput
      type="text"
      autocomplete="off"
      placeholder="Search images and photos"
    />
  </SearchForm>
</Searchbar>
    )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
