/**
 * Blog posts (content from neoverge-content-master.md). Body is an array of
 * paragraphs. Featured imagery to be added later.
 */
export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "behind-the-scenes-training-an-apex-athlete",
    title: "Behind the Scenes: What It Takes to Train an Apex Athlete",
    date: "June 2025",
    category: "Behind the Scenes",
    excerpt:
      "Apex athletes shine on game day, but the real work happens far from the crowd. Here's what it actually takes to wear the jersey.",
    body: [
      "Apex athletes may shine on game day, but the real work happens far from the crowd. At NeoVerge, we believe in transparency — so let's pull back the curtain and show you what it actually takes to wear the Apex jersey.",
      "A typical day starts at 6:00 a.m. with a team stretch and conditioning run. From there, it's breakfast and a full school day, followed by practice, film review, and academic workshops. Nutrition is monitored, rest is encouraged, and mental health check-ins are part of the weekly rhythm. Coaches don't just train bodies — they shape character.",
      "It's not easy. But it's intentional. Every push-up builds grit. Every team talk builds trust. And every academic goal reinforces that sports are a pathway, not a destination. Parents often tell us the structure of Apex has helped their children thrive — not just in school, but at home too.",
      "This behind-the-scenes hustle is what makes Apex different. Our athletes aren't just competing — they're evolving.",
    ],
  },
  {
    slug: "meet-the-dreamers-spotlight-on-jaylen",
    title: "Meet the Dreamers: Spotlight on Rising Star Jaylen",
    date: "June 2025",
    category: "Student Spotlight",
    excerpt:
      "A 10th-grade standout on and off the court, Jaylen embodies the mission of NeoVerge Dream School.",
    body: [
      "Every once in a while, a student comes along who completely embodies the mission of NeoVerge Dream School — and Jaylen is one of them. A 10th-grade standout both on and off the court, Jaylen has emerged as a leader whose impact goes beyond sports. From his sharp shooting during games to his dedication in group study sessions, Jaylen sets an example worth celebrating.",
      "When Jaylen first joined Apex, he was shy and unsure of himself. But with the support of coaches and mentors, he grew in confidence. He started staying after school for tutoring, volunteering to lead warmups during practice, and even organized a wellness circle for younger players struggling with stress.",
      "Jaylen's story reminds us that leadership is about consistency and heart. He dreams of becoming a sports therapist — someone who helps athletes reach their full potential physically and mentally. With his current trajectory, there's no doubt Jaylen will get there. He's not just chasing goals; he's living them.",
    ],
  },
  {
    slug: "from-court-to-classroom",
    title: "From Court to Classroom: How Sports Build Stronger Students",
    date: "June 2025",
    category: "Academics & Athletics",
    excerpt:
      "Our student-athletes are proof that success isn't limited to one arena — the discipline carries from the court to the classroom.",
    body: [
      "At NeoVerge Dream School, our student-athletes are proof that success isn't limited to one arena. The discipline they develop during training — from early-morning practices to after-school drills — seamlessly translates into academic achievement. Through sports, students learn time management, responsibility, and the importance of perseverance.",
      "Take Elijah, for example, a 9th grader who once struggled with focus in class. After joining the Apex program, he began applying the same intensity and structure from the court to his study routine. Today, he not only maintains a solid GPA but also helps tutor his teammates.",
      "Teachers consistently note how athletes in our program demonstrate better engagement, stronger collaboration skills, and higher self-confidence. It's not just about winning games; it's about developing young people who can lead in every part of life. At NeoVerge, the court is a classroom — and our students are excelling in both.",
    ],
  },
];
