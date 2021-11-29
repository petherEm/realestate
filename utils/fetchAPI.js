import axios from 'axios'


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd92cf13a56mshbff7f35025b50bfp1e2f27jsn9fcb7acd2b10'
          }
    });

    return data;
}