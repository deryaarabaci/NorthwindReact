import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table, Header, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useDispatch } from "react-redux"
import { addToCart } from "../store/actions/cartActions"
import { toast } from "react-toastify"

export default function ProductList() {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data))
  },[])

const handleAddToCart=(product)=>{
  dispatch(addToCart(product))
  toast.success(`${product.productName} sepete eklendi!`)
}

  return (
    <div>
      <Table basic='very' celled collapsing>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

    <Table.Body>
    { products.map(product => (
              <Table.Row key={product.id}>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvYe7JGC9kOrtM16TKC1j_Hi89GILCWIxBA&usqp=CAU' rounded size='small' />
                  </Header>
                  <Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
                <Table.Cell><Button inverted color='blue' onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
              </Table.Row>
            ))}
    </Table.Body>
  </Table>
    </div >
    )
}
