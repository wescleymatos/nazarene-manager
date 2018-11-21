const expect = require('chai').expect;
//const mp = require('../../../src/Infra/DB/Map/MemberMap');
const mr = require('../../../src/Membership/Repositories/MemberRepository');
//const sinon = require('sinon');

describe('UsersController getAll()', () => {
  it('should return a list of users', () => {
    const expectedDatabaseResponse = [{
      id: 1,
      name: 'John Doe',
      email: 'john@mail.com'
    }];

    const fakeDatabase = {
      findAll() {
        return expectedDatabaseResponse;
      }
    };

    //const members = (fakeDatabase);
    const response = mr.getAll(fakeDatabase);

    expect(response).to.be.eql(expectedDatabaseResponse);
  });
});
