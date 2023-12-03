import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = (props) => {
	return (
		<div>
			{props.courses.map((course) => {
				return (
					<>
						<Header courses={props.course} />
						<Content courses={props.course} />
						<Total courses={props.course} />
					</>
				);
			})}
		</div>
	);
};

export default Course;