import { useLocation } from "react-router";
import {Carousel} from 'antd'
import '../Photos/photos.css'

export const Photos = (props) => {
	const { state } = useLocation();
	const pics = state.days.pic;

	// console.log(pics)

	const [month, year] = state.month.split(' ')
	const sentence = state.days.sentence
	// const sentence_lenght = Object.keys(sentence).lengt-
	
	// const [sentence] = state.sentence
	// console.log(sentence)
	// console.log(sentence)
	// console.log(Object.keys(sentence).length);
	


	const imgObj = pics.map(pic => <img src={pic}/>)
	// console.log(imgObj)


	return (
		<div className="the-whole-page-1">

			<Carousel className="carouselContainer" autoplay> 
				{imgObj}
			</Carousel>


		<div className="sentences">

			<h2 className="date">
				{month} {state.days.day}, {year}
			</h2>

			{/* <h4 className="dot">
				{dot}
			</h4> */}

			<h3 className="sentence">
				{sentence}
			</h3>

		</div>
			
			
		</div>
		);
};