import Room from '../../employee/entities/room.entity';
import Entity from '../../../utils/entities/generic.entity';
import Identity from '../../../utils/entities/generic.identity';

type BookingType = {
    room: Room;
    days: number;
    customer: string;
    email: string;
    isActive: boolean;
}

export default class Booking extends Entity<BookingType> {

    constructor(data: BookingType, id?: Identity) {
        super(data, id);
    }

    get room(): Room {
        return this.attributes.room;
    }

    get days(): number {
        return this.attributes.days;
    }

    get customer(): string {
        return this.attributes.customer;
    }

    get email(): string {
        return this.attributes.email;
    }

    get isActive(): boolean {
        return this.attributes.isActive;
    }

    set room(room: Room) {
        this.attributes.room = room;
    }

    set days(days: number) {
        this.attributes.days = days;
    }

    set customer(customer: string) {
        this.attributes.customer = customer;
    }

    set email(email: string) {
        this.attributes.email = email;
    }

    set isActive(isActive: boolean) {
        this.attributes.isActive = isActive;
    }
}