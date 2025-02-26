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
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Motion Primitives sdfd',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      '/video.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Product Designer',
    start: '2024',
    end: 'Present',
    link: '',
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
    description: 'How AI is changing the way we design',
    link: 'https://medium.com/@aashay.aa12/designing-interface-and-experience-for-generative-ai-products-52dcf7ce7839',
    uid: 'blog-1',
  },
  {
    title: 'Design System: A Complete Guide',
    description:
      'A deep dive into Design System',
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
  {
    label: 'Arena',
    link: 'https://www.are.na/aashay-agrawal/channels',
  },
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
]

export const EMAIL = 'aashayagrawal.work@gmail.com'
