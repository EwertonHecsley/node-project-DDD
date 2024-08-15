import Room from "../entities/room.entity";
import { RoomRepository } from "../repositories/room.repository";

export class ListRoomUseCase {

    constructor(private roomRepository: RoomRepository) { }

    async handler(): Promise<Room[]> {
        return await this.roomRepository.findMany();
    }
}