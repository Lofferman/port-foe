import { createRouter, createWebHashHistory } from 'vue-router';

const Hero = () => import("../components/Hero.vue");

const Projects = () => import("../components/Projects.vue");

const Resume = () => import("../components/Resume.vue");

const About = () => import("../components/About.vue");

const NotFound = () => import("../common/NotFound.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Hero,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
