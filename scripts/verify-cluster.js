/**
 * Script to help verify your MongoDB Atlas cluster name
 * 
 * This will show you how to get the correct connection string from Atlas
 */

console.log('🔍 How to Verify Your MongoDB Atlas Cluster:\n');
console.log('1. Go to MongoDB Atlas: https://cloud.mongodb.com/');
console.log('2. Log in to your account');
console.log('3. Click on your cluster (or create one if you don\'t have any)');
console.log('4. Click "Connect" button');
console.log('5. Select "Connect your application"');
console.log('6. Copy the connection string shown there\n');

console.log('📋 Your connection string should look like:');
console.log('   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/\n');

console.log('⚠️  Common cluster name formats:');
console.log('   ✅ cluster0.xxxxx.mongodb.net (correct)');
console.log('   ❌ clusterr.xxxxx.mongodb.net (typo - extra "r")');
console.log('   ❌ cluster.xxxxx.mongodb.net (missing number)\n');

console.log('💡 If you see "clusterr" in your connection string, it might be:');
console.log('   - A typo in your .env.local file');
console.log('   - A different cluster than you think');
console.log('   - An old/incorrect connection string\n');

console.log('🔧 To fix:');
console.log('   1. Get the correct connection string from Atlas dashboard');
console.log('   2. Update your .env.local file with the correct string');
console.log('   3. Make sure the cluster hostname matches what you see in Atlas\n');

