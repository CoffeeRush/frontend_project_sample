import axios from "axios";

export const AccessToken = {
    get: () => {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append('client_id', process.env.REACT_APP_PET_FINDER_API_KEY);
        params.append('client_secret', process.env.REACT_APP_PET_FINDER_SECRET_KEY);
        return axios({
            method: 'post',
            url: 'https://api.petFinder.com/v2/oauth2/token',
            data: {
                grant_type: 'client_credentials',
                client_id: process.env.REACT_APP_PET_FINDER_API_KEY,
                client_secret:  process.env.REACT_APP_PET_FINDER_SECRET_KEY
            }
        })
    }
}