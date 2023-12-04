
import { Router } from 'express';
import mongoose from 'mongoose';

var router = Router();

// Mongoose-Modell und Schema
const JugendModel = mongoose.model('Jugend', {
    // Definieren Sie Ihre Datenstruktur hier
    alter: String,
    bild: String,
    trainingszeiten: String,
    trainer: String,
    fussballde: String,
  });

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', async function(req, res) {
    try {
        // Verwenden Sie die find-Methode, um alle Dokumente in der Collection abzurufen
        const alleJugenden = await JugendModel.find();
    
        // Senden Sie die abgerufenen Daten als JSON zurück
        res.status(200).json(alleJugenden);
      } catch (err) {
        console.error('Error retrieving data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
      }
});

// Route zum Einfügen von Daten in die MongoDB
router.post('/', async function(req, res) {
    try {
      // Erstellen Sie ein neues Dokument mit den Daten aus der Anfrage
      const JugendListe = req.body.map(data => new JugendModel(data));

      // Speichern Sie das Dokument in MongoDB
      await JugendModel.insertMany(JugendListe);
  
      console.log('Data inserted successfully:', JugendListe);
      res.status(200).send('Data inserted successfully');
    } catch (err) {
      console.error('Error inserting data into MongoDB:', err);
      res.status(500).send('Internal Server Error');
    }
  });

export default router;



