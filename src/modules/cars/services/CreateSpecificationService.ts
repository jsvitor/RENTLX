import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    // const specificationRepository = new specificationRepository();

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
