const connection = require('../database/connection')

module.exports={

    async sessions(request,response){
        const { id } = request.body;
        const ong = await connection('ongs').where('id', id).select('name').first()
        console.log(id)
        if(!ong){
            return response.status(400).send({error: "not found on ID"})


        }


        return response.json(ong)



    }


}

