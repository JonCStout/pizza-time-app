import React from 'react'

class OrderForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            payOnPickup: false,
            cvv: '',
            cardNumber: '',
            expiryDate: '',
            name: '',
            addr1: '',
            addr2: '',
            zip: '',
            city: '',
            state: '',
            phone: ''
        }   
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    } 

    render(){
        return(
            <div className='orderForm'>
                <form id='orderForm'>
                    
                    <label for='orderName'>
                        name
                        <input name='orderName' type='text' onChange={this.handleChange} value={this.state.name}></input>
                    </label>

                    
                    <label for='orderPayOnPickup'>
                        pay at store
                        <input name='orderPayOnPickup' type='radio' onChange={this.handleChange} value={this.state.payOnPickup}></input>
                    </label>

                    
                    <label for='orderCard'>
                        card number
                        <input name='orderCard' type='number' onChange={this.handleChange} value={this.state.cardNumber}></input>
                    </label>

                    
                    <label for='orderCVV'>
                        security code
                        <input name='orderCVV' type='number' onChange={this.handleChange} value={this.state.cvv}></input>
                    </label>

                    
                    <label for='orderExpiryDate'>
                        expiration date
                        <input name='orderExpiryDate' type='month' onChange={this.handleChange} value={this.state.expiryDate}></input>
                    </label>

                    
                    <label for='orderAddrLn1'>
                        address line 1
                        <input name='orderAddrLn1' type='text' onChange={this.handleChange} value={this.state.addr1}></input>
                    </label>

                    
                    <label for='orderAddrLn2'>
                        address line 2
                        <input name='orderAddrLn2' type='text' onChange={this.handleChange} value={this.state.addr2}></input>
                    </label>

                    
                    <label for='orderCity'>
                        city
                        <input name='orderCity' type='text' onChange={this.handleChange} value={this.state.city}></input>
                    </label>

                    
                    <label for='orderState'>
                        state
                        <input name='orderState' type='text' onChange={this.handleChange} value={this.state.state}></input>
                    </label>

                    
                    <label for='orderZip'>
                        zip
                        <input name='orderZip' type='number' onChange={this.handleChange} value={this.state.zip}></input>
                    </label>

                    
                    <label for='orderPhone'>
                        phone
                        <input name='orderPhone' type='tel' onChange={this.handleChange} value={this.state.phone}></input>
                    </label>

                    <input type='submit' value="submit"></input>

                </form>
            </div>
        )
    }
}









class OrderFinal extends React.Component{
    render(){
        return(
            <div className="blue div">
                <div className="white div">
                    <h2>Your order has been recieved. Thank you.</h2>
                </div>
            </div>
        )
    }
}

export default OrderForm
