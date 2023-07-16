import style from './ReviewContainer.module.css'
import ReviewItem from './ReviewItem';

const ReviewContainer = (props) => {
    if (!props.reviews) {
        return;
    }

    return (
        <div className={style.reviewContainer}>
            {props.reviews.map((review, index) => (
                <ReviewItem
                    key={index}
                    reviewId ={review.reviewId}
                    user={review.user}
                    score={review.score}
                    buy={review.buy}
                    review={review.review}
                    comment={review.comment}
                    imgUrl={review.imgUrl}
                    hideReporModalHandler={props.hideReporModalHandler}
                    showReporModalHandler={props.showReporModalHandler}
                />
            ))}
        </div>
    )
}

export default ReviewContainer;