import Replicate from "replicate";
import { Router } from 'express';
import cron from "node-cron"

var router = Router();

let zurückgegebenerText = "w"

const generateText = async (ergebnisErste, gegnerErste, ergenisZweite, gegnerZweite) => {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });


  
  const output = await replicate.run(
    "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    {
      input: {
        debug: false,
        top_k: 50,
        top_p: 1,
        prompt: "Erstelle einen Text in deutscher Sprache, dass die erste Mannschaft der SGM Stetten/Salmendingen/Melchingen/Hörschwag 2:0 am Wochenende gewonnen hat und die zweite Mannschaft knapp mit 3:2 verloren hat",
        temperature: 0.75,
        system_prompt: "Du bist ein deutsches Model, das Text für eine Website eines Fußballvereins verfasst. Der Text soll nur ganz kurz sein und nur das Ergebnis beinhalten.",
        max_new_tokens: 500,
        min_new_tokens: -1
      }
    }
  );

  const fixed_output = output.join('')

  zurückgegebenerText = fixed_output

  return zurückgegebenerText

}

// Schedule the cron job to run every minute
cron.schedule('5 * * * *', () => {
  generateText()
  console.log('Generated text:', zurückgegebenerText);
  });

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', async function(req, res) {


  res.send(zurückgegebenerText);
});

export default router;

