import { BtnLabel, Form, FormBtn, Header, Input } from "./SearchBarStyle"
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({onSubmit}) => {
const handleSubmit = e => {
    e.preventDefault();
    // const searchQuery = e.target.elements.query.value;
    const searchQuery = e.target.elements.value;
    onSubmit({searchQuery});
    e.target.reset();
}


return(
    <Header>
    <Form onSubmit={handleSubmit}>
    <FormBtn type="submit">
       <AiOutlineSearch size={30}/> 
      <BtnLabel>Search</BtnLabel>
    </FormBtn>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    </Form>
    </Header>
    
    )

}
