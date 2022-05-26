import React from 'react';


const Blogs = () => {
    return (
        <div>
            <div className='p-5 mx-auto mb-8 mt-8'>
                <h3 className='secondary-title text-center text-4xl font-semibold text-cyan-900 mb-5'>
                    Our Blogs
                </h3>
                <ol className="border-l-2 border-cyan-600">
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">How will you improve the performance of a React Application?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">

                                We can improve performance of a React application by the following ways:
                                <br /> Keeping component state local where necessary.
                                <br /> Memoizing React components to prevent unnecessary re-renders.
                                <br /> Code-splitting in React using dynamic import()
                                <br /> Windowing or list virtualization in React.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">What are the different ways to manage a state in a React application?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">
                                There are four main types of state we need to properly manage in our React apps:
                                <br />1. Local state.
                                <br />2. Global state.
                                <br />3. Server state.
                                <br />4. URL state.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">How does prototypical inheritance work?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.<br /> Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">
                                One should never update the state directly because of the following reasons:

                                <br />If we update it directly, calling the setState() afterward may just replace the update we made.
                                <br />When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br />
                                We will lose control of the state across all components.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">
                                We can implement find() and filter() methods to find products by name.

                                <br />The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.
                                <br />The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div className="flex flex-start items-center">
                            <div className="bg-cyan-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 className="text-gray-800 font-semibold text-xl -mt-2 secondary-title">What is a unit test? Why should write unit tests?</h4>
                        </div>
                        <div className="ml-6 mb-6 pb-6">

                            <p className="text-cyan-700 mt-2 mb-4 description">
                                Unit testing is a process in which smallest part of the software called unit are uniquely individually performing its operation are verified. <br />
                                The purpose of unit testing is to check the functionality of each isolated module to verify whether it is working as expected or not. In this testing method the smallest, individual units/modules/components of the software are isolated and checked.
                            </p>

                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;