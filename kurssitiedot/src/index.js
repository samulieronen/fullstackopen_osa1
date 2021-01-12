import React from 'react'
import ReactDOM from 'react-dom'

const Header = (args) => {
	return (
		<div>
		<h1>{args.course}</h1>
		</div>
	)
}

const Part = (args) => {
	return (
		<p>
			{args.part} {args.ex}
		</p>
	)
}

const Content = (args) => {
	return (
		<div>
			<Part part={args.p1} ex={args.ex1}/>
			<Part part={args.p2} ex={args.ex2}/>
			<Part part={args.p3} ex={args.ex3}/>
		</div>
	)
}

const Total = (args) => {
	return (
		<p>Number of exercises {args.sum}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3}/>
      <Total sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

