const axios = require('axios');
const request = require('supertest')
// const server = require('../server/server.js');
const host = `http://localhost:3010`;



describe('Should return correct columns from review table', () => {

  test('Should return correct columns from reviews table', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=1');
    const {results} = data;

    results.forEach(review => {
      const {
        review_id, rating, summary,
        recommend, response, body,
        date, reviewer_name, helpfulness,
        photos
      } = review;

      expect(review_id).toBeDefined();
      expect(rating).toBeDefined();
      expect(summary).toBeDefined();
      expect(recommend).toBeDefined();
      expect(response).toBeDefined();
      expect(body).toBeDefined();
      expect(date).toBeDefined();
      expect(reviewer_name).toBeDefined();
      expect(helpfulness).toBeDefined();
      expect(photos).toBeDefined();

    })


  });

  test('Should return correct photo object if review has photos', async () => {

    const {data} = await axios.get(host + '/api/reviews/?product_id=2');
    const {results} = data;

    results.forEach(review => {
      const {photos} = review;
      if (photos) {
        if (photos.length > 0) {
          photos.forEach(photo => {
            const {id, url} = photo;
            console.log('HAS PHOTO ID ::', id);
            expect(id).toBeDefined();
            expect(typeof url).toBe('string');
          })
        }
      }

    })

  });
});

describe('reviews queries should return within time', () => {
// 1000011
  test('test', async ()=> {
    const results = [];
    for (let i = 1; i < 1000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/?product_id=${i}`);
    const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });




});
describe('Check data in middle of set', ()=> {
  test('Check times for middle data', async ()=> {
    const results = [];
    for (let i = 500000; i < 501000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/?product_id=${i}`);
    const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });
})
describe('Check last 10%', ()=> {
  test('Check times for Last 10%', async ()=> {
    const results = [];
    for (let i = 999007; i < 1000000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/?product_id=${i}`);
    const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });
})