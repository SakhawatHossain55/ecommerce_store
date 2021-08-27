import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { IProduct } from 'type';

const Home = () => {
  // const [data, setData] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => {
  //     setData(res);
  //   });
  // }, []);
  const { data, isSuccess, isLoading } = useAsync(ProductService.getProducts);

  return (
    <>
      <Banner />
      <Products isSuccess={isSuccess} isLoading={isLoading} products={data} />
    </>
  );
};

export default Home;
