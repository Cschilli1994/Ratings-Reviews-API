import { check } from 'k6'
import http from 'k6/http'

const host = `http://localhost:3010`;
// See https://k6.io/docs/using-k6/options
export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000, // how many requests
      timeUnit: '1s', // per time unit
      duration: '20s', // total duration of scenario
      preAllocatedVUs: 2000,
      maxVUs: 2000,
    },
  },
};

export default function() {
  let product = Math.floor(Math.random() * 100000);
  let res = http.get(`${host}/api/reviews/?product_id=${product}`);
  check(res, {
  "success": (r) => r.status == 200
  });
  product = 450000 + Math.floor(Math.random() * 100000);
  res = http.get(`${host}/api/reviews/?product_id=${product}`);
  check(res, {
  "success": (r) => r.status == 200
  });
  };