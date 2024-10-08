const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/';

async function sendChatMessage(message) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${API_KEY}`);

  const body = JSON.stringify({
    'prompt': `User: ${message}\nAI:`,
    'temperature': 0.5,
    'max_tokens': 150,
    'top_p': 1,
    'frequency_penalty': 0,
    'presence_penalty': 0,
  });

  const response = await fetch(API_URL + 'engines/davinci-codex/completions', {
    method: 'POST',
    headers: headers,
    body: body,
  });

  if (response.ok) {
    const data = await response.json();
    return data.choices[0].text.trim();
  } else {
    throw new Error('Failed to fetch response from OpenAI API');
  }
}
