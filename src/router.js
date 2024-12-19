import {createRouter, createWebHistory} from "vue-router";
import TodoBoard from "./components/TodoBoard.vue"
import TodoList from "@/components/TodoList.vue";

const routes = [
    {
        path: '/',
        component: TodoList,
    },
    {
        path: '/board',
        component: TodoBoard,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;