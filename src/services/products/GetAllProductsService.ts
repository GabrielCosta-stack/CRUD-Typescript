import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '@models/products/typeorm/repositories/ProductRepository';
import Product from '@models/products/typeorm/entities/Product';

export class GetAllProductsService {
    public async execute(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);

        const products = await productRepository.find();

        return products;
    }
}