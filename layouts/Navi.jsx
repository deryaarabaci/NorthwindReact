import React, { useState,Component } from 'react'
import CartSummary from "./CartSummary"
import { Container, Menu, Input, Dropdown, DropdownMenu, DropdownDivider, DropdownItem } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu pointing inverted fixed="top">

                <Container>
                    <Menu.Item as={Link} to={"/"} name='anasayfa'></Menu.Item>
                    <Menu.Item as={Link} to={"/favorites"} name='favoriler' icon="heart"></Menu.Item>
                    <Dropdown item text="Kategoriler">
                        <DropdownMenu>
                            <DropdownItem as={Link} to={"/beverages"}>Beverages</DropdownItem>
                            <DropdownItem as={Link} to={"/condiments"}>Condiments</DropdownItem>
                            <DropdownItem as={Link} to={"/confections"}>Confections</DropdownItem>
                            <DropdownItem as={Link} to={"/dairyproducts"}>Dairy Products</DropdownItem>
                            <DropdownItem as={Link} to={"/grainscereals"}>Grains/Cereals</DropdownItem>
                            <DropdownItem as={Link} to={"/meatpoultry"}>Meat/Poultry</DropdownItem>
                            <DropdownItem as={Link} to={"/produce"}>Produce</DropdownItem>
                            <DropdownItem as={Link} to={"/seafood"}>Seafood</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownDivider/>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}                    
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
