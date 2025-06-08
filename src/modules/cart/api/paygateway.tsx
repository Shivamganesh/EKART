import { navigate } from "@navigation/NavigationUtils"
import { BASE_URL } from "@store/config"
import axios from "axios"
import RazorpayCheckout from "react-native-razorpay"



export const createTransaction = async (amount: number, userId: string) => {
    try {
        const res = await axios.post(`${BASE_URL}/order/transaction`, {
            userId,
            amount: amount * 100, // Ensure amount is in paisa
        });
        return res.data;
    } catch (error: any) {
        console.log("❌ Error in createTransaction:", error.response?.data || error.message);
        return null;
    }
};


export const createOrder = async (
    key: string,
    amount: number,
    order_id: string,
    cart: any,
    userId: string,
    address: string
) => {
    try {
        let options = {
            description: "Ecommerce Shopping",
            image: "@/assets/images/new.png",
            currency: "INR",
            key: key,
            amount: amount,
            name: "Kart",
            order_id: order_id,
            theme: { color: "#53a20e" },
        };

        return RazorpayCheckout.open(options)
            .then(async (data) => {
                console.log("✅ Payment Success:", data);
                
                const today = new Date();
                const sevenDaysFromNow = new Date();
                sevenDaysFromNow.setDate(today.getDate() + 7);

                const res = await axios.post(`${BASE_URL}/order`, {
                    razorpay_order_id: order_id,
                    razorpay_payment_id: data?.razorpay_payment_id,
                    razorpay_signature: data?.razorpay_signature,
                    userId: userId,
                    cartItems: cart,
                    deliveryDate: sevenDaysFromNow,
                    address: address,
                });

                console.log("✅ Order Created:", res.data);

                navigate("PaymentSuccess", {
                    price: amount / 100,
                    address: address,
                });

                return { type: "success", message: "Order placed successfully" };
            })
            .catch((error: any) => {
                console.log("❌ Razorpay Error:", error);
                return { type: "error", message: error?.description || "Payment failed" };
            });
    } catch (error) {
        console.error("❌ Error creating order:", error);
        return { type: "error", message: "Error" };
    }
};
