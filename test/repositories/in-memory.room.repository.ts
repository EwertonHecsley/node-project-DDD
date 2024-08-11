import Room from "../../src/domain/employee/entities/room.entity";
import { RoomRepository } from "../../src/domain/employee/repositories/room.repository";

export class InMemoryRoomRepository implements RoomRepository {
    itens: Room[] = [];

    create(room: Room): Room {
        this.itens.push(room);

        return room;
    }
}