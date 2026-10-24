export const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Java',
    'PHP',
    'C',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'GraphQL',
    'MongoDB',
    'Docker',
    'Git',
    'Spring',
    'Bash',
    'Linux CLI Tools',
    'CSS3',
    'Tailwind',
];

export const projects = [
    {
        title: 'Streamability',
        desc: 'Full-stack application that helps users discover where to stream movies and TV shows. Features include personalized watchlists, trending content, and tailored recommendations based on user activity. Built with React, TypeScript, PostgreSQL, and Docker, using RESTful APIs, modern authentication, and a responsive UI.',
        image: '/images/streamability.png',
        deployment: 'https://streamability.vercel.app/',
        github: 'https://github.com/Thenlie/Streamability',
        stacka: 'PostgreSQL',
        stackb: 'React.js',
    },
    {
        title: 'Audiophile',
        desc: 'An e-commerce interface for audio products, designed to showcase front-end architecture, UI design, and component reusability. Features product browsing, cart management, and responsive layouts. Built with Next.js, React, and TypeScript, with a focus on clean design, accessibility, and frontend performance.',
        image: '/images/audiophile.png',
        deployment: 'https://audiophileproducts.vercel.app/',
        github: 'https://github.com/maxh1231/audiophile-ecommerce',
        stacka: 'Next.js',
        stackb: 'TypeScript',
    },
    {
        title: 'Type++',
        desc: 'A gamified typing tester featuring achievements, levels, badges, and competitive leaderboards (friend, weekly, and global). Users can add friends, compare performance, and track their typing stats over time. Built with React, GraphQL, JWT authentication, MongoDB, and Tailwind CSS, emphasizing a smooth user experience and structured data handling.',
        image: '/images/type++.png',
        deployment: 'https://typeplus.herokuapp.com/',
        github: 'https://github.com/maxh1232/type-Plus-Plus',
        stacka: 'MongoDB',
        stackb: 'React.js',
    },
    {
        title: 'Hide Chess.com Opponent',
        desc: 'A lightweight Firefox extension built with JavaScript that enhances focus during online chess games by hiding your opponent’s information on Chess.com. Designed with strict adherence to the Acorns Design System, the extension emphasizes performance through minimal CSS injection and maintains a clean, well-documented codebase.',
        image: '/images/hide-chesscom-opponent.png',
        deployment:
            'https://addons.mozilla.org/en-US/firefox/addon/hide-chesscom-opponent/',
        github: 'https://github.com/maxh1231/hide-chesscom-opponent',
        stacka: 'JavaScript',
        stackb: 'Mozilla API',
    },
    {
        title: 'Turtle',
        desc: 'A word-guessing game inspired by Wordle, featuring multiple play modes including daily and unlimited games. Users can track their progress with a personalized dashboard that displays detailed game statistics. Built with React, MongoDB, and Webpack with a focus on replayability and user engagement.',
        image: '/images/turtle.png',
        deployment: 'https://turtle.herokuapp.com/',
        github: 'https://github.com/maxh1231/turtle',
        stacka: 'React.js',
        stackb: 'MongoDB',
    },
];
export const jobs = [
    {
        title: 'Jr. Full Stack Developer',
        company: 'Hammerton',
        startDate: 'Oct 2025',
        endDate: 'Present',
        start: 2025 + 9 / 12,
        summary:
            'Build full-stack features for internal manufacturing and operations software, from API to interface.',
        highlights: [
            'Develop custom ERP modules and integrations that support sales and fulfillment workflows.',
            'Ship reporting dashboards and localization for teams across the shop floor and front office.',
            'Write internal automation and audit tooling in Python to keep systems and records in sync.',
        ],
        stack: [
            'Python',
            'TypeScript',
            'React',
            'Next.js',
            'PostgreSQL',
            'Odoo',
            'Docker',
        ],
    },
    {
        title: 'Service Desk Technician 2',
        company: 'Unisys',
        startDate: 'Jun 2024',
        endDate: 'Oct 2025',
        start: 2024 + 5 / 12,
        end: 2025 + 9 / 12,
        summary:
            'Escalation point for unresolved helpdesk tickets from AAA employees, solving complex software, hardware, and network issues within SLA.',
        highlights: [
            'Built and maintained a widely used library of PowerShell automation scripts for Azure AD, the Windows Registry, and custom data sources, reducing manual work across the team.',
            'Administered Active Directory: group policies, security groups, and user provisioning for secure, efficient access control.',
            'Authored and maintained the internal knowledge base for recurring issues, improving consistency, resolution time, and onboarding.',
        ],
        stack: ['PowerShell', 'Azure AD', 'Active Directory', 'Windows'],
    },
    {
        title: 'Developer Teaching Assistant & Tutor',
        company: '2U Inc.',
        startDate: 'Apr 2022',
        endDate: 'Aug 2024',
        start: 2022 + 3 / 12,
        end: 2024 + 7 / 12,
        summary:
            'Supported students through a 24-week full stack developer bootcamp alongside its instructors.',
        highlights: [
            'Gave tailored support that contributed to high student retention and satisfaction.',
            'Graded weekly assignments with fair, constructive feedback that steadily improved students\' code and projects.',
            'Worked with teaching staff on new methods and resources for an engaging learning environment.',
        ],
        stack: ['Mentoring', 'Code review', 'Full stack curriculum'],
    },
];

export const links = {
    email: 'max@humpherys.dev',
    github: 'https://github.com/maxh1231',
    linkedin: 'https://www.linkedin.com/in/max-humpherys/',
    resume: '/resume.pdf',
};

export const sections = [
    { href: '#work', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];
