import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: string
}