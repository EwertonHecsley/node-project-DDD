import Booking from "../entities/booking.entity";
import { BookingRepository } from "../repositories/booking.repository";

type Response = {
    id: string
}

export class GetBooking {
    constructor(private bookingRepository: BookingRepository) { }

    async handler({ id }: Response): Promise<Booking | null> {
        const booking = await this.bookingRepository.findById(id);

        if (!booking) {
            return null;
        }

        return booking;
    }
}