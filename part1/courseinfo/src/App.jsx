/* eslint-disable react/prop-types */
// just the header
const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  );
};
//parts section 
const Part = (props) => {
  console.log(props)
  return(
    <p>
      <strong>{props.part.name}</strong>
      {props.part.exercises} exercises
    </p>
  )
}
// rendering all the parts into the Content component
const Content = (props) => {
  return (
		<div>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
		</div>
	);
};

const Total = (props) => {
  return(
    <p>
      <strong>
       Exercises num : 
      </strong>
      {props.parts.reduce((acc,cur) => 
        acc + cur.exercises,0 // set 0 as deafult 
      )
      }
    </p>
    )
}

const App = () => {
  const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App