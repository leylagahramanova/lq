async function viewProjects() {
  const API_URL = process.env.API_URL || 'http://localhost:3000';
  
  console.log('📋 Fetching all projects from MongoDB...\n');

  try {
    const response = await fetch(`${API_URL}/api/projects`);
    const projects = await response.json();

    if (!Array.isArray(projects)) {
      console.error('❌ Unexpected response format');
      return;
    }

    console.log(`✅ Found ${projects.length} project(s) in database\n`);
    console.log('='.repeat(80));

    if (projects.length === 0) {
      console.log('📭 No projects found in database.');
      console.log('💡 Projects will be auto-seeded when database is empty.');
    } else {
      projects.forEach((project, index) => {
        console.log(`\n[${index + 1}] Project ID: ${project.id}`);
        console.log(`    Title: ${project.title}`);
        console.log(`    Description: ${project.description || '(no description)'}`);
        console.log(`    Image: ${project.image}`);
        console.log(`    Tags: ${project.tag?.join(', ') || '(no tags)'}`);
        console.log(`    GitHub: ${project.gitUrl || '(no URL)'}`);
        console.log(`    Preview: ${project.previewUrl || '(no URL)'}`);
        console.log(`    Created: ${project.createdAt || 'N/A'}`);
        console.log('-'.repeat(80));
      });
    }

    console.log(`\n📊 Summary: ${projects.length} total project(s)`);
  } catch (error) {
    console.error('❌ Failed to fetch projects:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('  1. Make sure your Next.js dev server is running: npm run dev');
    console.log('  2. Check that MongoDB URI is set in .env file');
    console.log('  3. Verify the API endpoint is accessible');
  }
}

viewProjects();

