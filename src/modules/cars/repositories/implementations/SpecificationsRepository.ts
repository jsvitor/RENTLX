import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specificationsRepository: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specificationsRepository = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });
  }

  list(): Specification[] {
    return this.specificationsRepository;
  }

  findByName(name: string): Specification {
    return this.specificationsRepository.find(
      (category) => category.name === name
    );
  }
}

export { SpecificationRepository };
