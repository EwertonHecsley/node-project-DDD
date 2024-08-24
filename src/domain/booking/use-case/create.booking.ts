import { RoomRepository } from "../../employee/repositories/room.repository";
import Email from "../../shared/value-object/email";
import Booking from "../entities/booking.entity";
import { BookingRepository } from "../repositories/booking.repository";

type Request = {
    roomId: string;
    days: number;
    customer: string;
    email: string;
    isActive?: boolean

}

export class CreateBooking {
    constructor(
        private roomRepositoy: RoomRepository,
        private bookingRepository: BookingRepository
    ) { }

    async handler({ customer, email, roomId, days }: Request) {
        const roomExist = await this.roomRepositoy.findById(roomId);

        if (!roomExist) {
            return null;
        }

        if (!roomExist.isAvailable) {
            return null;
        }

        const emailObject = Email.create(email);

        const booking = Booking.create({
            customer,
            days,
            email: emailObject,
            room: roomExist
        })

        await this.bookingRepository.create(booking);

        roomExist.isAvailable = false;

        await this.roomRepositoy.save(roomExist);

        return booking;
    }
}