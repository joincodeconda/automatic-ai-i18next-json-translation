# Automatic i18next JSON Translation with i18nowAI

## Overview

This project demonstrates how to use i18next and i18nowAI to automatically translate JSON files for language localization in a React app. To learn more about i18nowAI, visit [www.i18now.ai](https://www.i18now.ai).

## Getting Started

Use this GitHub repo as a template to quickly set up i18next and i18nowAI translations in your React app.

To test it out:

1. Download or clone this repo.
2. Open the terminal and navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Navigate to `http://localhost:3000` in your browser.

## Introduction

If you're interested in learning about how this project was set up, continue reading. This guide will walk you through the process of integrating i18next and i18nowAI into your React app for easy language localization.

### 1. Install i18next

Begin by installing i18next along with its necessary extensions. Execute the following command in your terminal:

```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

### 2. Create a new folder

Create a folder named `locales` in your project's public directory to store your translation JSON files.

### 3. Create source translation file

Inside the `locales` folder, add a subfolder named `en` for English translations. Within this folder, create a file named `translation.json`. Example content:

```json
{
  "header": "Hello from i18nowAI",
  "subheader": "This is a simple example of how to use i18nowAI in your project.",
  "action": "Use the language switcher to change the language.",
  "footer": "Click on this link to learn more about i18nowAI."
}
```

### 4. Initialize i18next

Set up i18next in your React app by creating a file named `i18n.js` in the root of your project. Include the following initialization code:

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    load: "languageOnly",
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator", "cookie"],
      caches: ["localStorage", "cookie"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
```

### 5. Use i18next in your components

To use the translations, integrate i18next within your React components as shown below:

```javascript
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl">{t("header")}</h1>
        </div>
      </header>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg mb-2">{t("subheader")}</h2>
          <p className="mb-4">{t("action")}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => changeLanguage("en")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Español
            </button>
            <button
              onClick={() => changeLanguage("ko")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              한국인
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <a href="https://www.i18now.ai/" className="underline">
            {t("footer")}
          </a>
        </div>
      </footer>
    </div>
  );
}

const Loader = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    Loading...
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
```

### 6. Use i18nowAI to translate to other languages

To further translate your app into additional languages, employ i18nowAI. Simply upload your source translation file, select your target languages, and let i18nowAI handle the translation. Begin at [www.i18now.ai](https://www.i18now.ai).
