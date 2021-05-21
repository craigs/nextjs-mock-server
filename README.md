# API mocking service

How to create an API mocking service

## Getting Started

Run the development server:

```bash
npm run dev
```

Then you can curl your endpoint with ...

`curl http://localhost:4000/api/v2/sample.json`

If you curl an endpoint without a handler, you will get a 501 error. For example ...

`curl http://localhost:4000/api/non-existent-handler`
