import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>What is context API?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            <br /><br />
            <h2>Semantic Tag in React?</h2>
            <p>A semantic element clearly describes its meaning to both the browser and the developer.

                Examples of non-semantic elements: div and span - Tells nothing about its content.

                Examples of semantic elements: form, table, and article - Clearly defines its content.
                Semantic UI is a framework that helps to build web applications. It provides a set of components for your applications, tools to define responsive layouts, and flexible theming support. Semantic UI provides integration with React with the Semantic UI React. This library provides a React implementation of components, so anyone don't need additional JavaScript dependencies. The Semantic UI React uses themes from Semantic UI so on can reuse CSS stylesheets and leverage Semantic UI themes.</p>
            <br /><br />
            <h2>Inline block</h2>
            <p>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. One will have to declare display: inline-block in one's CSS code.</p>
        </div>
    );
};

export default Blogs;