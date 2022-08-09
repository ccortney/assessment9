### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? **The standard library for routing in React and allows for navigation amoung views of various components in a React application.**

- What is a single page application?  **A site that exclusively uses client-side routing**

- What are some differences between client side and server side routing? **Client-side routing handles mapping between URL bar and page user sees via browser rather than via server. The current web page is dynamically rewritten with new data. In server-side routing, the browser sends a request and replaces the entire DOM each time.**

- What are two ways of handling redirects with React Router? When would you use each? **The information provided in course is outdated (using Redirect tags or useHistory). Now we can use Link to tags, Navigate tags and useNavigate.**

- What are two different ways to handle page-not-found user experiences using React Router? **The first is to have a route (placed last in your route component list) that sends users to a 404/Not Found page. This does not send a 404 error but will inform the user that the page doesn't exist. The second would be to redirect users if the route doesn't exist.**

- How do you grab URL parameters from within a component using React Router? **In the route tag we include path="/:parameter". In the component for that route we will use useParams hook that returns an object with a key of the parameter name and the value provided in the url.**

- What is context in React? When would you use it? **Context is useful for prop drilling, less repetition, global themes and shared data. We create a Provider and any component inside can subscribe to the context value. In order to subscribe to the value, we need the useContext hook in the component. Without explicitly subscribing, the value isn't available to components farther down in the hierarchy. useContext looks for the nearest matching context and reads its value. When the value inside of context changes, components subscribing to that context will re-render.**

- Describe some differences between class-based components and function
  components in React. **Class components must have a render method describing what the component should render. For function components this is just the return value. Class components don't use hooks. Instead, state is initialized in the constructor. That state is changed with the instance method setState and works similarly to the function returned from useState in function components. Instead of writing our event handlers as inline arrow functions, we can also write them as instance methods. However we lose the context and need to method bind our functions in the constructor. The class component has lifecycle methods including the constructor, render, componentDidMount, componentDidUpdate, and componentWillUnmount. In function components we don't need those lifecycle methods because we have useEffect.**
 
- What are some of the problems that hooks were designed to solve? **Function components originally could not contain state or make use of lifecycle methods. There were a few attempts to fix this before hooks but there were still some issues. The issues with Mixins (first attempt) included causing snowballing complexity, implicit dependencies which made them difficult to debug, and forced components to use the same naming conventions. Higher Order Components' (second attempt) issues included confusion when combining multiple HOCs, they are not very custsomizable once defined, difficult to follow logic and debug. The secret to hooks is closure, the ability for inner functions to remember variables in outer functions, long after the outer function has returned.**