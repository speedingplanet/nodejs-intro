import { Router } from 'express';

let router = new Router();

router.get('/', (req, res) => {
	res.send('Placeholder');
});

router.get('/:id', (req, res) => {
	res.send('Placeholder');
});

router.post('/', (req, res) => {
	res.send('Placeholder');
});

router.patch('/:id', (req, res) => {
	res.send('Placeholder');
});

router.delete('/:id', (req, res) => {
	res.send('Placeholder');
});

export default router;
