import express from 'express';
const router = express.Router();
import path from 'path';


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../src/index.html'));
});

export default router;
