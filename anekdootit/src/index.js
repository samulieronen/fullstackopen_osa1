import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
	return (
			<button onClick={props.handleClick}>
				{props.text}
			</button>
	)
}

const CheckVotingStatus = (props) => {
	if (props.votes[props.best] === 0)
		return (
			<div>
				<p>No best anecdote yet. Vote for your favorite!</p>
			</div>
		)
	return (
		<div>
			<p>{props.anecdotes[props.best]}</p>
			<p>The best anecdote has {props.votes[props.best]} votes.</p>
		</div>
	)
}

const App = (props) => {
	const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
	const [votes, setVote] = useState(new Uint8Array(anecdotes.length))
	const [best, setBest] = useState(0)

	const handleRedraw = () => setSelected(Math.floor(Math.random() * anecdotes.length))

	const handleVotes = () => {
		const dup = {...votes}
		dup[selected] += 1
		setVote(dup)
		if (dup[selected] > dup[best])
			setBest(selected)
	}

	return (
		<div>
			<h1>Legendary coding anecdotes</h1>
			<div>
				{props.anecdotes[selected]}
			</div><br/>
			<Button handleClick={handleRedraw} text="Redraw"/>
			<Button handleClick={handleVotes} text="Vote"/><br/><br/>
			<p>This anecdote has {votes[selected]} votes</p>
			<h2>The best anecdote</h2>
			<CheckVotingStatus best={best} anecdotes={props.anecdotes} votes={votes}/>
		</div>
	)
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))
