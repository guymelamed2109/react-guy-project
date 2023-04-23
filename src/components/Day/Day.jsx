import '../Day/day.scss'
import { useNavigate } from 'react-router-dom';


export const Day = (props) => {
	const navigate = useNavigate();
	let photos = []
	if (props.day.pic) {
		photos = props.day.pic
	}
	const goToPhotos = () => {
		navigate("/memories/photos", {state:{days:props.day, month:props.month}})
	}

	const styles = {
		backgroundImage: photos[0] && `url("${photos[0]}")`
	}

	// console.log(props.day)

	return (
		<div onClick={() => photos[0] && goToPhotos()} style={styles} className='dayContainer'>
			
			<div style={ props.day.pic != null ? {color:'white', fontWeight: 500} : {color: '#737373'}}> {props.day.day} </div>
		</div>
	);
};