import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:8080';

/** get User details */
export async function getSeller({ email }){
    try {
        const { data } = await axios.get(`/api/seller`, {params:{
            email
        }});
        return { data };
    } catch (error) {
        return { error : "User not found!"}
    }
}