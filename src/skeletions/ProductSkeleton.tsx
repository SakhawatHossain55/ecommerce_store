import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill('')
        ?.map((prduct, index) => (
          <Col md={4} className="mb-3" key={index}>
            <Skeleton style={{ borderRadius: 10 }} height={320} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductSkeleton;
