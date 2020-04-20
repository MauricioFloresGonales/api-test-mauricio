const {Country} = include('models');

class CountriesController {
    static async fetch(req, res, next) {
        try {
            const countries = await Country.find(req.query);
            const total = await Country.countDocuments();
            console.log(total);
            res.send({
                countries,
                total: total,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) { //post -- crear
        try {
            const result = await Country.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async save(req, res, next) { //post -- crear
        try {
            //const result = await Car.findAndUpdate(req.params.id, req.body);
            // Actualiza si encuentra el elemento (sino lo crea)
            const result = await Country.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async delete(req, res, next) { //post -- crear
        try {
            const result = await Country.deletedOne(req.params.id);

            console.log(result);

            /*if(!result){
                res.status(404).send({code: 'CONTRIE_NOT_FOUND'});
            }*/

            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async getOne(req, res, next) {
        try {
            const [country] = await Country.findById(req.params.id);
            res.send({ country });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = CountriesController;
