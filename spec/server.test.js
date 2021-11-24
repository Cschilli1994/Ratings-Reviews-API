const axios = require('axios');

const host = `http://localhost:3010`;


describe('Routes and Query Strings', () => {

  test('Reviews route with only product_id', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=40344');
    const {product, page, count, results} = data;


    expect(typeof page).toBe('number');
    expect(product).toBeDefined();
    expect(typeof count).toBeDefined();
    expect(Array.isArray(results)).toBe(true);

  });



  test('Reviews route with  product_id, page, count, sort', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=1&page=1&sort=newest&count=5');
    const {product, page, count, results} = data;


    expect(typeof page).toBe('number');
    expect(product).toBeDefined();
    expect(typeof count).toBeDefined();
    expect(Array.isArray(results)).toBe(true);

  });

  test('Reviews route with bad sort string', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=2&page=1&sort=notMethod&count=5');
    const {product, page, count, results} = data;


    expect(typeof page).toBe('number');
    expect(product).toBeDefined();
    expect(typeof count).toBeDefined();
    expect(Array.isArray(results)).toBe(true);

  });

  test('Reviews route with  bad product_id should return error message.', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=dogs&page=1&sort=newest&count=5');

    expect(data).toBe('Invalid query.');


  });
});

describe('ReviewMeta data routes and queries', () => {

  test('reviewMeta get route with good product id', async () => {

    const {data} = await axios.get(host + '/api/reviews/meta/?product_id=1');
    const {ratings, recommended, characteristics, product_id} = data;

    expect(product_id).toBeDefined();
    //test ratings keys 1...5 are all defined


    expect(recommended['true']).toBeDefined();
    expect(recommended['false']).toBeDefined();
    // test that each characteristic has an id and value property
    for (let trait in characteristics) {
      expect(characteristics[trait].id).toBeDefined();
      expect(characteristics[trait].value).toBeDefined();
    }
  });
  test('reviewMeta get route with good product id', async () => {

    const {data} = await axios.get(host + '/api/reviews/meta/?product_id=dogs');

    expect(data).toBe('Invalid query.');
  });
});