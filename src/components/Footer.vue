<template>
  <div id="footerSection">
    <footer>
      <div class="text-center">
        © 2021 : {{ creator.name }} |
        <a :href="creator.link" :alt="creator.linkAlt"
          ><fa :icon="['fab', 'github']" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      creator: {
        name: 'Abhishek Ghosh',
        link: 'https://github.com/george-git82/eCommerce-vue-prj.git',
        linkAlt: 'Git repo'
      }
    }
  }
}
</script>

<style></style>
