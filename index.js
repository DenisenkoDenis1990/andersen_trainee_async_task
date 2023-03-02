import { getPosts } from "./Posts";
import { getUsers } from "./Users";
const getFeed = async () => {
  return Promise.all([getPosts(), getUsers()])
    .then((data) => {
      let posts = data[0];
      let users = data[1];
      let result = users.map((user) => {
        user.posts = [];
        for (const post of posts) {
          if (post.userId === user.id) {
            user.posts.push(post);
          }
        }
        return user;
      });
      return result;
    })
    .finally();
  /*
	* [
    { id: 1, name: 'John', posts: [ [Object], [Object] ] },
    { id: 2, name: 'Bob', posts: [ [Object] ] }
		]
	* */
};

const start = Date.now();

const feed = await getFeed();

const end = Date.now();

console.log("feed", feed);
console.log(`Execution time: ${end - start} ms`);
