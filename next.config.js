/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test?.('.svg')
      );
  
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
 
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  require('dotenv').config();
  
  module.exports = nextConfig;
  
