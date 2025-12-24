# MongoDB Atlas Connection Setup

## Step 1: Create .env.local file

Create a file named `.env.local` in the root directory of your project with:

```env
MONGODB_URI=mongodb+srv://leylagahramanova13_db_user:vUOiPOifQsJ2sKfr@cluster0.3jot2ih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

**Important:** 
- Never commit `.env.local` to git (it should be in `.gitignore`)
- Replace with your actual credentials if different

## Step 2: Test the Connection

Run the test script:
```bash
node scripts/test-mongodb-connection.js
```

Or if you want to test with a connection string directly:
```bash
node scripts/test-mongodb-connection.js "mongodb+srv://username:password@cluster.mongodb.net/"
```

## Step 3: Verify Connection in Your App

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/api/projects`

3. If connected, you'll see your projects. If the database is empty, it will auto-seed.

## MongoDB Atlas Setup Checklist

✅ **Connection String**: Set in `.env.local`
✅ **Network Access**: Your IP should be whitelisted in Atlas
✅ **Database User**: Username and password are correct
✅ **Database Name**: `portfolio` (set automatically)
✅ **Collection Name**: `projects` (created automatically)

## Troubleshooting

### Connection Timeout
- Check MongoDB Atlas Network Access settings
- Add `0.0.0.0/0` to allow all IPs (for development only)

### Authentication Failed
- Verify username and password in connection string
- Check database user permissions in Atlas

### Database Not Found
- The database `portfolio` will be created automatically on first connection
- No need to create it manually

## Your Connection String Format

```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=<AppName>
```

Replace:
- `<username>`: Your MongoDB Atlas username
- `<password>`: Your MongoDB Atlas password  
- `<cluster>`: Your cluster address
- `<AppName>`: Your application name


