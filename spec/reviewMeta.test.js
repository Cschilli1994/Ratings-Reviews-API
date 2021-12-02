const axios = require('axios');

// const server = require('../server/server.js');
const host = `http://localhost:3010`;




describe('Review Meta Data first 10%', () => {
// 1000011
  test('First 10%', async ()=> {
    const results = [];
    for (let i = 1; i < 1000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/meta/?product_id=${i}`);
      const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });




});
describe('Review Meta data in middle of set', ()=> {
  test('Check times for middle data', async ()=> {
    const results = [];
    for (let i = 500000; i < 501000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/meta/?product_id=${i}`);
    const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });
})
describe('Review Meta data last 10%', ()=> {
  test('Check times for Last 10%', async ()=> {
    const results = [];
    for (let i = 999000; i < 1000000; i++) {
      const start = new Date().getTime();
    await axios.get(`${host}/api/reviews/meta/?product_id=${i}`);
    const end = new Date().getTime() - start;
    results.push(end);
    }
    console.log(results);
    results.forEach(time => {
      expect(time).toBeLessThan(50);
    })
  });
})