import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/** 
 * se fosse para produção ia precisar
 * configurar quais rotas poderiam ter acesso ao backend
*/
app.register(cors)

app.get('/', async () => {

    const habits = await prisma.habit.findMany({
        // where: {
        //     title: {
        //         startsWith: 'Ler'
        //     }
        // }
    })

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running')
})