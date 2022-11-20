export interface InterceptableCallback<T> {
  (target: T, method: string | Symbol, args: any[]): void;
}

export default function interceptable<T extends Object>(
  target: T,
  cb: InterceptableCallback<T>
) {
  return new Proxy(target, {
    get(target, prop) {
      const property = Reflect.get(target, prop);
      if (property instanceof Function) {
        // 為了攔截function參數所以再包一層function
        return (...args: any[]) => {
          cb(target, prop, args);
          property.apply(target, args);
        };
      }

      return property;
    },
  });
}
