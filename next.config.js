/** @type {import('next').NextConfig} */
// there's some error setting up the ENV. but here's the code we tried 👇
// const nextConfig = {
//   env: {
//     DASHBOARD_GRAFANA: process.env.DASHBOARD_GRAFANA,
//     PATIENT_API: process.env.PATIENT_API,
//     // ECG_API: process.env.ECG_API,
//   },

//   async rewrites() {
//     return [
//       {
//         source: '/api/v1/patient',
//         destination: `${process.env.PATIENT_API}/:path*`

//         // source: `/api/v1/patient`,
//         // destination: `${process.env.PATIENT_API}/api/v1/patient`,
//       },
//       // {
//       //     source: `/api/:path`,
//       //     destination: `${process.env.ECG_API}/api/:path`
//       //     // source: '/api/v1/ecg',
//       //     // destination: '/api/v1/ecg'
//       // }
//     ];
//   },
// };

// module.exports = nextConfig;
