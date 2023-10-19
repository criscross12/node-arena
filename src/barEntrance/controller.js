const { barEntrance } = require('../../queues')

module.exports = {
    entrance: async(req, res) =>{
        const { name, age } = req.body
        if (!name || !age) return res.send('Data incomplete')
        await barEntrance.add({ name, age })
        res.send("Ok")
    }
}