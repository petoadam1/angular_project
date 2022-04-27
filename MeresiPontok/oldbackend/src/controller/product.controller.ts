import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Controller } from "./base.controller";

export class ProductController extends Controller {
    repository = getRepository(Product);

    search = async (req, res) => {
        const query = req.query.search; // /api/products?search=keresoszo

        try {
           const products = await this.repository.createQueryBuilder('product')
                .where("title LIKE CONCAT('%', :param ,'%')", { param: query })
                .getMany();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

}