import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// prije promjene svake rute
// ako se slazemo s promjenom rute, zovemo next
// beforeEach zovemo nad router, prima nasu novu funkciju
//pomocu koje izvrsava kod koji se treba dogoditi prije svake provjere rute

//next zovemo ako smo zadovoljni promjerom rute
router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta",
    from.name,
    "-> ",
    to.name,
    "korisnik",
    store.CurrentUser
  );

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
