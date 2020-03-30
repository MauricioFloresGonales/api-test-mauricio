const {Instrument} = include('models');

class InstrumentsController {
    static async fetch(req, res, next) {
        try {
            const instruments = await Instrument.find(req.query);
            const total = await Instrument.countDocuments();
            console.log(total);
            res.send({
                instruments,
                total: 129,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) { //post -- crear
        try {
            const result = await Instrument.insertOne(req.body);
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
            const result = await Instrument.updateOne({id: req.params.id}, req.body);
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
            const result = await Instrument.deletedOne(req.params.id);

            console.log(result);

            if(!result){
                res.status(404).send({code: 'INSTRUMENT_NOT_FOUND'});
            }

            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = InstrumentsController;
