<template>
    <div>
        <input type="texbox" v-model="email" /> <br />
        <input type="password" v-model="password" />
        <button @click="submit">Submit</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        submit() {
            axios.post("login", {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>
