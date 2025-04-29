# creating projects database
# SQLITE database

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Project (db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200), nullable = False)
    overview = db.Column(db.Text, nullable = False)
    img = db.Column(db.IMAGE)
    tech_stack = db.Column(db.String(200))
    description = db.Column(db.Text, nullable = False)
    github_link = db.Column(db.String(200))
