import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '@models/products/typeorm/repositories/ProductRepository';
import { DeleteRequest } from '@interfaces/products/ProductRequest';
import AppError from '@shared/errors/AppError';

export class DeleteOneService {
    public async execute({ id }: DeleteRequest): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) {
            throw new AppError('Produto não encontrado');
        }

        await productRepository.remove(product);
    }
}