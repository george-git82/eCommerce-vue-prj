const footerInfo = {
    data() {
        return {
            name: "Bamboo Thermal Ski Coat",
            creator: {
                name: "Abhishek Ghosh",
                link: "https://github.com/george-git82/eCommerce-vue-prj.git",
                linkAlt: "Git repo",
            },
        };
    },
};

Vue.createApp(footerInfo).mount("#footerSection");
