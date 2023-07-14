import { useState, useEffect } from 'react'
import { getCookieToken } from "../../store/common/Cookie";
import style from './ManageReview.module.css'
import starRatingUp from '../../assets/images/star_rating_up.png'
import starRatingDown from '../../assets/images/star_rating_down.png'
import ReviewContainer from './ReviewContainer'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'

const ManageReview = () => {
    const [reviewItems, setReviewItems] = useState(null);
    const [reviews, setReviews] = useState(null);

    const token = getCookieToken();


    async function getReviews() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-ACCESS-TOKEN': token,
            },
        };
        try {
            const response = await fetch("https://www.insung.shop/jat/review", requestOptions);
            const data = await response.json();

            if (!data.isSuccess) {
                console.log(data.message);
                return;
            }

            return data.result.reviewItems;
        } catch (error) {
            console.log('서버가 아직 안켜져있습니다.')
            console.log(error)
        }
    }

    useEffect(() => {
        getReviews()
            .then(reviewItems => {
                console.log(reviewItems)
                setReviewItems(reviewItems);
            })
    }, []);

    useEffect(() => {
        if (reviewItems) {
            setReviews(reviewItems.map((item) => ({
                user: item.customerName,
                score: item.star,
                buy: item.orderTodayMenu.map((menu) => ({
                  type: menu.meun_name,
                  num: menu.menuCount.toString()
                })),
                review: item.contents,
                imgUrl: item.review_url
              })));
            console.log(reviews);
        }
    }, [reviewItems]);

    /**
     * const score = reviews.map(item => item.score);
    console.log(score);
    const rating = (score.reduce((acc, curr) => acc + curr, 0)) / score.length;
    const count5 = ((score.filter((num) => num === 5).length) / score.length * 100).toFixed(0);
    const count4 = ((score.filter((num) => num === 4).length) / score.length * 100).toFixed(0);
    const count3 = ((score.filter((num) => num === 3).length) / score.length * 100).toFixed(0);
    const count2 = ((score.filter((num) => num === 2).length) / score.length * 100).toFixed(0);
    const count1 = ((score.filter((num) => num === 1).length) / score.length * 100).toFixed(0);
     */

    const rating = 0;
    const count5 = 0;
    const count4 = 0;
    const count3 = 0;
    const count2 = 0;
    const count1 = 0;

    return (
        <div>
            <Header />
            <SideBar />
            <div className={style.mainContainer}>
                <div className={style.reviewScope}>
                    <div className={style.reviewStar}>
                        <div className={style.numRating}>{rating.toFixed(1)}</div>
                        <div className={style.starRating}>
                            <div className={style.starRatingDown}>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                                <img src={starRatingDown}></img>
                            </div>
                            <div className={style.starRatingUp} style={{ width: `${rating * 20}%` }}>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                                <img src={starRatingUp}></img>
                            </div>
                        </div>
                        <div>
                            총 {}명이 리뷰를 달았습니다.
                        </div>
                    </div>
                    <hr className={style.reviewStarHr} />
                    <div className={style.reviewBar}>
                        <div className={style.barRating}>
                            <div className={style.barRatingStar}>별 5개</div>
                            <div className={style.barRatingContainer}>
                                <div className={style.barRatingDown}></div>
                                <div className={style.barRatingUp} style={{ width: `${count5}%` }}></div>
                            </div>
                            <div className={style.barRatingPercent}>{count5}%</div>
                        </div>
                        <div className={style.barRating}>
                            <div className={style.barRatingStar}>별 4개</div>
                            <div className={style.barRatingContainer}>
                                <div className={style.barRatingDown}></div>
                                <div className={style.barRatingUp} style={{ width: `${count4}%` }}></div>
                            </div>
                            <div className={style.barRatingPercent}>{count4}%</div>
                        </div>
                        <div className={style.barRating}>
                            <div className={style.barRatingStar}>별 3개</div>
                            <div className={style.barRatingContainer}>
                                <div className={style.barRatingDown}></div>
                                <div className={style.barRatingUp} style={{ width: `${count3}%` }}></div>
                            </div>
                            <div className={style.barRatingPercent}>{count3}%</div>
                        </div>
                        <div className={style.barRating}>
                            <div className={style.barRatingStar}>별 2개</div>
                            <div className={style.barRatingContainer}>
                                <div className={style.barRatingDown}></div>
                                <div className={style.barRatingUp} style={{ width: `${count2}%` }}></div>
                            </div>
                            <div className={style.barRatingPercent}>{count2}%</div>
                        </div>
                        <div className={style.barRating}>
                            <div className={style.barRatingStar}>별 1개</div>
                            <div className={style.barRatingContainer}>
                                <div className={style.barRatingDown}></div>
                                <div className={style.barRatingUp} style={{ width: `${count1}%` }}></div>
                            </div>
                            <div className={style.barRatingPercent}>{count1}%</div>
                        </div>
                    </div>
                </div>
                <hr className={style.reviewScopeHr} />
                <ReviewContainer reviews={reviews} />
            </div>
        </div>

    )
}

export default ManageReview;