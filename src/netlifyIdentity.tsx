import { useEffect } from "react";

declare global {
  interface Window {
    netlifyIdentity: any; 
  }
}

const NetlifyIdentityWidget = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return null;
};

export default NetlifyIdentityWidget;
