import { getCustomRepository } from 'typeorm';
import { CreateRequest } from '@interfaces/products/ProductRequest';
import { ProductRepository } from '@models/products/typeorm/repositories/ProductRepository';
import AppError from '@shared/errors/AppError';
import Product from '@models/products/typeorm/entities/Product';

export class CreateProductService {
    public async execute({ name, description, image, price }: CreateRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);
        const productExists = await productRepository.findByName(name);

        if (productExists) {
            throw new AppError('Já existe um produto com este nome. Insira um nome diferente.');
        }

        const product = productRepository.create({
            name,
            description,
            image,
            price
        });

        await productRepository.save(product);

        return product;
    }
}