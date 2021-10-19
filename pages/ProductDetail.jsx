import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image, Rating } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { toast } from "react-toastify"
import { addToCart } from "../store/actions/cartActions"
import { addToFavorite } from "../store/actions/favoriteActions"
import { useDispatch } from "react-redux"

export default function ProdactDetail() {
    let { name } = useParams()

    const [product, setProduct] = useState({})

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} sepete eklendi!`)
    }

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data))
    }, [])

    const handleAddToFavorite=(product)=>{
        dispatch(addToFavorite(product))
        toast.success(`${product.productName} favorilere eklendi!`)
      }

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='small'
                            src='https://asiachaiart.com/wp-content/uploads/2016/02/rooibos-chai-herbal-tea-blend-baharatli-kirmizi-cay-masala.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Description>
                            <Rating icon='star' defaultRating={3} maxRating={5} />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='blue' onClick={()=>handleAddToCart(product)}>
                                Sepete Ekle
                            </Button>
                            <Button basic color='pink' onClick={()=>handleAddToFavorite(product)}>
                                Favorilere Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
