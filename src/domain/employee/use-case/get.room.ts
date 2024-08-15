import Room from "../entities/room.entity";
import { RoomRepository } from "../repositories/room.repository";

type Response = {
    id: string;
}

export class GetRoomUseCase {

    constructor(private roomRepository: RoomRepository) { }

    async handler({ id }: Response): Promise<Room | null> {
        return await this.roomRepository.findById(id);
    }
}