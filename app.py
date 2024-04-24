from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define your chatbot logic here
def process_message(message):
    # Simple echo bot that repeats the user's message
    return "You said: " + message

@app.route('/chatbot', methods=['POST'])
def chatbot():
    # Get the user's message from the request
    user_message = request.json['message']

    # Process the user's message
    bot_response = process_message(user_message)

    # Return the bot's response
    return jsonify({'message': bot_response})


if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
