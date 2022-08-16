import axios from "axios";

const API_ENDPOINT = "https://api.petfinder.com/v2/animals";

export const Pets = {
    get: (accessToken) => axios.get(API_ENDPOINT, {
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
}
