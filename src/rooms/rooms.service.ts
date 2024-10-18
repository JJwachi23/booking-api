import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {

  constructor(
    @InjectRepository(Room)
    private readonly _roomsRepository: Repository<Room>,
  ) { }

  create(createRoomDto: CreateRoomDto) {
    // Correct: pass the instance (createRoomDto), not the class itself
    const room = this._roomsRepository.create(createRoomDto);
    return this._roomsRepository.save(room);  // Save it to the database
  }

  findAll() {
    return this._roomsRepository.find();
  }

  findOne(id: number) {
    return this._roomsRepository.findOne({ where: { room_id: id } });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this._roomsRepository.update({ room_id: id }, updateRoomDto);
  }

  delete(id: number) {
    return this._roomsRepository.delete({ room_id: id });
  }

  async getAllRoomNumbers() {
    const data = await this._roomsRepository.query('SELECT room_number FROM rooms');
    return {
      data,
      total: data.length
    }
  }
}
