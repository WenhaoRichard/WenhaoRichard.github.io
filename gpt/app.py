import os
import openai
from flask import Flask, render_template, request

app = Flask(__name__)

openai.api_key = os.getenv("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")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat')
def chat():
    message = request.args.get('message')

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: " + message + "\nAI:",
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0.0,
        presence_penalty=0.6,
        stop=[" Human:", " AI:"]
    )
    response_text = response.choices[0].text.strip()
    return response_text

if __name__ == '__main__':
    app.run(debug=True)
