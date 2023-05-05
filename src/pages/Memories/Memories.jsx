// import '../Memories/memories.css'

import {Month} from '../../components/Month'
import {Navbar} from '../../components/Navbar'
import '../../components/Navbar/navbar.css'


export const Memories = (props) => {

	const monthsObjects = props.months.map(month => <Month key={month.month} month={month}/>)
	
	// months.forEach((month) => {
	// 	let index = month.days; 
	// 	// console.log(index);


	// 	for (const [key, value] of Object.entries(index)) {
	// 		let keys = key;
	// 		console.log(keys)
	// 	}
		// console.log(index);

		// let value = Object.entries(index)
		// console.log(value[0]);
		// value.forEach((values) => {
		// 	let values = values;
		// 	console
		// })
		// console.log(value);

		

		// let picture = Object.keys(index);
		// console.log(picture);

		// picture.forEach((pictures) => {
		// 	let photo = pictures;
		// 	console.log(photo);
		// }
		
		// )
		// console.log(picture);

	// }
	// )

	// console.log(March.days.day);

	return (
		<div className='monthsContainer'>
			{monthsObjects} </div>

	);
};