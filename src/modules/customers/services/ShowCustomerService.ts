import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customer from "../infra/typeorm/entities/Customer";
import CustomersRepository from "../infra/typeorm/repositories/CustomersRepository";

interface IRequest {
  customer_id: string;
}

class ShowCustomerService {
  public async execute({ customer_id }: IRequest): Promise<Customer> {

    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    return customer;
  }
}

export default ShowCustomerService;
