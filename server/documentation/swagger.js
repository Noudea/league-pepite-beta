const SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'pepitechat API',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger'
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './server.js'
  ]
}

export { SwaggerOptions }
