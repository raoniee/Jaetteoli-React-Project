
import styled from "styled-components";
import { ReactComponent as SelectButton} from "../../assets/images/Vector 30.svg";
import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import AlarmModal from "./AlarmModal";
import { getCookieToken } from "../../store/common/Cookie";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const RegistContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px;
  height: calc(100% - 72px);
  width: 100%;
  overflow: scroll;
`

const Regist1Styled = styled.div`
    display: flex;
    flex-direction: column;
    width: 790px;
    margin: 0 auto;
    padding-top: 130px;
    box-sizing: border-box;
`

const Regist1BIStyled = styled.div`
    font-family: Pretendard-Regular;
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

const Regist1BorderStyled = styled.div`
    border-bottom: 1px solid #000000;
    margin-bottom: 27px;
`

const Regist1BoxContainer1Styled = styled.div`
    display: flex;
    padding: 15px 0;
    margin: 0 30px;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
`

const Regist1BoxContainer3Styled = styled.div`
    position: relative;
    display: flex;
    padding: 15px 0 65px;
    margin: 0 30px;
    justify-content: right;
`

const Regist1TextBox2Styled = styled.div`
  position: absolute;
  color: ${props => (props.error ? "#604EF8" : "#F00")};
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  left: 275px;
  top: 83px
`

const Regist1DupliCheck = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: 80px;
  height: 48px;
  padding: 13px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #C2C3C6;
  background: #FFF;
  color: #000;
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`

const Regist1Box1Styled = styled.div`
    width: 172px;
    height: 48px;

    font-family: Pretendard-Regular;
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
    border-radius: 5px;
    border-bottom: 1px solid #00000033;
    background: rgba(242, 244, 248, 1);
`

const Regist1Box2Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 126px;
    padding-bottom: 60px;
`

const Regist1TextBoxStyled = styled.input`
    /* 텍스트 박스 스타일 */
    width: 100%;
    height: 22px;
    padding: 0 21px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent; /* 배경색을 투명하게 설정 */

    font-family: Pretendard-Regular;
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
    border-radius: 5px;
    background: rgba(242, 244, 248, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Regist1InputButtonStyled = styled.label`
    box-sizing: border-box;
    width: 153px;
    height: 45px;
    border-radius: 5px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  
  &:hover {
      background: #F5F3FF;
      cursor: pointer;
    }
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
    border-radius: 5px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box8Styled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    
    border-bottom: 1px solid #00000033;

    background: rgba(242, 244, 248, 1);
`

const Regist1Box9Styled = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid rgba(96, 78, 248, 1);
    padding: 10px 24.5px;
    background: rgba(255, 255, 255, 1);
    
    //styleName: Body/L;
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  
    &:hover{
      background: #F5F3FF;
      cursor: pointer;
    }

`


const Regist1Box10Styled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
    align-items: center;
    width: 214px;
    height: 48px;
    border-radius: 5px;
    border-bottom: 1px solid #00000033;
    background: rgba(242, 244, 248, 1);
`

const Regist1Box10Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  align-items: center;
  width: 457px;
  height: 48px;

  color: rgba(0, 0, 0, 0.50);

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

const Regist1Submit = styled.div`
    width: 732px;
    height: 70px;
    margin: 83.5px auto 70px;
    background: rgba(96, 78, 248, 1);
    border-radius: 5px;


  font-family: Pretendard-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  &:hover{
    cursor: pointer;
  }
`

const Regist1SelectBoxStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 457px;
    top: 46px;
    box-sizing: border-box;
    z-index: 100;
    border: 1px solid rgb(200, 200, 200);
`

const Regist1SelectBoxItemStyled = styled.div`
    height: 50px;
    background: #FFF;
    padding: 0 21px;
 
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;   
    color: rgba(0, 0, 0, 0.5);
  
  &:hover{
      background: #F2F4F8;
  }
`

const Regist1SelectEmptyStyled = styled.div`
    height: 49px;
    background-color: transparent; /* 배경색을 투명하게 설정 */
`

const Regist1SelectedButtonContainerStyled = styled.div`
    margin-right: 23px;
    height: 17px;
`

export default function Regist1Component({setStoreInfo}) {
    const [postalCode1, setPostalCode1] = useState('');
    const [postalCode2, setPostalCode2] = useState('');
    const [isHovered, setIsHovered] = useState(false);
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
    const navigate = useNavigate();
    const [showAlarm, setShowAlarm] = useState(false);
    const [alarmTitle, setAlarmTitle] = useState("");
    const [alarmText, setAlarmText] = useState("");
    const [ storeNames, setStoreNames ] = useState(["",""]);
    const [ dupliCheck, setDupliCheck ] = useState(0);
    const location = useLocation();
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = 0;
        }
    }, [location]);

    const initialStoreInfo = {
        storeName: '',
        categoryIdx: 0,
        businessPhone: '',
        businessEmail: '',
        businessCertificateFile: '',
        sellerCertificateFile: '',
        copyAccountFile: '',
        breakDay: '',
        storeOpen: '',
        storeClose: '',
        storePhone: '',
        city: '',
        local: '',
        town: '',
        storeAddress: '',
        detailAddress: '',
        storeLogoFile: '',
        signFile: ''
    }
    const [storeInfoState, setStoreInfoState] = useState(initialStoreInfo);

    const handleStoreInfo = (data) => {
        setStoreInfoState({
            ...storeInfoState,
            ...data
        })
    }

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
                    switch (number){
                        case 0: handleStoreInfo({businessCertificateFile:selectedFile}); break
                        case 1: handleStoreInfo({sellerCertificateFile:selectedFile}); break
                        case 2: handleStoreInfo({copyAccountFile:selectedFile}); break
                        case 3: handleStoreInfo({storeLogoFile:selectedFile}); break
                        case 4: handleStoreInfo({signFile:selectedFile}); break
                    }
                };

                reader.readAsDataURL(selectedFile);
            }
        }
    };

    const getPostalCode = () => {
        new window.daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                const sido = data.sido;
                const sigungu = data.sigungu;
                const bname = data.bname;
                const storeAddress = data.address;
                handleStoreInfo({city: sido, local:sigungu, town: bname, storeAddress: storeAddress})
                setPostalCode1(data.zonecode);
                setPostalCode2(data.address)
            }
        }).open();
    }

    const sendDataToServer = () => {
        const token = getCookieToken()
        const {detailAddress, ...body} = storeInfoState;
        body.storeAddress = body.storeAddress + ' ' + detailAddress;
        const formData = new FormData();
        for (const key in body) {
            formData.append(key, body[key]);
            console.log(key, body[key])
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'X-ACCESS-TOKEN': token, // X-ACCESS-TOKEN 헤더에 토큰 값을 추가합니다.
            },
            body: formData
        };

        let totalSize = 0;

        for (const pair of formData.entries()) {
            const [key, value] = pair;

            if (value instanceof File) {
                // 파일일 경우 파일 크기를 누적
                totalSize += value.size;
            } else {
                // 텍스트 데이터의 경우 문자열 크기를 누적
                totalSize += new Blob([value]).size;
            }
        }

        console.log('총 데이터 크기:', totalSize);

        fetch('https://www.insung.shop/jat/stores', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.code === 1000){
                    alert('가게 승인까지 최대 24시간 소요됩니다.')
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const testRedux = () => {
        if (storeInfoState.storeName === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("기업명(상호명)과 지점명을 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        } else if (dupliCheck !== 1){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("기업명(상호명) 중복 확인을 해주세요.")
                setShowAlarm(true)
            }
        }


        if (storeInfoState.categoryIdx === 0){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("가게 업종을 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }

        if (storeInfoState.businessPhone === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("사업주 휴대번호를 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        else {
            const phoneNumberRegex = /^\d{10,11}$/;
            if (!phoneNumberRegex.test(storeInfoState.businessPhone)){
                if (!showAlarm){
                    setAlarmTitle("재떨이.com 내용:")
                    setAlarmText("사업주 휴대번호를 양식에 맞춰 입력 해주세요.")
                    setShowAlarm(true)
                }
                return;
            }
        }

        if (storeInfoState.businessEmail === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("사업주 이메일을 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        } else {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(storeInfoState.businessEmail)) {
                if (!showAlarm){
                    setAlarmTitle("재떨이.com 내용:");
                    setAlarmText("올바른 이메일 양식으로 입력 해주세요.");
                    setShowAlarm(true)
                }
                return;
            }
        }

        if (storeInfoState.businessCertificateFile === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("사업자 등록증을 등록 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.sellerCertificateFile === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("영업자 등록증을 등록 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.copyAccountFile === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("통장 사본을 등록 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.storeOpen === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("운영시간을 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.breakDay === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("휴무일을 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.storePhone === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("가게 전화번호를 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        else {
            const phoneNumberRegex = /^\d{3}-\d{4}-\d{4}$/;
            if (!phoneNumberRegex.test(storeInfoState.storePhone)){
                if (!showAlarm){
                    setAlarmTitle("재떨이.com 내용:")
                    setAlarmText("가게 전화번호를 양식에 맞춰 입력 해주세요.")
                    setShowAlarm(true)
                }
                return;
            }
        }

        if (storeInfoState.city === "" || storeInfoState.local === "" || storeInfoState.town === "" || storeInfoState.detailAddress === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("가게 주소를 입력 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.storeLogoFile === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("가게 로고를 등록 해주세요.")
                setShowAlarm(true)
            }
            return;
        }
        if (storeInfoState.signFile === ""){
            if (!showAlarm){
                setAlarmTitle("재떨이.com 내용:")
                setAlarmText("매장간판 사진을 등록 해주세요.")
                setShowAlarm(true)
            }
            return;
        }

        sendDataToServer()
    }

    function dupliCheckToServer() {
        const token = getCookieToken();
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': token,
            },
        };

        if (storeInfoState.storeName === "")
            return setDupliCheck(3);

        fetch(`https://www.insung.shop/jat/stores/duplicate?storeName=${storeInfoState.storeName}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const check = data.result.isDuplicate;
                if (check === 0) setDupliCheck(1)
                else if (check === 1) setDupliCheck(2)
                else setDupliCheck(4)
            })
            .catch(error => {
                console.error(error);
            });
    }

    // 모달창에 넘길 off함수
    function onClose(){
        setShowAlarm(false);
    }

    useEffect(() => {
        if (storeNames[0] === "" || storeNames[1] === "")
            handleStoreInfo({ storeName: "" });
        else handleStoreInfo({ storeName : storeNames.join(" ")});
    }, [storeNames]);

    return (
        <>
            <Header />
            <AlarmModal isOpen={showAlarm} onClose={() => onClose()} title={alarmTitle} text={alarmText} />
            <RegistContainerStyled ref={ref}>
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
                            <Regist1TextBoxStyled
                                placeholder="cu편의점"
                                onChange={(event) => {
                                    if(!event.target.value.trim().includes(" "))
                                        setStoreNames([event.target.value.trim(), storeNames[1]])
                                    else setStoreNames(["", storeNames[1]])
                                }
                                } />
                        </Regist1Box2Styled>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            지점명
                        </Regist1Box1Styled>
                        <Regist1Box2Styled>
                            <Regist1TextBoxStyled
                                placeholder="울산문수점"
                                onChange={(event) => {
                                    if(!event.target.value.trim().includes(" "))
                                        setStoreNames([storeNames[0], event.target.value.trim()])
                                    else setStoreNames([storeNames[0], ""])
                                }
                                } />
                        </Regist1Box2Styled>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer3Styled>
                        <Regist1Box2Styled>
                            <Regist1TextBoxStyled
                                readOnly
                                placeholder="cu편의점 울산문수점"
                                value={storeInfoState.storeName}
                            />
                            <Regist1DupliCheck children={"중복확인"}
                                               onClick={dupliCheckToServer}
                            />
                        </Regist1Box2Styled>
                        <Regist1TextBox2Styled children={
                            dupliCheck === 0 ? "반드시 띄어쓰기 없이 기입해 주세요!" :
                                dupliCheck === 1 ? "사용가능한 가게명 입니다." :
                                    dupliCheck === 2 ? "이미 존재하는 가게명 입니다.":
                                        dupliCheck === 3 ? "양식에 맞게 입력해 주세요" : "서버 에러!"}
                                               error={dupliCheck <= 1}
                        />
                    </Regist1BoxContainer3Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            가게 업종
                        </Regist1Box1Styled>
                        <Regist1Box2Styled
                            onMouseLeave={() => {
                                if (isHovered)
                                    setIsHovered(false)
                            }}>
                            <Regist1TextBoxStyled
                                readOnly
                                value={clickSectors ? clickSectors : ''}
                                placeholder="업종 선택하기"
                            />
                            <Regist1SelectedButtonContainerStyled
                                onMouseEnter={() => {
                                    setIsHovered(true)
                                }}>
                                <SelectButton />
                            </Regist1SelectedButtonContainerStyled>
                            {isHovered && (<Regist1SelectBoxStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("백화점")
                                            handleStoreInfo({categoryIdx: 1})
                                            setIsHovered(false)
                                        }}>
                                        백화점
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("편의점")
                                            handleStoreInfo({categoryIdx: 2})
                                            setIsHovered(false)
                                        }}>
                                        편의점
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("디저트")
                                            handleStoreInfo({categoryIdx: 3})
                                            setIsHovered(false)
                                        }}>
                                        디저트
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("샐러드")
                                            handleStoreInfo({categoryIdx: 4})
                                            setIsHovered(false)
                                        }}>
                                        샐러드
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("초밥")
                                            handleStoreInfo({categoryIdx: 5})
                                            setIsHovered(false)
                                        }}>
                                        초밥
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("카페")
                                            handleStoreInfo({categoryIdx: 6})
                                            setIsHovered(false)
                                        }}>
                                        카페
                                    </Regist1SelectBoxItemStyled>
                                    <Regist1SelectBoxItemStyled
                                        onClick={() => {
                                            setClickSectors("대형마트")
                                            handleStoreInfo({categoryIdx: 7})
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
                            <Regist1TextBoxStyled
                                placeholder="010-9778-8973"
                                onChange={(event)=>handleStoreInfo({businessPhone:event.target.value.split('-').join('')})}/>
                        </Regist1Box2Styled>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            사업주 이메일
                        </Regist1Box1Styled>
                        <Regist1Box2Styled>
                            <Regist1TextBoxStyled
                                style={{ fontFamily: 'Abhaya Libre, serif' }}
                                placeholder="sdfsdfsdfsd@gmail.com"
                                onChange={(event)=>handleStoreInfo({businessEmail:event.target.value})}/>
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
                        <Regist1Box10Wrapper>
                            <Regist1Box10Styled>
                                <Regist1TextBoxStyled
                                    placeholder="08:00"
                                    onChange={(event)=> {
                                        handleStoreInfo({storeOpen: event.target.value});
                                    }}/>
                            </Regist1Box10Styled>
                            ~
                            <Regist1Box10Styled>
                                <Regist1TextBoxStyled
                                    placeholder="12:00"
                                    onChange={(event)=> {
                                        handleStoreInfo({storeClose: event.target.value});
                                    }}/>
                            </Regist1Box10Styled>
                        </Regist1Box10Wrapper>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            휴무일
                        </Regist1Box1Styled>
                        <Regist1Box2Styled>
                            <Regist1TextBoxStyled
                                placeholder="홀수주 화요일, 공휴일"
                                onChange={(event)=>handleStoreInfo({breakDay:event.target.value})}/>
                        </Regist1Box2Styled>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            가게 전화번호
                        </Regist1Box1Styled>
                        <Regist1Box2Styled>
                            <Regist1TextBoxStyled
                                style={{ fontFamily: 'Abhaya Libre, serif' }}
                                placeholder="055-1234-5678"
                                onChange={(event)=>handleStoreInfo({storePhone:event.target.value})}/>
                        </Regist1Box2Styled>
                    </Regist1BoxContainer1Styled>
                    <Regist1BoxContainer1Styled>
                        <Regist1Box1Styled>
                            가게 주소
                        </Regist1Box1Styled>
                        <Regist1Box6Styled>
                            <Regist1Box7Styled>
                                <Regist1TextBoxStyled
                                    readOnly
                                    style={{ fontFamily: 'Abhaya Libre, serif' }}
                                    value={postalCode1}
                                    placeholder="050505" />
                            </Regist1Box7Styled>
                            <Regist1Box9Styled onClick={getPostalCode}>
                                우편번호
                            </Regist1Box9Styled>
                            <Regist1Box7Styled>
                                <Regist1TextBoxStyled
                                    readOnly
                                    value={postalCode2}
                                    placeholder="울산 남구 대학로 33번길 18-4" />
                            </Regist1Box7Styled>
                            <Regist1Box8Styled>
                                <Regist1TextBoxStyled
                                    placeholder="2층"
                                    onChange={(event)=>handleStoreInfo({detailAddress: event.target.value})}/>
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
                    <Regist1Submit onClick={testRedux}>
                        가게 정보 신청하기
                    </Regist1Submit>
                </Regist1Styled>
                <Footer />
            </RegistContainerStyled>
        </>
    );
}
