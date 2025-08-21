import { Sequelize, DataTypes } from 'sequelize';
import loadedVacationSpots from './vacation-data.json' with { type: 'json' };

// Database connection to an in-memory SQLite instance
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: ':memory',
});

// Our Model for vacation spots
const VacationSpot = sequelize.define(
	'VacationSpot',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		name: DataTypes.STRING,
		localLanguages: DataTypes.STRING,
		budget: DataTypes.INTEGER,
		vacationType: DataTypes.STRING,
		city: DataTypes.STRING,
		country: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

// Ensure the table has been created in the database
await VacationSpot.sync();

// Iterate over the JSON data and create and insert Models into the database
for (let spot of loadedVacationSpots) {
	let { location, localLanguages, vacationType, ...newSpot } = spot;
	newSpot.city = location.city;
	newSpot.country = location.country;
	newSpot.localLanguages = localLanguages.join(', ');
	newSpot.vacationType = vacationType.join(', ');
	await VacationSpot.create(newSpot);
}

// Retrieve models from the database
let spots = await VacationSpot.findAll();
console.log(`Number of spots in the database: ${spots.length}`);
