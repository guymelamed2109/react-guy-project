import {Navbar} from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import '../Home/home.css'
import {Carousel} from 'antd'

export const Home = (props) => {
// 	const months = props.months
// 	const months_day_array =months.map((month) => month.days)
// 	const photos_array_arrays = []
// 	months_day_array.forEach((month) => {
// 		month.forEach((day) => {
// 			if (day.pic) {
// 				photos_array_arrays.push(day.pic)
// 			}
// 		})
// 	})

// 	const photos_array = photos_array_arrays.flat(1)
// 	photos_array.sort(() => Math.random() -0.5)
// console.log(photos_array);
	
// 	const imgObj = photos_array.map(pic => <img src={pic}/>)
	// console.log(imgObj);


	return (
		
		<div className="the-whole-page"	>
			<div className='paragraph'>
				<h1> היי :)</h1>
		
				<p>רציתי לסכם את כל החוויות שעברנו השנה וחשבתי שאין מקום טוב יותר לעשות את זה מהאינטרנט</p>
				<p>לכן יצרתי עמוד בו מסוכם כל החוויות שצברנו השנה ביחד, 
					{/* <br></br> */}
					אליו נוכל לגשת בכל זמן ומכל מקום</p>
				<p>הייתה לנו שנה מטורפת, 
					<br></br>
					מצפה כבר לשנים הבאות!❤</p>

		 	</div>
		
			<img src='https://guymelamed2109.github.io/react-guy-project/images/august-12.1.JPEG' className='main-image'></img>
			<img src='https://guymelamed2109.github.io/react-guy-project/images/i-love-you-love.gif' className='gif'></img>

	 	</div>
	);

	
};