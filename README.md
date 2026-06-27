# PollyGlot Translator

PollyGlot Translator is a simple web application that translates text into different languages using AI. Users can enter text, choose a target language, and receive an instant translation.

## Features

- Translate text using AI
- Support for:
  - French 🇫🇷
  - Spanish 🇪🇸
  - Japanese 🇯🇵

- Clean and responsive user interface
- Cloudflare Worker backend
- OpenRouter AI integration
- Translation results page with reset functionality

## Technologies Used

### Frontend

- React
- JavaScript
- CSS

### Backend

- Cloudflare Workers
- OpenRouter API

## Project Structure

src/
├── assets/
│ └── banner.png
├── components/
│ ├── TranslationForm.jsx
│ └── TranslationResult.jsx
├── services/
│ └── api.js
├── App.jsx
└── App.css

## Installation

Clone the repository:

git clone <repository-url>
cd pollyglot-translator

Install dependencies:

npm install

Start the development server:

npm run dev

## Cloudflare Worker

The application uses a Cloudflare Worker to securely communicate with OpenRouter.

Deploy the worker:

wrangler deploy

Add your OpenRouter API key:

wrangler secret put OPENROUTER_API_KEY

## Environment

The Cloudflare Worker requires:

OPENROUTER_API_KEY

This secret is stored securely using Cloudflare Secrets.

## How It Works

1. User enters text to translate.
2. User selects a target language.
3. React sends a POST request to the Cloudflare Worker.
4. The Worker sends the request to OpenRouter AI.
5. The translated text is returned to the frontend.
6. The translation is displayed on the results page.

## Example

Input:

How are you?

French Output:

Comment ça va ?

Spanish Output:

¿Cómo estás?

Japanese Output:

お元気ですか？

## Author

Created as part of a React and Cloudflare Workers project using OpenRouter AI.
