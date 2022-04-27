import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Hiba } from "./Hiba";

@Entity()
export class Meres {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homeroid: number;

    @Column()
    mertertek: number;
    
}