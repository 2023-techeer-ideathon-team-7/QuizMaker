from flask import Flask, request
from dotenv import load_dotenv
import openai, os

app = Flask(__name__)
load_dotenv('.env')
openai.api_key = os.getenv('GPT_SECRET_KEY')

messages = []
def get_gpt_response(content):
    messages.append({"role":"user", "content":content})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    chat_response = completion.choices[0].message.content
    return chat_response

@app.before_first_request
def initialize():
    gpt_response = get_gpt_response(
        '''
        내가 주제에 대해서 알려주면 해당 주제에 대한 퀴즈 만들어줘.
        문제의 형식은 OX 퀴즈이고 아래와 같은 JSON 형식으로 만들고,
        answer는 question의 정답이 O 이면 true, X면 false로 해줘.
        나중에 퀴즈를 만들 때 다른 텍스트를 줄 필요가 없고, 아래 예시처럼 배열 값만 반환해줘.
        예시
        [
            {
                "question": "임진왜란은 1592년에 발발했다.",
                "answer": true
            },
            {
                "question": "임진왜란은 1598년에 발발했다.",
                "answer": false
            }
        ]
        '''
    )
    messages.append({"role":"assistant", "content": gpt_response})
    print("setting complete!")
    return gpt_response

@app.route('/api/quiz', methods=['POST'])
def chat():
    content = request.json['message']
    gpt_response = get_gpt_response(content)
    return gpt_response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5555)