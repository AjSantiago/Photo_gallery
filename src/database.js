const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/gallery_photos', {
		useNewUrlParser: true,
	})
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.error(err));
