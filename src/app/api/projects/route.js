import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Project from '@/models/Project';

const seed = [
  {
    id: 1,
    title: "Flora site",
    description: "Garden shop e-commerce with product catalog and about pages",
    image: "/image/web.jpg",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/leylagardendshop",
    previewUrl: "https://leylagahramanova.github.io/leylagardendshop/"
  },
  {
    id: 2,
    title: "Tea Cafe",
    description: "Elegant tea house website with menu and ambiance showcase.",
    image: "/image/tea_cafe.jpeg",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/leylateahouse-main/",
    previewUrl: "https://leylagahramanova.github.io/leylateahouse-main/"
  },
  {
    id: 3,
    title: "Avia Flights",
    description: "Flight simulator maintenance management system",
    image: "/image/Login-COLLAGE.jpg",
    tag: ["React", "Node.js", "MySQL"],
    gitUrl: "https://github.com/leylagahramanova/aviaflights",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_the-web-application-created-for-the-maintenance-activity-7104358830758592512-hOsB?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 4,
    title: "Enjoy LIFE with a cake",
    description: "Creative cake design showcase and ordering platform",
    image: "/image/Cakes.PNG",
    tag: ["Figma"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_figma-frontenddeveloper-webdeveloper-activity-7091827307278942209-GJz2?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 5,
    title: "Bicycles Cirex 120",
    description: "A sleek mountain bike named CIREX 120 by Simplon is showcased in a modern, minimalistic layout.",
    image: "/image/bike.jpg",
    tag: ["Figma"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_figma-frontenddeveloper-webdeveloper-activity-7091827307278942209-GJz2?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 6,
    title: "Quiz Site",
    description: "Interactive React knowledge assessment platform",
    image: "/image/quiz.jpg",
    tag: ["React"],
    gitUrl: "https://github.com/leylagahramanova/front",
    previewUrl: "https://leylagahramanova.github.io/front/"
  },
  {
    id: 7,
    title: "News Site",
    description: "Interactive news platform with category filtering and real-time updates",
    image: "/image/news.PNG",
    tag: ["React"],
    gitUrl: "https://github.com/leylagahramanova/News",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_frontenddevelopers-intern-development-activity-7102018446904766464-RAo-?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 8,
    title: "Burger Site",
    description: "Modern burger ordering platform with menu customization",
    image: "/image/burger.PNG",
    tag: ["NextJS"],
    gitUrl: "https://github.com/leylagahramanova/burgers",
    previewUrl: "https://burgers-yammy.vercel.app/"
  },
  {
    id: 9,
    title: "Movie Site",
    description: "Movie trailer streaming platform with search functionality",
    image: "/image/movie.PNG",
    tag: ["React", "Java", "MongoDB"],
    gitUrl: "https://github.com/leylagahramanova/movie-gold-v1",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_java-react-opentowork-activity-7117184789509517314-Cr7w?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 10,
    title: "Happy New Year",
    description: "Animated greeting card with interactive elements",
    image: "/image/Card.PNG",
    tag: ["React"],
    gitUrl: "https://github.com/leylagahramanova/holiday",
    previewUrl: "https://leylagahramanova.github.io/holiday/"
  },
  {
    id: 11,
    title: "JavaJolt Roasters",
    description: "Premium coffee roastery website with bean selection and ordering",
    image: "/image/Coffee.PNG",
    tag: ["Next"],
    gitUrl: "https://github.com/leylagahramanova/coffee-coffee",
    previewUrl: "https://coffee-coffee.vercel.app/"
  },
  {
    id: 12,
    title: "Scoot",
    description: "Electric scooter rental and booking platform",
    image: "/image/Scooter.PNG",
    tag: ["Next"],
    gitUrl: "https://github.com/leylagahramanova/scooter-scoot-scoot",
    previewUrl: "https://scooter-scoot-scoot.vercel.app/"
  },
  {
    id: 13,
    title: "Interno",
    description: "Luxury interior design and home renovation showcase",
    image: "/image/Interno.PNG",
    tag: ["NextJS"],
    gitUrl: "https://github.com/leylagahramanova/style-style-style",
    previewUrl: "https://style-style-style.vercel.app/"
  },
  {
    id: 14,
    title: "Task Managment",
    description: "The full-stack task management app that allows users to create, update, and organize tasks.",
    image: "/image/Task.PNG",
    tag: ["React", "Node.js", "MongoDB"],
    gitUrl: "https://github.com/leylagahramanova/client-task",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_backend-frontend-reactjs-activity-7226191771234377729-t_8a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECQU6wBYXoiTmNfG0FJE65vNFBfu_eIymM"
  },
  {
    id: 15,
    title: "Calculator",
    description: "Advanced calculator application with mathematical functions.",
    image: "/image/jcalc.PNG",
    tag: ["Java"],
    gitUrl: "https://github.com/leylagahramanova/Java/edit/master/src/com/codewithmosh/Calculator.java",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7204768450051801090/"
  },
  {
    id: 16,
    title: "BookStore",
    description: "Online bookstore supporting local independent retailers",
    image: "/image/BookTable.PNG",
    tag: ["Java"],
    gitUrl: "https://github.com/leylagahramanova/BookShop",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7202314644311449600/"
  },
  {
    id: 17,
    title: "Bankapplication",
    description: "",
    image: "/image/bank.PNG",
    tag: ["Java"],
    gitUrl: "https://github.com/leylagahramanova/Bankapplication",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_java-fullstack-bank-activity-7253079652435406848-yF_p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECQU6wBYXoiTmNfG0FJE65vNFBfu_eIymM"
  },
  {
    id: 18,
    title: "Real time editor",
    description: "",
    image: "/image/Editor.PNG",
    tag: ["React", "Tailwind"],
    gitUrl: "https://github.com/leylagahramanova/nextappeditor",
    previewUrl: "https://www.linkedin.com/posts/leyla-gahramanova-124918262_next-editor-fullstak-activity-7259537895584141312-RbSk/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECQU6wBYXoiTmNfG0FJE65vNFBfu_eIymM"
  },
  {
    id: 19,
    title: "Polo 360",
    description: "Business Blog",
    image: "/image/BusinessBlog.PNG",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/logic",
    previewUrl: "https://leylagahramanova.github.io/logic/?"
  },
  {
    id: 20,
    title: "Switch",
    description: "Company's main page",
    image: "/image/ART.png",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/switch",
    previewUrl: "https://leylagahramanova.github.io/switch/"
  },
  {
    id: 21,
    title: "Fitnesss",
    description: "It's all About. Fitness First",
    image: "/image/Fitness.png",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/fitnesfit",
    previewUrl: "https://leylagahramanova.github.io/fitnesfit/"
  },
  {
    id: 22,
    title: "DARX Fashion",
    description: "Perfect for showcasing your photographies",
    image: "/image/DARX.PNG",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/fashion",
    previewUrl: "https://leylagahramanova.github.io/fashion/"
  },
  {
    id: 23,
    title: "Trip",
    description: "Let's Enjoy The Wonders of Nature",
    image: "/image/Trip.png",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/trip",
    previewUrl: "https://leylagahramanova.github.io/trip/"
  },
  {
    id: 24,
    title: "Course",
    description: "Get your Education today!",
    image: "/image/Course.PNG",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/myportfolio",
    previewUrl: "https://leylagahramanova.github.io/myportfolio/"
  },
  {
    id: 25,
    title: "ABB",
    description: "Bank's main page copy",
    image: "/image/ABB.PNG",
    tag: ["HTML/CSS"],
    gitUrl: "https://github.com/leylagahramanova/abb-mainpage-copy",
    previewUrl: "https://leylagahramanova.github.io/abb-mainpage-copy/"
  },
  {
    id: 26,
    title: "Etsy shop",
    description: "Diploma work",
    image: "/image/Etsy.PNG",
    tag: ["React", "Tailwind"],
    gitUrl: "https://github.com/leylagahramanova/etsy9",
    previewUrl: "https://etsy9.vercel.app/"
  }
];

export async function GET() {
  const hasMongoUri = !!process.env.MONGODB_URI;
  if (!hasMongoUri) {
    // No DB configured: serve seed immediately with cache headers
    const res = NextResponse.json(seed, { status: 200 });
    res.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=600');
    return res;
  }

  try {
    // Add a 2s timeout around the DB init+query to avoid long hangs in UI
    const withTimeout = (p, ms) => new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('timeout')), ms);
      p.then((v) => { clearTimeout(t); resolve(v); }).catch((e) => { clearTimeout(t); reject(e); });
    });

    await withTimeout(connectToDatabase(), 2000);

    const count = await Project.countDocuments();
    if (count === 0 && Array.isArray(seed) && seed.length > 0) {
      await Project.insertMany(seed);
    }

    const projects = await withTimeout(Project.find().sort({ id: 1 }).lean(), 2000);
    const res = NextResponse.json(projects, { status: 200 });
    res.headers.set('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
    return res;
  } catch (error) {
    // On any DB error or timeout, fall back to seed so UI keeps working
    const res = NextResponse.json(seed, { status: 200 });
    res.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=600');
    return res;
  }
}

// POST endpoint to add a new project
export async function POST(request) {
  const hasMongoUri = !!process.env.MONGODB_URI;
  if (!hasMongoUri) {
    return NextResponse.json(
      { error: 'MongoDB URI not configured' },
      { status: 500 }
    );
  }

  try {
    await connectToDatabase();

    const body = await request.json();
    const { id, title, description, image, tag, gitUrl, previewUrl } = body;

    // Validate required fields
    if (!id || !title || !image) {
      return NextResponse.json(
        { error: 'Missing required fields: id, title, and image are required' },
        { status: 400 }
      );
    }

    // Check if project with this id already exists
    const existingProject = await Project.findOne({ id });
    if (existingProject) {
      return NextResponse.json(
        { error: `Project with id ${id} already exists` },
        { status: 400 }
      );
    }

    // Create new project
    const newProject = new Project({
      id,
      title,
      description: description || '',
      image,
      tag: tag || [],
      gitUrl: gitUrl || '',
      previewUrl: previewUrl || '',
    });

    await newProject.save();

    return NextResponse.json(
      { message: 'Project added successfully', project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json(
      { error: 'Failed to add project', details: error.message },
      { status: 500 }
    );
  }
}


