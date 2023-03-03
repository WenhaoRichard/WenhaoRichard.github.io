from flask import Flask, request, jsonify
import openai

openai.api_key = "xUtfY5DiO7V2CpWCFrUqT3BlbkFJs2H1Ap4E9NRQQc7LQ40I"

app = Flask(__name__, static_url_path='/gpt')

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/generate_text', methods=['POST'])
def generate_text():
    prompt = request.form.get('prompt')
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return jsonify(response.choices[0].text)

if __name__ == '__main__':
    app.run()
