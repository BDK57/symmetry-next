// next.config.js

module.exports = {
    reactStrictMode: false,
    webpack: (config, { isServer }) => {
      // Add a rule to handle Rive files
      config.module.rules.push({
        test: /\.(riv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/', // Adjust the public path as needed
              outputPath: `${isServer ? '../' : ''}static/`, // Adjust the output path as needed
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  