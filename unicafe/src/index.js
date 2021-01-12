import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const StatisticLine = ({text, value}) => (
		<tr>
			<td>
				{text}
			</td>
			<td>
				{value}
			</td>
		</tr>
)

const Statistics = (props) => {
	const total = props.good + props.neutral + props.bad
	if (total === 0)
		return (
			<div>
				<p>No statistics to show yet.</p>
			</div>
		)
	const avg = (props.good - props.bad) / (total)
	const pos = (props.good / total) * 100
	return (
		<div>
			<table>
				<StatisticLine text="Good Feedback:" value={props.good}/>
				<StatisticLine text="Neutral Feedback:" value={props.neutral}/>
				<StatisticLine text="Bad Feedback:" value={props.bad}/>
				<StatisticLine text="Total:" value={total}/>
				<StatisticLine text="Avg:" value={avg}/>
				<StatisticLine text="Positive share:" value={pos}/>
			</table>
		</div>
	)
}

const App = () => {
  
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const addGood = () => setGood(good + 1)
	const addNeutral = () => setNeutral(neutral + 1)
	const addBad = () => setBad(bad + 1)

	return (
		<div>
			<h1>Please leave some feedback</h1>
			<Button handleClick={addGood} text="Good"/>
			<Button handleClick={addNeutral} text="Neutral"/>
			<Button handleClick={addBad} text="Bad"/>
			<h1>Feedback Stats</h1>
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)
