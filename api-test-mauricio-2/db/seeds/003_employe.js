require('../../src/global');

const {Employe} = include('/models');
const employees = require('./employees.json');
exports.seed = async knex => {
    await knex(Employe.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(employees.map(employe => Employe.insertOne(employe))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};