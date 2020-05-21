import * as Yup from 'yup'
import Account from '../models/Account'

class UpdateBalanceAccountController{
    async update(req, res){
        const Schema = Yup.object().shape({
            amount: Yup.number().required(),
            type: Yup.mixed().oneOf(['C','D']),
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(401).json({ error: 'Schema is not valid' })
        }

        const { amount, type } = req.body
        const { account_id } = req.params

        const account = await Account.findByPk(account_id)

        if(!account){
            return res.status(401).json({ error: 'Account not found' })
        }

        let balancePrev = account.balance
        
        if(type==='D'){
            balancePrev = parseFloat(balancePrev) - parseFloat(amount)
        }else{
            balancePrev = parseFloat(balancePrev) + parseFloat(amount)
        }

        await account.update({
            balance: balancePrev
        })

        return res.json(account)
    }
}

export default new UpdateBalanceAccountController()