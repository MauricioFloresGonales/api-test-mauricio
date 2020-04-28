//esquemas de valiadaciones de datos
//tipo de objeto JSON-Scheme  -  YML =!= JSON
//                            En YML los arrays se escriben con "-" y en vez de llaves ".."
/*en el caso de que el campo se un Objeto ponemos
 ej:
                OBJETO                                             ARRAY
    email:{                                      |   email:{
        description:"email",                     |          description:"email",
        type: "string"                           |          type: "string"
        format: "object"                         |          format: "array"
        properties:{                             |           items:{
            id: {                                |               id: {
                    description: 'id of user',   |                       description: 'id of user',
                    type: 'string',              |                       type: 'string',
                    format: 'uuid'               |                       format: 'uuid'
                }                                |                   }
        }                                        |           }
    }                                            |   }*/
module.exports = {
    schemas: {
        User: {
            type: 'object',
            properties: {
                id: {
                    description: 'id of user', //descripcion de campo
                    type: 'string', //tipo de dato
                    format: 'uuid' //formato que va a tener el dato
                },
                username: {
                    description: 'Username.',
                    type: 'string'
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                surname: {
                    description: 'Surname.',
                    type: 'string'
                },
                documentId: {
                    description: 'Document or CUIT.',
                    type: 'string'
                },
                email: {
                    description: 'Email.',
                    type: 'string',
                    format: 'email'
                },
                deleted: {
                    type: 'boolean',
                    description: 'If the user its deleted from the current APP'
                }
            },
            required: [
                'id',
                'name',
                'surname',
                'documentId',
                'email',
                'deleted'
            ]
        },
        Profile: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                    nullable: true
                },
                success: {
                    type: 'boolean',
                    nullable: true
                },
                user: {
                    allOf: [{$ref: '#/components/schemas/User'}], //requerimos todo del usuario
                    type: 'object',
                    required: [
                        'roles'
                    ],
                    properties: {
                        role: {
                            type: 'array',
                            items: {type: 'string'}
                        },
                        attributes: {type: 'object'}
                    }
                }
            }
        },
        Country: {
            type: 'object',
            properties:{
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true //puede venir el dato o no va a funcionar si o si
                },
                name: {type: 'string'},
                code: {
                    type: 'string',
                    maxLength: 2
                }
            }
        },
        Error: {//tema de errores
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: {type: 'string'}
            }
        }
    },
    parameters:{
        Path: {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
                type: 'string',
                format: 'uuid'
            },
            description: 'ID del pais solicitado'
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};
