/* eslint-disable react/prop-types */
import React from 'react'; // Import React

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1> // Access the course name using props
  );
};

const Part = (props) => {
  return (
    <p>
      <strong>{props.part.name}:</strong> {props.part.exercises} exercises
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
      <strong>Exercises num:</strong> {totalExercises}
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
