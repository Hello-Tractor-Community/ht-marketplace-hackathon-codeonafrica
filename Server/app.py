from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Apply CORS to the app
CORS(app)

# Initialize Flask app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tractor.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

import routes

   

# Run the application
if __name__ == "__main__":
    app = create_app
    app.run(debug=True)
