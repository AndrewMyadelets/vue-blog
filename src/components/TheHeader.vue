<template>
    <header class="header">
        <div class="container">
            <nav class="nav-top nav">
                <input
                    type="checkbox"
                    id="nav-toggle"
                    class="nav__toggle"
                >
                <label
                    for="nav-toggle"
                    class="nav__burger"
                >
                    <img
                        src="../assets/images/hamburger.png"
                        alt="Menu"
                    >
                </label>
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
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    background-color: var(--accent-color);
}

.nav-top {
    padding: 25px 0 23px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: 500;
}

.nav__menu {
    display: flex;
}

.nav__item:not(:last-of-type) {
    margin-right: 15px;
}

.nav__item {
    border-bottom: 2px solid transparent;
}

.nav__item:not(.nav__item--active):hover {
    border-color: #e4e7eb;
    color: #e4e7eb;
}

.nav__item--active {
    pointer-events: none;
    color: #e4e7eb;
}

.nav__toggle,
.nav__burger {
    display: none;
}

@media screen and (max-width: 576px) {
    .nav__menu {
        margin-top: 50px;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .nav__menu .nav__item {
        margin-bottom: 10px;
        margin-right: 0;
    }

    .nav__burger {
        display: block;
        cursor: pointer;
    }

    .nav__burger img {
        height: 24px;
    }

    .nav__toggle:not(:checked)~.nav__menu {
        display: none;
    }
}
</style>