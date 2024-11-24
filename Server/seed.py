from app import db, app
from models import User, Brand, Tractor

def seed_data():
    with app.app_context():
        # Add initial brands if they don't exist
        brand1 = Brand.query.filter_by(name="John Deere").first()
        brand2 = Brand.query.filter_by(name="Massey Ferguson").first()
        brand3 = Brand.query.filter_by(name="New Holland").first()

        if not brand1:
            brand1 = Brand(name="John Deere")
            db.session.add(brand1)
        
        if not brand2:
            brand2 = Brand(name="Massey Ferguson")
            db.session.add(brand2)
        
        if not brand3:
            brand3 = Brand(name="New Holland")
            db.session.add(brand3)

        db.session.commit()

        # Add initial users if they don't exist
        user1 = User.query.filter_by(username="Alice").first()
        user2 = User.query.filter_by(username="Bob").first()

        if not user1:
            user1 = User(username="Alice", email="alice@example.com", password="hashed_password", 
                         phone_number="1234567890", id_number="ID123456", role="buyer")
            db.session.add(user1)
        
        if not user2:
            user2 = User(username="Bob", email="bob@example.com", password="hashed_password", 
                         phone_number="9876543210", id_number="ID789012", role="seller")
            db.session.add(user2)

        db.session.commit()

        # Add tractors if they don't exist
        tractor1 = Tractor.query.filter_by(name="JD X500").first()
        tractor2 = Tractor.query.filter_by(name="MF 135").first()
        tractor3 = Tractor.query.filter_by(name="NH T7").first()

        if not tractor1:
            tractor1 = Tractor(
                size="Large", 
                fuel_type="Diesel", 
                name="JD X500", 
                brand_id=brand1.id, 
                price=2500000, 
                owner_id=user1.id,
                image_url="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600"
            )
            db.session.add(tractor1)

        if not tractor2:
            tractor2 = Tractor(
                size="Medium", 
                fuel_type="Diesel", 
                name="MF 135", 
                brand_id=brand2.id, 
                price=15000000, 
                owner_id=user2.id,
                image_url="https://images.pexels.com/photos/13372159/pexels-photo-13372159.jpeg?auto=compress&cs=tinysrgb&w=600"
            )
            db.session.add(tractor2)

        if not tractor3:
            tractor3 = Tractor(
                size="Large", 
                fuel_type="Diesel", 
                name="NH T7", 
                brand_id=brand3.id, 
                price=3500000, 
                owner_id=user1.id,
                image_url="https://images.pexels.com/photos/6693027/pexels-photo-6693027.jpeg?auto=compress&cs=tinysrgb&w=600"
            )
            db.session.add(tractor3)

        db.session.commit()

    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()