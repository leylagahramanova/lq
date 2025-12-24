# How to Add Data to MongoDB with Images

There are several ways to add projects to your MongoDB database:

## 📸 Adding Images

**Important:** Images must be placed in the `public/image/` folder first!

1. **Add your image file** to `public/image/` folder (e.g., `myproject.png`)
2. **Reference it in your project data** using the path `/image/filename.ext`
3. The image path should be relative to the `public` folder

**Example:**
- Image file: `public/image/myproject.png`
- Image path in project: `"/image/myproject.png"`

## Method 1: Using the API POST Endpoint (Recommended)

You can add a new project by making a POST request to `/api/projects`:

### Step 1: Add Image to Public Folder
```bash
# Copy your image to the public/image folder
cp /path/to/your/image.png public/image/myproject.png
```

### Step 2: Add Project via API

#### Using cURL:
```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "id": 27,
    "title": "My New Project",
    "description": "Description of my project",
    "image": "/image/myproject.png",
    "tag": ["React", "Next.js"],
    "gitUrl": "https://github.com/username/repo",
    "previewUrl": "https://myproject.vercel.app"
  }'
```

### Using JavaScript/Fetch:
```javascript
const newProject = {
  id: 27,
  title: "My New Project",
  description: "Description of my project",
  image: "/image/myproject.png",
  tag: ["React", "Next.js"],
  gitUrl: "https://github.com/username/repo",
  previewUrl: "https://myproject.vercel.app"
};

fetch('/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newProject)
})
  .then(res => res.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
```

### Required Fields:
- `id` (Number) - Unique project ID
- `title` (String) - Project title
- `image` (String) - Path to project image

### Optional Fields:
- `description` (String) - Project description
- `tag` (Array of Strings) - Project tags/technologies
- `gitUrl` (String) - GitHub repository URL
- `previewUrl` (String) - Live preview URL

## Method 2: Automatic Seeding

The database automatically seeds with default projects when it's empty. This happens when:
- You first connect to MongoDB
- The database has no projects

The seed data is defined in `src/app/api/projects/route.js` in the `seed` array.

## Method 3: Using MongoDB Compass or MongoDB Shell

### MongoDB Compass:
1. Connect to your MongoDB cluster using the connection string from `.env`
2. Navigate to the `portfolio` database
3. Open the `projects` collection
4. Click "Insert Document"
5. Add your project data following this structure:

```json
{
  "id": 27,
  "title": "My New Project",
  "description": "Description of my project",
  "image": "/image/myproject.png",
  "tag": ["React", "Next.js"],
  "gitUrl": "https://github.com/username/repo",
  "previewUrl": "https://myproject.vercel.app",
  "createdAt": "2025-01-XX",
  "updatedAt": "2025-01-XX"
}
```

### MongoDB Shell:
```javascript
use portfolio

db.projects.insertOne({
  id: 27,
  title: "My New Project",
  description: "Description of my project",
  image: "/image/myproject.png",
  tag: ["React", "Next.js"],
  gitUrl: "https://github.com/username/repo",
  previewUrl: "https://myproject.vercel.app"
})
```

## Method 4: Using the Helper Script (Easiest)

I've created a helper script for you! 

1. **Add your image** to `public/image/` folder
2. **Edit** `scripts/add-project.js` and update the `projectData` object
3. **Run** the script:
```bash
node scripts/add-project.js
```

Make sure your dev server is running (`npm run dev`) before running the script.

## Method 5: Create a Seed Script

Create a file `scripts/seed.js`:

```javascript
import { connectToDatabase } from '../src/lib/mongodb.js';
import Project from '../src/models/Project.js';

const newProjects = [
  {
    id: 27,
    title: "New Project 1",
    description: "Description",
    image: "/image/project1.png",
    tag: ["React"],
    gitUrl: "https://github.com/...",
    previewUrl: "https://..."
  },
  // Add more projects here
];

async function seed() {
  try {
    await connectToDatabase();
    
    for (const project of newProjects) {
      const exists = await Project.findOne({ id: project.id });
      if (!exists) {
        await Project.create(project);
        console.log(`Added project: ${project.title}`);
      } else {
        console.log(`Project ${project.id} already exists`);
      }
    }
    
    console.log('Seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
}

seed();
```

Run it with: `node scripts/seed.js`

## 📝 Image Requirements:

- **Supported formats:** PNG, JPG, JPEG, GIF, WebP
- **Recommended size:** 600x480px or similar aspect ratio (1:0.8)
- **File location:** Must be in `public/image/` folder
- **Path format:** Always start with `/image/` (e.g., `/image/myproject.png`)
- **File naming:** Use lowercase, no spaces (e.g., `my-project.png`)

## Notes:

- Make sure your `.env` file has `MONGODB_URI` set
- Project IDs must be unique
- Image paths should be relative to the `public` folder (e.g., `/image/project.png`)
- Tags are case-sensitive and will be normalized by the frontend
- **Always add images to `public/image/` folder BEFORE adding the project to MongoDB**



