const db = require('./database.js');
const albums = require('./albums.json');

const insert = db.prepare(`
    INSERT INTO albums (id, title, location, year, description, coverImage, images, camera)
    VALUES (@id, @title, @location, @year, @description, @coverImage, @images, @camera)
`)

for(const album of albums){
    insert.run({
        ...album,
        images: JSON.stringify(album.images),
        camera: JSON.stringify(album.camera)
    })
}

console.log("Database seeded");