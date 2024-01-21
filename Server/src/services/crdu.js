const aqp = require("api-query-params");
const Orders = require("../model/Orders")
const Customer = require("../model/customers");
const { query } = require("express");

module.exports = {
    getAllListOrder: async (data) => {
        const page = data.page;
        const { filter, limit } = aqp(data);
        delete filter.page;
        let offset = (page - 1) * limit;
        const populationProduct = "product_orders.product_id";
        const populationCustomer = "customer_id"; 
        filter.status = { $nin: ['Success', 'Cancel'] };

        try {
            result = await Orders
                .find(filter)
                .populate(populationProduct)
                .populate(populationCustomer)  
                .skip(offset)
                .limit(limit)
                .exec();
        } catch (error) {
            console.error(error);
            throw new Error("Error fetching orders.");
        }
        return result;
    },
    putDataOrderList: async (data,query) =>{
        const {filter}  = aqp(query);
        await Orders.updateOne({ _id: data }, { status: filter.status});
    },
    deleteOrderList: async (data,qurey) =>{
        await module.exports.putDataOrderList(data,qurey)
        await Orders.deleteById( data );
    }
}