import React, { useState } from 'react'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import OrderItems from './Layout/orderItems/OrderItems'
import PrintOrder from './Layout/modal/PrintOrder'
import FinishStore from './Layout/modal/FinishStore'

const Main3 = (props) => {

    const [orderPrintIsShown, setOrderPrintIsShown] = useState(false)
    const [storeFinishIsShown, setStoreFinishIsShown] = useState(false)

    const showOrderPrintHandler = () => {
        setOrderPrintIsShown(true)
    }

    const hideOrderPrintHandler = () => {
        setOrderPrintIsShown(false)
    }

    const showStoreFinishHandler = () => {
        setStoreFinishIsShown(true)
    }

    const hideStoreFinishHandler = () => {
        setStoreFinishIsShown(false)
    }

    return (
        <React.Fragment>
            {orderPrintIsShown && <PrintOrder onClose={hideOrderPrintHandler} />}
            {storeFinishIsShown && <FinishStore onClose={hideStoreFinishHandler} />}
            <Header />
            <SideBar />
            <OrderItems isStatus={props.status} onShowPrint={showOrderPrintHandler} onShowStore={showStoreFinishHandler} />
        </React.Fragment>
    )
}

export default Main3