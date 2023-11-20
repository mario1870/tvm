import express from "express"
import { Book } from "../models/exampleModels.js";
import axios from "axios"
import * as cheerio from 'cheerio';
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({ apiKey: '' });

async function generateText(data) {
    try {
      // Daten an OpenAI senden und generierten Text erhalten
      const stream = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, ...data],
        stream: true,
      });
  
      let generatedText = '';
  
      for await (const chunk of stream) {
        generatedText += chunk.choices[0]?.message?.content || '';
      }
  
      return generatedText;
    } catch (error) {
      console.error('Fehler bei der Textgenerierung:', error.message);
      throw error;
    }
  }

async function cryptopriceScraper(url) {
    const result = [];
  
    try {
        const response = await axios(url);
        const html_data = response.data;
        const $ = cheerio.load(html_data);

        // Array mit den gewünschten Indexpositionen
        const targetIndexes = [3, 7, 8, 9];

        // Filtere die Elemente nach den gewünschten Indexpositionen
        $('span.sc-lhxcmh-0').filter((index, element) => {
            // Prüfe, ob die aktuelle Indexposition in den gewünschten Indexpositionen enthalten ist
            if (targetIndexes.includes(index)) {
                const textContent = $(element).text();
                result.push({textContent});
            }
        });

        return result;
    } catch (error) {
        console.error('Fehler beim Scrapen:', error.message);
        throw error;
    }
}

  

router.post("/", async (req, res) => {
    try{
        if(
            !req.body.title || 
            !req.body.author ||
            !req.body.year
        )
        return res.status(400).send({
            message: "Send all required fields!",
        })
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book)

    } catch (error){
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

router.get("/ergebnis_erste", async (req, res) => {
    try {
        const scrapedData  = await cryptopriceScraper("https://www.fupa.net/team/sg-stetsalm-melchingen-hoerschwag-m1-2023-24/matches", "iDRFRK");

        // Daten an OpenAI senden und generierten Text erhalten
        const generatedText = await generateText(scrapedData);

        return res.status(200).json({
          result: generatedText,
        });
      } catch (err) {
        return res.status(500).json({
          err: err.toString(),
        });
      }
});

router.get("/ergebnis_zwoite", async (req, res) => {
    try {
        const data = await cryptopriceScraper("https://www.fupa.net/team/sg-stetsalm-melchingen-hoerschwag-m2-2023-24/matches", "iDRFRK");
        return res.status(200).json({
          result: data,
        });
      } catch (err) {
        return res.status(500).json({
          err: err.toString(),
        });
      }
});

export default router