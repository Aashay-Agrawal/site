type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Visual Design Gallery',
    description: 'Showcase of all my visual design work',
    link: 'null',
    video: 'null',
    id: 'project1',
  },
  {
    name: 'Figma Plugin',
    description: 'Figma Plugin',
    link: 'null',
    video: 'null',
    id: 'project2',
  },
  // {
  //   name: 'Motion Primitives sdfd',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     '/video.mp4',
  //   id: 'project3',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Product Designer',
    start: '2024',
    end: 'Present',
    link: 'https://cal.com/aashay-agrawal',
    id: 'work1',
  },
  // {
  //   company: 'Freelance',
  //   title: 'Design Engineer',
  //   start: '2022',
  //   end: '2024',
  //   link: 'https://ibelick.com',
  //   id: 'work2',
  // },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Designing the Interface and Experience for Generative AI Products.',
    description: 'How to design for AI products',
    link: 'https://medium.com/@aashay.aa12/designing-interface-and-experience-for-generative-ai-products-52dcf7ce7839',
    uid: 'blog-1',
  },
  {
    title: 'Design System: A Complete Guide',
    description: 'A deep dive into Design System',
    link: 'https://medium.com/@aashay.aa12/design-system-463d00eaccaa',
    uid: 'blog-2',
  },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  // {
  //   label: 'Arena',
  //   link: 'https://www.are.na/aashay-agrawal/channels',
  // },
  {
    label: 'Twitter',
    link: 'https://x.com/_aashay_',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aashayagrawal',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/aashay.drafts',
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@aashaydrafts',
  },
  {
    label: 'Cal.com',
    link: 'https://cal.com/aashay-agrawal',
  },
]

export const EMAIL = 'aashayagrawal.work@gmail.com'
