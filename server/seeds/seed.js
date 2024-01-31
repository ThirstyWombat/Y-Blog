const db = require('../config/connection');
const { postData } = require('../models');
const cleanDB = require('./cleanDB');

const postData = require('./postData.json');

db.once('open', async () => {
	await cleanDB('Y-Blog', 'posts');
	await Blog.insertMany(postData);

	console.log('Post has been seeded!');
	process.exit(0);
});
