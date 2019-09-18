import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    created_at : string;

    @Column({nullable : true})
    completed_at : string;

    @Column({nullable : true})
    notes : string;

    @Column()
    category : string;
}
