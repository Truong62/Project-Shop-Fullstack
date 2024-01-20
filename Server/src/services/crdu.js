const aqp = require("api-query-params");
const Orders = require("../model/Orders")
const Customer = require("../model/customers")

module.exports = {
    getAllListOrder: async (data) => {
        const page = data.page
        const { filter, limit, population } = aqp(data)
        delete filter.page
        let offset = (page - 1) * limit

        result = await Orders
            .find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();

        return result
    },
    getCustomer: async(data) =>{
        result = await Customer.findOne({_id:data})
        return result
    }
}