import { CartCountPipe } from './cart-count.pipe';

describe('CartCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CartCountPipe();
    expect(pipe).toBeTruthy();
  });
});
