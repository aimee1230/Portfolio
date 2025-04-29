from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
from model import db, Project
from chatbot import Chatbot

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
auth = HTTPBasicAuth()
chatbot = Chatbot()

'''
USERNAME = 'admin'
PASSWORD = 'password123'

@auth.verify_password
def verify(username, password):
    if username == USERNAME and password == PASSWORD:
        return True
    return False
'''

# Initialize database
with app.app_context():
    db.create_all()


# Public: View all Projects
@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    output = []
    for project in projects:
        project_data = {
            'id': project.id,
            'title': project.title,
            'overview': project.overview,
            'img': project.img,
            'tech_stack': project.tech_stack,
            'description': project.description,
            'github_link': project.github_link
        }
        output.append(project_data)
    return jsonify(output)

