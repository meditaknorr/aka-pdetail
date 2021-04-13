import Axios from 'axios';

const BaseURL = Axios.create({
    baseURL:'https://restcountries.eu/rest/v2/name/'
});

export default BaseURL;
