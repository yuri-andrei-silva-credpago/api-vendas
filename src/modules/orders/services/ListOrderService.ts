import { getCustomRepository } from "typeorm";
import Order from "../infra/typeorm/entities/Order";
import OrdersRepository from "../infra/typeorm/repositories/OrdersRepository";

class ShowOrderService {
  public async execute(): Promise<Order[]> {

    const ordersRepository = getCustomRepository(OrdersRepository);

    const order = await ordersRepository.find();

    return order;
  }
}

export default ShowOrderService;
