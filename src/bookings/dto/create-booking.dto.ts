import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateBookingDto {
    // @IsNotEmpty()
    // @IsString()
    // readonly userId: string;  // ID ของผู้ใช้ที่ทำการจอง

    // @IsNotEmpty()
    // @IsString()
    // readonly roomId: string;  // ID ของห้องที่ทำการจอง

    // @IsNotEmpty()
    // @IsDate()
    // readonly startDate: Date;  // วันที่เริ่มต้นการจอง

    // @IsNotEmpty()
    // @IsDate()
    // readonly endDate: Date;  // วันที่สิ้นสุดการจอง

    // @IsOptional()
    // @IsString()
    // readonly status?: string;  // สถานะการจอง เช่น "confirmed", "pending" (สามารถเป็น undefined ได้)
}
