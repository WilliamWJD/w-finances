import * as Yup from 'yup'
import Account from '../models/Account'

class AccountController{
    async index(req, res){
        const account = await Account.findAll()
        return res.json(account)
    }

    async show(req, res){
        const { account_id } = req.params

        const account = await Account.findByPk(account_id)

        if(!account){
            return res.status(401).json({ error: 'Conta not found' })
        }

        return res.json(account)
    }

    async store(req, res){
        const schema = Yup.object().shape({
            description:Yup.string().required(),
            balance:Yup.number().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid.' })
        }

        const account = await Account.create(req.body)

        return res.json(account)
    }

    async update(req, res){
        const schema = Yup.object().shape({
            description:Yup.string().required(),
            balance:Yup.number().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid.' })
        }

        const { account_id } = req.params

        const account = await Account.findByPk(account_id)

        if(!account){
            return res.status(401).json({ error: 'Conta not found' })
        }

        await account.update(req.body)

        return res.status(201).json(account)

    }

    async delete(req, res){
        const { account_id } = req.params

        const account = await Account.findByPk(account_id)

        if(!account){
            return res.status(401).json({ error: 'Conta not found' })
        }

        account.destroy()

        return res.status(201).json({})
    }
}

export default new AccountController()