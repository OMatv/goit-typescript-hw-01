interface nameOfUser {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: nameOfUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: nameOfUser = {
  name: "Poly",
  age: 30,
  email: "john@example.com",
};
