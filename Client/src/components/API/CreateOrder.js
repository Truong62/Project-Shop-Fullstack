import axios from 'axios';
export default async function CreateOrder(dataCustomers, productCart) {
    let checkData = false;
    for (const field in dataCustomers) {
        if (dataCustomers[field] === "") {
            checkData = false
        } else {
            checkData = true
        }
    }
    if (checkData) {
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
            let orderSuccess = await axios.post('http://localhost:8000/api/order', Order);
            return orderSuccess.data
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    }
}
