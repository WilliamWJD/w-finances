import * as Yup from 'yup'
import Category from '../models/Category'
import Transaction from '../models/Transaction'

class CategoryController{
    async index(req, res){
        const category = await Category.findAll({
            include: { model: Transaction }
        })
        return res.json(category)
    }

    async show(req, res){
        const { category_id } = req.params

        const category = await Category.findByPk(category_id)

        if(!category){
            return res.status(401).json({ error: 'Categoria not found' })
        }

        return res.json(category)
    }

    async store(req, res){
        const Schema = Yup.object().shape({
            description: Yup.string().required(),
            type: Yup.mixed().oneOf(['RECEITAS','DESPESAS'])
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid' })
        }

        const category = await Category.create(req.body)

        return res.status(201).json(category)
    }

    async update(req, res){
        const Schema = Yup.object().shape({
            description: Yup.string().required(),
            type: Yup.mixed().oneOf(['RECEITAS','DESPESAS'])
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid' })
        }

        const { category_id } = req.params

        const category = await Category.findByPk(category_id)

        if(!category){
            return res.status(401).json({ error: 'Categoria not found' })
        }

        category.update(req.body)

        return res.json(category)
    }

    async delete(req, res){
        const { category_id } = req.params

        const category = await Category.findByPk(category_id)

        if(!category){
            return res.status(401).json({ error: 'Categoria not found' })
        }

        category.destroy()

        return res.json({})
    }
}

export default new CategoryController()