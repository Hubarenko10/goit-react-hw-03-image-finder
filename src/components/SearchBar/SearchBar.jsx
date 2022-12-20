import { Searchbar,SearchForm,SearchFormBtn,BtnLabel,FormInput } from "./SearchBarStyle"
import { MdSearch } from 'react-icons/md';
export const SearchBar = ({onSubmit})=> {
    // handleSubmit = e => {
    // e.preventDefault();
    
    // }

return(
    <Searchbar>
  <SearchForm >
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


// my key  
//