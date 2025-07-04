export const corsOptions ={
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['content-type', 'Authorization', 'X-Password'],
    maxAge: 3600,
}