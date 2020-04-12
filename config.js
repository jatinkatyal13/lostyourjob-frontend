const NODE_ENV = process.env.NODE_ENV || 'development'
const ENV = {
  "PUBLIC_URL": "http://localhost:3000",
  "API_ENDPOINT": "http://localhost:8000",
  "LINKEDIN": {
    "CLIENT_ID": "81ijpa0vhxsmgl"
  }
}

if (NODE_ENV === 'development') {
  ENV.axios = {
    "host": "localhost",
    "port": "8000"
  }
} else if (NODE_ENV === 'production') {

}

module.exports = ENV
