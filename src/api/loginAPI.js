import 'dotenv/config';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

export function fetchLogin(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
