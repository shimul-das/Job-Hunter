import React from 'react'
import './blog.css'

const Blog = (props) => {
return (
<div className='blogs_1'>
    <h2 className='blog-title_1'>Blogs</h2>
    <div className='questions'>
        <h3>1. What is the difference between Props vs state? </h3>
        <p><span className='span'>Props (short for "properties") </span>are used to pass data from a parent component to
            a child component. They are immutable and read-only, meaning that they cannot be modified by the child
            component that receives them. Instead, the child component can use the props passed down to it to render its
            own UI or pass them on to other child components.</p>
        <p><span className='span'>State</span> on the other hand, is used to manage data that changes within a
            component. Unlike props, state is mutable and can be changed by the component itself through a method called
            setState(). When the state changes, React will automatically re-render the component to reflect the updated
            data.</p>
    </div>
    <div className='questions'>
        <h3>2. How does useState work?</h3>
        <p><span className='span'>useState</span> is a React Hook that lets you add a state variable to your component.
            It returns an array with two values: the current state and a function to update it. You can use the function
            to change the state value and trigger a re-render of your component. You can also pass a function as an
            argument to useState to initialize the state based on some calculation.</p>

    </div>
    <div className='questions'>
        <h3>3. What is the Purpose of useEffect other than fetching data.</h3>
        <p><span className='span'>useState</span> is a React Hook that lets you perform side effects in your components.
            Here are some other examples of can do with useEffect besides fetching data:DOM manipulation, Set up
            subscriptions , Manage timers and animations , Call APIs or services and Handle browser events. useEffect
            accepts a function and an optional array of dependencies as arguments. The function will run after every
            render unless you specify the dependencies that control when it should run. You can also return a cleanup
            function from useEffect to dispose any resources that are no longer needed</p>

    </div>
    <div className='questions'>
        <h3>4. How Does React work? </h3>
        <p><span className='span'>React</span> is a JavaScript library that creates user interfaces using declarative
            code and reusable components. React components are like JavaScript functions that accept input data (props)
            and return React elements that describe how the UI should look. React uses a virtual DOM to efficiently
            update the UI based on changes in the data (state). React can also be used to build single-page applications
            and mobile apps with other libraries</p>
    </div>
</div>
)
}

export default Blog