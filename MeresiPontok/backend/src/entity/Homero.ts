import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Homero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hely: string;

    @Column()
    mertekegyseg: string;

    @Column()
    min: number;

    @Column()
    max: number;

    @Column()
    alsohiba: number;

    @Column()
    felsohiba: number;
}


