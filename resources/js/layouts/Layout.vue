<template>
    <div>
        <p>
            <router-link to="/user/foo">/user/foo</router-link>
            <router-link to="/user/foo/profile">/user/foo/profile</router-link>
            <router-link to="/user/foo/posts">/user/foo/posts</router-link>
        </p>
        <router-view></router-view>

        <p>Footer</p>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions("users", ["setToken"])
    }
};
</script>
