/**
 * Script to test MongoDB Atlas connection
 * 
 * Usage:
 * 1. Make sure MONGODB_URI is set in .env.local file
 * 2. Run: node scripts/test-mongodb-connection.js
 * 
 * Or set it directly (Windows PowerShell):
 * $env:MONGODB_URI="your_connection_string"; node scripts/test-mongodb-connection.js
 * 
 * Or (Windows CMD):
 * set MONGODB_URI=your_connection_string && node scripts/test-mongodb-connection.js
 */

// Check if mongodb is available
let MongoClient;
try {
  MongoClient = require('mongodb').MongoClient;
} catch (error) {
  console.error('❌ MongoDB package not found. Installing...');
  console.log('Run: npm install mongodb');
  process.exit(1);
}

async function testConnection() {
  // Try to get from environment or use a placeholder
  let mongoUri = process.env.MONGODB_URI;
  
  // If not set, check command line argument
  if (!mongoUri && process.argv[2]) {
    mongoUri = process.argv[2];
  }

  if (!mongoUri) {
    console.error('❌ MONGODB_URI is not set');
    console.log('\n💡 To fix this:');
    console.log('  1. Create a .env.local file in the root directory');
    console.log('  2. Add: MONGODB_URI=your_mongodb_atlas_connection_string');
    console.log('  3. Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/');
    console.log('\n   Or pass it directly:');
    console.log('   node scripts/test-mongodb-connection.js "mongodb+srv://..."');
    return;
  }

  console.log('🔌 Testing MongoDB Atlas connection...\n');
  console.log('Connection string:', mongoUri.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')); // Hide credentials

  const client = new MongoClient(mongoUri);

  try {
    console.log('\n⏳ Connecting...');
    await client.connect();
    console.log('✅ Successfully connected to MongoDB Atlas!');

    // Extract cluster information from connection string
    const clusterMatch = mongoUri.match(/@([^/]+)/);
    const clusterHost = clusterMatch ? clusterMatch[1] : 'unknown';
    
    console.log('\n📊 Connection Details:');
    console.log(`   Cluster Hostname: ${clusterHost}`);
    
    // Check if cluster name looks suspicious (typo detection)
    if (clusterHost.includes('clusterr') && !clusterHost.includes('cluster0')) {
      console.log(`   ⚠️  WARNING: Cluster name contains "clusterr" - might be a typo!`);
      console.log(`   💡 Check your MongoDB Atlas dashboard for the correct cluster name`);
    }
    
    console.log(`   (Note: appName parameter is just metadata, not the actual cluster)`);

    // Test database access
    const database = client.db('portfolio');
    const collection = database.collection('projects');
    
    const count = await collection.countDocuments();

    console.log(`\n📈 Database: portfolio`);
    console.log(`📋 Collection: projects`);
    console.log(`📊 Documents count: ${count}`);

    // Get cluster info from MongoDB
    const adminDb = client.db().admin();
    try {
      const serverStatus = await adminDb.serverStatus();
      console.log(`\n🔍 Server Info:`);
      console.log(`   MongoDB Version: ${serverStatus.version}`);
    } catch (e) {
      // Ignore if admin access not available
    }

    console.log('\n💡 You can now use your API endpoints to interact with the database.');
  } catch (error) {
    console.error('\n❌ Connection failed:', error.message);
    console.log('\n💡 Common issues and solutions:');
    console.log('  1. Check your MongoDB Atlas connection string format');
    console.log('  2. Make sure your IP is whitelisted in Atlas:');
    console.log('     - Go to Network Access in MongoDB Atlas');
    console.log('     - Add your current IP or 0.0.0.0/0 (development only)');
    console.log('  3. Verify your username and password are correct');
    console.log('  4. Check if your cluster is running in Atlas dashboard');
    console.log('  5. Ensure MONGODB_URI is set in .env.local file');
    console.log('\n📖 See MONGODB_SETUP.md for detailed instructions');
  } finally {
    await client.close();
    console.log('\n🔌 Connection closed.');
  }
}

testConnection();

