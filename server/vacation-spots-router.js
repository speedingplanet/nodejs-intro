import { Router } from 'express';
import { addSpot, getAllSpots, getSpotById } from '../data/vacation-dao.js';

let router = new Router();

router.get('/', (req, res) => {
	let vacationSpots = getAllSpots();
	res.send(vacationSpots);
	// res.status(200).json(vacationSpots);
});

router.get('/:id', (req, res) => {
	let id;
	try {
		id = Number(req.params.id);
		let foundSpot = getSpotById(id);
		res.send(foundSpot);
	} catch (err) {
		// res.status(404).send(err.message);
		res.status(404).send(`Vacation Spot #${id} not found`);
	}
});

router.post('/', (req, res) => {
	let inputSpot = req.body;
	let newSpot = addSpot(inputSpot);
	res.send(newSpot);
});

router.patch('/:id', (req, res) => {
	res.send('Placeholder');
});

router.delete('/:id', (req, res) => {
	res.send('Placeholder');
});

export default router;
