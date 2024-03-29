import Router from "next/router";

export const handleLogout = () => {
  const router = Router;

  const isAuth = localStorage.getItem("token");
  if (isAuth !== undefined) {
    localStorage.removeItem("token");
    setTimeout(() => {
      router.push("/");
      window.location.reload();
    }, 1000);
  }
};
