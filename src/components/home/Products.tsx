import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductSkeleton from 'skeletions/ProductSkeleton';
import { IProduct } from 'type';

interface IProp {
  products: IProduct[] | null;
  isLoading: boolean;
  isSuccess: boolean;
}
const Products = ({ products, isLoading, isSuccess }: IProp) => {
  return (
    <div className="my-5 product">
      <Container>
        {isLoading && <ProductSkeleton />}
        {isSuccess && (
          <Row>
            {products?.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
