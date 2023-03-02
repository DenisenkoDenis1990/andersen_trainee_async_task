const posts = [
	{id: 1, userId: 1, title: 'JS For Dummies'},
	{id: 2, userId: 2, title: 'React For Dummies'},
	{id: 3, userId: 1, title: 'React For Dummies'},
];

export const getPosts = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(posts);
		}, 3000);
	});
};
