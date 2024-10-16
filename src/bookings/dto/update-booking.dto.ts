import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateBookingDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly userId?: string;  // ID ของผู้ใช้ที่ทำการจอง

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly roomId?: string;  // ID ของห้องที่ทำการจอง

    @IsOptional()
    @IsDate()
    readonly startDate?: Date;  // วันที่เริ่มต้นการจอง

    @IsOptional()
    @IsDate()
    readonly endDate?: Date;  // วันที่สิ้นสุดการจอง

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly status?: string;  // สถานะการจอง เช่น "confirmed", "canceled", "pending"
}