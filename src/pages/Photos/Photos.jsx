import { useLocation } from "react-router";
import {Carousel} from 'antd'
import '../Photos/photos.css'

export const Photos = (props) => {
	const { state } = useLocation();
	const pics = state.days.pic;

	const [month, year] = state.month.split(' ')
	const sentence = state.days.sentence
	// const [sentence] = state.sentence
	console.log(sentence)
	


	const imgObj = pics.map(pic => <img src={pic}/>)


	return (
		<div className="the-whole-page">

			<Carousel className="carouselContainer" autoplay>
				{imgObj}
			</Carousel>

			<h2 className="date">
				{month} {state.days.day}, {year}
			</h2>

			<h3 className="sentence">
				{sentence}
			</h3>
			
		</div>
		);
};