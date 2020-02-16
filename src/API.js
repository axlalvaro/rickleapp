import axios from 'axios';

export default class API
{
    static URL = 'https://rickandmortyapi.com/api';
    
    static getCharacters(page = 1)
    {
        return axios.get(`${API.URL}/character/?page=${page}`)
        .then(response =>
        {
            return response;
        })
        .catch(error =>
        {
            return Promise.reject(error);
        });
    }
}