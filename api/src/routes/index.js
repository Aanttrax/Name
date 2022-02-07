const { Router } = require('express');

const nameRouters = require('./name.js');


const router = Router();

router.use('/api/names', nameRouters);


module.exports = router;
