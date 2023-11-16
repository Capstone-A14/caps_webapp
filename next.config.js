/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DASHBOARD_GRAFANA: process.env.DASHBOARD_GRAFANA,
        PATIENT_API: process.env.PATIENT_API,
        // ECG_API: process.env.ECG_API,
    },

    async rewrites() {
        return [
            {
                source: `/api/:path*`,
                destination: `${process.env.PATIENT_API}/api/:path*`
            },
            // {
            //     source: `/api/:path`,
            //     destination: `${process.env.ECG_API}/api/:path`
            //     // source: '/api/v1/ecg',
            //     // destination: '/api/v1/ecg'
            // }
        ]
    }
}

module.exports = nextConfig
