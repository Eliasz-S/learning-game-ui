<template>
  <div>
    <h1>Home</h1>
    <el-button
      v-if="!userData?.name"
      @click="dialogTableVisible = !dialogTableVisible"
    >
      Add name &nbsp; <font-awesome-icon icon="fa-solid fa-plus" />
    </el-button>
    <p v-else>{{ userData?.name }}</p>
    <SetNameDialog
      v-model="dialogTableVisible"
      @handle-submit="handleChangeName"
      @handle-close="handleDialogClose"
    />
    <p>{{ userData?.login }}</p>
  </div>
</template>

<script>
import SetNameDialog from "@/components/Profile/SetNameDialogComponent.vue";
import { mapActions, mapGetters } from "vuex";
import { ElButton } from "element-plus";

export default {
  name: "HomeComponent",
  components: {
    SetNameDialog,
    ElButton,
  },
  data() {
    return {
      dialogTableVisible: false,
      name: "",
    };
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    handleChangeName(payload) {
      this.name = payload.name;
      this.updateUser({ name: this.name });
      this.handleDialogClose();
    },
    handleDialogClose() {
      this.dialogTableVisible = false;
    },
  },
};
</script>
