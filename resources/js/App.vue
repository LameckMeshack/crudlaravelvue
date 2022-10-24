<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link"
                        >Create Post</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link"
                        >Posts</router-link
                    >
                </li>
            </ul>
        </nav>
        <br />
        <router-view v-slot="{ Component }">
            <transition v-bind:name="fade">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>

<script>
export default {};
</script>
