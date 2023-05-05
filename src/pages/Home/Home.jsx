import {Navbar} from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import '../Home/home.css'
import {Carousel} from 'antd'

export const Home = (props) => {
	const months = props.months
	const months_day_array =months.map((month) => month.days)
	const photos_array_arrays = []
	months_day_array.forEach((month) => {
		month.forEach((day) => {
			if (day.pic) {
				photos_array_arrays.push(day.pic)
			}
		})
	})

	const photos_array = photos_array_arrays.flat(1)
console.log(photos_array);
	
	const imgObj = photos_array.map(pic => <img src={pic}/>)
	// console.log(imgObj);


// 	const navigate = useNavigate();
// 	const Month 
// 	props.days {
// 		photos = props.day.pic
// 	const month = props.month
	
// 	console.log(month);

	// const { state } = useLocation();
	// const pics = state.days.pic;
	// // console.log(pics)
	

	// const imgObj = pics.map(pic => <img src={pic}/>)
	// console.log(imgObj)

	return (
		<Carousel className="homeContainer" autoplay dots={false} > 
				{imgObj}
			</Carousel>

	);


};