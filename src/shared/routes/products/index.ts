import { Router } from 'express';
import ProductsController from '@controllers/products/ProductsController';

const router = Router();

router.get('/', ProductsController.getAllProducts);
router.post('/add-product', ProductsController.createProduct);
router.get('/product/:id', ProductsController.getProductbyId);
router.put('/product/update/:id', ProductsController.updateProduct);
router.delete('/product/delete/:id', ProductsController.deleteOneProduct);

export default router;