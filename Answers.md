1. What problem does the context API help solve?

    It makes it so you don't have to props drill to pass props from a top level component to a child component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux/ What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are an identifying string that tells the reducer what to do, a reducer is a single function that takes in actions and manipulates state based on what the action is, and a store is the status of the application as a whole. A store is known as the single source of truth because it holds all the information the app needs to work, and the app itself doesn't know anything about its own state without checking the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the the state of the entire application that any component can be hooked into whereas component state is state only a component has access to. Component state is more useful for things like form inputs, where there's no chance any other component will need access to that slice of state. Application state should be used for everything else.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows us to perform asynchronous actions, which is normally not possible within redux. It changes our action creators by intercepting the input and modifying it before sending it onto the reducer.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like redux because even though it takes more to set up, it ends up making more sense in the end to me as far as how I can visualize how my state is working and what is going where. I am using Context in this project though, because Redux would be overkill. Honestly Context is overkill, because I'm passing props down one level.
