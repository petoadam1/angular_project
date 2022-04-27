import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Meres } from "./Meres";

@Entity()
export class Hiba {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mereshely: string;

    @Column()
    mertertek: number;

}

