let { people } = require('../data');

function getPeople(req, res) {
    res.status(200).json({ success: true, data: people});
}

function addPerson(req, res) {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({id: people.length + 1, name: req.body.name});
    res.status(201).json({ success: true, name: req.body.name });
}

function findPerson(req, res) {
    const person = people.find((person) => person.id === Number(req.params.id)) 
    if (!person) {
        return res.status(404).json({ success: false, msg: `There is no person with id: ${req.params.id}`})
    }
    return res.status(200).json({ success: true, data: person });
}

function updatePerson(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id)) 
    
    if (!person) {
        return res.status(404).json({ success: false, msg: `There is no person with id: ${req.params.id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name; 
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople })
}

function deletePerson(req, res) { 
    const person = people.find((person) => person.id === Number(req.params.id)) 
    if (!person) {
        return res.status(404).json({ success: false, msg: `There is no person with id: ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople });
}

module.exports = { getPeople, addPerson, findPerson, updatePerson, deletePerson }