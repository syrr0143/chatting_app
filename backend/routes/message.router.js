import express from 'express'
const router = express.Router();
import { verifyJwt } from '../middleware/auth.middleware.js'
import { sendMessage, getmessage } from '../controller/message.controller.js'

router.route('/send/:id')
    .post(verifyJwt, sendMessage)
router.route('/:id')
    .get(verifyJwt, getmessage)
export default router;