// eslint-disable-next-line no-unused-vars
import React from 'react';
import {ScaleIcon,ArrowPathRoundedSquareIcon, CheckCircleIcon} from '@heroicons/react/24/outline'

const Statements = [{id:"accountBalance", name:"Account Balance", icon: <ScaleIcon/>, amount: "#50,000",href:"#" },
{id:"Pending", name:"Pending", icon: <ArrowPathRoundedSquareIcon/>, amount: "-#20,000",href:"#" },
{id:"Processed", name:"Processed(Last 30 days", icon: <CheckCircleIcon/>, amount: "#30,000",href:"#" }

]
const Overview = () => {
  return (
  <div>
	<h1 className='text-xl font-bold text-gray-900 '>Overview</h1>
	{/* Overview */}
	<div className='flex space-x-8'>
	{Statements.map(statement => <div key={statement.id} className='grid grid-cols-1'>
		<div>
			<div>{statement.icon}</div>
			<div>{statement.name}<span></span></div>
		</div>
		<button>View all</button>
		</div>)}
		</div>
  </div>);
  
};

export default Overview;
