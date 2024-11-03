const jsonserver=require('json-server')

const mpServer=jsonserver.create()

const middleware=jsonserver.defaults()
const router=jsonserver.router('db.json')

mpServer.use(middleware)
mpServer.use(router)

const PORT=3100 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log("Server Running at PORT:"+PORT);
})