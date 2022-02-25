
const Contact = require("../model/Contact")

module.exports = class ContactController {


    static async getContact (req,res){

        let contact = {}

        try{
            contact = await Contact.findAll({rows: true})
            res.status(200).json(contact)
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
    }

    static async addContact(req, res){
        const {name, email, phone, image} = req.body
    

        if(!name){
            res.status(402).json({message: "O nome é requerido"})
            return
        }

        if(!email){
            res.status(402).json({message: "O email é requerido"})
            return
        }

        if(!image){
            res.status(402).json({message: "adicione uma foto"})
            return
        }
        if(!phone){
            res.status(402).json({message: "o telefone é obrigatório"})
            return
        }


        const contact = {
            name,
            email,
            phone,
            image
        }

        try{
            await Contact.create(contact)
            res.status(200).json({message: "Contato salvo com sucesso"})
            return
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
    }

    static async editContact(req, res){
        
        const { name, phone, email, image} = req.body
        const id = req.params.id

        if(!name){
            res.status(402).json({message: "O nome é requerido"})
            return
        }

        if(!email){
            res.status(402).json({message: "O email é requerido"})
            return
        }

        if(!image){
            res.status(402).json({message: "adicione uma foto"})
            return
        }
        if(!phone){
            res.status(402).json({message: "o telefone é obrigatório"})
            return
        }


        const contact = {
            name,
            email,
            phone,
            image
        }

        try{
            await Contact.update(contact, {where:{id : id}})
            res.status(200).json({message:"Contato atualizado"})
        }
        catch(err){
            res.status(500).json({message: err.message})
        }



    }

    static async removeContact(req,res){

        const id = req.params.id

        try{
            await Contact.destroy({where:{id:id}})
            res.status(200).json({message:"Contato excluído com sucesso"}) 
        }       
        catch(err){
            res.status(500).json({message: err.message})
        }
    }
}