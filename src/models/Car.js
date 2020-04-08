const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Car';
const tableName = 'car';

const selectableProps = [
    'id',
    'brand',
    'model',
    'year',
    'deleted',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class CarModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }

    find({
        skip, filter = {}
    }) {
        return this.knex.select()
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE).offset(toNumber(PAGE_SIZE) * toNumber(skip));
    }
}

module.exports = knex => new CarModel({knex});
