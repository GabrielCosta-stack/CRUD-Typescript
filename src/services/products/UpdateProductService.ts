import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '@models/products/typeorm/repositories/ProductRepository';
import Product from '@models/products/typeorm/entities/Product';
import { UpdateRequest } from '@interfaces/products/ProductRequest';
import AppError from '@shared/errors/AppError';

export class UpdateProductService {
    public async execute({ id, name, description, image, price }: UpdateRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) {
            throw new AppError('Produto não encontrado');
        }

        const productExists = await productRepository.findByName(name);

        if (productExists) {
            throw new AppError('Já existe um produto com este nome. Insira um nome diferente.');
        }

        product.name = name;
        product.description = description;
        product.image = image;
        product.price = price;

        await productRepository.save(product);

        return product;
    }
}