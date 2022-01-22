const functions=require('./sum');

test('adds 1 + 2 to equal 3', () => {
	expect(functions.add(1, 2)).toBe(3);
  });

test('check the value',()=>{
	expect(functions.checkValue(5)).toBe(5);
})  

test('should be null',()=>{
	expect(functions.isNull()).toBe(null);
})

//test('should return the User',()=>{
//	expect(functions.createUser()).toEqual({
//		firstName:'Sidharth',
//		lastName:'Paswan',
//	});
//});

// Arrays

test('Admin should be in array',()=>{
	username=['Ram','Rahul','admin'];
	expect(username).toContain('admin');
})

// working with async data

test('Fetch the the name from the api',()=>{
	 expect.assertions(0);
	 return  functions.fetchUser().then(data=>{
		expect(data.name).toEqual('Leanne Graham');
	});
});