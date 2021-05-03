import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '@models/products/typeorm/repositories/ProductRepository';
import Product from '@models/products/typeorm/entities/Product';
import { ByIdRequest } from '@interfaces/products/ProductRequest';
import AppError from '@shared/errors/AppError';

export class GetProductByIdService {
    public async execute({ id }: ByIdRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) {
            throw new AppError('Produto não encontrado');
        }
        return product;
    }
}