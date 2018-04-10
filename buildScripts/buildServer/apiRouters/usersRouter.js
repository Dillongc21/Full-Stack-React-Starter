import express from 'express';
const router = express.Router();
import User from '../../../database/userSchema';

router.get('/', function (req, res) {
  //hard coded for simplicity, pretend this hits a real database
  res.type('application/json');

  res.json([
    {"id": 1, "firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2, "firstName":"Dillon","lastName":"Christensen","email":"dillongc21@gmail.com"},
    {"id": 3, "firstName":"Jane","lastName":"Doe","email":"janeldoe@gmail.com"}
  ]);

  console.log(res);
});

router.post('/', (req) => {

  const entry = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });

  entry.save();
});

export default router;
