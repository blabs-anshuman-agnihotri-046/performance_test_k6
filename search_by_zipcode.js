import http from 'k6/http';
import { sleep, check } from 'k6';

function getApiKey() {
    return 'Bo9q8y0MUT7lBzEYgVpm66qMIHg6VvgT4O2YH4DV';
}

// const getAuthToken = () => {
//     return "eyJraWQiOiJNWUNOZEllS3Q0emtiSzJGZVdvWjNhYjA0SnZGaVRFaEtDTEVZcUdtMlhnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjBjYTVlOS05Y2VhLTRjMDAtYmRhZi02ZTIwNTNiOGQ0MjkiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMTQzUlJLM29MIiwiY29nbml0bzp1c2VybmFtZSI6IjQ2MGNhNWU5LTljZWEtNGMwMC1iZGFmLTZlMjA1M2I4ZDQyOSIsImdpdmVuX25hbWUiOiJSdWNoaW4iLCJvcmlnaW5fanRpIjoiMGMzNzMyZWEtMzM1YS00NDhjLTkxYzctMGE3N2JlY2QyOTY4IiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NjYxMjYxOTM2NzY1OnJvbGVcL2ZmbC1zdG9yZS1hZG1pbi1yb2xlIl0sImF1ZCI6InNycGVicDFiNmNnY2JjaGM0cWhsZzEyODIiLCJldmVudF9pZCI6IjE2NGI3YmU5LThiMTUtNDZiNC04MTU1LTVjZmIxN2U0ZmI4NyIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnN0b3JlSWQiOiJkZW1vLm1hc3RlcmZmbC5jb20iLCJhdXRoX3RpbWUiOjE3MDYxNjQxMDMsImV4cCI6MTcwNzIwMDQ0MiwiaWF0IjoxNzA3MTk2ODQyLCJmYW1pbHlfbmFtZSI6IkthbnNhbCIsImp0aSI6ImM1ZTViOTc1LWQ5NGEtNDc3OC04NDQzLTY0YzgxZDJlYjI3MSIsImVtYWlsIjoicnVjaGluZnJlZWxhbmNlcithZG1pbkBnbWFpbC5jb20ifQ.cMKPr2pOBirX6_aX7elsPUvIYCJkEUC-xiOWp7wSIbcabVXqp0OnQDRA6djzFIswU1F8nz85GdX0XpB1CxJAx2KV5qzuYoKDWfz00MISFsRFyJJcigpvjeHGzCX3rST0ifADfqvPUVa3b8C4DbITTQGGxCtJhSFCHffyFCxhqJyB47XxVxbRBQbl08q3Zz5XIG8qeqsr8abSI3c6froWjGdEY1vUNOMU6WpNO_wk6WhuAS4_l5x8gCczvIEE4Ty78HKOFzzC-QQjvcxfgI_C0K1Z_joVXg-eGvrB_203v_ZwnsmPLOpK_pIKByz4bUUNy-LNPEWwATJ0qALtxM5dRw"
// }
// export const options = {
//     vus: 30,
//     duration: '300s',
// };

// export const options = {
//     scenarios: {
//       users_1_request: {
//         executor: 'constant-vus',
//         vus: 10,
//         duration: '5m',
//         exec: 'one_request_per_user',
//       },
//     },
//   };



export const options = {
    scenarios: {
      constant_request_rate: {
        executor: 'constant-arrival-rate',
        rate: 10,
        timeUnit: '1s', 
        duration: '1s',
        preAllocatedVUs: 1,
        maxVUs: 50,
      },
    },

    thresholds: {
  
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
        http_req_duration: ['p(90)<200'],
        http_req_duration: ['avg<300'],
      },

  };


export default function() {
    const headers = {
        'x-api-key': getApiKey(),
        // 'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
    };
    const params = {
        zipCode: '30075',
        distance: '50',
        page_size: '30',
        page_number: '1'
    };

    const response = http.get(`https://license-api.masterffl.com/v2/licenses?zipCode=${params.zipCode}&distance=${params.distance}&page_size=${params.page_size}&page_number=${params.page_number}`, { headers, params} );
    // const response = http.get(`https://license-api.masterffl.com/v2/licenses`, { headers, params} );

    console.log(`Request: ${JSON.stringify(response.request)}`);
    console.log(`Response: ${JSON.stringify(response)}`);

    // check(response, {
    //     'status is 200': (r) => r.status === 200,
    // });

    check(response, {
        'status is 200': (r) => r.status === 200,
        'average response time is within threshold': (r) => r.timings.duration < '2s',
    });


    // Log response details only for unsuccessful requests
    if (response.status !== 200) {
        console.log(`Response status code: ${response.status}`);
        console.log(`Response body: ${response.body}`);
    }

   // sleep(1);
}