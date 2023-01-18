import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

/** 
 * CORS: se fosse para produção ia precisar
 * configurar quais rotas poderiam ter acesso ao backend
*/
app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running')
})