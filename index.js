const util = require("util")

function maximumProfit(inventory, order) {
  const suppliers = {}
  const maxPrice = Math.max(...inventory)

  inventory.forEach((element, index) => {
    const index2 = index
    if (!suppliers[`sup-${index2}`]) {
      suppliers[`sup-${index2}`] = {}
    }
    suppliers[`sup-${index2}`]["inventory"] = element
    suppliers[`sup-${index2}`]["boxes"] = []
  })

  const totales = []
  Object.keys(suppliers).forEach((obj, suppIndex) => {
    const supp = suppliers[obj]
    const inventory = supp["inventory"]
    const boxes = supp["boxes"]

    for (let index = 1; index <= maxPrice; index++) {
      if (index <= inventory) {
        suppliers[`sup-${suppIndex}`]["boxes"].push(index)
      } else {
        suppliers[`sup-${suppIndex}`]["boxes"].push(0)
      }
    }
  })

  Object.keys(suppliers).forEach((obj, suppIndex) => {
    const supp = suppliers[obj]
    suppliers[`sup-${suppIndex}`]["boxes"] = supp["boxes"].reverse()
  })

  let orderCompleted = 0
  let profit = 0
  for (let index = 0; index < maxPrice; index++) {
    Object.keys(suppliers).forEach((obj, suppIndex) => {
      const supp = suppliers[obj]
      const price = supp["boxes"][index]
      if (price > 0 && orderCompleted < order) {
        profit += price
        orderCompleted++
      }
    })
  }

  console.log(util.inspect(suppliers))
  return profit
}

exports.maximumProfit = maximumProfit
