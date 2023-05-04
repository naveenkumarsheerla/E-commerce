import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, CardImg, Carousel, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


export const ProductList = () => {

    const [productlist, setProductList] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(result => { setProductList(result) })
            .catch(error => console.log(error))
    }, [])

    // console.log(productlist.products)
    const data = productlist.products
    const lists = data ? data.filter((item) => item.category === category) : []
    console.log(lists)
    return (
        <>
            <Row className="container-fluid ">
                {lists.map((item, index) => (
                    <Col>
                        <Link to={`${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card key={index} className="shadow-lg rounded border-0" style={{ margin: '1rem', width: '25rem', backgroundColor: '#8D98A8' }}>
                                {/* <CardImg src={item.images[0]} style={{ height: '15rem', width: '25rem', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}></CardImg> */}

                                <Carousel >
                                    <Carousel.Item>
                                        <img src={item.images[0]} style={{ height: '15rem', width: '25rem', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}></img>
                                    </Carousel.Item>
                                     <Carousel.Item>
                                        <img src={item.images[1]} style={{ height: '15rem', width: '25rem', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={item.images[2]} style={{ height: '15rem', width: '25rem', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}></img>
                                    </Carousel.Item>
                                </Carousel>
                                <Card.Body style={{ height: '18rem', textAlign: 'center', }} >
                                    <Row style={{ paddingTop: '2rem' }}>
                                        <Col> <Card.Title>{item.title}</Card.Title></Col>
                                        <Col md={{ span: 3, offset: 2 }}>  <Card.Title>&#x20B9;{item.price}</Card.Title></Col>
                                    </Row>
                                    <Row>
                                        <Col style={{marginTop:'2rem'}}>
                                            <Button variant="primary">More Information</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>




        </>
    )
}