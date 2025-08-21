import express from 'express';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import vacationSpotRouter from './vacation-spots-router.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// import.meta.dirname available since 20.11.0
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Successfully set up server');
});

app.use('/vacation-spots', vacationSpotRouter);
export { app };
