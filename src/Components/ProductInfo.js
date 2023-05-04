import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const PrdooctInfo = () => {
    const [productInfo, setProductInfo] = useState([])
    const { id, category } = useParams();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(result => { setProductInfo(result) })
            .catch(error => console.log(error))
    }, [])

    const data = productInfo.products
    const lists = data ? data.filter((item) => item.category === category) : []
    const item = lists.find((c) => c.id == id)
    console.log(item)
    return (
        <>
            {
                item ? (
                    <Row className="justify-content-center container-fluid">
                        <Card style={{ marginTop: '10rem', height: '25rem', width: '25rem', backgroundColor: "#F2F2F2" }}>
                            <Card.Body  >
                                <Card.Header>
                                    <Card.Subtitle>Product: {item.title}</Card.Subtitle>
                                </Card.Header>
                                <Row style={{ marginTop: '2rem' }}>
                                    <Card.Title>Price - &#x20B9;{item.price}</Card.Title>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                ) : (
                    <div>Loading ...</div>
                )
            }


        </>
    )
}