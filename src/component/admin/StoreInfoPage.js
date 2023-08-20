import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  redirect,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getCookieToken } from "../../store/common/Cookie";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import store from "../../store";

const AdminContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px;
  height: calc(100% - 72px);
  width: 100%;
  overflow: scroll;
`;

const AdminStoreStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 790px;
  margin: 0 auto;
  padding-top: 130px;
  box-sizing: border-box;
`;

const AdminStoreBIStyled = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 32px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;

  height: 35px;
  margin-bottom: 25px;
  padding-left: 30px;
`;

const AdminStoreBI2Styled = styled.div`
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
`;

const AdminStoreBorderStyled = styled.div`
  border-bottom: 1px solid #000000;
  margin-bottom: 27px;
`;

const AdminStoreBoxContainer1Styled = styled.div`
  display: flex;
  padding: 15px 0;
  margin: 0 30px;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  align-items: center;
`;

const AdminStoreBoxContainer3Styled = styled.div`
  position: relative;
  display: flex;
  padding: 15px 0 65px;
  margin: 0 30px;
  justify-content: right;
`;

const AdminStoreTextBox2Styled = styled.div`
  position: absolute;
  color: ${(props) => (props.error ? "#604EF8" : "#F00")};
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  left: 275px;
  top: 83px;
`;

const AdminStoreDupliCheck = styled.div`
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
  border: 1px solid #c2c3c6;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const AdminStoreBox1Styled = styled.div`
  width: 172px;
  height: 48px;

  font-family: Pretendard-SemiBold;
  font-size: 20px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`;

const AdminStoreBox2Styled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  align-items: center;
  width: 457px;
  height: 48px;
  border-radius: 5px;
  border-bottom: 1px solid #00000033;
  background: rgba(242, 244, 248, 1);
`;

const AdminStoreBox2Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 126px;
  padding-bottom: 60px;
`;

const AdminStoreTextBoxStyled = styled.input`
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

const AdminStoreEmptyBoxStyled = styled.div`
  padding: 9px 0;
  width: 100%;
`;

const AdminStoreBoxContainer2Styled = styled.div`
  display: flex;
  align-items: center;
  padding: 16.5px 0;
  margin: 0 30px;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
`;

const AdminStoreBox3Styled = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 457px;
  align-items: center;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  padding: 0 45px;
`;

const AdminStoreBox4Styled = styled.img`
  width: 122px;
  height: 122px;
  border-radius: 5px;
  background: rgba(242, 244, 248, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const AdminStoreInputButtonStyled = styled.label`
  box-sizing: border-box;
  width: 153px;
  height: 45px;
  border-radius: 5px;
  padding: 10px 24.5px;
`;

const AdminStoreBox6Styled = styled.div`
  display: grid;
  grid-template-rows: 48px 48px;
  grid-template-columns: 275px 121px;
  grid-gap: 30px; /* 그리드 아이템 사이의 간격 설정 */
  padding-right: 30px;
`;

const AdminStoreBox7Styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  border-bottom: 1px solid #00000033;

  background: rgba(242, 244, 248, 1);
`;

const AdminStoreBox8Styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  border-bottom: 1px solid #00000033;

  background: rgba(242, 244, 248, 1);
`;

const AdminStoreBox9Styled = styled.div`
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

  &:hover {
    background: #f5f3ff;
    cursor: pointer;
  }
`;

const AdminStoreBox10Styled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  align-items: center;
  width: 214px;
  height: 48px;
  border-radius: 5px;
  border-bottom: 1px solid #00000033;
  background: rgba(242, 244, 248, 1);
`;

const AdminStoreBox10Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between; /* 요소들을 양 끝으로 정렬 */
  align-items: center;
  width: 457px;
  height: 48px;

  color: rgba(0, 0, 0, 0.5);

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const AdminStoreSubmit = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`;

const AdminStoreSelectBoxStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 457px;
  top: 46px;
  box-sizing: border-box;
  z-index: 100;
  border: 1px solid rgb(200, 200, 200);
`;

const AdminStoreSelectBoxItemStyled = styled.div`
  height: 50px;
  background: #fff;
  padding: 0 21px;

  font-family: Pretendard-Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background: #f2f4f8;
  }
`;

const AdminStoreSelectEmptyStyled = styled.div`
  height: 49px;
  background-color: transparent; /* 배경색을 투명하게 설정 */
`;

const AdminStoreSelectedButtonContainerStyled = styled.div`
  margin-right: 23px;
  height: 17px;
`;

export default function StoreInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [location]);

  const initialStoreInfo = {
    storeIdx: 0,
    storeName: "",
    categoryName: 0,
    businessPhone: "",
    businessEmail: "",
    businessCertificateUrl: "",
    sellerCertificateUrl: "",
    copyAccountUrl: "",
    breakDay: "",
    storeOpen: "",
    storeClose: "",
    storePhone: "",
    storeAddress: "",
    storeLogoUrl: "",
    signUrl: "",
  };
  const [storeInfoState, setStoreInfoState] = useState(initialStoreInfo);
  const [searchParams, setSearchParms] = useSearchParams();

  useEffect(() => {
    //console.log(searchParams.get("storeIdx"));
    getStoreInfo();
  }, []);

  const getStoreInfo = () => {
    const token = getCookieToken();

    const requestOptions = {
      method: "GET",
      headers: {
        "X-ACCESS-TOKEN": token, // X-ACCESS-TOKEN 헤더에 토큰 값을 추가합니다.
      },
    };

    fetch(
      `https://www.insung.shop/jat/stores/admin/info?storeIdx=${searchParams.get(
        "storeIdx"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.code === 1000) {
          setStoreInfoState(data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendDataToServer = () => {
    const token = getCookieToken();

    const data = {
      storeIdx: storeInfoState.storeIdx,
    };

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": token, // X-ACCESS-TOKEN 헤더에 토큰 값을 추가합니다.
      },
      body: JSON.stringify(data),
    };

    fetch("https://www.insung.shop/jat/stores/admin", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.code === 1000) navigate("/admin/register");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <AdminContainerStyled ref={ref}>
        <AdminStoreStyled>
          <AdminStoreBIStyled>기본정보</AdminStoreBIStyled>
          <AdminStoreBI2Styled>
            가게 정보 확인 후, 승인해 주세요
          </AdminStoreBI2Styled>
          <AdminStoreBorderStyled />
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>기업명(상호명)</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                readOnly
                value={storeInfoState.storeName}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>가게 업종</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                readOnly
                value={storeInfoState.categoryName}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>사업주 휴대번호</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                readOnly
                value={storeInfoState.businessPhone}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>사업주 이메일</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                style={{ fontFamily: "Abhaya Libre, serif" }}
                readOnly
                value={storeInfoState.businessEmail}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreEmptyBoxStyled />
          <AdminStoreBoxContainer2Styled>
            <AdminStoreBox1Styled>사업자 등록증</AdminStoreBox1Styled>
            <AdminStoreBox3Styled>
              <AdminStoreBox4Styled
                src={
                  storeInfoState.businessCertificateUrl !== ""
                    ? storeInfoState.businessCertificateUrl
                    : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
              />
              <AdminStoreInputButtonStyled></AdminStoreInputButtonStyled>
            </AdminStoreBox3Styled>
          </AdminStoreBoxContainer2Styled>
          <AdminStoreBoxContainer2Styled>
            <AdminStoreBox1Styled>영업자 등록증</AdminStoreBox1Styled>
            <AdminStoreBox3Styled>
              <AdminStoreBox4Styled
                src={
                  storeInfoState.sellerCertificateUrl !== ""
                    ? storeInfoState.sellerCertificateUrl
                    : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
              />
              <AdminStoreInputButtonStyled></AdminStoreInputButtonStyled>
            </AdminStoreBox3Styled>
          </AdminStoreBoxContainer2Styled>
          <AdminStoreBoxContainer2Styled>
            <AdminStoreBox1Styled>통장 사본</AdminStoreBox1Styled>
            <AdminStoreBox3Styled>
              <AdminStoreBox4Styled
                src={
                  storeInfoState.copyAccountUrl !== ""
                    ? storeInfoState.copyAccountUrl
                    : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
              />
              <AdminStoreInputButtonStyled></AdminStoreInputButtonStyled>
            </AdminStoreBox3Styled>
          </AdminStoreBoxContainer2Styled>
          <AdminStoreEmptyBoxStyled />
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>운영시간</AdminStoreBox1Styled>
            <AdminStoreBox10Wrapper>
              <AdminStoreBox10Styled>
                <AdminStoreTextBoxStyled
                  readOnly
                  value={storeInfoState.storeOpen}
                />
              </AdminStoreBox10Styled>
              ~
              <AdminStoreBox10Styled>
                <AdminStoreTextBoxStyled
                  readOnly
                  value={storeInfoState.storeClose}
                />
              </AdminStoreBox10Styled>
            </AdminStoreBox10Wrapper>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>휴무일</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                readOnly
                value={storeInfoState.breakDay}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>가게 전화번호</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                style={{ fontFamily: "Abhaya Libre, serif" }}
                readOnly
                value={storeInfoState.storePhone}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreBoxContainer1Styled>
            <AdminStoreBox1Styled>가게 주소</AdminStoreBox1Styled>
            <AdminStoreBox2Styled>
              <AdminStoreTextBoxStyled
                readOnly
                value={storeInfoState.storeAddress}
              />
            </AdminStoreBox2Styled>
          </AdminStoreBoxContainer1Styled>
          <AdminStoreEmptyBoxStyled />
          <AdminStoreBoxContainer2Styled>
            <AdminStoreBox1Styled>가게 로고</AdminStoreBox1Styled>
            <AdminStoreBox3Styled>
              <AdminStoreBox4Styled
                src={
                  storeInfoState.storeLogoUrl !== ""
                    ? storeInfoState.storeLogoUrl
                    : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
              />
              <AdminStoreInputButtonStyled></AdminStoreInputButtonStyled>
            </AdminStoreBox3Styled>
          </AdminStoreBoxContainer2Styled>
          <AdminStoreBoxContainer2Styled>
            <AdminStoreBox1Styled>매장간판 사진</AdminStoreBox1Styled>
            <AdminStoreBox3Styled>
              <AdminStoreBox4Styled
                src={
                  storeInfoState.signUrl
                    ? storeInfoState.signUrl
                    : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
              />
              <AdminStoreInputButtonStyled></AdminStoreInputButtonStyled>
            </AdminStoreBox3Styled>
          </AdminStoreBoxContainer2Styled>
          <AdminStoreSubmit onClick={sendDataToServer}>
            가게 승인하기
          </AdminStoreSubmit>
        </AdminStoreStyled>
        <Footer />
      </AdminContainerStyled>
    </>
  );
}
