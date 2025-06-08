import { BASE_URL } from "@store/config"
import axios from "axios"



export const loginOrSignUp = async (phone: string, address: string) => {
    try{
        const res = await axios.post(`${BASE_URL}/user/login`, {
            phone,
            address
        })
        return res.data.user
    } catch(error){
        console.log("Login or Signup error", error)
        return null
    }
}

export const getOrderByUserId = async (userId: string) => {
    try {
        const url = `${BASE_URL}/order/${userId}`;
        console.log("Fetching orders from:", url); // Debugging URL
        const res = await axios.get(url); // Ensure GET request
        return res.data.orders;
    } catch (error) {
        console.log("Order Error", error);
        return [];
    }
};
