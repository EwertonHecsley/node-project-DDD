import { EmployeeRepository } from "../../booking/repositories/employee.repository";
import Email from "../../shared/value-object/email";
import Employee from "../entities/employee.entity";

type Request = {
    name: string;
    email: string;
    password: string;
}

export class CreateRoomUseCase {

    constructor(private employeeRepository: EmployeeRepository) { }

    async handler({ name, email, password }: Request) {
        const emailExist = await this.employeeRepository.findByEmail(email);

        if (!emailExist) {
            return null;
        }

        const emailEmployee = Email.create(email);

        if (!emailEmployee.validate()) {
            return null;
        }

        const employee = Employee.create({ name, email: emailEmployee, password });

        await this.employeeRepository.create(employee);

        return employee;
    }
}