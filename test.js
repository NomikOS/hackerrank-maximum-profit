const { maximumProfit } = require("./index")

describe("Pruebas de maximumProfit", () => {
  it("maximumProfit con [2, 8, 4, 10, 6] y order 20", async () => {
    const order = 20
    const inventory = [2, 8, 4, 10, 6]
    const total = 110
    const profit = maximumProfit(inventory, order)
    expect(profit === total).toBe(true)
  })
  it("maximumProfit con [3, 5] y order 6", async () => {
    const order = 6
    const inventory = [3, 5]
    const total = 19
    const profit = maximumProfit(inventory, order)
    expect(profit === total).toBe(true)
  })

  it("maximumProfit con [2, 5] y order 4", async () => {
    const order = 4
    const inventory = [2, 5]
    const total = 14
    const profit = maximumProfit(inventory, order)
    expect(profit === total).toBe(true)
  })
})
