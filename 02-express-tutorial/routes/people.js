const express = require("express");
const router = express.Router(); 
const { addPerson, getPeople, findPerson, updatePerson, deletePerson } = require('../controllers/people');

router.get('/', getPeople);
router.post('/', addPerson);
router.get('/:id', findPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson); 

//can also chain
// router.route('/').get(getPeople).post(addPerson);
// router.route('/:id').get(findPerson).put(updatePerson).delete(deletePerson);

module.exports = router 