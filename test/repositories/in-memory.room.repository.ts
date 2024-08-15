import Room from "../../src/domain/employee/entities/room.entity";
import { RoomRepository } from "../../src/domain/employee/repositories/room.repository";

export class InMemoryRoomRepository implements RoomRepository {
    itens: Room[] = [];

    async create(room: Room): Promise<Room> {
        await this.itens.push(room);

        return room;
    }

    async findMany(): Promise<Room[]> {
        return await this.itens
    }
}