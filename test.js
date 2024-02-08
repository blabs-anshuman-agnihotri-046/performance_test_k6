import http from 'k6/http';
import { sleep, check } from 'k6';

function getApiKey() {
    return 'vaj45bJmai4OsfUPggvbs39aIVRUTfXW14QhCpol';
}

export const options = {
    vus: 1,
    duration: '5s',
};

export default function() {
    // Dynamic API key assignment
    const apiKey = getApiKey();

    // Define headers with the API key
    const headers = {
        'x-api-key': apiKey,
  //  Authorization: `Bearer eyJraWQiOiJNWUNOZEllS3Q0emtiSzJGZVdvWjNhYjA0SnZGaVRFaEtDTEVZcUdtMlhnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjBjYTVlOS05Y2VhLTRjMDAtYmRhZi02ZTIwNTNiOGQ0MjkiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMTQzUlJLM29MIiwiY29nbml0bzp1c2VybmFtZSI6IjQ2MGNhNWU5LTljZWEtNGMwMC1iZGFmLTZlMjA1M2I4ZDQyOSIsImdpdmVuX25hbWUiOiJSdWNoaW4iLCJvcmlnaW5fanRpIjoiY2M0Y2E4YzAtMGMwYS00M2QxLWFmYTItMmE1ODBkNWVhNjIyIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NjYxMjYxOTM2NzY1OnJvbGVcL2ZmbC1zdG9yZS1hZG1pbi1yb2xlIl0sImF1ZCI6InNycGVicDFiNmNnY2JjaGM0cWhsZzEyODIiLCJldmVudF9pZCI6ImNlOWQ1MDI2LTdmOGEtNDNkMC04ZTRjLWZkZTMwMTNkYmFiZCIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnN0b3JlSWQiOiJkZW1vLm1hc3RlcmZmbC5jb20iLCJhdXRoX3RpbWUiOjE3MDQzNjA5NzAsImV4cCI6MTcwNjc2ODY0NywiaWF0IjoxNzA2NzY1MDQ3LCJmYW1pbHlfbmFtZSI6IkthbnNhbCIsImp0aSI6ImZmY2EyMTllLTZlODEtNGUyNy1iM2U2LWNmNzdkN2ZhNGViNSIsImVtYWlsIjoicnVjaGluZnJlZWxhbmNlcithZG1pbkBnbWFpbC5jb20ifQ.CGUMsoH8gSJfB4l-aWJxVqg3lTe2URLqjTwAGcFZ7PDeTLLykE0kneehca2h6HcHaw7RgW9OvibC79D8-IKTOJ_xQEhSz6Vs373KPl4MyCJZjDPCNJpwJaWZUi1-D2LZx654qBKJRU12s_Y7TBu7kYZoxVDkV7dqpjv0CFPV4bSwq-PWImiCmV5GYrbETLHtgkOVzSAc11RAxaq07EsS7IivLS1OB2gvXK94ank2xvnKDdoacvWRHCW6PxbLidyqN_5Dmo6mjf7M6mMbFsRPDyG2zg3uBVuG2NZElNRWpP3y6hYfsXYVrgdcA4vfGWYCAWlnEshH9mPYvbcpGYya6w`,  
    'Content-Type': 'application/json',
    };

    const response = http.get('https://google.com', { headers });

    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    // Log response details only for unsuccessful requests
    if (response.status !== 200) {
        console.log(`Response status code: ${response.status}`);
        console.log(`Response body: ${response.body}`);
    }

    sleep(1);
}