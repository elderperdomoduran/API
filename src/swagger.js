export default {
  openapi: '3.0.0',
  info: {
    title: 'Blogging API',
    version: '1.0.0',
    description: 'API RESTful para una plataforma de blogging'
  },
  paths: {
    '/api/auth/register': {
      post: {
        tags: ['Auth'],
        description: 'Register a new user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['username', 'email', 'password']
              }
            }
          }
        },
        responses: {
          201: {
            description: 'User registered successfully'
          },
          500: {
            description: 'Server error'
          }
        }
      }
    }
    // Otros endpoints documentados
  }
}
