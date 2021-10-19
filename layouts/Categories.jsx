import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    
    return (
        <div>
            <Menu inverted color='purple' pointing vertical >
                <Menu.Item as={Link} to={"/"}
                    name='anasayfa'
                />
                </Menu>
                <Menu inverted color='violet' pointing vertical >
                <Menu.Item as={Link} to={"/beverages"}
                    name='beverages'
                />
                </Menu>
                <Menu inverted color='purple' pointing vertical >
                <Menu.Item as={Link} to={"/condiments"}
                    name='condiments'
                />
                </Menu>
                <Menu inverted color='violet' pointing vertical >
                <Menu.Item as={Link} to={"/confections"}
                    name='confections'
                />
                </Menu>
                <Menu inverted color='purple' pointing vertical >
                <Menu.Item as={Link} to={"/dairyproducts"}
                    name='dairy products'
                />
                </Menu>
                <Menu inverted color='violet' pointing vertical >
                <Menu.Item as={Link} to={"/grainscereals"}
                    name='grains/cereals'
                />
                </Menu>
                <Menu inverted color='purple' pointing vertical >
                <Menu.Item as={Link} to={"/meatpoultry"}
                    name='meat/poultry'
                />
                </Menu>
                <Menu inverted color='violet' pointing vertical >
                <Menu.Item as={Link} to={"/produce"}
                    name='produce'
                />
                </Menu>
                <Menu inverted color='purple' pointing vertical >
                <Menu.Item as={Link} to={"/seafood"}
                    name='seafood'
                />
                </Menu>
            
        </div>
    )
}
