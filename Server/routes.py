from flask import Blueprint, request, jsonify
from app import app, db, bcrypt
from models import User, Tractor, Brand
from firebase_admin import auth as firebase_auth

routes = Blueprint("routes", __name__)


@routes.route('/signup', methods=['POST'])
def signup():
    data = request.json

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')
    id_number = data.get('id_number')
    role = data.get('role')

    if not (username and email and password and phone_number and id_number and role):
        return jsonify({"error": "All fields are required"}), 400

   
   

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user
    new_user = User(
        username=username,
        email=email,
        password=hashed_password,
        phone_number=phone_number,
        id_number=id_number,
        role=role
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201


@routes.route('/login', methods=['POST'])
def login():
    data = request.json

    email = data.get('email')
    password = data.get('password')

    if not (email and password):
        return jsonify({"error": "Email and password are required"}), 400

    # Check if the user exists
    user = User.query.filter_by(email=email).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "phone_number": user.phone_number,
            "id_number": user.id_number,
            "role": user.role
        }
    }), 200

@app.route('/api/tractors', methods=['POST'])
def add_tractor():
    if 'image' in request.files:
        image = request.files['image']
        image_filename = secure_filename(image.filename)
        image.save(f'./uploads/{image_filename}')
    else:
        image_filename = None

    # Access other form data
    name = request.form.get('name')
    price = request.form.get('price')
    location = request.form.get('location')
    availability = request.form.get('availability')
    fuel_type = request.form.get('fuel_type')
    mileage = request.form.get('mileage')
    size = request.form.get('size')
    brand_id = request.form.get('brand_id')
    owner_id = request.form.get('owner_id')

    if not name or not price:
        return {'error': 'Missing required fields'}, 400

    # Your logic for adding the tractor to the database goes here

    return {'message': 'Tractor added successfully'}




@routes.route("/social-login", methods=["POST"])
def social_login():
    data = request.json

    # Get the Firebase ID token from the client
    id_token = data.get("id_token")

    if not id_token:
        return jsonify({"error": "ID token is required"}), 400

    try:
        # Verify the ID token using Firebase Admin SDK
        decoded_token = firebase_auth.verify_id_token(id_token)
        firebase_uid = decoded_token["uid"]
        email = decoded_token.get("email")
        name = decoded_token.get("name")
        picture = decoded_token.get("picture")

        # Check if the user already exists
        user = User.query.filter_by(email=email).first()

        if not user:
            # If user doesn't exist, create a new one
            user = User(
                username=name,
                email=email,
                password=None,  # Password not required for social login
                phone_number=None,
                id_number=None,
                role="user",  # Default role
            )
            db.session.add(user)
            db.session.commit()

        return jsonify({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "role": user.role,
                "profile_picture": picture,
            }
        }), 200

    except Exception as e:
        return jsonify({"error": f"Invalid ID token: {str(e)}"}), 401
# Register the Blueprint with the app
app.register_blueprint(routes)
