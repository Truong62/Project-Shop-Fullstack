
const {
    getAllListOrder,
    getCustomer,
} = require("../services/crdu")


module.exports = {
    getListOrder: async (req, res) => {
        let results_listOrder = await getAllListOrder(req.query);

        if (results_listOrder && results_listOrder.length > 0 && results_listOrder[0].customer_id) {
            let idCustome = results_listOrder[0].customer_id.toString();
            let customers = await getCustomer(idCustome);
            console.log(customers)
            return res.render("home.ejs", { order: results_listOrder });
        } else {
            console.error("Error: results_listOrder, its length, or customer_id is undefined");
            return res.status(500).send("Internal Server Error");
        }
    }
};