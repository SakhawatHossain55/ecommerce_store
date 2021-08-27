import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from 'type';

interface IProp {
  products: IProduct[] | null;
}
const Products = ({ products }: IProp) => {
  console.log(products);

  return (
    <Container>
      <Row>
        {products?.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
