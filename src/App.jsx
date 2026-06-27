import { useState } from "react";
import "./App.css";
import { translateText } from "./services/api";
import TranslationForm from "./components/TranslationForm";
import TranslationResult from "./components/TranslationResult";

function App() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("French");
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleTranslate() {
    if (!text.trim()) return;

    try {
      setIsLoading(true);

      const data = await translateText(text, language);

      setTranslation(data.translation);
    } catch (error) {
      alert(error.message || "Translation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    setText("");
    setLanguage("French");
    setTranslation("");
  }

  return (
    <div className="app">
      {!translation ? (
        <TranslationForm
          text={text}
          setText={setText}
          language={language}
          setLanguage={setLanguage}
          onTranslate={handleTranslate}
          isLoading={isLoading}
        />
      ) : (
        <TranslationResult
          originalText={text}
          translatedText={translation}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
