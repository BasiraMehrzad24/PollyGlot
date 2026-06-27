import banner from "../assets/banner.png";

export default function TranslationForm({
  text,
  setText,
  language,
  setLanguage,
  onTranslate,
}) {
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // make sure user entered text
    if (!text.trim()) {
      alert("Please enter text");
      return;
    }

    // make sure a language is selected
    if (!language) {
      alert("Please select a language");
      return;
    }

    // call translate function from app component
    onTranslate();
  };

  return (
    <div className="card">
      <div className="banner">
        <img src={banner} alt="PollyGlot" />
      </div>

      <form onSubmit={handleSubmit}>
        <label className="section-title">Text to translate ✨</label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How are you?"
        />

        <label className="section-title">Select language ✨</label>

        <div className="languages">
          <label>
            <input
              type="radio"
              checked={language === "French"}
              onChange={() => setLanguage("French")}
            />
            French 🇫🇷
          </label>

          <label>
            <input
              type="radio"
              checked={language === "Spanish"}
              onChange={() => setLanguage("Spanish")}
            />
            Spanish 🇪🇸
          </label>

          <label>
            <input
              type="radio"
              checked={language === "Japanese"}
              onChange={() => setLanguage("Japanese")}
            />
            Japanese 🇯🇵
          </label>
        </div>

        <button type="submit">Translate</button>
      </form>
    </div>
  );
}
