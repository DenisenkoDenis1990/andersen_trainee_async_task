<h1>Asynchronous functions</h1>

<h3>To run your code use "npm start" - it's already working</h3>

You have two functions `getUsers` and `getPosts` in the folders **Posts** and **Users** that are delayed. You can't change them.

In the main **index.js** file, you have async **getFeed** function - **_the one and only_** function that you can change.

Task:
- Make **getFeed** function return the feed in the following format:
```js
[
    { id: 1, name: 'John', posts: [ [Object], [Object] ] },
    { id: 2, name: 'Bob', posts: [ [Object] ] }
]
```
- Could you make this function run less than 3.5 seconds?
