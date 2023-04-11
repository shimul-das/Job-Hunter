import React from 'react'
import './blog.css'

const Blog = (props) => {
return (
<div className='blogs_1'>
    <h2 className='blog-title_1'>Blogs</h2>
    <div className='questions'>
        <h3>1. When should you use context API? </h3>
        <p><span className='span'>Context API </span>is a feature of React that allows
            you to pass data through your component trees without using props. It is useful when you need to share state
            or functions between different components at different levels of the hierarchy. It can also help you avoid
            prop drilling, which is when you pass props through many components that don’t need them. Context API
            consists of three steps: defining a context object, providing a context value in a common ancestor
            component, and consuming the context value in any child component. You should use Context API when your
            state needs to be accessed or set from deeply nested or many child components</p>
    </div>
    <div className='questions'>
        <h3>2. What is a custom hook?</h3>
        <p><span className='span'>A custom hook</span> is a function that starts with “use” and may call other hooks.
            Custom hooks allow you to reuse component logic that needs to be shared by multiple components. Custom hooks
            follow the same rules as built-in hooks, such as only calling them at the top level and only from React
            function components or other custom hooks. Custom hooks can return any value that is useful for the
            components that use them</p>

    </div>
    <div className='questions'>
        <h3>3.What is useRef?</h3>
        <p><span className='span'>useRef is a</span> React hook that lets you create a reference to a value
            that persists between renders. It returns an object with a current property that can be accessed and
            mutated. useRef does not cause a re-render when the current property is changed. It can be used to store a
            mutable value that does not affect the rendering, to access a DOM element directly, or to keep track of
            previous state values</p>

    </div>
    <div className='questions'>
        <h3>4. What is useMemo? </h3>
        <p><span className='span'>useMemo is a</span>  React hook that lets you cache the result of a calculation
            between re-renders. It accepts a function and a list of dependencies as arguments. It returns the result of
            calling the function on the initial render and on subsequent renders if any of the dependencies have
            changed. Otherwise, it returns the cached value from the previous render. useMemo can improve performance by
            avoiding expensive recalculations or re-rendering of components</p>
    </div>
</div>
)
}

export default Blog