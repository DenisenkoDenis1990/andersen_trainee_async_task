
const getFeed = async () => {
	const users = []; // get users from Users service
	const posts = []; // get posts from Posts service

	return [];
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

console.log('feed', feed);
console.log(`Execution time: ${end - start} ms`);
