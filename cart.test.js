const cart = require("./cart");
const data = require("./data/cars");

describe("Cart Properties: ", () => {
  test("Cart Array should be empty", () => {
    expect(cart.cart.length).toEqual(0);
  });

  test("Total should equal integer of 0", () => {
    expect(cart.total).toEqual(0);
  });
});

describe("Cart Methods: ", function() {
  afterEach(function() {
    cart.cart = [];
    cart.total = 0;
  });
  test("addToCart should add car object to end of array", () => {
    cart.addToCart(data[0]);
    cart.addToCart(data[1]);

    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(data[0]);
    expect(cart.cart[1]).toEqual(data[1]);
  });

  test("addToCart should increase total property by car object price", () => {
    cart.addToCart(data[0]);
    expect(cart.total).toEqual(data[0].price);
  });

  test("removeFromCart should decrease cart length by one and maintain order", () => {
    cart.addToCart(data[0]);
    cart.addToCart(data[1]);
    cart.addToCart(data[2]);
    cart.removeFromCart(1, data[1].price);

    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(data[0]);
    expect(cart.cart[1]).toEqual(data[2]);
  });

  test("removeFromCart should decrease total by object removed price", () => {
    cart.addToCart(data[0]);
    cart.addToCart(data[1]);
    cart.addToCart(data[2]);
    cart.removeFromCart(1, data[1].price);
    cart.removeFromCart(1, data[2].price);
    expect(cart.total).toEqual(data[0].price);
  });

  test("checkout should set clear out cart length and total", () => {
    cart.addToCart(data[0]);
    cart.addToCart(data[1]);
    cart.addToCart(data[2]);
    cart.checkout();
    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  });
});
