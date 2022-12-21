import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '30741325-ef9d2f46b672de8daf5cfe26d';

const params = {
key:API_KEY,
image_type: 'photo',
orientation: 'horizontal',
safesearch: 'true',
per_page: 12,

}

export const fetch = async (query,page)=> {
const response = await axios.get(`/?q=${query}&page=${page}`, {params});
return response.data;
}


