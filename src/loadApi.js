let apiPromise;

export default function loadApi() {
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const callback = 'g_' + Date.now();
      global[callback] = resolve;
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=${callback}&render=explicit`;
      script.async = true;
      script.defer = true;
      script.onerror = reject;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  return apiPromise;
}
