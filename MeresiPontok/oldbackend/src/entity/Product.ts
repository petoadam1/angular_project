import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    brand: string;
}
