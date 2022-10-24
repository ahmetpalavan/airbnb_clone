/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  images:{
    domains:['links.papareact.com']
  },
  env:{
    mapbox_key: "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pwY3owbGFxMDVwNTNxcXdwMms2OWtzbiJ9.1PPVl0VLUQgqrosrI2nUhg"

  }
}

module.exports = nextConfig
