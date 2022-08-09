const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works", function() {
    const square1 = [  
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]

    const square1unrolled = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

    const square2 = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ]

    const square2unrolled = ["a", "b", "c", "f", "i", "h", "g", "d", "e"]

    expect (unroll(square1)).toEqual(square1unrolled)
    expect (unroll(square2)).toEqual(square2unrolled)


  })

});
