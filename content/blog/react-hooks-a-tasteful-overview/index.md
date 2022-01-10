---
title: React Hooks, a simplistic overview
date: "2022-01-08"
description: "A tasteful demo of hooks"
---

Within the past few months I've started to understand the react eco-system more.

This is only a part one I will do a second part in the future.

And React Hooks are a big part of that. They're completely optional to use, so I imagine that for an already existing codebase, the developers can choose what should be refactored to use hooks or stay with classes. 

I can see a potential perspective on how React Hooks "abstract away" learning how React classes work and ```this``` in Javascript. It's similar to [this](https://youtu.be/0_AQZbvxH2s?t=368 "Example of taking away abstraction") (6:08 - 6:23) perspective.

I'm only going to cover the most commonly used hooks. Enjoy!

These are:
- useState()
- useEffect()

# ```useState()```

``` js
function App() {
  const [pigeons, setPigeons] = useState(12);
  const handleClick = () => setPigeons(pigeons + 1)

  return 
      <div> 
          I have {pigeons} in my backyard. 
        <div> 
        <button onClick={handleClick}>Give me more pigeons!</button>
      </div>
   </div>
}
```

The first variable of the ```useState()``` hook starts with an initial state, in this case it's called ```pigeons``` and it's being returned on the first render. The second variable acts as a function that updates the first variable by providing a new one. 

In the example above, when the button is clicked, the state of the pigeons will be updated and the component will work exactly like a class component with state.

# ```useEffect()```

Like the ```useState()``` hook, we start by setting our initial state. Except that the ```useEffect()``` function will fire off the state UPON the first render. 

``` js
import React, {useState, useEffect} from 'react';
function App() {
    // Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    // Call the use effect hook
    useEffect(() => {
      setName({FirstName: 'Shedrack', surname: 'Akintayo'})
    }, []) // pass in an empty array as a second argument
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};
export default App

```

We have some jsx props inside the initial state of the hook because this very state will be used when ```useEffect()``` runs. Passing the empty array for the ```useEffect()``` hook will make it only run once without re-rendering on every change in the tree. 


## Resources:
- [React Docs](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [Getting started with the React Hooks API](https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/#useReducer)
- [What are React Hooks](https://www.robinwieruch.de/react-hooks/)
