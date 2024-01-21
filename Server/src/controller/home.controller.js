
const {
    getAllListOrder,
    putDataOrderList,
    deleteOrderList
} = require("../services/crdu")


module.exports = {
    getListOrder: async (req, res) => {
        let results_listOrder = await getAllListOrder(req.query);
        return res.render("home.ejs", { order: results_listOrder });
    },
    updateListOrder: async (req, res) => {
        const idOrder = req.params.id;
        await putDataOrderList(idOrder, req.query);
        res.redirect("/list-order");
    },
    deleteListOrder: async (req, res) => {
        let idOrder = req.params.id;
        console.log(idOrder)
        await deleteOrderList(idOrder, req.query);
        res.redirect("/list-order");
    },
};