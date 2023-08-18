import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isActive ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Alarm = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 26px;
  left: calc(50% - 221px);
  width: 442px;
  height: 118px;
  flex-shrink: 0;
  z-index: 100;

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.30);
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`

const AlarmButton = styled.div`
  position: absolute;
  width: 63px;
  height: 31px;
  right: 14px;
  bottom: 10px;

  border-radius: 5px;
  background: #3871E0;
  flex-shrink: 0;

  color: #FFF;
  font-family: Pretendard-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  text-align: center;
  
  &:hover{
    cursor: pointer;
  }
`

const AlarmTitle = styled.div`
  width: 75%;
  height: 50px;
  font-family: Pretendard-Regular;
  font-size: 13px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
`


const AlarmText = styled.div`
  width: 75%;
  height: 100%;
  font-family: Pretendard-Regular;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
`

export default function AlarmModal({isOpen, onClose, title, text}) {
    return (
        <Backdrop isActive={isOpen}>
            <Alarm>
                <AlarmTitle>
                    {title}
                </AlarmTitle>
                <AlarmText>
                    {text}
                </AlarmText>
                <AlarmButton onClick={onClose}>
                    확인
                </AlarmButton>
            </Alarm>
        </Backdrop>
    )
}
