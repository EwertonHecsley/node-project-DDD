import Booking from "../entities/booking.entity";


export abstract class BookingRepository {
    abstract create(room: Booking): Promise<Booking>;
    abstract findMany(): Promise<Booking[]>;
    abstract findById(id: string): Promise<Booking | null>;
}