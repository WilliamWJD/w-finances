import { Router } from 'express'

const routes = Router()

import AccountController from './app/controllers/AccountController'
import CategoryController from './app/controllers/CategoryController'
import TransactionController from './app/controllers/TransactionController'
import UpdateBalanceAccountController from './app/controllers/UpdateBalanceAccountController'

routes.get('/accounts', AccountController.index)
routes.get('/accounts/:account_id', AccountController.show)
routes.post('/accounts', AccountController.store)
routes.put('/accounts/:account_id', AccountController.update)
routes.delete('/accounts/:account_id', AccountController.delete)

routes.get('/categorys', CategoryController.index)
routes.get('/categorys/:category_id', CategoryController.show)
routes.post('/categorys', CategoryController.store)
routes.put('/categorys/:category_id', CategoryController.update)
routes.delete('/categorys/:category_id', CategoryController.delete)

routes.get('/transactions', TransactionController.index)
routes.get('/transactions/:transaction_id', TransactionController.show)
routes.post('/transactions', TransactionController.store)
routes.delete('/transactions/:transaction_id', TransactionController.delete)

routes.put('/balanceAccount/:account_id', UpdateBalanceAccountController.update)

export default routes