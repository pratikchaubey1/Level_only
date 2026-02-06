const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const seedData = [
  {
    Name: "Nike Air One",
    Price: 15000,
    category: "Shoes",
    Description: "Lightweight everyday sneakers with premium cushioning and modern street style.",
    Img: "https://i.pinimg.com/736x/1d/25/8f/1d258f24f26db033ea98afa36266257a.jpg"
  },
  {
    Name: "Nike Air Jordan",
    Price: 18000,
    category: "Shoes",
    Description: "Iconic basketball sneakers offering comfort, grip, and legendary design.",
    Img: "https://i.pinimg.com/736x/3e/12/eb/3e12eb1d1b35de8c0e5284135db4cc78.jpg"
  },
  {
    Name: "Nike Air Force",
    Price: 17000,
    category: "Shoes",
    Description: "Timeless Air Force sneakers built for durability and all-day wear.",
    Img: "https://i.pinimg.com/1200x/38/3e/47/383e47bd2935ca5d8f1ce162396d9c9d.jpg"
  },
  {
    Name: "Nike Air Max",
    Price: 16000,
    category: "Shoes",
    Description: "Sporty sneakers with visible Air cushioning and breathable comfort.",
    Img: "https://i.pinimg.com/736x/ee/eb/26/eeeb26f13d0f2309f9c4592703a3bad0.jpg"
  },
  {
    Name: "Nike Air Zoom",
    Price: 19000,
    category: "Shoes",
    Description: "Performance running shoes with responsive Zoom Air technology.",
    Img: "https://i.pinimg.com/736x/c8/4f/6f/c84f6f0159d23d973e5d7f998b3c02db.jpg"
  },
  {
    Name: "Prada Altares Cowhide Baguette",
    Price: 4000,
    category: "Bags",
    Description: "Elegant cowhide leather baguette bag with luxury craftsmanship.",
    Img: "https://i.pinimg.com/1200x/b1/23/8e/b1238eecbfcada90d5888db30c0cb4af.jpg"
  },
  {
    Name: "Vintage Dior Saddle Bag",
    Price: 2000,
    category: "Bags",
    Description: "Vintage designer saddle bag with bold silhouette and premium finish.",
    Img: "https://i.pinimg.com/1200x/60/dc/9a/60dc9aed1da90763c5571382fcf6f7dd.jpg"
  },
  {
    Name: "Louis Vuitton Classic Tote",
    Price: 10000,
    category: "Bags",
    Description: "Spacious luxury tote bag perfect for office and travel use.",
    Img: "https://i.pinimg.com/1200x/72/f7/2d/72f72dd1f30479590dbc57cd21b47d12.jpg"
  },
  {
    Name: "Classic Baggy Jeans",
    Price: 600,
    category: "Jeans",
    Description: "Comfortable relaxed-fit jeans ideal for casual streetwear outfits.",
    Img: "https://i.pinimg.com/1200x/16/9e/94/169e94d64b35fbfe2f2e3600b92dbf5f.jpg"
  },
  {
    Name: "Vintage Baggy Jeans",
    Price: 800,
    category: "Jeans",
    Description: "Vintage-style baggy jeans with washed denim look.",
    Img: "https://i.pinimg.com/736x/34/e4/88/34e488257882f1bda30c56d534171968.jpg"
  },
  {
    Name: "Ripped Baggy Jeans",
    Price: 6000,
    category: "Jeans",
    Description: "Trendy ripped jeans designed for bold street fashion.",
    Img: "https://i.pinimg.com/1200x/88/77/28/887728a39cacce9a8867f1cd9609f1a7.jpg"
  },
  {
    Name: "Zara Slim Fit Shirt",
    Price: 4546,
    category: "Shirts",
    Description: "Slim-fit shirt suitable for formal and smart-casual occasions.",
    Img: "https://i.pinimg.com/736x/37/c5/d6/37c5d63581fd7d56d0a8b2ce0e7d3cda.jpg"
  },
  {
    Name: "H&M Casual Cotton Shirt",
    Price: 234,
    category: "Shirts",
    Description: "Soft cotton casual shirt designed for everyday comfort.",
    Img: "https://i.pinimg.com/736x/bc/45/7a/bc457abda45f57279d166252b44f87de.jpg"
  },
  {
    Name: "Levi's Denim Shirt",
    Price: 4556,
    category: "Shirts",
    Description: "Classic denim shirt with durable fabric and timeless style.",
    Img: "https://i.pinimg.com/736x/3e/93/f7/3e93f7f1eb46622df5decee101f98fa8.jpg"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Drop the collection if it exists
    try {
      await mongoose.connection.collection('products').drop();
      console.log('Dropped existing products collection');
    } catch (error) {
      console.log('No existing products collection to drop');
    }

    // Insert seed data one by one to trigger pre-save hook
    const inserted = [];
    for (const productData of seedData) {
      const product = new Product(productData);
      const saved = await product.save();
      inserted.push(saved);
    }

    console.log(`Successfully inserted ${inserted.length} products`);
    console.log('Seed data:');
    inserted.forEach((product) => {
      console.log(`ID: ${product.id}, Name: ${product.Name}, Category: ${product.category}`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();
