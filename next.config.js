module.exports = {
  async redirects() {
    return [
      {
        destination: 'https://craigs.io/articles/mocked-api-server-nextjs',
        permanent: false,
        source: '/'
      }
    ]
  }
}
