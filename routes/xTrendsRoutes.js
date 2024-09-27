import express from 'express';
import { loadXtrends } from '../controllers/xTrendsController.js';

const router = express.Router()
router.route('/load-all-tweets').get(loadXtrends)



export default router;