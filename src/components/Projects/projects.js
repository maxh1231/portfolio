import audiophile from '../../assets/audiophile2.png';
import no1fan from '../../assets/no1fan.JPG';
import turtle from '../../assets/turtle.JPG';
import typeplusplus from '../../assets/type++.JPG';
import streamability from '../../assets/streamability.png';
import github from '../../assets/github.svg';
import exlink from '../../assets/external-link.svg';
export const projects = [
    {
        title: 'Streamability',
        desc: 'Browse your favorite movies and TV shows to discover what platforms they are streamed on. Create an account to add shows to your queue, favorites, or watched list. This is an open-source application built with React, TypeScript, PostgreSQL, and more.',
        image: streamability,
        deployment: 'https://streamability.vercel.app/',
        github: 'https://github.com/Thenlie/Streamability',
        stacka: 'PostgreSQL',
        stackb: 'React.js',
        align: 'right-40',
    },
    {
        title: 'Audiophile',
        desc: 'Audiophile offers a seamless shopping experience, allowing you to effortlessly explore, compare, and purchase your favorite audio gear. All items are placeholder products meant to display my front-end skills. Built with Next.js, React, TypeScript, and more.',
        image: audiophile,
        deployment: 'https://audiophileproducts.vercel.app/',
        github: 'https://github.com/maxh1231/audiophile-ecommerce',
        stacka: 'Nest.js',
        stackb: 'TypeScript',
        align: 'left-40',
    },
    {
        title: 'Type++',
        desc: 'This project was developed in the MERN stack. A gamified typing tester, this application can be used simply to test your typing speed, or take it to the next level with achievements, levels, and badges. Built with several packages including graphQL, JWT (JSON WEB Token), Tailwind, ChartJS and more.',
        image: typeplusplus,
        deployment: 'https://typeplus.herokuapp.com/',
        github: 'https://github.com/maxh1231/type-Plus-Plus',
        stacka: 'MongoDB',
        stackb: 'React.js',
        align: 'right-40',
    },
];
