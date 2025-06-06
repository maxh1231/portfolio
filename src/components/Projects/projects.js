import audiophile from '../../assets/audiophile2.png';
import no1fan from '../../assets/no1fan.JPG';
import turtle from '../../assets/turtle.JPG';
import typeplusplus from '../../assets/type++.JPG';
import streamability from '../../assets/streamability.png';
import github from '../../assets/github.svg';
import exlink from '../../assets/external-link.svg';
import chess from '../../assets/hide-chesscom-opponent.png';

export const projects = [
    {
        title: 'Streamability',
        desc: 'Full-stack application that helps users discover where to stream movies and TV shows. Features include personalized watchlists, trending content, and tailored recommendations based on user activity. Built with React, TypeScript, PostgreSQL, and Docker, using RESTful APIs, modern authentication, and a responsive UI.',
        image: streamability,
        deployment: 'https://streamability.vercel.app/',
        github: 'https://github.com/Thenlie/Streamability',
        stacka: 'PostgreSQL',
        stackb: 'React.js',
        align: 'right-40',
    },
    {
        title: 'Audiophile',
        desc: 'An e-commerce interface for audio products, designed to showcase front-end architecture, UI design, and component reusability. Features product browsing, cart management, and responsive layouts. Built with Next.js, React, and TypeScript, with a focus on clean design, accessibility, and frontend performance.',
        image: audiophile,
        deployment: 'https://audiophileproducts.vercel.app/',
        github: 'https://github.com/maxh1231/audiophile-ecommerce',
        stacka: 'Nest.js',
        stackb: 'TypeScript',
        align: 'left-40',
    },
    {
        title: 'Type++',
        desc: 'A gamified typing tester featuring achievements, levels, badges, and competitive leaderboards (friend, weekly, and global). Users can add friends, compare performance, and track their typing stats over time. Built with React, GraphQL, JWT authentication, MongoDB, and Tailwind CSS, emphasizing a smooth user experience and structured data handling.',
        image: typeplusplus,
        deployment: 'https://typeplus.herokuapp.com/',
        github: 'https://github.com/maxh1232/type-Plus-Plus',
        stacka: 'MongoDB',
        stackb: 'React.js',
        align: 'right-40',
    },
    {
        title: 'Hide Chess.com Opponent',
        desc: 'A lightweight Firefox extension built with JavaScript that enhances focus during online chess games by hiding your opponent’s information on Chess.com. Designed with strict adherence to the Acorns Design System, the extension emphasizes performance through minimal CSS injection and maintains a clean, well-documented codebase.',
        image: chess,
        deployment:
            'https://addons.mozilla.org/en-US/firefox/addon/hide-chesscom-opponent/',
        github: 'https://github.com/maxh1231/hide-chesscom-opponent',
        stacka: 'JavaScript',
        stackb: 'Mozilla API',
        align: 'left-40',
    },
    {
        title: 'Turtle',
        desc: 'A word-guessing game inspired by Wordle, featuring multiple play modes including daily and unlimited games. Users can track their progress with a personalized dashboard that displays detailed game statistics. Built with React, MongoDB, and Webpack with a focus on replayability and user engagement.',
        image: turtle,
        deployment: 'https://turtle.herokuapp.com/',
        github: 'https://github.com/maxh1231/turtle',
        stacka: 'React.js',
        stackb: 'MongoDB',
        align: 'right-40',
    },
];
