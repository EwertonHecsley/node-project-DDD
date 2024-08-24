import Booking from "../entities/booking.entity";


export abstract class BookingRepository {
    abstract create(room: Booking): Promise<Booking>;
}