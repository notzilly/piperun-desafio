<template>
  <div class="new-activity">
    <form @submit.prevent="add">
      <table class="table">
        <tr>
          <th>Título</th>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="activity.title"
              placeholder="Título da Atividade"
            >
          </td>
        </tr>
        <tr>
          <th>Responsável</th>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="activity.owner_id"
              placeholder="Responsável pela Atividade"
            >
          </td>
        </tr>
        <tr>
          <th>Tipo</th>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="activity.activity_type"
              placeholder="Tipo de Atividade"
            >
          </td>
        </tr>
        <tr>
          <th>Status</th>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="activity.status"
              placeholder="Status da Atividade"
            >
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/atividades" class="btn">Cancelar</router-link>
          </td>
          <td class="text-right">
            <input type="submit" value="Criar" class="btn btn-default">
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesNew',
  data() {
    return {
      activity: {
        title: '',
        owner_id: '',
        activity_type: '',
        status: ''
      }
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    add() {
      this.$set(this.$data.activity, 'account_id', this.currentUser.account_id);
      axios.post('https://api.pipe.run/v1/activities', this.$data.activity, {
        headers: {
          "Token": this.currentUser.token
        }
      })
      .then((response) => {
          this.$router.push('/atividades');
      });
    }
  }
};
</script>

<style>
</style>
