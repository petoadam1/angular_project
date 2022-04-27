import { Repository } from "typeorm";


export class Controller {
    repository: Repository<any>;

    create = async (req, res) => {
        const entity = this.repository.create(req.body as {});

        try {
            entity.id = null;
            const entityInserted = await this.repository.save(entity);
            res.json(entityInserted);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    getAll = async (req, res) => {
        try {
            const products = await this.repository.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    getOne = async (req, res) => {
        const entityId = req.params.id;

        try {
            const entity = await this.repository.findOne(entityId);
            if (!entity) {
                return res.status(404).json({ message: 'Product not found.' });
            }

            res.json(entity);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    update = async (req, res) => {
        const entity = this.repository.create(req.body as {});

        try {
            const existingEntity = await this.repository.findOne({ id: entity.id });
            if (!existingEntity) {
                return res.status(404).json({ message: 'Not existing product.' });
            }

            const entityUpdated = await this.repository.save(entity);
            res.json(entityUpdated);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    delete = async (req, res) => {
        try {
            const entityId = parseInt(req.params.id);
            const entity = this.repository.findOne({ id: entityId });
            if (!entity) {
                return res.status(404).json({ message: 'Product is not exists.' });
            }

            await this.repository.delete(entity);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}