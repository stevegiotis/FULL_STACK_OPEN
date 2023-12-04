/* eslint-disable react/prop-types */
const Total = ({parts}) => {
	return (
		<p>
			<strong>total of : 
			{parts.reduce(
				(accumulator, current) => accumulator + current.exercises,
				0
			)}
			</strong>
		</p>
	);
};

export default Total;