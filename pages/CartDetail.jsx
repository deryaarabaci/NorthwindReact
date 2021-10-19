import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image, Table, Menu, Icon, TableCell, TableHeaderCell, Button } from 'semantic-ui-react'

export default function CartDetail() {
    return (
        <div>
            <Table basic='very' celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyat</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://asiachaiart.com/wp-content/uploads/2016/02/rooibos-chai-herbal-tea-blend-baharatli-kirmizi-cay-masala.jpg' rounded size='mini' />
                                <Header.Content>
                                    Chai
            </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>18</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='https://pics.casinointernationalpartnerships.com/458x458,q75,fit/http://dam-cache.intra.groupe-casino.fr/Produits/mm/G1/3/598053G.jpg' rounded size='mini' />
                                <Header.Content>
                                    Aniseed Syrup
            </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <TableHeaderCell></TableHeaderCell>
                        <Table.HeaderCell>
                            Toplam Fiyat: 28₺
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <Button as={Link} to={"/payments"} color="pink" size="huge" type="submit" style={{marginTop:"1em"}}>
            Satın al
          </Button>
        </div>
    )
}
