import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 images
  app.use(express.json({ limit: '10mb' }));

  // API router
  app.post('/api/scan', async (req, res) => {
    try {
      const { image, mimeType } = req.body;

      if (!image || !mimeType) {
        return res.status(400).json({ error: 'Missing image or mimeType in request' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Return a clean error if API key is not configured, requesting to register it
        return res.status(200).json({
          itemName: "Sample Plastic Water Bottle",
          recyclable: true,
          recyclabilityScore: 95,
          category: "Plastic",
          summary: "This is a standard PET plastic beverage bottle. PET (Polyethylene Terephthalate) is highly recyclable and one of the most widely accepted plastics globally.",
          disposalInstructions: "1. Empty and rinse out any remaining liquid.\n2. Crush the bottle to save container space.\n3. Keep the cap screwed on or recycle it separately as directed by local rules.\n4. Place it in your blue recycling bin.",
          tags: ["#PET1", "#RinseFirst", "#HighlyRecyclable", "#ReduceWaste"],
          co2Impact: "0.08 kg CO₂ saved per bottle",
          fallback: true,
          warning: "Using sample results because GEMINI_API_KEY is not configured in Secrets."
        });
      }

      // Initialize Gemini Client server-side
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      // Prepare image part
      const imagePart = {
        inlineData: {
          mimeType: mimeType,
          data: image
        }
      };

      const promptPart = {
        text: 'Analyze the provided waste item image. Classify the item and determine its recyclability. Provide accurate details as specified in the schema.'
      };

      // Call Gemini 3.5 Flash for vision classification with structured JSON output
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: {
          parts: [imagePart, promptPart]
        },
        config: {
          systemInstruction: 'You are a professional waste management AI. Analyze the image representing waste material, and identify the item, its recyclability (true/false), and proper sorting instructions. Return a JSON object with the requested properties. Keep responses accurate and detailed.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              itemName: {
                type: Type.STRING,
                description: 'The common name of the item identified in the image.'
              },
              recyclable: {
                type: Type.BOOLEAN,
                description: 'Determines if the item is recyclable under standard city sorting/amenity programs.'
              },
              recyclabilityScore: {
                type: Type.INTEGER,
                description: 'A percentage score from 0 (completely non-recyclable) to 100 (universally recyclable).'
              },
              category: {
                type: Type.STRING,
                description: 'Category: Plastic, Paper, Metal, Glass, E-waste, Organic, Hazardous, or Other.'
              },
              summary: {
                type: Type.STRING,
                description: 'A brief 2-3 sentence plain-language summary of what the item is and what materials it consists of.'
              },
              disposalInstructions: {
                type: Type.STRING,
                description: 'Step-by-step instructions for preparing and disposing of this item (e.g. rinse container, detach cap, find specialized drop-off).'
              },
              tags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: '3-5 descriptive status tags or material labels, prefixed with hash like #RinseFirst, #Plastic1, #Ewaste, etc.'
              },
              co2Impact: {
                type: Type.STRING,
                description: 'Estimated standard CO2 reduction impact if sorted correctly (e.g., "0.45 kg CO2 saved" or similar positive phrase if recycled, or impact reduction).'
              }
            },
            required: [
              'itemName',
              'recyclable',
              'recyclabilityScore',
              'category',
              'summary',
              'disposalInstructions',
              'tags',
              'co2Impact'
            ]
          }
        }
      });

      const jsonText = response.text?.trim() || '{}';
      const parsed = JSON.parse(jsonText);
      return res.json(parsed);

    } catch (err: any) {
      console.error('Error in /api/scan:', err);
      return res.status(500).json({
        error: err.message || 'Failed to analyze waste item image',
        fallback: true
      });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
