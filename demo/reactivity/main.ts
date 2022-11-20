import reactive from "./reactive";

const obj = reactive({
  a: "a",
  b: {
    d: "d",
    e: {
      g: "g",
    },
    f: {
      h: "h",
    },
  },
  c: "c",
});

console.log(obj);
obj.b.e.g = "h_new";
console.log(obj);
obj.b = {
  d: "d_new",
  e: {
    g: "g_new",
  },
  f: {
    h: "h_new",
  },
};
console.log(obj);
obj.b.e.g = "g_new_new";
console.log(obj);
obj.b.f.h = "h_new_new";
console.log(obj);
