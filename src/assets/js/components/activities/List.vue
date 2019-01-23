<template>
  <div>
    <div class="btn-wrapper">
      <router-link to="/atividades/criar" class="btn btn-default">Nova</router-link>
    </div>
    <table class="table table-striped">
      <thead>
        <th>Título</th>
        <th>Responsável</th>
        <th>Tipo</th>
        <th>Status</th>
        <th>Op.</th>
      </thead>
      <tbody>
        <template v-if="!activities.length">
          <tr>
            <td colspan="5" class="text-center">Não há atividades cadastradas</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="activity in activities" :key="activity.id">
            <td>{{ activity.title }}</td>
            <td>{{ activity.owner_id }}</td>
            <td>{{ activity.activity_type }}</td>
            <td>{{ activity.status }}</td>
            <td>
              <!-- <router-link :to="`/atividades/editar/${activity.id}`">Editar</router-link> -->
              <a href="#">Editar</a>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ActivitiesList',
    mounted() {
      this.$store.dispatch('getActivities');
    },
    computed: {
      activities() {
        return this.$store.getters.activities;
      }
    }
  }
</script>

<style scoped>
  .btn-wrapper {
    text-align: left;
    margin-bottom: 20px;
  }
</style>
