<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
      </div>
    </section>

    <section class="content">
      <div class="card card-outline card-info">
        <div class="card-header">
          <h3 class="card-title"><i class="nav-icon fas fa-tags"></i> EDIT TAG</h3>
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateTag">

            <div class="form-group">
              <label>NAMA TAG</label>
              <input type="text" v-model="tag" placeholder="Masukkan Nama Tag" class="form-control">
              <div v-if="validation.name" class="mt-2">
                <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
              </div>
            </div>

            <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
              UPDATE</button>
            <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
              RESET</button>

          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    //layout
    layout: 'admin',

    //meta
    head() {
      return {
        title: 'Edit Tag - SantriKoding.com - Belajar Koding Bahasa Indonesia Terlengkap',
      }
    },

    data() {
      return {
        //state tag
        tag: '',
        //state validation
        validation: []
      }
    },

    mounted() {
      
      //fetching data tag by ID
      this.$axios.get(`/api/admin/tags/${this.$route.params.id}`)
        
        .then(response => {
          
          //assing response data to state "tag"
          this.tag = response.data.data.name
        })
    },

    methods: {
      //updateTag method
       async updateTag() {

        //sending data to server
        await this.$axios.put(`/api/admin/tags/${this.$route.params.id}`, {

            //data
            name: this.tag
          })
          .then(() => {

            //sweet alert
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Diupdate!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })

            //redirect, if success update data
            this.$router.push({
              name: 'admin-tag'
            })

          })
          .catch(error => {

            //assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style>

</style>