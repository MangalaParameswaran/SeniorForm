import express from 'express'
import formCtr from '../controller/formCtr.js'

const router=express.Router()

router.get('/', formCtr.openPage)
router.get('/get', formCtr.getData)
router.post('/post',formCtr.addForm )

export default router