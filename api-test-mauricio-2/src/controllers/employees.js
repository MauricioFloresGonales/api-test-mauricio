const {Employe} = include('models');

class EmployeesController {
    static async fetch(req, res, next) {
        try {
            const employees = await Employe.find(req.query);
            const total = await Employe.countDocuments();
            console.log(total);
            res.send({
                employees,
                total: 101,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) { //post -- crear
        try {
            const result = await Employe.insertOne(req.body);
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
            const result = await Employe.updateOne({id: req.params.id}, req.body);
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
            const result = await Employe.deletedOne(req.params.id);

            console.log(result);

            if(!result){
                res.status(404).send({code: 'EMPLOYE_NOT_FOUND'});
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

module.exports = EmployeesController;
