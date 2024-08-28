import { RoomRepository } from "../../employee/repositories/room.repository";
import Booking from "../entities/booking.entity";
import { BookingRepository } from "../repositories/booking.repository";

type Response = {
    bookingId: string
}

export class CancelBooking {
    constructor(
        private bookingRepository: BookingRepository,
        private roomRepository: RoomRepository) { }

    async handler({ bookingId }: Response): Promise<Booking | null> {
        const bookingExist = await this.bookingRepository.findById(bookingId);

        if (!bookingExist) {
            return null;
        }

        bookingExist.isActive = false;

        await this.bookingRepository.cancel(bookingExist);

        const { room } = bookingExist;

        room.isAvailable = true;

        await this.roomRepository.save(room);

        return bookingExist;
    }
}