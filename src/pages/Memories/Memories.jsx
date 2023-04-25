import '../Memories/memories.css'

import {
	Month
} from '../../components/Month'

export const Memories = (props) => {
	const April = {month:"April 2022", days:[
		{}, {}, {}, {}, {}, {day: 1}, {day: 2},
		{day: 3}, {day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9, pic: ['../../react-guy-project/src/assets/images/april-9.JPG']},
		{day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16},
		{day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23},
		{day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30, pic: ['../../src/assets/images/april-30.jpg'], sentence: "שבת ראשונה ביחד"}]}

	const May = {month:"May 2022", days:[
		{day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6, pic: ['../../src/assets/images/may-6.1.jpg', '../../src/assets/images/may-6.2.jpg']}, {day: 7},
		{day: 8}, {day: 9}, {day: 10}, {day: 11}, {day: 12, pic: ['https://guymelamed2109.github.io/src/assets/images/may-12.JPEG', '../../src/assets/images/may-12.1.gif']}, {day: 13}, {day: 14},
		{day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21},
		{day: 22}, {day: 23}, {day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28},
		{day: 29}, {day: 30}, {day: 31}, {}, {}, {}, {}]}

	const June = {month:"June 2022", days:[
		{}, {}, {}, {day: 1}, {day: 2}, {day: 3}, {day: 4},
		{day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10, pic: ['../../src/assets/images/june-10.jpg']}, {day: 11,  pic: ['../../src/assets/images/june-11.1.JPEG', '../../src/assets/images/june11.2.JPEG']},
		{day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18},
		{day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25},
		{day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30}, {}, {}]}

	const July = {month:"July 2022", days:[
		{}, {}, {}, {}, {}, {day: 1}, {day: 2},
		{day: 3}, {day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9},
		{day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14, pic: ['../../src/assets/images/july-14.1.JPEG', '../../src/assets/images/july-14.2.JPEG']}, {day: 15}, {day: 16},
		{day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22, pic: ['../../src/assets/images/july-22.1.jpg', '../../src/assets/images/july-22.2.jpg']}, {day: 23},
		{day: 24}, {day: 25}, {day: 26}, {day: 27, pic: ['../../src/assets/images/july-27.JPG']}, {day: 28}, {day: 29, pic: ['../../src/assets/images/july-29.JPEG']}, {day: 30, pic: ['../../src/assets/images/july-30.JPEG']},
		{day: 31}, {}, {}, {}, {}, {}, {}]}

	const August = {month:"August 2022", days:[
		{}, {day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6},
		{day: 7}, {day: 8}, {day: 9, pic: ['../../src/assets/images/august-9.JPEG']}, {day: 10}, {day: 11}, {day: 12, pic: ['../../src/assets/images/august-12.1.JPEG', '../../src/assets/images/august-12.2.JPEG', '../../src/assets/images/august-12.3.JPEG'] }, {day: 13, pic: ['../../src/assets/images/august-13.1.JPEG', '../../src/assets/images/august-13.2.JPEG']},
		{day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, {day: 20},
		{day: 21}, {day: 22}, {day: 23}, {day: 24, pic: ['../../src/assets/images/august-24.1.JPEG', '../../src/assets/images/august-24.1.JPG']}, {day: 25, pic: ['../../src/assets/images/august-25.2.JPEG', '../../src/assets/images/august-25.1.jpg']}, {day: 26}, {day: 27},
		{day: 28}, {day: 29}, {day: 30}, {day: 31}, {}, {}, {}]}

	const September = {month:"September 2022", days:[
		{}, {}, {}, {}, {day: 1, pic: ['../../src/assets/images/september-2.1.JPEG', '../../src/assets/images/september-2.2.JPEG']}, {day: 2}, {day: 3},
		{day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10},
		{day: 11}, {day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16}, {day: 17},
		{day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23, pic: ['../../src/assets/images/september-23.JPEG']}, {day: 24, pic: ['../../src/assets/images/september-24.1.JPEG', '../../src/assets/images/september-24.2.JPEG', '../../src/assets/images/september-24.3.JPEG']},
		{day: 25}, {day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30}, {}]}

	const October = {month:"October 2022", days:[
		{}, {}, {}, {}, {}, {}, {day: 1},
		{day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6, pic: ['../../src/assets/images/october-6.JPG']}, {day: 7, pic: ['../../src/assets/images/october-7.1.jpg', '../../src/assets/images/october-7.2.jpg',  '../../src/assets/images/october-7.1.JPEG', '../../src/assets/images/october-7.2.JPEG']}, 
		{day: 8, pic: ['../../src/assets/images/october-8.1.JPEG', '../../src/assets/images/october-8.2.JPEG']}, {day: 9}, {day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14}, {day: 15},
		{day: 16}, {day: 17}, {day: 18}, {day: 19, pic: ['../../src/assets/images/october-19.1.JPEG', '../../src/assets/images/october-19.2.JPEG']}, {day: 20}, {day: 21}, {day: 22},
		{day: 23}, {day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28, pic: ['../../src/assets/images/october-28.1.JPEG', '../../src/assets/images/october-28.2.JPEG', '../../src/assets/images/october-28.3.JPEG']}, {day: 29},
		{day: 30}, {day: 31}, {}, {}, {}, {}, {}]}

	const November = {month:"November 2022", days:[
		{}, {}, {day: 1}, {day: 2, pic: ['../../src/assets/images/november-2.1.JPEG', '../../src/assets/images/november-2.2.JPEG', '../../src/assets/images/november-2.3.JPEG']}, {day: 3}, {day: 4}, {day: 5},
		{day: 6}, {day: 7, pic: ['../../src/assets/images/november-7.JPG']}, {day: 8}, {day: 9}, 
		{day: 10, pic: ['../../src/assets/images/november-10.1.JPEG', '../../src/assets/images/november-10.2.JPEG', '../../src/assets/images/november-10.3.JPEG', '../../src/assets/images/november-10.4.JPEG', '../../src/assets/images/november-10.5.JPEG']},
		{day: 11, pic: ['../../src/assets/images/november-11.1.JPEG', '../../src/assets/images/november-11.2.JPEG', '../../src/assets/images/november-11.3.JPEG', '../../src/assets/images/november-11.4.JPEG', '../../src/assets/images/november-11.5.JPEG', '../../src/assets/images/november-11.6.JPEG', '../../src/assets/images/november-11.7.JPEG', '../../src/assets/images/november-11.8.JPEG', '../../src/assets/images/november-11.9.JPEG', '../../src/assets/images/november-11.10.JPEG' ]},
		{day: 12, pic: ['../../src/assets/images/november-12.1.JPEG', '../../src/assets/images/november-12.2.JPEG', '../../src/assets/images/november-12.3.JPEG', '../../src/assets/images/november-12.4.JPEG', '../../src/assets/images/november-12.5.JPEG'] },
		{day: 13}, {day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, 
		{day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25}, {day: 26},
		{day: 27}, {day: 28}, {day: 29}, {day: 30}, {}, {}, {}]}

	const December = {month:"December 2022", days:[
		{}, {}, {}, {}, {day: 1}, {day: 2, pic: ['../../src/assets/images/december-2.1.JPG', '../../src/assets/images/december-2.2.JPG']}, {day: 3},
		{day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10},
		{day: 11}, {day: 12}, {day: 13}, {day: 14, pic: ['../../src/assets/images/december-14.jpg']}, {day: 15}, {day: 16, pic: ['../../src/assets/images/december-16.1.JPEG', '../../src/assets/images/december-16.2.JPEG']}, 
		{day: 17, pic: ['../../src/assets/images/december-17.1.JPEG', '../../src/assets/images/december-17.2.JPEG', '../../src/assets/images/december-17.3.JPEG']}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24},
		{day: 25}, {day: 26}, {day: 27}, {day: 28}, {day: 29, pic: ['../../src/assets/images/december-29.1.JPEG', '../../src/assets/images/december-29.2.JPEG']}, {day: 30, pic: ['../../src/assets/images/december-30.1.JPEG', '../../src/assets/images/december-30.2.JPEG', '../../src/assets/images/december-30.3.JPEG']}, 
		{day: 31, pic: ['../../src/assets/images/december-31.1.JPEG', '../../src/assets/images/december-31.2.JPEG', '../../src/assets/images/december-31.3.JPEG', '../../src/assets/images/december-31.4.JPEG', '../../src/assets/images/december-31.5.JPEG', '../../src/assets/images/december-31.6.JPEG', '../../src/assets/images/december-31.7.JPEG', '../../src/assets/images/december-31.8.GIF']}]}

	const January = {month:"January 2023", days:[
		{day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6, pic: ['../../src/assets/images/january-6.JPEG']}, {day: 7, pic: ['../../src/assets/images/january-7.1.JPEG', '../../src/assets/images/january-7.2.JPEG', '../../src/assets/images/january-7.3.JPEG']},
		{day: 8}, {day: 9}, {day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14},
		{day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21},
		{day: 22}, {day: 23}, {day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28},
		{day: 29}, {day: 30}, {day: 31}, {}, {}, {}, {}]}

	const February = {month:"February 2023", days:[
		{}, {}, {}, {day: 1}, {day: 2}, {day: 3, pic:['../../src/assets/images/february-3.1.JPEG', '../../src/assets/images/february-3.2.JPEG', '../../src/assets/images/february-3.3.JPEG', '../../src/assets/images/february-3.4.JPEG', '../../src/assets/images/february-3.5.JPEG']}, {day: 4},
		{day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10}, {day: 11},
		{day: 12}, {day: 13}, {day: 14, pic:['../../src/assets/images/february-14.1.JPEG', '../../src/assets/images/february-14.2.JPEG']}, {day: 15}, {day: 16, pic:['../../src/assets/images/february-16.JPEG']}, {day: 17}, {day: 18},
		{day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25},
		{day: 26}, {day: 27}, {day: 28}, {}, {}, {}, {}]}

	const March = {month:"March 2023", days:[
		{}, {}, {}, {day: 1}, {day: 2}, {day: 3}, {day: 4},
		{day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9}, {day: 10, pic:['../../src/assets/images/march-10.1.JPEG', '../../src/assets/images/march-10.2.JPEG', '../../src/assets/images/march-10.3.JPEG', '../../src/assets/images/march-10.4.JPEG', '../../src/assets/images/march-10.5.JPEG']}, {day: 11, pic:['../../src/assets/images/march-11.JPEG']},
		{day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18},
		{day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25},
		{day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30, pic:['../../src/assets/images/february-3.5.JPEG']}, {day: 31, pic:['../../src/assets/images/march-31.1.JPEG', '../../src/assets/images/march-31.2.JPEG']}, {}]}

	const months = [April, May, June, July, August, September, October, November, December, January, February, March]

	const monthsObjects = months.map(month => <Month key={month.month} month={month}/>)
	
	

	return (
		<div className='monthsContainer'> 
			{monthsObjects} </div>

		
	);
};
