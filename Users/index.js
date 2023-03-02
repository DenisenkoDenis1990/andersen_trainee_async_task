const users = [
		{id: 1, name: 'John'},
		{id: 2, name: 'Bob'},
	];

export const getUsers = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(users);
		}, 3000);
	});
}
