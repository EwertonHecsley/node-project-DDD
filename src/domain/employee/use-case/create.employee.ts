import { EmployeeRepository } from "../../booking/repositories/employee.repository";
import Email from "../../shared/value-object/email";
import Employee from "../entities/employee.entity";
import { HashRepository } from "../services/hash.repository";

type Request = {
    name: string;
    email: string;
    password: string;
}

export class CreateRoomUseCase {

    constructor(
        private employeeRepository: EmployeeRepository,
        private hashRepository: HashRepository) { }

    async handler({ name, email, password }: Request) {
        const emailExist = await this.employeeRepository.findByEmail(email);

        if (!emailExist) {
            return null;
        }

        const emailEmployee = Email.create(email);

        if (!emailEmployee.validate()) {
            return null;
        }

        const hashPassword = await this.hashRepository.hash(password);

        const employee = Employee.create({ name, email: emailEmployee, password: hashPassword });

        await this.employeeRepository.create(employee);

        return employee;
    }
}