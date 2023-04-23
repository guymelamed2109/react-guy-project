import {Day} from '../../components/Day'
import '../Month/month.css'


export const Month = (props) => {
	
	const month = props.month
	const days = month.days

	// console.log(props.month.days)

	const daysObjects = days.map(day => <Day key={day.day} day={day} month={month.month}/>)

	return (
		<div className='monthsContainer'>
			{month.month}
			<div className='days'>
				<p>Sun</p>
				<p>Mon</p>
				<p>Tue</p>
				<p>Wed</p>
				<p>Thu</p>
				<p>Fri</p>
				<p>Sat</p>
			</div>
			<div className='month'>
			{daysObjects}

			</div>
		</div>
	);
};