import React, { useCallback } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';
import { ReactComponent as SelectButton } from './img/Vector 30.svg';
import { ReactComponent as DeleteButton } from "./img/Group 8.svg";
import { useRef, useState } from "react";

import './aa/SideBar'
import SideBar from "./aa/SideBar";

function App() {
    return (
        <BrowserRouter>
            <Head />
            <HeadBorderStyled />
            <Routes>
                <Route path='/regist1' element={<Regist1 />} />
                <Route path='/regist2' element={<Regist2 />} />
                <Route path='/regist3' element={<Regist3 />} />
                <Route path='/modify1' element={<Modify1 />} />
            </Routes>
            <Foot />
        </BrowserRouter>
    );
}

const HeadStyled = styled.div`
    height: 44px;
    width: auto;
    margin: 24px 50px 22px 50px;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`

const HeadLStyled = styled.div`
    box-sizing: border-box;
    height: 44px;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    font-family: Noto Sans CJK KR;
`

const HeadLFontStyled = styled.div`
    font-family: Noto Sans CJK KR;
    height: 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    
    margin-left: 8px;
`

const HeadLSVGStyled = styled.div`
    width: 20px;
    height: 20px;
    background-color: gray;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const HeadRStyled = styled.div`
    display: flex;
`

const HeadRFontStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    padding: 12px 8px;
    margin: 0 8px;
`

const HeadBorderStyled = styled.div`
    border-bottom: 1px solid #000000;
`

function Head() {
    return (
        <HeadStyled>
            <HeadLStyled>
                <HeadLSVGStyled>
                </HeadLSVGStyled>
                <HeadLFontStyled>
                    재떨이
                </HeadLFontStyled>
            </HeadLStyled>
            <HeadRStyled>
                <HeadRFontStyled>
                    facebook
                </HeadRFontStyled>
                <HeadRFontStyled>
                    insta
                </HeadRFontStyled>
                <HeadRFontStyled>
                    blog
                </HeadRFontStyled>
                <HeadRFontStyled>
                    youtube
                </HeadRFontStyled>
            </HeadRStyled>
        </HeadStyled>
    );
}

const Regist1Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 790px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Regist1BIStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 25px;
    padding-left: 30px
`

const Regist1BI2Styled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Regist1BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 27px;
`

const Regist1BoxContainer1Styled = styled.div`
    display: flex;
    padding: 13px 0;
    margin: 0 30px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
`

const Regist1Box1Styled = styled.div`
    width: 172px;
    height: 48px;

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Box2Styled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
    width: 457px;
    height: 48px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1TextBoxStyled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 22px;
    padding: 0 21px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

const Regist1EmptyBoxStyled = styled.div`
    padding: 9px 0;
    width: 100%;
`


const Regist1BoxContainer2Styled = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px 0;
    margin: 0 30px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`

const Regist1Box3Styled = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 457px;
    align-items: center;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    padding: 0 45px;
`

const Regist1Box4Styled = styled.img`
    width: 122px;
    height: 122px;
    background: rgba(242, 244, 248, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Regist1InputButtonStyled = styled.label`
    box-sizing: border-box;
    width: 157px;
    height: 49px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Noto Sans CJK KR;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Box6Styled = styled.div`
    display: grid;
    grid-template-rows: 48px 48px;
    grid-template-columns: 275px 121px;
    grid-gap: 30px; /* 그리드 아이템 사이의 간격 설정 */
    padding-right: 30px
`

const Regist1Box7Styled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box8Styled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box9Styled = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Noto Sans CJK KR;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist1Submit = styled.div`
    width: 732px;
    height: 70px;
    margin: 83.5px auto 70px;
    background: rgba(96, 78, 248, 1);

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);

`

const Regist1SelectBoxStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 457px;
    top: 0px;
    box-sizing: border-box;
    z-index: 100;
    border: 1px solid rgb(200, 200, 200);
`

const Regist1SelectBoxItemStyled = styled.div`
    height: 50px;
    background: #FFF;
    padding: 0 21px;
 
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;   
    color: rgba(0, 0, 0, 0.5);
`

const Regist1SelectEmptyStyled = styled.div`
    height: 49px;
    background-color: transparent; /* 배경색을 투명하게 설정 */
`

const Regist1SelectedButtonContainerStyled = styled.div`
    margin-right: 23px;
    height: 17px;
`

function Regist1() {
    const [isHovered, setIsHovered] = useState(false)
    const [clickSectors, setClickSectors] = useState(false);
    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [previewImage3, setPreviewImage3] = useState(null);
    const [previewImage4, setPreviewImage4] = useState(null);
    const [previewImage5, setPreviewImage5] = useState(null);
    const previewImageSetters = [setPreviewImage1, setPreviewImage2, setPreviewImage3, setPreviewImage4, setPreviewImage5];
    const fileInput1 = useRef();
    const fileInput2 = useRef();
    const fileInput3 = useRef();
    const fileInput4 = useRef();
    const fileInput5 = useRef();

    const fileCheck = (obj) => {
        const pathPoint = obj.value.lastIndexOf(".");
        const filePoint = obj.value.substring(pathPoint + 1, obj.value.length);
        const fileType = filePoint.toLowerCase();

        if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
            return true;
        } else {
            alert("jpg, jpeg, png 파일만 선택할 수 있습니다.");
            return false;
        }
    };

    const handleImageChange = (event, number) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (fileCheck(event.target)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    previewImageSetters[number](imageUrl);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };



    return (
        <Regist1Styled>
            <Regist1BIStyled>
                기본정보
            </Regist1BIStyled>
            <Regist1BI2Styled>
                가게정보등록후 심사가 끝나면 서비스 이용이 가능합니다. 심사는 24시간 이내에 이루어집니다.
            </Regist1BI2Styled>
            <Regist1BorderStyled />
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    기업명(상호명)
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="cu 편의점 울산 문수점" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 업종
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled
                        readOnly
                        value={clickSectors ? clickSectors : ''}
                        placeholder="업종 선택하기"
                        maxLength={25}
                    />
                    <Regist1SelectedButtonContainerStyled
                        onMouseEnter={() => {
                            setIsHovered(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                        }}>
                        <SelectButton />
                    </Regist1SelectedButtonContainerStyled>
                    {isHovered && (<Regist1SelectBoxStyled>
                        <Regist1SelectEmptyStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }} />
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("백화점")
                                setIsHovered(false)
                            }}>
                            백화점
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("편의점")
                                setIsHovered(false)
                            }}>
                            편의점
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("디저트")
                                setIsHovered(false)
                            }}>
                            디저트
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("샐러드")
                                setIsHovered(false)
                            }}>
                            샐러드
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("초밥")
                                setIsHovered(false)
                            }}>
                            초밥
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("카페")
                                setIsHovered(false)
                            }}>
                            카페
                        </Regist1SelectBoxItemStyled>
                        <Regist1SelectBoxItemStyled
                            onMouseEnter={() => {
                                setIsHovered(true)
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false)
                            }}
                            onClick={() => {
                                setClickSectors("대형마트")
                                setIsHovered(false)
                            }}>
                            대형마트
                        </Regist1SelectBoxItemStyled>
                    </Regist1SelectBoxStyled>
                    )}
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    사업주 휴대번호
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="010-9778-8973" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    사업주 이메일
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="sdfsdfsdfsd@gmail.com" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    사업자 등록증
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage1 ? previewImage1 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput1.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image1"
                        accept="image/jpeg, image/png"
                        ref={fileInput1}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 0) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    영업자 등록증
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage2 ? previewImage2 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput2.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image2"
                        accept="image/jpeg, image/png"
                        ref={fileInput2}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 1) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    통장 사본
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage3 ? previewImage3 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput3.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="image3"
                        accept="image/jpeg, image/png"
                        ref={fileInput3}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 2) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    운영시간
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="08:00 ~ 12:00" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    휴무일
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="홀수주 화요일, 공휴일" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 전화번호
                </Regist1Box1Styled>
                <Regist1Box2Styled>
                    <Regist1TextBoxStyled placeholder="055-1234-5678" maxLength={25} />
                </Regist1Box2Styled>
            </Regist1BoxContainer1Styled>
            <Regist1BoxContainer1Styled>
                <Regist1Box1Styled>
                    가게 주소
                </Regist1Box1Styled>
                <Regist1Box6Styled>
                    <Regist1Box7Styled>
                        <Regist1TextBoxStyled readOnly placeholder="050505" />
                    </Regist1Box7Styled>
                    <Regist1Box9Styled>
                        우편번호
                    </Regist1Box9Styled>
                    <Regist1Box7Styled>
                        <Regist1TextBoxStyled placeholder="울산 남구 대학로 33번길 18-4" />
                    </Regist1Box7Styled>
                    <Regist1Box8Styled>
                        <Regist1TextBoxStyled placeholder="2층" />
                    </Regist1Box8Styled>
                </Regist1Box6Styled>
            </Regist1BoxContainer1Styled>
            <Regist1EmptyBoxStyled />
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    가게 로고
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage4 ? previewImage4 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput4.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={fileInput4}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 3) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1BoxContainer2Styled>
                <Regist1Box1Styled>
                    매장간판 사진
                </Regist1Box1Styled>
                <Regist1Box3Styled>
                    <Regist1Box4Styled src={previewImage5 ? previewImage5 : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                    <Regist1InputButtonStyled
                        onClick={() => {
                            fileInput5.current.click();
                        }}>
                        이미지 업로드
                    </Regist1InputButtonStyled>
                    <input type="file"
                        name="filename"
                        accept="image/jpeg, image/png"
                        ref={fileInput5}
                        style={{ display: "none" }}
                        onChange={(event) => { handleImageChange(event, 4) }}
                    />
                </Regist1Box3Styled>
            </Regist1BoxContainer2Styled>
            <Regist1Submit>
                가게 정보 신청하기
            </Regist1Submit>
        </Regist1Styled>
    );
}



const Regist2Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1115px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Regist2BIStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 25px;
    padding-left: 30px
`

const Regist2BI2Styled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Regist2BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 11px;
`

const Regist2FlexContainer1Styled = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    
`

const Regist2FlexContinaer2Styled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
`

const Regist2FlexBox1Styled = styled.div`
    width: 17px;
    height: 35px;
    
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
`

const Regist2FlexBox2Styled = styled.div`
    display: flex;
    align-items: center;

    width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist2FlexBox3Styled = styled.div`
    display: flex;
    align-items: center;

    width: 275px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist2FlexBox4Styled = styled.div`
    display: flex;
    flex-direction: column;
`

const Regist2FlexBox5Styled = styled.img`
    box-sizing: border-box;
    width: 122px;
    height: 89px;
    background: rgba(242, 244, 248, 1);
    border: 1px solid rgba(194, 195, 198, 1);
    border-bottom: none;
`

const Regist2InputButtonStyled = styled.div`
    width: 122px;
    height: 34px;
    background: rgba(96, 78, 248, 1);
    
    font-family: Noto Sans CJK KR;
    font-size: 13px;
    font-weight: 300;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

const Regist2FlexTextArea1Styled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 18px;
    padding: 0 12px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Noto Sans CJK KR;
    font-size: 13px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist2Add = styled.div`
    box-sizing: border-box;
    width: 427px;
    height: 70px;
    margin: 103px auto 87px;
    border: 2px solid rgba(96, 78, 248, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Regist2SubmitContatiner = styled.div`
    position: relative;
    width: 100%;
    height: 163px;
`

const Regist2Submit = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 301px;
    height: 70px;
    right: 0px;
    
    background: rgba(96, 78, 248, 1);

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

const Regist2FlexBox7Styled = styled.div`
    width: 182px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist2FlexBox8Styled = styled.div`
    width: 275px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`


const Regist2FlexBox9Styled = styled.div`
    width: 122px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist2FlexEmptyBoxStyled = styled.div`
    width: auto;
    height: 157px;
`



function Regist2() {
    const [grid1Items, setGrid1Items] = useState([0, 1, 2]);
    const [grid2Items, setGrid2Items] = useState([0, 1, 2]);
    const [previewImageSetters, setPreviewImageSetters] = useState(false);
    const previewImage1 = useRef({ 0: null, 1: null, 2: null });
    const previewImage2 = useRef({ 0: null, 1: null, 2: null });
    const tempList1 = [];
    const tempList2 = [];

    const fileCheck = (obj) => {
        const pathPoint = obj.value.lastIndexOf(".");
        const filePoint = obj.value.substring(pathPoint + 1, obj.value.length);
        const fileType = filePoint.toLowerCase();

        if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
            return true;
        } else {
            alert("jpg, jpeg, png 파일만 선택할 수 있습니다.");
            return false;
        }
    };

    const handleImageChange = (event, number, type) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (fileCheck(event.target)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    if (type == 1)
                        previewImage1.current[number] = imageUrl;
                    else
                        previewImage2.current[number] = imageUrl;
                    setPreviewImageSetters(!previewImageSetters);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };


    return (
        <Regist2Styled>
            <Regist2BIStyled>
                메인메뉴
            </Regist2BIStyled>
            <Regist2BI2Styled>
                소비자에게 보여지는 메인메뉴들입니다. 메뉴명, 가격, 구성, 설명, 사진 다 기입해주세요.
            </Regist2BI2Styled>
            <Regist2BorderStyled />
            <Regist2FlexContainer1Styled>
                <Regist2FlexContinaer2Styled>
                    <Regist2FlexBox1Styled />
                    <Regist2FlexBox7Styled>
                        메뉴명
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        가격
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        구성
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox8Styled>
                        설명
                    </Regist2FlexBox8Styled>
                    <Regist2FlexBox9Styled>
                        사진
                    </Regist2FlexBox9Styled>
                </Regist2FlexContinaer2Styled>
                {grid1Items.map((index) => (
                    <Regist2FlexContinaer2Styled key='grid1-{index}'>
                        <Regist2FlexBox1Styled>
                            {index + 1}
                        </Regist2FlexBox1Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox3Styled>
                            <Regist2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Regist2FlexBox3Styled>
                        <Regist2FlexBox4Styled>
                            <Regist2FlexBox5Styled src={previewImage1.current[index] ? previewImage1.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList1.push(a);
                                        if (index == grid1Items.length - 1) {
                                            console.log(tempList1)
                                        }
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, index, 1) }}
                            />
                            <Regist2InputButtonStyled
                                onClick={() => {
                                    tempList1[index].click();
                                }}>
                                이미지 업로드
                            </Regist2InputButtonStyled>
                        </Regist2FlexBox4Styled>
                    </Regist2FlexContinaer2Styled>
                ))}
            </Regist2FlexContainer1Styled>
            <Regist2Add onClick={() => { setGrid1Items([...grid1Items, grid1Items.length]) }}>
                항목 추가하기
            </Regist2Add>
            <Regist2FlexEmptyBoxStyled />
            <Regist2BIStyled>
                사이드 메뉴
            </Regist2BIStyled>
            <Regist2BI2Styled>
                소비자에게 보여지는 사이드메뉴들입니다.
                <p />
                메뉴명, 가격, 구성 필수로 등록입니다. 설명과 사진은 선택입니다.
            </Regist2BI2Styled>
            <Regist2BorderStyled />
            <Regist2FlexContainer1Styled>
                <Regist2FlexContinaer2Styled>
                    <Regist2FlexBox1Styled />
                    <Regist2FlexBox7Styled>
                        메뉴명
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        가격
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox7Styled>
                        구성
                    </Regist2FlexBox7Styled>
                    <Regist2FlexBox8Styled>
                        설명
                    </Regist2FlexBox8Styled>
                    <Regist2FlexBox9Styled>
                        사진
                    </Regist2FlexBox9Styled>
                </Regist2FlexContinaer2Styled>
                {grid2Items.map((index) => (
                    <Regist2FlexContinaer2Styled key='grid2-{index}'>
                        <Regist2FlexBox1Styled>
                            {index + 1}
                        </Regist2FlexBox1Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"1,000,000원"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox2Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어, 풀"} />
                        </Regist2FlexBox2Styled>
                        <Regist2FlexBox3Styled>
                            <Regist2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                        </Regist2FlexBox3Styled>
                        <Regist2FlexBox4Styled>
                            <Regist2FlexBox5Styled src={previewImage2.current[index] ? previewImage2.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList2.push(a);
                                        if (index == grid2Items.length - 1) {
                                            console.log(tempList2)
                                        }
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, index, 2) }}
                            />
                            <Regist2InputButtonStyled
                                onClick={() => {
                                    tempList2[index].click();
                                }}>
                                이미지 업로드
                            </Regist2InputButtonStyled>
                        </Regist2FlexBox4Styled>
                    </Regist2FlexContinaer2Styled>
                ))}
            </Regist2FlexContainer1Styled>
            <Regist2Add onClick={() => { setGrid2Items([...grid2Items, grid2Items.length]) }}>
                항목 추가하기
            </Regist2Add>
            <Regist2SubmitContatiner>
                <Regist2Submit>
                    메뉴등록 완료하기
                </Regist2Submit>
            </Regist2SubmitContatiner>
        </Regist2Styled>
    );
}



const Regist3Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1036px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`


const Regist3BIStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 25px;
    padding-left: 30px
`

const Regist3BI2Styled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Regist3BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 11px;
`

const Regist3FlexContainer1Styled = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 30px;
    
`

const Regist3FlexContinaer2Styled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
`

const Regist3FlexBox1Styled = styled.div`
    width: 17px;
    height: 35px;
    
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
`

const Regist3FlexBox2Styled = styled.div`
    width: 182px;
    height: 22px;
    margin-right: 23px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist3FlexBox3Styled = styled.div`
    width: 304px;
    height: 22px;
    margin-right: 23px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist3FlexBox4Styled = styled.div`
    width: 395px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist3FlexBox5Styled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 23px;

    width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist3FlexBox6Styled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 23px;

    width: 304px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist3FlexBox7Styled = styled.div`
    display: flex;
    align-items: center;

    width: 395px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`


const Regist3Add = styled.div`
    box-sizing: border-box;
    width: 427px;
    height: 70px;
    margin: 103px auto 87px;
    border: 2px solid rgba(96, 78, 248, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Regist3SubmitContatiner = styled.div`
    position: relative;
    width: 100%;
    height: 163px;
`

const Regist3Submit = styled.div`
    width: 732px;
    height: 70px;
    margin: 0 auto 93px;
    
    background: rgba(96, 78, 248, 1);

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

function Regist3() {
    const [gridItems, setGridItems] = useState([0, 1, 2]);

    return (
        <Regist3Styled>
            <Regist3BIStyled>
                원산지 표시
            </Regist3BIStyled>
            <Regist3BI2Styled>
                메뉴에 등록된 음식에 대한 원산지 기입화면입니다.
                <p />
                품목, 원산지, 음식명을 정확히 입력해주세요.
            </Regist3BI2Styled>
            <Regist3BorderStyled />
            <Regist3FlexContainer1Styled>
                <Regist3FlexContinaer2Styled>
                    <Regist3FlexBox1Styled />
                    <Regist3FlexBox2Styled>
                        품목
                    </Regist3FlexBox2Styled>
                    <Regist3FlexBox3Styled>
                        원산지
                    </Regist3FlexBox3Styled>
                    <Regist3FlexBox4Styled>
                        음식명
                    </Regist3FlexBox4Styled>
                </Regist3FlexContinaer2Styled>
                {gridItems.map((index) => (
                    <Regist3FlexContinaer2Styled key={index}>
                        <Regist3FlexBox1Styled>
                            {index + 1}
                        </Regist3FlexBox1Styled>
                        <Regist3FlexBox5Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어"} />
                        </Regist3FlexBox5Styled>
                        <Regist3FlexBox6Styled>
                            <Regist2FlexTextArea1Styled placeholder={"캐나다"} />
                        </Regist3FlexBox6Styled>
                        <Regist3FlexBox7Styled>
                            <Regist2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                        </Regist3FlexBox7Styled>
                    </Regist3FlexContinaer2Styled>
                ))}
            </Regist3FlexContainer1Styled>
            <Regist3Add onClick={() => { setGridItems([...gridItems, gridItems.length]) }}>
                항목 추가하기
            </Regist3Add>
            <Regist3Submit>
                메뉴등록 완료하기
            </Regist3Submit>
        </Regist3Styled>
    );
}



const Modify1Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1110px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Modify1BIStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 25px;
    padding-left: 30px
`

const Modify1BI2Styled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Modify1BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 27px;
`

const Modify1BoxContainer1Styled = styled.div`
    display: flex;
    padding: 13px 0;
    margin: 0 215px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
`

const Modify1Box1Styled = styled.div`
    width: 172px;
    height: 48px;

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify1Box2Styled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
    width: 457px;
    height: 48px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Modify1TextBoxStyled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 22px;
    padding: 0 21px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

const Modify1EmptyBoxStyled = styled.div`
    padding: 9px 0;
    width: 100%;
`


const Modify1BoxContainer2Styled = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px 0;
    margin: 0 215px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`

const Modify1Box3Styled = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 457px;
    align-items: center;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    padding: 0 45px;
`

const Modify1Box4Styled = styled.img`
    width: 122px;
    height: 122px;
    background: rgba(242, 244, 248, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Modify1InputButtonStyled = styled.label`
    box-sizing: border-box;
    width: 157px;
    height: 49px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    
    //styleName: Body/L;
    font-family: Noto Sans CJK KR;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify1SubmitContainer = styled.div`
    position: relative;
    height: 218.5px;
    width: 100%;
`

const Modify1Submit = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 301px;
    height: 70px;
    margin: 64.5px auto 84px;
    background: rgba(96, 78, 248, 1);

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);

`

const Modify2Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1110px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Modify2BIStyled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    
    height: 35px;
    margin-bottom: 52px;
    padding-left: 30px
`

const Modify2BI2Styled = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #718096; /* coolGray/60의 실제 컬러값 */

    height: 30px;
    margin-bottom: 66px;
    padding-left: 30px;
`

const Modify2BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 11px;
`

const Modify2FlexContainer1Styled = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    
`

const Modify2FlexContinaer2Styled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
`

const Modify2FlexBox1Styled = styled.div`
    width: 17px;
    height: 35px;
    
    font-family: Noto Sans CJK KR;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
`

const Modify2FlexBox2Styled = styled.div`
    display: flex;
    align-items: center;

    width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Modify2FlexBox3Styled = styled.div`
    display: flex;
    align-items: center;

    width: 275px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Modify2FlexBox4Styled = styled.div`
    display: flex;
    flex-direction: column;
`

const Modify2FlexBox5Styled = styled.img`
    box-sizing: border-box;
    width: 122px;
    height: 89px;
    background: rgba(242, 244, 248, 1);
    border: 1px solid rgba(194, 195, 198, 1);
    border-bottom: none;
`

const Modify2FlexBox6Styled = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(242, 244, 248, 1);
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modify2InputButtonStyled = styled.div`
    box-sizing: border-box;
    border: 2px solid rgba(96, 78, 248, 1);
    width: 122px;
    height: 34px;
    background: rgba(255, 255, 255, 1);
    
    font-family: Noto Sans CJK KR;
    font-size: 13px;
    font-weight: 300;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Modify2FlexTextArea1Styled = styled.textarea`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 18px;
    padding: 0 12px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Noto Sans CJK KR;
    font-size: 13px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2Add = styled.div`
    box-sizing: border-box;
    width: 427px;
    height: 70px;
    margin: 103px auto 87px;
    border: 2px solid rgba(96, 78, 248, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
`

const Modify2SubmitContatiner = styled.div`
    position: relative;
    width: 100%;
    height: 163px;
`

const Modify2Submit = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 301px;
    height: 70px;
    right: 0px;
    
    background: rgba(96, 78, 248, 1);

    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`

const Modify2FlexBox7Styled = styled.div`
    width: 182px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2FlexBox8Styled = styled.div`
    width: 275px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`


const Modify2FlexBox9Styled = styled.div`
    width: 122px;
    height: 22px;
    
    font-family: Noto Sans CJK KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Modify2FlexEmptyBoxStyled = styled.div`
    width: auto;
    height: 157px;
`

const Modify1ContainerStyled = styled.div`
    left: 202px;
    position: fixed;
    width: calc(100% - 202px);
    height: 100%;
    overflow: auto;
`


function Modify1() {
    const [grid1Items, setGrid1Items] = useState([0, 1, 2]);
    const [grid2Items, setGrid2Items] = useState([0, 1, 2]);
    const [previewImageSetters, setPreviewImageSetters] = useState(false);
    const previewImage0 = useRef({ 0: null, 1: null });
    const previewImage1 = useRef({ 0: null, 1: null, 2: null });
    const previewImage2 = useRef({ 0: null, 1: null, 2: null });
    const tempList0 = [];
    const tempList1 = [];
    const tempList2 = [];

    const fileCheck = (obj) => {
        const pathPoint = obj.value.lastIndexOf(".");
        const filePoint = obj.value.substring(pathPoint + 1, obj.value.length);
        const fileType = filePoint.toLowerCase();

        if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
            return true;
        } else {
            alert("jpg, jpeg, png 파일만 선택할 수 있습니다.");
            return false;
        }
    };

    const handleImageChange = (event, number, type) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (fileCheck(event.target)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    if (type === 0)
                        previewImage0.current[number] = imageUrl;
                    else if (type === 1)
                        previewImage1.current[number] = imageUrl;
                    else
                        previewImage2.current[number] = imageUrl;
                    setPreviewImageSetters(!previewImageSetters);
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };

    return (
        <div>
            <SideBar />
            <Modify1ContainerStyled>
                <Modify1Styled>
                    <Modify1BIStyled>
                        기본정보
                    </Modify1BIStyled>
                    <Modify1BI2Styled>
                        오늘 메인메뉴 중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요.
                    </Modify1BI2Styled>
                    <Modify1BorderStyled />
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            기업명(상호명)
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="cu 편의점 울산 문수점" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            사업주 휴대번호
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="010-9778-8973" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            사업주 이메일
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="sdfsdfsdfsd@gmail.com" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            운영시간
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="08:00 ~ 12:00" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            휴무일
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="홀수주 화요일, 공휴일" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1BoxContainer1Styled>
                        <Modify1Box1Styled>
                            가게 전화번호
                        </Modify1Box1Styled>
                        <Modify1Box2Styled>
                            <Modify1TextBoxStyled placeholder="055-1234-5678" maxLength={25} />
                        </Modify1Box2Styled>
                    </Modify1BoxContainer1Styled>
                    <Modify1EmptyBoxStyled />
                    <Modify1BoxContainer2Styled>
                        <Modify1Box1Styled>
                            가게 로고
                        </Modify1Box1Styled>
                        <Modify1Box3Styled>
                            <Modify1Box4Styled src={previewImage0.current[0] ? previewImage0.current[0] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <Modify1InputButtonStyled
                                onClick={() => {
                                    tempList0[0].click();
                                }}>
                                이미지 업로드
                            </Modify1InputButtonStyled>
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList0.push(a);
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, 0, 0) }}
                            />
                        </Modify1Box3Styled>
                    </Modify1BoxContainer2Styled>
                    <Modify1BoxContainer2Styled>
                        <Modify1Box1Styled>
                            매장간판 사진
                        </Modify1Box1Styled>
                        <Modify1Box3Styled>
                            <Modify1Box4Styled src={previewImage0.current[1] ? previewImage0.current[1] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                            <Modify1InputButtonStyled
                                onClick={() => {
                                    tempList0[1].click();
                                }}>
                                이미지 업로드
                            </Modify1InputButtonStyled>
                            <input type="file"
                                name="filename"
                                accept="image/jpeg, image/png"
                                ref={(a) => {
                                    if (a) {
                                        console.log(a, "마운트됨");
                                        tempList0.push(a);
                                    }
                                    else { console.log("언마운트됨") }
                                }
                                }
                                style={{ display: "none" }}
                                onChange={(event) => { handleImageChange(event, 1, 0) }}
                            />
                        </Modify1Box3Styled>
                    </Modify1BoxContainer2Styled>
                    <Modify1SubmitContainer>
                        <Modify1Submit>
                            가게정보 수정완료
                        </Modify1Submit>
                    </Modify1SubmitContainer>
                </Modify1Styled>
                <Modify2Styled>
                    <Modify2BIStyled>
                        메인메뉴
                    </Modify2BIStyled>
                    <Modify2BorderStyled />
                    <Modify2FlexContainer1Styled>
                        <Modify2FlexContinaer2Styled>
                            <Modify2FlexBox1Styled />
                            <Modify2FlexBox7Styled>
                                메뉴명
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox7Styled>
                                가격
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox7Styled>
                                구성
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox8Styled>
                                설명
                            </Modify2FlexBox8Styled>
                            <Modify2FlexBox9Styled>
                                사진
                            </Modify2FlexBox9Styled>
                        </Modify2FlexContinaer2Styled>
                        {grid1Items.map((index) => (
                            <Modify2FlexContinaer2Styled key='grid1-{index}'>
                                <Modify2FlexBox1Styled>
                                    {index + 1}
                                </Modify2FlexBox1Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"1,000,000원"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"연어, 풀"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox3Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                                </Modify2FlexBox3Styled>
                                <Modify2FlexBox4Styled>
                                    <Modify2FlexBox5Styled src={previewImage1.current[index] ? previewImage1.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                                    <input type="file"
                                        name="filename"
                                        accept="image/jpeg, image/png"
                                        ref={(a) => {
                                            if (a) {
                                                console.log(a, "마운트됨");
                                                tempList1.push(a);
                                                if (index == grid1Items.length - 1) {
                                                    console.log(tempList1)
                                                }
                                            }
                                            else { console.log("언마운트됨") }
                                        }
                                        }
                                        style={{ display: "none" }}
                                        onChange={(event) => { handleImageChange(event, index, 1) }}
                                    />
                                    <Modify2InputButtonStyled
                                        onClick={() => {
                                            tempList1[index].click();
                                        }}>
                                        이미지 업로드
                                    </Modify2InputButtonStyled>
                                </Modify2FlexBox4Styled>
                                <Modify2FlexBox6Styled>
                                    <DeleteButton />
                                </Modify2FlexBox6Styled>
                            </Modify2FlexContinaer2Styled>
                        ))}
                    </Modify2FlexContainer1Styled>
                    <Modify2Add onClick={() => { setGrid1Items([...grid1Items, grid1Items.length]) }}>
                        항목 추가하기
                    </Modify2Add>
                    <Modify2FlexEmptyBoxStyled />
                    <Modify2BIStyled>
                        사이드 메뉴
                    </Modify2BIStyled>
                    <Modify2BorderStyled />
                    <Modify2FlexContainer1Styled>
                        <Modify2FlexContinaer2Styled>
                            <Modify2FlexBox1Styled />
                            <Modify2FlexBox7Styled>
                                메뉴명
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox7Styled>
                                가격
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox7Styled>
                                구성
                            </Modify2FlexBox7Styled>
                            <Modify2FlexBox8Styled>
                                설명
                            </Modify2FlexBox8Styled>
                            <Modify2FlexBox9Styled>
                                사진
                            </Modify2FlexBox9Styled>
                        </Modify2FlexContinaer2Styled>
                        {grid2Items.map((index) => (
                            <Modify2FlexContinaer2Styled key='grid2-{index}'>
                                <Modify2FlexBox1Styled>
                                    {index + 1}
                                </Modify2FlexBox1Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"연어 샐러드"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"1,000,000원"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox2Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"연어, 풀"} />
                                </Modify2FlexBox2Styled>
                                <Modify2FlexBox3Styled>
                                    <Modify2FlexTextArea1Styled placeholder={"자연산 연어로 만들어서 싱싱해요."} />
                                </Modify2FlexBox3Styled>
                                <Modify2FlexBox4Styled>
                                    <Modify2FlexBox5Styled src={previewImage2.current[index] ? previewImage2.current[index] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
                                    <input type="file"
                                        name="filename"
                                        accept="image/jpeg, image/png"
                                        ref={(a) => {
                                            if (a) {
                                                console.log(a, "마운트됨");
                                                tempList2.push(a);
                                                if (index == grid2Items.length - 1) {
                                                    console.log(tempList2)
                                                }
                                            }
                                            else { console.log("언마운트됨") }
                                        }
                                        }
                                        style={{ display: "none" }}
                                        onChange={(event) => { handleImageChange(event, index, 2) }}
                                    />
                                    <Modify2InputButtonStyled
                                        onClick={() => {
                                            tempList2[index].click();
                                        }}>
                                        이미지 업로드
                                    </Modify2InputButtonStyled>
                                </Modify2FlexBox4Styled>
                                <Modify2FlexBox6Styled>
                                    <DeleteButton />
                                </Modify2FlexBox6Styled>
                            </Modify2FlexContinaer2Styled>
                        ))}
                    </Modify2FlexContainer1Styled>
                    <Modify2Add onClick={() => { setGrid2Items([...grid2Items, grid2Items.length]) }}>
                        항목 추가하기
                    </Modify2Add>
                    <Modify2SubmitContatiner>
                        <Modify2Submit>
                            메뉴 수정 완료
                        </Modify2Submit>
                    </Modify2SubmitContatiner>
                </Modify2Styled>
            </Modify1ContainerStyled>
        </div>
    );
}



const FootStyled = styled.div`
    width: 100%;
    height: 116px;
`

function Foot() {
    return (
        <FootStyled />
    );
}

export default App;
