
import moment from 'moment';

const List = ({ story, index }) => {
	const { authorDetails, time, title, url, score } = story;

	const date = moment(time * 1000).fromNow();
	
	return (
		<div onClick={() => window.open(url, '_blank')} className="list">
			<div className="list-header">
				<h2>{`${index + 1}. ${title}`}</h2>
				<p className="list-score">{score} points</p>
			</div>
			<div className="list-footer">
				<p className="list-author">{`> by ${authorDetails.id} | ${authorDetails.karmaScore} karma`}</p>
				<p className="list-date">{date.toUpperCase()}</p>
			</div>
	  </div>
	)
}

export default List;