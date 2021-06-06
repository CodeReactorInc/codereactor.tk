function isUserAgentMobile() {
  return navigator.userAgent.match(MOBILE_USER_AGENT_REGEX) != null;
}

const MOBILE_USER_AGENT_REGEX = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g;