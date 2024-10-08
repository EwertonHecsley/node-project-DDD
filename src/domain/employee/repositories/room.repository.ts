import Room from "../entities/room.entity";

export abstract class RoomRepository {
    abstract create(room: Room): Promise<Room>;
    abstract findMany(): Promise<Room[]>;
    abstract findById(id: string): Promise<Room | null>;
    abstract save(room: Room): Promise<void>;
}