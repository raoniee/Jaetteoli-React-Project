import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import { useSelector } from 'react-redux';
import { getCookieToken } from "../../store/common/Cookie";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AlarmModal from "./AlarmModal";


const RegistContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px;
  height: calc(100% - 72px);
  width: 100%;
  overflow: scroll;
`

const Regist3Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 1036px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`


const Regist3BIStyled = styled.div`
    font-family: Pretendard-SemiBold;
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
    font-family: Pretendard-Regular;
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
    
    font-family: Pretendard-SemiBold;
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
    
    font-family: Pretendard-SemiBold;
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
    
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Regist3FlexBox4Styled = styled.div`
    width: 395px;
    height: 22px;
    
    font-family: Pretendard-SemiBold;
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
    border-radius: 5px;


  width: 182px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist3FlexBox6Styled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 23px;
    border-radius: 5px;

    width: 304px;
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    background: rgba(242, 244, 248, 1);
`

const Regist3FlexBox7Styled = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;

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
    border-radius: 5px;

    font-family: Pretendard-SemiBold;
    font-size: 20px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
  
    &:hover{
      background: #F5F3FF;
    }
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
    border-radius: 5px;
    
    background: rgba(96, 78, 248, 1);

    font-family: Pretendard-SemiBold;
    font-size: 20px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
`


const Regist3FlexTextArea1Styled = styled.input`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 18px;
    padding: 0 12px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Pretendard-Regular;
    font-size: 13px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`

export default function Regist3Component() {
    const [gridItems, setGridItems] = useState([0, 1, 2]);
    const menuInfo = useSelector((state) => state.menuRegistering)
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef(null);
    const [showAlarm, setShowAlarm] = useState(false);
    const [alarmTitle, setAlarmTitle] = useState("");
    const [alarmText, setAlarmText] = useState("");

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = 0;
        }
    }, [location]);

    const initialOriginInfo = {
        ingredientItems: [
            {
                ingredientName: '',
                origin: '',
                menuName: ''
            }
        ]
    };
    const [originInfoState, setOriginInfoState] = useState(initialOriginInfo)

    const handleOriginInfo = (data, index) => {
        const updatedOrigin = originInfoState.ingredientItems ? [...originInfoState.ingredientItems ] : [];
        updatedOrigin[index] = {
            ...initialOriginInfo.ingredientItems[0],
            ...updatedOrigin[index],
            ...data
        }
        setOriginInfoState({
            ingredientItems: updatedOrigin
        })
    }

    const sendDataToServer = (originInfo) => {
        const token = getCookieToken();
        const jsonData = {
            ...menuInfo,
            ...originInfo
        }

        let formData = new FormData();

        // Add mainMenuItems to formData
        jsonData.mainMenuItems.forEach((item, index) => {
            for(let key in item){
                formData.append(`mainMenuItems[${index}].${key}`, item[key]);
            }
        });

        // Add sideMenuItems to formData
        jsonData.sideMenuItems.forEach((item, index) => {
            for(let key in item){
                formData.append(`sideMenuItems[${index}].${key}`, item[key]);
            }
        });

        // Add ingredientItems to formData
        jsonData.ingredientItems.forEach((item, index) => {
            for(let key in item){
                formData.append(`ingredientItems[${index}].${key}`, item[key]);
            }
        });


        for (let pair of formData.entries()) {
            if (pair[0].split(".")[1] === "menuUrl")
                console.log(pair[0]+ ', ' + "임의 출력")
            else
                console.log(pair[0]+ ', ' + pair[1]);
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'X-ACCESS-TOKEN': token, // X-ACCESS-TOKEN 헤더에 토큰 값을 추가합니다.
            },
            body: formData,
        };

        fetch('https://www.insung.shop/jat/menus', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.code === 1000) {
                    console.log("가게 신청 성공!");
                    localStorage.setItem("firstLogin", "0");
                    localStorage.setItem("menuRegister", "0");
                    localStorage.setItem("storeStatus", "A");
                    navigate("/today/menu")
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    function checkList() {
        let fillOrDel = 0;

        let filteredOriginList = {
            ingredientItems: []
        }

        // 메인 검사
        filteredOriginList.ingredientItems = originInfoState.ingredientItems.filter(item => {
            let count = 0
            for (const key in item) {
                if (item[key] === "" || item[key] === null || item[key] === undefined || item[key] === 0) {
                    count++;
                }
            }
            if (count === 3)
                return false // 전부 비어있으면 제거
            else if (count === 0)
                return true; // 비어있는 속성이 없으면 유지
            else {           // 1개 이상 채워진 경우
                fillOrDel = 1;
                return false;
            }
        });

        if (fillOrDel) {
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("입력된 필드가 있습니다. 나머지 필드를 완성하거나 입력된 값들을 지워주세요.")
                setShowAlarm(true)
            }
            return;
        }
        sendDataToServer(filteredOriginList)
    }

    const testRedux = () => {
        checkList()
    }

    function onClose(){
        setShowAlarm(false);
    }

    return (
        <>
            <Header />
            <AlarmModal isOpen={showAlarm} onClose={() => onClose()} title={alarmTitle} text={alarmText} />
            <RegistContainerStyled ref={ref}>
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
                                    <Regist3FlexTextArea1Styled
                                        placeholder={"연어"}
                                        onChange={(event) => {handleOriginInfo({ingredientName:event.target.value}, index)}}/>
                                </Regist3FlexBox5Styled>
                                <Regist3FlexBox6Styled>
                                    <Regist3FlexTextArea1Styled
                                        placeholder={"캐나다"}
                                        onChange={(event) => {handleOriginInfo({origin:event.target.value}, index)}}/>
                                </Regist3FlexBox6Styled>
                                <Regist3FlexBox7Styled>
                                    <Regist3FlexTextArea1Styled
                                        placeholder={"연어 샐러드"}
                                        onChange={(event) => {handleOriginInfo({menuName:event.target.value}, index)}}/>
                                </Regist3FlexBox7Styled>
                            </Regist3FlexContinaer2Styled>
                        ))}
                    </Regist3FlexContainer1Styled>
                    <Regist3Add onClick={() => { setGridItems([...gridItems, gridItems.length]) }}>
                        항목 추가하기
                    </Regist3Add>
                    <Regist3Submit onClick={testRedux}>
                        메뉴등록 완료하기
                    </Regist3Submit>
                </Regist3Styled>
                <Footer />
            </RegistContainerStyled>
        </>
    );
}
