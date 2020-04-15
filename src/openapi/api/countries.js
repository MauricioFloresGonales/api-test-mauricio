//localhost:5000/docs/
module.exports = {
    '/api/countries': {//si queremos poner un id se pone '/api/countries/{id}'
        get: {
            security: [],
            summary: 'List Countries',
            responses: {
                200: {
                    description: 'login success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    countries: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid'
                                                },
                                                name: {type: 'string'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    },

    '/api/countries/'{id}: {
        put: {
            security: [],
            summary: 'user id',
            parameters: [
                name: "id'
                schema:
                type: "string"
                format: "uuid"
            ]
            requestedBody: {
                description: 'modify'
                content:'application/json':
                schema:
                type: 'object'
                properties:{
                    name: {type: "string"},
                    code: {
                        type: "string"
                        maxLength: 2
                    }
                }
            }
            responses: {
                200: description: 'login success',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                country: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: {
                                                type: 'string',
                                                format: 'uuid'
                                            },
                                            name: {type: 'string'}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
