Now we are Hook in this 

```
# Virtual DOM
 create root are those create a virtual DOM tree, which is a lightweight representation of the actual DOM. This allows React to efficiently update the UI by comparing the new virtual DOM with the previous one and applying only the necessary changes to the real DOM.
 recilation algorithm is used to determine the differences between the old and new virtual DOM trees. This process is known as "reconciliation" and is a key feature of React's performance optimization.
 fibare algorithm is a specific implementation of the reconciliation algorithm that uses a depth-first search approach to compare the old and new virtual DOM trees. It is designed to minimize the number of updates to the real DOM, which can be expensive in terms of performance.
 #update
 A change in the data used to render a react app. Usually the result og 'setState' Eventually result in a re-render of the component and its children.
 #Fiber
    Fiber is a reconciliation algorithm used in React to efficiently update the UI by breaking down the rendering work into smaller units called "fibers." Each fiber represents a component and its associated state, allowing React to pause and resume rendering as needed. This helps improve performance, especially for complex applications with many components.
    pause work and come back to it later.
    assign a priority to the work, allowing React to focus on the most important updates first.
    resuse work that was previously paused, allowing React to continue rendering without starting from scratch.
    abort work that is no longer needed, freeing up resources for other tasks.
```
'''

 '''