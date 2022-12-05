const calculateBMI = require("./bmi_calculator");

test("If inputs are not null", () => {
    expect(calculateBMI.isNull).not.toBeNull();
});