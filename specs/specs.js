describe('primeShifting', function() {
  // it('Outputs 2 as prime.', function() {
  //   expect(primeShifting(2)).to.eql([2]);
  // });
  // it('Outputs 2,3 as prime if number is set to 3', function() {
  //   expect(primeShifting(3)).to.eql([2,3]);
  // });
  it('Outputs 2,3,5 as prime if number is set to 5', function() {
    expect(primeShifting(5)).to.eql([2,3,5]);
  });
  it('Outputs 2,3,5,7 as prime if number is set to 9', function() {
    expect(primeShifting(9)).to.eql([2,3,5,7]);
  });
  it('Outputs 2,3,5,7,11,13,17... as prime if number is set to 60', function() {
    expect(primeShifting(60)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]);
  });

});
