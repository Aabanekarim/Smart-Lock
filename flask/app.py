import select
from flask import Flask, request,jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/login'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
ma = Marshmallow(app)

class Users(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    firstname =db.Column(db.String(200))
    lastname = db.Column(db.String(200))
    code = db.Column(db.String(200))

    def __init__(self,fname,lname,code):
        self.firstname=fname
        self.lastname=lname
        self.code=code


class Historique(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    firstname =db.Column(db.String(200))
    lastname = db.Column(db.String(200))
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self,fname,lname):
        self.firstname=fname
        self.lastname=lname


class Articles(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    firstname =db.Column(db.String(200))
    lastname = db.Column(db.String(200))
    email = db.Column(db.String(200))
    password = db.Column(db.String(100))
    admin = db.Column(db.Boolean, default=False)

    def __init__(self,fname,lname,title,body,admin=False):
        self.firstname=fname
        self.lastname=lname
        self.email=title
        self.password=body
        self.admin = admin

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id','firstname','lastname','date')

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id','firstname','lastname','code')

article_schema=ArticleSchema()
articles_schema=ArticleSchema(many=True)
user_schema=UserSchema()
users_schema=UserSchema(many=True)


@app.route('/ajouter',methods = ['POST'])
def ajouter():
    fname = request.json['firstname']
    lname = request.json['lastname']
    code = request.json['code']
    articales = Users(fname,lname,code)
    db.session.add(articales)
    db.session.commit()
    return article_schema.jsonify(articales)


@app.route('/get',methods = ['GET'])
def get_articales():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)


@app.route('/getall',methods = ['GET'])
def get_historique():
    all_articles = Historique.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/getusers',methods = ['GET'])
def get_users():
    all_articles = Users.query.all()
    results = users_schema.dump(all_articles)
    return jsonify(results)

@app.route('/get/<id>/',methods = ['GET'])
def post_detail(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)

@app.route('/add',methods = ['POST'])
def add_articales():
    fname = request.json['firstname']
    lname = request.json['lastname']
    emaile = request.json['emaile']
    password = request.json['password']
    admin = request.json['admin']

    if admin=="Admin" or admin=="admin":
        admin=True
    else:
        admin=False
    
    articales = Articles(fname,lname,emaile,password,admin)
    db.session.add(articales)
    db.session.commit()
    return article_schema.jsonify(articales)

@app.route('/login', methods=['POST'])
def login():

    email = request.json['emaile']
    password = request.json['password']
    
    article = Articles.query.filter_by(email=email, password=password).first()
    if article:
        return jsonify({'status': 'success','id':article.id,'firstname':article.firstname,'lastname':article.lastname,'admin' : article.admin})
    else:
        return jsonify({'status': 'refuse'})



@app.route('/supprime/<code>/',methods = ['DELETE'])
def article_supprime(code):
    article  = Users.query.filter_by(code=code).first()

    if article:
        print(article)
        esp8266_ip = '172.20.10.6'  # Replace with the IP address of your ESP8266 module
        url = f'http://{esp8266_ip}/set-parameter'

        params = {'op': code}
        response = requests.get(url, params=params)
        db.session.delete(article)
        db.session.commit()

        return "delete"
    else:
        print(code)
        return "non"
    


@app.route('/read',methods=['GET'])
def read_file():
    with open('C:/xampp1/htdocs/arduino/getcode.txt', 'r') as file:
        content = file.read()
    
    with open('C:/xampp1/htdocs/arduino/getcode.txt', 'w') as f:
            f.write('')
    
    esp8266_ip = '172.20.10.6'  # Replace with the IP address of your ESP8266 module
    url = f'http://{esp8266_ip}/set-parameter'

    params = {'op': 'getcode'}
    response = requests.get(url, params=params)
            
    if content:
        return jsonify({'status': 'success','msg' : content})
    else:
        return jsonify({'status': 'refuse'})

@app.route('/update/<id>/',methods = ['PUT'])
def update_article(id):
    article = Users.query.filter_by(id=id).first()

    firstname = request.json['firstname']
    lastname = request.json['lastname']
    

    article.firstname = firstname
    article.lastname = lastname
    

    db.session.commit()
    return article_schema.jsonify(article)

@app.route('/update1/<id>/',methods = ['PUT'])
def update_article1(id):
    article = Historique.query.filter_by(id=id).first()

    firstname = request.json['firstname']
    lastname = request.json['lastname']
    

    article.firstname = firstname
    article.lastname = lastname
    

    db.session.commit()
    return article_schema.jsonify(article)

@app.route('/delete/<id>/',methods = ['DELETE'])
def article_delete(id):
    article  = Historique.query.filter_by(id=id).first()
    db.session.delete(article)
    db.session.commit()
    
    return article_schema.jsonify(article)

@app.route('/deleteuser/<id>/',methods = ['DELETE'])
def article_deleteuser(id):
    article  = Users.query.filter_by(id=id).first()
    db.session.delete(article)
    db.session.commit()
    esp8266_ip = '172.20.10.6'  # Replace with the IP address of your ESP8266 module
    url = f'http://{esp8266_ip}/set-parameter'

    params = {'op': article.code}
    response = requests.get(url, params=params)
    
    
    return article.code

@app.route('/send-parameter', methods=['post'])
def send_parameter():
    data=request.get_json()
    op=data.get('op')
    if op=='ouvrir':
        firstname=data.get('firstname')
        lastname=data.get('lastname')
        articales=Historique(firstname,lastname)
        db.session.add(articales)
        db.session.commit()
    
    esp8266_ip = '172.20.10.6'  # Replace with the IP address of your ESP8266 module
    url = f'http://{esp8266_ip}/set-parameter'

    params = {'op': op}
    response = requests.get(url, params=params)

    if op:
        return 'nice'
    else:
        return 'Failed to send parameter'

if __name__ == "__main__":
    app.run(host='192.168.1.102',port=3000,debug=True)