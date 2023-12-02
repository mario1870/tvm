
import { Router } from 'express';
import nodemailer from "nodemailer"

var router = Router();

// Route zum Einfügen von Daten in die MongoDB
router.post('/', async function(req, res) {
    try {
        const { name, email, date, message } = req.body;
    
        // Nodemailer-Konfiguration
        const transporter = nodemailer.createTransport({
          service: 'GMAIL', // Hier den entsprechenden E-Mail-Service auswählen oder die SMTP-Daten direkt angeben
          auth: {
            user: 'marioraach01@gmail.com', // Deine E-Mail-Adresse
            pass: process.env.NODEMAILER_PW, // Dein E-Mail-Passwort oder App-Passwort
          },
        });
    
        // E-Mail-Optionen
        const mailOptions = {
          from: 'marioraach01@gmail.com',
          to: 'marioraach01@gmail.com', // Empfängeradresse
          subject: 'Neue Formulardaten',
          text: `Neue Sportheimbuchung:\nName: ${name}\nEmail: ${email}\nNachricht: ${message}\nDatum: ${date}`,
        };
    
        // E-Mail senden
        const info = await transporter.sendMail(mailOptions);
    
        console.log('E-Mail wurde erfolgreich gesendet:', info.response);
    
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
  });

export default router;

