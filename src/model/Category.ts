import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    // if not exist a id, will be created using uuidV4 function
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
