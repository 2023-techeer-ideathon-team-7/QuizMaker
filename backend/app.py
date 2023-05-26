from flask import Flask, request, jsonify
from dotenv import load_dotenv
import openai, os
import json
app = Flask(__name__)
load_dotenv('.env')
openai.api_key = os.getenv('GPT_SECRET_KEY')

messages = []
def get_gpt_response(keyword, number):
    keyword = f'아까 예시대로 퀴즈를 만들어줘. 배열값만 반환해줘. answer는 아까 말한대로 boolean 값으로 넣어줘. 주제: {keyword}, 문제의 수: {number}'
    messages.append({"role":"user", "content":keyword})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    chat_response = completion.choices[0].message.content
    return chat_response

@app.before_first_request
def initialize():
    messages.append({"role":"user", "content":
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
    '''})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    chat_response = completion.choices[0].message.content
    messages.append({"role":"assistant", "content": chat_response})
    print("setting complete!")
    return chat_response

@app.route('/api/quiz', methods=['POST'])
def chat():
    keyword = request.json['keyword']
    number = request.json['numbers']
    gpt_response = get_gpt_response(keyword, number)
    print(gpt_response)
    try:
        idx = gpt_response.find('[')
        target = gpt_response[idx:]
        return jsonify(json.loads(target))
    except:
        target = '''{
	                "errorType" : "fail",
	                "errorMsg" : "질문 생성 실패"
                 }'''
        return jsonify(json.loads(target))
        

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5555)