import { EmployeeRepository } from "../../booking/repositories/employee.repository";
import { HashRepository } from "../services/hash.repository";
import { TokenRepository } from "../services/token.repository";

type Request = {
    email: string;
    password: string;
}

export class AuthEmployee {
    constructor(
        private employeeRepository: EmployeeRepository,
        private hashRepository: HashRepository,
        private tokenRepository: TokenRepository
    ) { }

    async handler({ email, password }: Request) {
        const employee = await this.employeeRepository.findByEmail(email);

        if (!employee) {
            return null;
        }

        const validPassword = await this.hashRepository.compare(password, employee.password);

        if (!validPassword) {
            return null;
        }

        const token = await this.tokenRepository.generate({ id: employee.id.getString(), email: employee.email.value, name: employee.name });

        return { employee, token };
    }
}