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
				<p>היי :)</p>
				<p>רציתי לסכם את כל החוויות שעברנו השנה וחשבתי שאין מקום טוב יותר לעשות את זה מהאינטרנט</p>
				<p>לכן יצרתי עמוד בו מסוכם כל החוויות שצברנו השנה ביחד, אליו נוכל לגשת בכל זמן ומכל מקום</p>
				<p>הייתה לנו שנה מטורפת, מצפה כבר לשנים הבאות!</p>


			</div>

			<div className="background-img"></div>
			{/* <Carousel className="homeContainer" autoplay dots={false} > 
					{imgObj}
				</Carousel> */}

			</div>
	);

	
};