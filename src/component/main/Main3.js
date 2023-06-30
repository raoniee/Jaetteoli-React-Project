import React from 'react'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import OrderItems from './Layout/orderItems/OrderItems'

const Main3 = (props) => {
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <OrderItems isStatus='complete' />
        </React.Fragment>
    )
}

export default Main3