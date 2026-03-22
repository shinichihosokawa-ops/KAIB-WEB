export function getLoginUrl() {
  const appId = import.meta.env.VITE_APP_ID || "";
  const oauthServerUrl = import.meta.env.VITE_OAUTH_SERVER_URL || "";
  const currentUrl = encodeURIComponent(window.location.href);
  return `${oauthServerUrl}/oauth/authorize?app_id=${appId}&redirect_uri=${currentUrl}`;
}
