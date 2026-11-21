console.log({
  origin: location.origin,
  cookies: document.cookie,
  secure: isSecureContext,
  userAgent: navigator.userAgent
});