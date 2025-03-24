import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            },
            {
                hostname: 'assets.aceternity.com'
            },
            {
                hostname: 'images.ctfassets.net'
            }
        ]
    },

};

export default nextConfig;


// [
//     'images.unsplash.com',
//     'assets.aceternity.com',
//     'images.ctfassets.net'
// ]