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
