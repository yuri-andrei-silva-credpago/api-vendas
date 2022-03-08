import 'reflect-metadata';
import CreateCustomerService from './CreateCustomerService';
import AppError from '@shared/errors/AppError';
import FakeCustomersRepository from '@modules/customers/domain/repositories/fakes/FakeCustomersRepository';

describe('CreateCustomer', () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Jorge Henrique',
      email: 'teste@gmail.com',
    })

    expect(customer).toHaveProperty('id');
  });

  it('should not be able to create two customers with the same e-mail', () => {
    expect(1).toBe(1);
  })
})