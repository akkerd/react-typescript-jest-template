import SumHelper from '../sum' 

test('adds 1 + 2 to equal 3', () => {
  expect( <SumHelper a={1} b={2}/>).toBe(<p>3</p>);
});