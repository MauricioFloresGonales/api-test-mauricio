const {EmployeesController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(EmployeesController.fetch)
        .post(EmployeesController.create);
    router.route('/:id')
        .put(EmployeesController.save)
        .delete(EmployeesController.delete);
    return router;
};
