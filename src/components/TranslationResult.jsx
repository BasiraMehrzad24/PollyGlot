import banner from "../assets/banner.png";

export default function TranslationResult({
  originalText,
  translatedText,
  onReset,
}) {
  // display original text and translated result

  return (
    <div className="card">
      <div className="banner">
        <img src={banner} alt="PollyGlot" />
      </div>

      <div className="result-content">
        <h3 className="section-title">Original text</h3>

        <div className="result-box">{originalText}</div>

        <h3 className="section-title">Your translation</h3>

        <div className="result-box">{translatedText}</div>

        <button onClick={onReset}>Start Over</button>
      </div>
    </div>
  );
}
