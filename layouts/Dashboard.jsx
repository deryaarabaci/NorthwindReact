import React from 'react'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import Categories from './Categories'
import { Grid, GridColumn, Icon, Menu, Table } from 'semantic-ui-react'
import { Route } from 'react-router'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Favorites from '../pages/Favorites'
import Beverages from '../pages/Beverages'
import Condiments from '../pages/Condiments'
import Confections from '../pages/Confections'
import DairyProducts from '../pages/DairyProducts'
import GrainsCereals from '../pages/GrainsCereals'
import MeatPoultry from '../pages/MeatPoultry'
import Produce from '../pages/Produce'
import Seafood from '../pages/Seafood'
import Payment from '../pages/Payment'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                        <Route path="/product/add" component={ProductAdd} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/favorites" component={Favorites} />
                        <Route exact path="/beverages" component={Beverages} />
                        <Route exact path="/condiments" component={Condiments} />
                        <Route exact path="/confections" component={Confections} />
                        <Route exact path="/dairyproducts" component={DairyProducts} />
                        <Route exact path="/grainscereals" component={GrainsCereals} />
                        <Route exact path="/meatpoultry" component={MeatPoultry} />
                        <Route exact path="/produce" component={Produce} />
                        <Route exact path="/seafood" component={Seafood} />
                        <Route exact path="/payment" component={Payment} />
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>
    )
}
