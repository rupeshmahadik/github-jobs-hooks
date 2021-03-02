import './App.css';
import React,{useState} from 'react'
import FetchJobs from './components/FetchJobs'
import Job from './components/Job'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs,loading,error} = FetchJobs(params,page)

  return (
    <div className="App">
     <h3>Github jobs with Hooks</h3>
     {loading && <h3>Loading...</h3>}
     {error && <h3>error...Refresh Page</h3>}
     {jobs.map(job=>{
      return <Job key={job.id} job={job} />
     })

     }
    </div>
  );
}

export default App;


/*
-npm install axios 
-npm install react-bootstrap
-we can create components and use them as constants with different
parameters in app.js
  -const {jobs,loading,error} = FetchJobs()
  -const FetchJobs = (params,page) => {
  return {
      jobs:[],
      loading: true,
      error:true,
  }
}

https://cors-anywhere.herokuapp.com/corsdemo - for cors
*/