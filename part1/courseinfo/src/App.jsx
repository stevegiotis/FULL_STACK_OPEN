/* eslint-disable react/prop-types */

const totalcss = {
  fontWeight: 950,
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
    <p>
      <p style={totalcss}>Total of {totalExercises} </p>
    </p>
  );
};

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
      {
        name:'Redux',
        exercises: 11,
      }
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
