import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Job = ({job}) => {
	const [open, setOpen] = useState(false)
	function handleClick(){
		
	}
	return (
		<div>
			<div className="box">
				<div className="card">				
						<div>
							<span className="text-bold">{job.title}</span> - 
							<span className="text-soft">{job.company}</span>
							<div>{new Date(job.created_at).toLocaleDateString()}</div>
							<div className="text-soft">{job.type}</div>
							<div className="text-bold">{job.location}</div>
							<div><ReactMarkdown source={job.how_to_apply}/></div>
						</div>	
						<div>
							<img src={job.company_logo} alt={job.company} />
						</div>						
				</div>
					<button onClick={handleClick} >View Details</button>
				<div className="noshow">
					<ReactMarkdown source={job.description}/>
				</div>
			
			</div>
		</div>
	)
}

export default Job


/*
use react boostrap to make cards
load in index.html
	-<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

got error so not using react bootstrap

-npm install react-markdown


*/