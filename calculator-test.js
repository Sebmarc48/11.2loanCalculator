it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ amount: 5000, years: 2, rate: 2 })).toEqual(
    854.4668747793946
  );
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 5000, years: 2, rate: 2 })).toEqual(
    854.47
  );
});
