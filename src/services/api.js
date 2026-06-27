export async function translateText(text, language) {
  // send translation request to cloudflare worker
  const response = await fetch(
    "https://pollyglot-worker.pollyglot-mac-2026.workers.dev",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        language,
      }),
    }
  );

  // convert response to json
  const data = await response.json();

  console.log("API RESPONSE:", data);

  // handle api errors
  if (!response.ok) {
    throw new Error(data.error || "Translation failed");
  }

  // return translated text
  return data;
}