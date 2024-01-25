import axios from 'axios';
import { store } from "../../redux/store"
import { resetCart } from '../../redux/Slice/cartSlice';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    store.dispatch(resetCart());
    const history = useNavigate();
    history('/');
}
export default async function CreateOrder(dataCustomers, productCart) {

    let checkData = false;
    for (const field in dataCustomers) {
        if (dataCustomers[field] === "") {
            checkData = false
        } else {
            checkData = true
        }
    }
    if (checkData && productCart.cartItems.length > 0) {
        let Order = {
            "phone": dataCustomers.phone,
            "address": dataCustomers.address,
            "nameCustome": dataCustomers.name,
            "email": dataCustomers.email,
            "product_orders": productCart.cartItems.map((item) => (
                {
                    "product_id": item._id,
                    "quantity": item.quantity,
                    "size": item.sizeOrder,
                }
            )),
            "status": "Pending"
        }
        try {
            let orderSuccess = await axios.post('https://nntshop.onrender.com/api/order', Order);
            Reset()
            return orderSuccess.data
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    }
}
