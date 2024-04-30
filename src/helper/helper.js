import axios from 'axios';
import { BASE_URL } from '../api/api';;

axios.defaults.baseURL = BASE_URL;

/** get User details */



export async function getOrderByShop() {
    try {
        const { data } = await axios.get(`api/ordersbyshop`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        },)
        return { data };
    } catch (error) {
        return { error: "Orders not found!" }
    }
}
export async function acceptOrder(id) {
    try {
        const data = await axios.post(`api/acceptshoporder`, { "orderID": id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        },)
        return data;
    } catch (error) {
        return { error: "Not Not accepted" }
    }
}
export async function getSeller({ email }) {
    try {
        const { data } = await axios.get(`api/seller`, {
            params: {
                email
            }
        });
        return { data };
    } catch (error) {
        return { error: "User not found!" }
    }
}

export async function sellerLoginWithEmail({ email, password }) {
    try {
        if (email) {
            const { data } = await axios.post('api/sellerloginwithemail', { email, password })
            return ({ data });
        }
    } catch (error) {
        return ({ error: "Password doesn't Match...!" })
    }
}

export async function authenticateseller({ mobile }) {
    console.log(mobile);
    try {
        if (mobile) {
            return await axios.post('api/authenticateseller', { mobile })
        }
    } catch (error) {
        return ({ error: "Seller Not Found." })
    }
}

export async function sendMobileOTP({ mobile }) {
    try {
        if (mobile) {
            return await axios.post('api/generateMobileOTP', { mobile })
        }
    } catch (error) {
        return ({ error: "Failed sending OTP" })
    }
}

export async function verifySellerLoginMobileOTP({ mobile, otp }) {
    try {
        if (mobile) {
            const { data } = await axios.post('api/verifySellerLoginMobileOTP', { mobile, otp })
            return Promise.resolve({ data })
        }
    } catch (error) {
        return Promise.reject({ error: "Wrong OTP!" })
    }
}