import { GetAllProductsService } from '@services/products/GetAllProductsService';
import { GetProductByIdService } from '@services/products/GetProductByIdService';
import { CreateRequest, ByIdRequest, DeleteRequest } from '@interfaces/products/ProductRequest';
import { Request, Response } from 'express';
import { CreateProductService } from '@services/products/CreateProductService';
import { UpdateProductService } from '@services/products/UpdateProductService';
import { DeleteOneService } from '@services/products/DeleteOneService';

export default class ProductsController {
    public static async getAllProducts(request: Request, response: Response): Promise<Response> {
        const getAllProducts = new GetAllProductsService();

        const products = await getAllProducts.execute();
        return response.status(200).json({
            products
        });
    }

    public static async getProductbyId(request: Request, response: Response): Promise<Response> {
        const { id } = request.params as unknown as ByIdRequest;

        const getProductById = new GetProductByIdService();

        const product = await getProductById.execute({ id });

        return response.status(200).json({
            product
        });
    }

    public static async createProduct(request: Request, response: Response): Promise<Response> {
        const { name, description, image, price } = request.body as CreateRequest;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({
            name,
            description,
            image,
            price
        });

        return response.status(200).json({
            product
        });
    }

    public static async updateProduct(request: Request, response: Response): Promise<Response> {
        const { name, description, image, price } = request.body as CreateRequest;
        const { id } = request.params as unknown as ByIdRequest;

        const updateProduct = new UpdateProductService();

        const productUpdated = await updateProduct.execute({ id, name, description, image, price });

        return response.status(200).json({
            productUpdated
        });
    }

    public static async deleteOneProduct(request: Request, response: Response): Promise<Response> {
        const { id } = request.params as unknown as DeleteRequest;

        const deleteProduct = new DeleteOneService();

        await deleteProduct.execute({ id });

        return response.status(200).json({
            message: 'Produto apagado com sucesso.'
        });
    }
}