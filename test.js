
const testCookies = {
  sessionid: "FAKE_SESSION_7f3a91c82d_example",
  csrftoken: "FAKE_CSRF_a82d91",
  ds_user_id: "1234567890",
  ig_did: "FAKE_DEVICE_ID_987654321",
  mid: "FAKE_MID_EXAMPLE_12345"
};

const cookieMetadata = {
  domain: "example.test",
  secure: true,
  httpOnly: true,
  sameSite: "Lax",
  created: new Date().toISOString()
};

console.log("TEST COOKIE DATA");
console.log(testCookies);
console.log(cookieMetadata);
