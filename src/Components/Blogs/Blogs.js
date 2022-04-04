import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2><strong>What is context API?</strong></h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            <br /><br />
            <h2><strong>#Semantic Tag</strong> </h2>
            <p>A semantic element clearly describes its meaning to both the browser and the developer.

                Examples of non-semantic elements: div and span - Tells nothing about its content.

                Examples of semantic elements: form, table, and article - Clearly defines its content.
                Semantic UI is a framework that helps to build web applications. It provides a set of components for your applications, tools to define responsive layouts, and flexible theming support. Semantic UI provides integration with React with the Semantic UI React. This library provides a React implementation of components, so anyone don't need additional JavaScript dependencies. The Semantic UI React uses themes from Semantic UI so on can reuse CSS stylesheets and leverage Semantic UI themes.</p>
            <br /><br />
            <h2><strong># Inline vs block vs inline-block</strong></h2>
            <p>Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

                Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

                Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.</p>
        </div>
    );
};

export default Blogs;