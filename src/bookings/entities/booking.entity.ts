import { Entity, ManyToOne, PrimaryColumn, Column, JoinColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Room } from "src/rooms/entities/room.entity";

@Entity('bookings')
export class Booking {
    @PrimaryColumn({ type: 'int' })
    booking_id: number;

    @ManyToOne(() => User, (user) => user.bookings)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Room, (room) => room.bookings)
    @JoinColumn({ name: 'room_id' })
    room: Room;

    @Column({ type: 'datetime', nullable: false })
    start_datetime: Date;

    @Column({ type: 'datetime', nullable: false })
    end_datetime: Date;
}
