//localhost:5000/docs/
module.exports = {
    '/api/countries': {//si queremos poner un id se pone '/api/countries/{id}'
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'codigo del pais solicitado'
                }
            ],
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
                                        items: {$ref: '#/components/schemas/Country'}
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
        },

        post: {
            security: [],
            summary: 'crate country',
            requestBody:{
                description: 'new country',
                content: {'application/json': {schema: {$ref: '#/components/schemas/Country'}}}
            },
            responses: {
                200: {
                    description: 'login success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
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

    '/api/countries/{id}': {
        put: {
            security: [],
            summary: 'user id',
            parameters: [{$ref: '#/components/parameters/Path'}],
            requestBody: {
                description: 'modify',
                content: {'application/json': {schema: {$ref: '#/components/schemas/Country'}}}
            },
            responses: {
                200: {
                    description: 'login success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }

            }
        },

        delete: {
            security: [],
            summary: 'user id',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'login success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }

            }
        },

        get: {
            security: [],
            summary: 'user id',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200:{
                    description: 'one countrie',
                    content:{
                        'application/json':{
                            schema:{
                                type: 'object',
                                properties:{}
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
