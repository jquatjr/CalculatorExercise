// Starter code provided by Springboard
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 30,
    rate: 12,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1028.61')
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 5002,
    years: 15,
    rate: 4,
  };
  expect(calculateMonthlyPayment(values)).toEqual('37.00');
});

it("should calculate for long terms years", function () {
  const values = {
    amount: 50000,
    years: 99,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('209.84');
});

it("should calculate for high interest", function () {
  const values = {
    amount: 100000,
    years: 15,
    rate: 30,
  };
  expect(calculateMonthlyPayment(values)).toEqual('2529.70');
});