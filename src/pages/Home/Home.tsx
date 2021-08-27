import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
// import React from 'react';
import { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';
import { IProduct } from 'type';

const Home = () => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.getProducts().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Banner />
      <Products products={data} />
    </>
  );
};

export default Home;
