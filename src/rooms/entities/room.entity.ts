import { Booking } from "src/bookings/entities/booking.entity";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";

@Entity('rooms')
export class Room {
    @PrimaryColumn({ type: 'int' })
    room_id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    room_number: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    building: string;

    @Column({ type: 'int', default: 10 })
    capacity: number;

    @OneToMany(() => Booking, (booking) => booking.room)
    bookings: Booking[]
}
