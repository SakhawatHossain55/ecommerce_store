import { IProduct } from 'type';
import requests from './httpService';

class ProductService {
  getProducts(): Promise<IProduct[]> {
    return requests.get('/products');
  }

  getProductByID(id: string): Promise<IProduct> {
    return requests.get(`/products/${id}`);
  }

  addProduct(body: {}): Promise<IProduct> {
    return requests.post(`/products/`, body);
  }

  updateProduct(id: string, body: {}): Promise<IProduct> {
    return requests.post(`/products/${id}`, body);
  }

  deleteProduct(id: string): Promise<IProduct> {
    return requests.delete(`/products/${id}`);
  }
}

export default new ProductService();
