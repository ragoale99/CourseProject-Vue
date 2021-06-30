<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resoureces</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <!-- Dynamic component => a seconda del valore di selectedTab verrà renderizzato un componente diverso (selected-resources o add-resources) -->
  <!-- con keep-alive faccio si che se anche cambio pagina mentre sto scrivendo nella form di addresource, 
	i cmapi della form non si resettano => vengono messi in cache -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'off-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org/v2/guide/'
        },
        {
          id: 'guide',
          title: 'Google',
          description: 'Learn in google...',
          link: 'https://google.org'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const resource = {
        id: new Date().toISOString,
        title: title,
        description: description,
        link: url
      };

      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    }
  }
};
</script>
