import Booking from "../entities/booking.entity";
import { BookingRepository } from "../repositories/booking.repository";

export class ListBooking {
    constructor(private bookingRepository: BookingRepository) { }

    async handler(): Promise<Booking[]> {
        return await this.bookingRepository.findMany();
    }
}