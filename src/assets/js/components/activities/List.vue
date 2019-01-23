<template>
  <div>
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
              <router-link :to="`/activities/${activity.id}`">Editar</router-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ActivitiesList'
  }
</script>


<style scoped>
</style>
