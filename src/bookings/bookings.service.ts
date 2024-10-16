import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {

  constructor(
    @InjectRepository(Booking)
    private readonly _bookingsRepository: Repository<Booking>
  ) { }

  create(createBookingDto: CreateBookingDto) {
    const booking = this._bookingsRepository.create(createBookingDto);
    return this._bookingsRepository.save(booking);
  }

  findAll() {
    return this._bookingsRepository.find();
  }

  findOne(id: number) {
    return this._bookingsRepository.findOne({ where: { booking_id: id } });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this._bookingsRepository.update({ booking_id: id }, updateBookingDto);
  }

  delete(id: number) {
    return this._bookingsRepository.delete({ booking_id: id });
  }
}
