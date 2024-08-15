import Room from "../entities/room.entity";

export abstract class RoomRepository {
    abstract create(room: Room): Promise<Room>;
    abstract findMany(): Promise<Room[]>;
}