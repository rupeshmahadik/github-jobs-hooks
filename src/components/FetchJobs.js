import {useReducer,useEffect} from 'react'
import axios from 'axios'

//lets define actions which we can reference later
const ACTIONS = {
	MAKE_REQUEST: 'make-request',
	GET_DATA: 'get-data',
	ERROR: 'error',
}

//const for API url
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

//calling actions here
function reducer(state,action){
	switch(action.type){
		case ACTIONS.MAKE_REQUEST:
			return {loading:true, jobs: []}
		case ACTIONS.GET_DATA:
			return {...state, loading:false, jobs: action.payload.jobs}
		case ACTIONS.ERROR:
			return {...state,loading: false, error:action.payload.error,jobs:[]}
		default:
			return state
	}

}

const FetchJobs = (params,page) => {
	const [state, dispatch] = useReducer(reducer, {jobs:[], loading:true})

	useEffect(()=>{
		
		//to stop constant request while serching
		const cancelToken = axios.CancelToken.source()

		dispatch({type: ACTIONS.MAKE_REQUEST })
		axios.get(BASE_URL, {
			cancelToken:cancelToken.token,
			params:{markdown:true, page:page, ...params}
		}).then(res=>{
			dispatch({type: ACTIONS.GET_DATA, payload: {jobs:res.data}})
		}).catch(e=>{
			if(axios.isCancel(e)) return
			dispatch({type: ACTIONS.ERROR, payload: {error: e}})
		})
		return  ()=>{
			cancelToken.cancel()
		}

	},[params,page])

	return state
}

export default FetchJobs

//we use useReducer
/*
reducer function gets called everytime we called dispatch
and dispatch populates inside the action 
state is our current state of app

e.g - disptch({type:'hello', payload:{x:3}})
	-action.type 
	-action.payload.x

useEffect
	-axios to get api data
	-CORS issue
	-https://cors-anywhere.herokuapp.com/ (add in front of api url)

*/