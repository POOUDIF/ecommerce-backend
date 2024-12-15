-- Query untuk Membuat Tabel Users
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Query untuk Membuat Tabel Products
CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Query untuk Membuat Tabel Carts
CREATE TABLE Carts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES Products(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL
);

-- Tambahan Data untuk Tabel Users
INSERT INTO Users (username, email, password)
VALUES 
('emma_davis', 'emma@example.com', 'password303'),
('noah_wilson', 'noah@example.com', 'password404'),
('olivia_clark', 'olivia@example.com', 'password505'),
('liam_taylor', 'liam@example.com', 'password606'),
('sophia_hall', 'sophia@example.com', 'password707'),
('william_king', 'william@example.com', 'password808'),
('ava_moore', 'ava@example.com', 'password909'),
('james_harris', 'james@example.com', 'password111'),
('isabella_martin', 'isabella@example.com', 'password222'),
('elijah_thomas', 'elijah@example.com', 'password333'),
('mia_jackson', 'mia@example.com', 'password444'),
('lucas_white', 'lucas@example.com', 'password555'),
('amelia_lewis', 'amelia@example.com', 'password666'),
('logan_scott', 'logan@example.com', 'password777'),
('harper_young', 'harper@example.com', 'password888');

-- Tambahan Data untuk Tabel Products
INSERT INTO Products (name, price, description, image, category)
VALUES 
('Tablet Pro', 600.00, 'Tablet dengan layar besar dan prosesor cepat', 'tablet_pro.jpg', 'Electronics'),
('Keyboard Mechanical', 80.00, 'Keyboard mechanical dengan lampu RGB', 'keyboard_mechanical.jpg', 'Accessories'),
('Mouse Gaming', 50.00, 'Mouse gaming dengan DPI tinggi', 'mouse_gaming.jpg', 'Accessories'),
('Monitor 4K', 300.00, 'Monitor dengan resolusi 4K untuk pengalaman menonton terbaik', 'monitor_4k.jpg', 'Electronics'),
('Speaker Portable', 100.00, 'Speaker Bluetooth portable dengan kualitas suara premium', 'speaker_portable.jpg', 'Accessories'),
('Drone Kamera', 1200.00, 'Drone dengan kamera 4K untuk fotografi udara', 'drone_kamera.jpg', 'Electronics'),
('Printer Laser', 200.00, 'Printer laser dengan kecepatan cetak tinggi', 'printer_laser.jpg', 'Electronics'),
('Tas Laptop', 40.00, 'Tas laptop dengan bahan tahan air', 'tas_laptop.jpg', 'Accessories'),
('Power Bank', 25.00, 'Power bank dengan kapasitas besar', 'power_bank.jpg', 'Accessories'),
('VR Headset', 300.00, 'Headset virtual reality untuk pengalaman gaming mendalam', 'vr_headset.jpg', 'Accessories'),
('Kamera DSLR', 1000.00, 'Kamera DSLR untuk fotografi profesional', 'kamera_dslr.jpg', 'Electronics'),
('Smart TV', 800.00, 'Smart TV dengan layar 55 inci', 'smart_tv.jpg', 'Electronics'),
('Home Theater', 600.00, 'Sistem audio untuk pengalaman menonton film di rumah', 'home_theater.jpg', 'Accessories'),
('Cooling Pad', 30.00, 'Cooling pad untuk laptop agar tidak overheat', 'cooling_pad.jpg', 'Accessories'),
('Game Console', 500.00, 'Konsol game terbaru dengan grafik luar biasa', 'game_console.jpg', 'Electronics');

-- Tambahan Data untuk Tabel Carts
INSERT INTO Carts (user_id, product_id, quantity, total_price)
VALUES 
(6, 6, 1, 600.00),
(7, 7, 2, 160.00),
(8, 8, 1, 50.00),
(9, 9, 1, 300.00),
(10, 10, 1, 100.00),
(11, 11, 1, 1200.00),
(12, 12, 1, 200.00),
(13, 13, 1, 40.00),
(14, 14, 3, 75.00),
(15, 15, 1, 300.00),
(16, 16, 1, 1000.00),
(17, 17, 1, 800.00),
(18, 18, 1, 600.00),
(19, 19, 2, 60.00),
(20, 20, 1, 500.00);
