from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    id_number = db.Column(db.String(20), unique=True, nullable=False)
    role = db.Column(db.String(20), nullable=False)  # admin, dealership, buyer, seller
    owner_id = db.Column(db.Integer, nullable=True)

    # Relationship with Tractor
    tractors = db.relationship('Tractor', back_populates='owner')

class Brand(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    image = db.Column(db.String(255), nullable=True)

    # Relationship with Tractor
    tractors = db.relationship('Tractor', back_populates='brand')

class Tractor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(50), nullable=False)
    fuel_type = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    brand_id = db.Column(db.Integer, db.ForeignKey('brand.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
    location = db.Column(db.String(100), nullable=False)  
    availability = db.Column(db.Boolean, nullable=False, default=True)  
    mileage = db.Column(db.Integer, nullable=False) 


    # Back-populates relationships
    owner = db.relationship('User', back_populates='tractors')
    brand = db.relationship('Brand', back_populates='tractors')