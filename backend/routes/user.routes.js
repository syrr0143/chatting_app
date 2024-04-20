import express from 'express';
const app = express();
const router = express.Router();
import { verifyJwt } from '../middleware/auth.middleware.js'
import { logout, signup, userLogin, getallusers } from '../controller/user.controller.js'
import { upload } from '../middleware/multer.middleware.js';

router.route('/signup')
    .post(upload.fields([{ name: "avatar", maxCount: 1 }]), signup)
router.route('/login')
    .post(userLogin)
router.route('/logout')
    .post(verifyJwt, logout)
router.route('/allUsers')
    .get(verifyJwt, getallusers)

export default router;