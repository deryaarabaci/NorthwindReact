import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text="Sepetim">
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>(
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart" text="Sepete Git" icon="shopping cart"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
