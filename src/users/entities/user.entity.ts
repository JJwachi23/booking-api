import { Booking } from "src/bookings/entities/booking.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn({ type: "int" })
    user_id: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    first_name: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    last_name: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    email: string;

    @Column({ type: "varchar", length: 20, nullable: false })
    gender: string;

    @Column({ type: "varchar", length: 10, nullable: false })
    phone_number: string

    @Column({ type: "varchar", length: 50, nullable: false })
    department: string

    @OneToMany(() => Booking, (booking) => booking.user)
    bookings: Booking[]

}
