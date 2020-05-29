import * as Yup from 'yup'
import Transaction from '../models/Transaction'
import Account from '../models/Account'
import Category from '../models/Category'

class TransactionController{
    async index(req, res){
        const transaction = await Transaction.findAll({
            include: [
                {
                    model: Category, 
                    attributes:['id', 'description', 'color', 'type'] 
                },
                {
                    model: Account,
                    attributes: ['id', 'description']
                }
            ],
            attributes: ["id","description","type","amount"]
        })
        return res.json(transaction)
    }

    async show(req, res){
        const { transaction_id } = req.params

        const transaction = await Transaction.findByPk(transaction_id,{
            include: { model: Category, attributes: ['id', 'description', 'type'] }
        })

        if(!transaction){
            return res.status(401).json({ error: 'Transaction not found' })
        }

        return res.json(transaction)
    }

    async store(req, res){
        const Schema = Yup.object().shape({
            description: Yup.string().required(),
            type: Yup.mixed().oneOf(['C','D']),
            amount: Yup.number().required(),
            category_id: Yup.number().required(),
            account_id: Yup.number().required(),
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid' })
        }

        const { category_id, account_id } = req.body

        const account = await Account.findByPk(account_id)

        if(!account){
            return res.status(401).json({ error: 'Account not found' })
        }

        const category = await Category.findByPk(category_id)

        if(!category){
            return res.status(401).json({ error: 'Category not found' })
        }

        const transaction = await Transaction.create(req.body)

        return res.json(transaction)
    }

    async delete(req, res){
        const { transaction_id } = req.params

        const transaction = await Transaction.findByPk(transaction_id)

        if(!transaction){
            return res.status(401).json({ error: 'Transaction not found' })
        }

        await transaction.destroy()

        return res.json({})
    }
}

export default new TransactionController()