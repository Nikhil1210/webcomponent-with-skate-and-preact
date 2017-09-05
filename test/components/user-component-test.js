import { expect } from 'chai';
import { h, mount } from 'bore';

describe('user-component component', function() {
  it('renders', function() {
    return mount(<user-component></user-component>).wait((wrapper) => {
      const { node: p } = wrapper.one('p');

      expect(p.innerHTML).to.equal('Hello, world! I am user-component!');
    });
  });
});
