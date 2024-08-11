import { InMemoryRoomRepository } from "../../../../test/repositories/in-memory.room.repository";
import { RoomRepository } from "../repositories/room.repository";
import { CreateRoomUseCase } from "./create.room";

let roomRepository: InMemoryRoomRepository;
let useCase: CreateRoomUseCase;

describe('Criação de quartos', () => {
    beforeEach(() => {
        roomRepository = new InMemoryRoomRepository();
        useCase = new CreateRoomUseCase(roomRepository);
    })

    test('Deve criar um quarto', () => {
        const room = useCase.handler({
            name: 'Quarto 1',
            price: 120000,
            image: 'image.jpeg'
        })

        expect(room).toBeDefined();
        expect(roomRepository.itens[0].name).toEqual('Quarto 1');

    })

})