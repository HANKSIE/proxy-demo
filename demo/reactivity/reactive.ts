export default function reactive<T extends Object>(origin: T): T {
  // 讓物件的物件屬性成為代理物件
  Object.getOwnPropertyNames(origin).forEach((prop) => {
    const property = Reflect.get(origin, prop);
    if (property instanceof Function) return;
    if (property instanceof Object) {
      Reflect.set(origin, prop, reactive(property));
      return true;
    }
  });

  // 回傳根代理
  return new Proxy<T>(origin, {
    set: (target: Object, prop: string, newValue: any) => {
      const property = Reflect.get(target, prop);

      if (property instanceof Function) return true;

      if (property instanceof Object) {
        console.log(`object屬性${prop}被設置了`);
        Reflect.set(target, prop, reactive(newValue));
        return true;
      }

      console.log(`state屬性${prop}被設置了`);
      Reflect.set(target, prop, newValue);
      return true;
    },
  });
}
