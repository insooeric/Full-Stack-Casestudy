const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Home Page
      {
        path: "/",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      // About Page
      {
        path: "/about",
        name: "about",
        component: () => import("pages/AboutPage.vue"),
      },
      // Utility Page
      {
        path: "/utility",
        name: "utility",
        component: () => import("pages/UtilPage.vue"),
      },
      // Categories Page
      {
        path: "/category",
        name: "category",
        component: () => import("pages/CategoryListPage.vue"),
      },
      // Tray Page
      {
        path: "/tray",
        name: "tray",
        component: () => import("pages/TrayPage.vue"),
      },
      // Register Page
      {
        path: "/register",
        name: "register",
        component: () => import("pages/RegisterPage.vue"),
      },
      // Login Page
      {
        path: "/login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      // Logout Page
      {
        path: "/logout",
        name: "logout",
        component: () => import("pages/LogoutPage.vue"),
      },
      // TrayHistory Page
      {
        path: "/history",
        name: "history",
        component: () => import("pages/TrayHistoryPage.vue"),
      },
      // Map Page
      {
        path: "/map",
        name: "map",
        component: () => import("pages/StoreLocatorPage.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
