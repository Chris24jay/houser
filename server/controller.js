module.exports={
    getProperties: (req,res,next) => {
        const dbInst = req.app.get('db')

        dbInst.get_properties()
        .then((houses => res.status(200).send(houses)))
        .catch((err) => res.status(500).send(err))
    },

    postProperty: (req,res) => {
        const {property_name, address, city, state, zip_code} = req.body

        const dbInst = req.app.get('db')
        
        dbInst.new_property([property_name, address, city, state, zip_code])
        .then(() => {res.status(200).json('Property Added')})
    }
}