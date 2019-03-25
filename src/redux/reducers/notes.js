const initialValue = {
	data : [],
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
  		case 'GET_NOTES_PENDING':
	  		return {
	  			...state,
	  			isloading : true
	  		}

	  	case 'GET_NOTES_FULFILLED':
	  		return {
	  			...state,
	  			isloading : false,
	  			data : action.payload.data
	  		}

	  	case 'GET_NOTES_REJECTED':
	  		return {
	  			...state,
	  			isloading : false,
	  			isError : true
	  		}

	  	
	  	default:
	    	return state;
	   
	}
}

