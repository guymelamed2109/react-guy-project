import {Navbar} from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import '../Home/home.css'
import {Carousel} from 'antd'

export const Home = (props) => {
	const photos_array = ['https://guymelamed2109.github.io/react-guy-project/images/november-10.1.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-10.2.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-10.3.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-10.4.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-10.5.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.1.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.2.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.3.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.4.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.5.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.6.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.7.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.8.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.9.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-11.10.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-12.1.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-12.2.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-12.3.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-12.4.JPEG', 'https://guymelamed2109.github.io/react-guy-project/images/november-12.5.JPEG']
	const imgObj = photos_array.map(pic => <img src={pic}/>)
	console.log(imgObj);


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