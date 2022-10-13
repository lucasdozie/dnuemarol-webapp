export const getUserID = () => {
    const domain = getHostName();
    if (domain === "localhost") return "crowdedforce";
    const subdomain = getFirstLevelSubdomain();
    if (!subdomain) return "";
    if (subdomain === "staging" || subdomain === "app") return "crowdedforce";
    return subdomain;
  };
  const getFirstLevelSubdomain = () => {
    let hostArray = document.location.host.split(".");
    return hostArray[hostArray.length - 3];
  };
  /** Return domain name without extension(.com) */
  const getHostName = () => {
    return document.location.hostname;
  };
  