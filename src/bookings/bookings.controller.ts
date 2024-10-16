import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly _bookingsService: BookingsService,
  ) { }

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this._bookingsService.create(createBookingDto);
  }

  @Post()
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this._bookingsService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this._bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._bookingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this._bookingsService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._bookingsService.delete(+id);
  }
}
