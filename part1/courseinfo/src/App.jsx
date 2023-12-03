/* eslint-disable react/prop-types */

const totalcss = {
  fontWeight: 950,
  fontSize: '1.1em',  
};

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1> // Access the course name using props
  );
};

const Part = (props) => {
  return (
    <p>
      <strong>{props.part.name} {props.part.exercises} </strong>
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} /> // Use a unique 'key' for each element in a map
      ))}
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <p style={totalcss}>
      Total of {totalExercises}
    </p>
  );
};

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header course={course[0]} />
      <Content parts={course[0].parts} />
      <Total parts={course[0].parts} />
      <Header course={course[1]} />
      <Content parts={course[1].parts} />
      <Total parts={course[1].parts} />
    </div>
  );
};

export default App;
