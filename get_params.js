import http from 'k6/http';
import { sleep, check } from 'k6';

function getApiKey() {
    return '6e14aXdGZv1Dd2w9t2GA16L889IlWudd5eq8Xr5Y';
}
const getAuthToken = () => {
    return "eyJraWQiOiJNWUNOZEllS3Q0emtiSzJGZVdvWjNhYjA0SnZGaVRFaEtDTEVZcUdtMlhnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjBjYTVlOS05Y2VhLTRjMDAtYmRhZi02ZTIwNTNiOGQ0MjkiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMTQzUlJLM29MIiwiY29nbml0bzp1c2VybmFtZSI6IjQ2MGNhNWU5LTljZWEtNGMwMC1iZGFmLTZlMjA1M2I4ZDQyOSIsImdpdmVuX25hbWUiOiJSdWNoaW4iLCJvcmlnaW5fanRpIjoiMGMzNzMyZWEtMzM1YS00NDhjLTkxYzctMGE3N2JlY2QyOTY4IiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NjYxMjYxOTM2NzY1OnJvbGVcL2ZmbC1zdG9yZS1hZG1pbi1yb2xlIl0sImF1ZCI6InNycGVicDFiNmNnY2JjaGM0cWhsZzEyODIiLCJldmVudF9pZCI6IjE2NGI3YmU5LThiMTUtNDZiNC04MTU1LTVjZmIxN2U0ZmI4NyIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnN0b3JlSWQiOiJkZW1vLm1hc3RlcmZmbC5jb20iLCJhdXRoX3RpbWUiOjE3MDYxNjQxMDMsImV4cCI6MTcwNzIwMDQ0MiwiaWF0IjoxNzA3MTk2ODQyLCJmYW1pbHlfbmFtZSI6IkthbnNhbCIsImp0aSI6ImM1ZTViOTc1LWQ5NGEtNDc3OC04NDQzLTY0YzgxZDJlYjI3MSIsImVtYWlsIjoicnVjaGluZnJlZWxhbmNlcithZG1pbkBnbWFpbC5jb20ifQ.cMKPr2pOBirX6_aX7elsPUvIYCJkEUC-xiOWp7wSIbcabVXqp0OnQDRA6djzFIswU1F8nz85GdX0XpB1CxJAx2KV5qzuYoKDWfz00MISFsRFyJJcigpvjeHGzCX3rST0ifADfqvPUVa3b8C4DbITTQGGxCtJhSFCHffyFCxhqJyB47XxVxbRBQbl08q3Zz5XIG8qeqsr8abSI3c6froWjGdEY1vUNOMU6WpNO_wk6WhuAS4_l5x8gCczvIEE4Ty78HKOFzzC-QQjvcxfgI_C0K1Z_joVXg-eGvrB_203v_ZwnsmPLOpK_pIKByz4bUUNy-LNPEWwATJ0qALtxM5dRw"
}
export const options = {
    vus: 1,
    duration: '5s',
};

export default function () {
    // Dynamic API key assignment
    const apiKey = getApiKey();

    // Define headers with the API key
    const zipCode = '30075'
    // const headers = {
    //     'x-api-key': apiKey,
    //     'Content-Type': 'application/json',
    // };
    console.log(getAuthToken())
    const params = {
        headers: {
            'Authorization': `Bearer ${getAuthToken()}`,
            //  Authorization: `Bearer eyJraWQiOiJNWUNOZEllS3Q0emtiSzJGZVdvWjNhYjA0SnZGaVRFaEtDTEVZcUdtMlhnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjBjYTVlOS05Y2VhLTRjMDAtYmRhZi02ZTIwNTNiOGQ0MjkiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMTQzUlJLM29MIiwiY29nbml0bzp1c2VybmFtZSI6IjQ2MGNhNWU5LTljZWEtNGMwMC1iZGFmLTZlMjA1M2I4ZDQyOSIsImdpdmVuX25hbWUiOiJSdWNoaW4iLCJvcmlnaW5fanRpIjoiY2M0Y2E4YzAtMGMwYS00M2QxLWFmYTItMmE1ODBkNWVhNjIyIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NjYxMjYxOTM2NzY1OnJvbGVcL2ZmbC1zdG9yZS1hZG1pbi1yb2xlIl0sImF1ZCI6InNycGVicDFiNmNnY2JjaGM0cWhsZzEyODIiLCJldmVudF9pZCI6ImNlOWQ1MDI2LTdmOGEtNDNkMC04ZTRjLWZkZTMwMTNkYmFiZCIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnN0b3JlSWQiOiJkZW1vLm1hc3RlcmZmbC5jb20iLCJhdXRoX3RpbWUiOjE3MDQzNjA5NzAsImV4cCI6MTcwNjc2ODY0NywiaWF0IjoxNzA2NzY1MDQ3LCJmYW1pbHlfbmFtZSI6IkthbnNhbCIsImp0aSI6ImZmY2EyMTllLTZlODEtNGUyNy1iM2U2LWNmNzdkN2ZhNGViNSIsImVtYWlsIjoicnVjaGluZnJlZWxhbmNlcithZG1pbkBnbWFpbC5jb20ifQ.CGUMsoH8gSJfB4l-aWJxVqg3lTe2URLqjTwAGcFZ7PDeTLLykE0kneehca2h6HcHaw7RgW9OvibC79D8-IKTOJ_xQEhSz6Vs373KPl4MyCJZjDPCNJpwJaWZUi1-D2LZx654qBKJRU12s_Y7TBu7kYZoxVDkV7dqpjv0CFPV4bSwq-PWImiCmV5GYrbETLHtgkOVzSAc11RAxaq07EsS7IivLS1OB2gvXK94ank2xvnKDdoacvWRHCW6PxbLidyqN_5Dmo6mjf7M6mMbFsRPDyG2zg3uBVuG2NZElNRWpP3y6hYfsXYVrgdcA4vfGWYCAWlnEshH9mPYvbcpGYya6w`,  
            'Content-Type': 'application/json',
            // 'zipCode': '30075',
            //    'page_size': '10',
            // 'page_number': '1',
            //  'distance': '5',
        }
    }
    const headers = {
        'Authorization': `Bearer ${getAuthToken()}`,
        //  Authorization: `Bearer eyJraWQiOiJNWUNOZEllS3Q0emtiSzJGZVdvWjNhYjA0SnZGaVRFaEtDTEVZcUdtMlhnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0NjBjYTVlOS05Y2VhLTRjMDAtYmRhZi02ZTIwNTNiOGQ0MjkiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMTQzUlJLM29MIiwiY29nbml0bzp1c2VybmFtZSI6IjQ2MGNhNWU5LTljZWEtNGMwMC1iZGFmLTZlMjA1M2I4ZDQyOSIsImdpdmVuX25hbWUiOiJSdWNoaW4iLCJvcmlnaW5fanRpIjoiY2M0Y2E4YzAtMGMwYS00M2QxLWFmYTItMmE1ODBkNWVhNjIyIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NjYxMjYxOTM2NzY1OnJvbGVcL2ZmbC1zdG9yZS1hZG1pbi1yb2xlIl0sImF1ZCI6InNycGVicDFiNmNnY2JjaGM0cWhsZzEyODIiLCJldmVudF9pZCI6ImNlOWQ1MDI2LTdmOGEtNDNkMC04ZTRjLWZkZTMwMTNkYmFiZCIsInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOnN0b3JlSWQiOiJkZW1vLm1hc3RlcmZmbC5jb20iLCJhdXRoX3RpbWUiOjE3MDQzNjA5NzAsImV4cCI6MTcwNjc2ODY0NywiaWF0IjoxNzA2NzY1MDQ3LCJmYW1pbHlfbmFtZSI6IkthbnNhbCIsImp0aSI6ImZmY2EyMTllLTZlODEtNGUyNy1iM2U2LWNmNzdkN2ZhNGViNSIsImVtYWlsIjoicnVjaGluZnJlZWxhbmNlcithZG1pbkBnbWFpbC5jb20ifQ.CGUMsoH8gSJfB4l-aWJxVqg3lTe2URLqjTwAGcFZ7PDeTLLykE0kneehca2h6HcHaw7RgW9OvibC79D8-IKTOJ_xQEhSz6Vs373KPl4MyCJZjDPCNJpwJaWZUi1-D2LZx654qBKJRU12s_Y7TBu7kYZoxVDkV7dqpjv0CFPV4bSwq-PWImiCmV5GYrbETLHtgkOVzSAc11RAxaq07EsS7IivLS1OB2gvXK94ank2xvnKDdoacvWRHCW6PxbLidyqN_5Dmo6mjf7M6mMbFsRPDyG2zg3uBVuG2NZElNRWpP3y6hYfsXYVrgdcA4vfGWYCAWlnEshH9mPYvbcpGYya6w`,  
        'Content-Type': 'application/json',
        // 'zipCode': '30075',
        //    'page_size': '10',
        // 'page_number': '1',
        //  'distance': '5',
    }

    console.log(headers,'headers-------')
    //const response = http.get('https://license-api.masterffl.com/v2/licenses',  headers );
    const response = http.get('https://license-api.masterffl.com/licenses?zipCode=' + zipCode, params);

    console.log(response, 'response-------')


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