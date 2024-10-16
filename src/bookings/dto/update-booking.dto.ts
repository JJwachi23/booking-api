import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) { }

// @IsOptional()
// @IsString()
// @IsNotEmpty()
// readonly user_id?: string;  // ID ของผู้ใช้ที่ทำการจอง

// @IsOptional()
// @IsString()
// @IsNotEmpty()
// readonly room_id?: string;  // ID ของห้องที่ทำการจอง

// @IsOptional()
// @IsDate()
// readonly ?: Date;  // วันที่เริ่มต้นการจอง

// @IsOptional()
// @IsDate()
// readonly endDate?: Date;  // วันที่สิ้นสุดการจอง

// @IsOptional()
// @IsString()
// @IsNotEmpty()
// readonly status?: string;  // สถานะการจอง เช่น "confirmed", "canceled", "pending"