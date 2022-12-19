interface GenericInterface<K extends string, V = any> {
  get(index: K): V;
}

class GenericClass<K extends string, V = any> implements GenericInterface<K, V> {
  private data = {} as Record<K, V>;
  constructor();
  constructor(init: Iterable<[K, V]>);
  constructor(init?: Iterable<[K, V]>) {
    if (init) {
      for (const [key, val] of init) {
        this.data[key] = val;
      }
    }
  }

  get(index: K) {
    return this.data[index];
  }
}

export async function genericClassUsage() {
  const ex1 = new GenericClass();
  const val1a = ex1.get('a');

  const ex2 = new GenericClass<string, number>();
  const val2a = ex2.get('a');

  const ex3 = new GenericClass<'a' | 'c', number>();
  const val3a = ex3.get('a');
  const val3b = ex3.get('b');
  const val3c = ex3.get('c');

  return [val1a, val2a, val3a, val3b, val3c];
}
