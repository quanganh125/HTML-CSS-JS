class DynamicArray {
  #capacity = 0;
  #size = 0;

  constructor(capacity, size) {
    this.#capacity = capacity;
    this.#size = size;
  }

  getCapacity () {
    return this.#capacity;
  }
}

var test = new DynamicArray(3, 4);
