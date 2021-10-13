<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
      </div>
    </section>

    <section class="content">
      <div class="card card-outline card-info">
        <div class="card-header">
          <h3 class="card-title"><i class="nav-icon fas fa-clone"></i> TAMBAH MENU</h3>
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
          <form @submit.prevent="storeMenu">

            <div class="form-group">
              <label>NAMA MENU</label>
              <input type="text" v-model="menu.name" placeholder="Masukkan Nama Menu" class="form-control">
              <div v-if="validation.name" class="mt-2">
                <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
              </div>
            </div>

            <div class="form-group">
              <label>URL MENU</label>
              <input type="text" v-model="menu.url" placeholder="Masukkan URL Menu" class="form-control">
              <div v-if="validation.url" class="mt-2">
                <b-alert show variant="danger">{{ validation.url[0] }}</b-alert>
              </div>
            </div>

            <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
              SIMPAN</button>
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
        title: 'Tambah Menu - SantriKoding.com - Belajar Koding Bahasa Indonesia Terlengkap',
      }
    },

    data() {
        return {
            //state menu
            menu: {
                name: '',
                url: ''
            },
            //state validation
            validation: []
        }
    },

    methods: {
        //storeMenu method
        async storeMenu() {

            //sending data to server
            await this.$axios.post('/api/admin/menus', {

                //data
                name: this.menu.name,
                url: this.menu.url
            })
            .then(() => {

                //sweet alert
                this.$swal.fire({
                    title: 'BERHASIL!',
                    text: "Data Berhasil Disimpan!",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })

                //redirect, if success store data
                this.$router.push({
                    name: 'admin-menu'
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