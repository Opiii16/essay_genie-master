from flask import Flask, render_template, request, jsonify
from nltk.chat.util import Chat, reflections

app = Flask(__name__)

# Chatbot response pairs
pairs = [
    (r"hi|hello|hey", ["Hello! How can I assist you today?", "Hi there! How can I help?"]),
    (r"how are you?", ["I'm doing great, thanks for asking!", "I'm good, how about you?"]),
    (r"(.*)color(.*)", ["I like all colors! What about you?"]),
    (r"(.*)(course|program)(.*)", ["We offer programs in Android and Full Stack Development."]),
    (r"(.*)android(.*)", ["Our Android program teaches Java/Kotlin for mobile apps."]),
    (r"(.*)full stack(.*)", ["Full Stack covers frontend (HTML/CSS/JS) and backend (Node/Django)."]),
    (r"(.*)mobile apps(.*)", ["We offer mobile app training in Android and React Native."]),
    (r"(.*)", ["Sorry, I didn't understand that. Could you rephrase?"]),
]

chatbot = Chat(pairs, reflections)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    if user_input.lower() == 'quit':
        return jsonify({'response': "Goodbye! Have a nice day.", 'status': 'end'})
    response = chatbot.respond(user_input)
    return jsonify({'response': response, 'status': 'continue'})

if __name__ == '__main__':
    app.run(debug=True)