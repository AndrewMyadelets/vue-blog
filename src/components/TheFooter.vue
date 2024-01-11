<template>
    <footer class="footer">
        <div class="container footer__container">
            <nav class="nav-bottom nav">
                <ul class="nav__menu">
                    <li
                        class="nav__item"
                        :class="{ 'nav__item--active': $route.path === '/admin' }"
                    >
                        <router-link :to="{ name: 'admin' }">Admin</router-link>
                    </li>
                    <li
                        class="nav__item"
                        :class="{ 'nav__item--active': $route.path === '/' }"
                    >
                        <router-link :to="{ name: 'posts' }">Posts</router-link>
                    </li>
                </ul>
            </nav>
            <small class="footer__copy">2023. All rights reserved.</small>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped>
.footer {
    padding: 25px 0;
    border-top: 1px solid #d3c5c5;
    background-color: #f1f2f8;
}

.footer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-bottom {
    margin-bottom: 30px;
}

.nav__menu {
    display: flex;
}

.nav__item {
    border-bottom: 1px solid transparent;
}

.nav__item:not(:last-of-type) {
    margin-right: 15px;
}

.nav__item:not(.nav__item--active):hover {
    border-color: var(--accent-hover-color);
    color: var(--accent-hover-color);
}

.nav__item--active {
    pointer-events: none;
    color: var(--accent-hover-color);
}

.footer__copy {
    font-size: 16px;
    line-height: 21px;
}

@media screen and (max-width: 576px) {
    .nav__menu {
        flex-direction: column;
        align-items: center;
    }

    .nav__menu .nav__item {
        margin-bottom: 10px;
        margin-right: 0;
    }
}
</style>