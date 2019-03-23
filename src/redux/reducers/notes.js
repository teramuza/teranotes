const initialValue = {
	data : [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
  		case 'GET_NOTES':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	default:
	    	return state;
	   
	}
}

