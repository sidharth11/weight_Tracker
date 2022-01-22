'use strict'

const user={
	method: 'GET',
	path : '/',
	handler: async(req,res)=>{
		return "<h1>Welcome to my profile</h1>";
	}
}

module.exports=[user];