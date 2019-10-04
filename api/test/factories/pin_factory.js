const factory = require('factory-girl').factory;
const factory_helper = require('./factory_helper');
const Pin = require('../../helpers/models/pin');
let faker = require('faker/locale/en');

factory.define('pin', Pin, buildOptions => {
  if (buildOptions.faker) faker = buildOptions.faker;

  let pinNum = factory.seq('Pin.number', (n) => `${n}`);
  let attrs = {
      name               : "pin-" + pinNum
    , number             : pinNum
    , address1           : faker.address.streetAddress()
    , address2           : faker.address.secondaryAddress()
    , city               : faker.random.arrayElement(factory_helper.getBcCities())
    , province           : "BC"
    , country            : "Canada"
    , postalCode         : chance.postal()
    , phone              : faker.phone.phoneNumber()
    , fax                : faker.phone.phoneNumber()
    , www                : faker.internet.url()
  };
  return attrs;
});

exports.factory = factory;