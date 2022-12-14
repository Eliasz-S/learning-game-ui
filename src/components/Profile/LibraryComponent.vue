<template>
  <div class="profile-nav test-library">
    <el-row :gutter="20" class="search">
      <el-col :span="6">
        <InputUI v-model="search" placeholder="Search by title..." />
      </el-col>
    </el-row>
    <el-table
      :data="searchedPosts"
      style="width: 100%; margin-top: 10px"
      type="primary"
    >
      <el-table-column type="index" width="50" />
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Title">
        <template #default="scope">
          <el-button class="link" text @click="handleDialogOpen(scope.row.id)">
            <b>{{ scope.row.title }}</b>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="Author" prop="author" width="120">
      </el-table-column>
      <el-table-column label="Questions" prop="questions" width="100">
        <template #default="scope">
          <span>{{ scope.row.questions.length }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Plays" prop="plays" width="100" /> -->
      <el-table-column label="Operations">
        <template #default="scope">
          <AnimatedBtnUI @click="handleDialogOpen(scope.row.id)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="200">
        <template #default="scope">
          <el-button type="primary" plain @click="startGame(scope.row.id)">
            Start
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-model="dialogVisible"
      width="90%"
      :before-close="handleDialogClose"
    >
      <template #header>
        <el-row>
          <el-col :span="6">
            <p>
              <b>{{ dialogItem.title }} </b>
            </p>
          </el-col>
        </el-row>
      </template>
      <div class="item">
        <p><b>Test title:</b> {{ dialogItem.title }}</p>
        <p><b>Author:</b> {{ dialogItem.author }}</p>
        <p><b>Date of creation:</b> {{ dialogItem.date }}</p>
        <p><b>Amount of questions:</b> {{ dialogItem.questions.length }}</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { api } from "@/utils/axios";
import InputUI from "../UI/InputUI.vue";
import AnimatedBtnUI from "../UI/AnimatedBtnUI.vue";

import {
  ElCol,
  ElTable,
  ElButton,
  ElRow,
  ElTableColumn,
  ElDialog,
} from "element-plus";

export default {
  name: "LibraryComponent",
  components: {
    InputUI,
    AnimatedBtnUI,
    ElButton,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElDialog,
  },
  data() {
    return {
      search: "",
      test: "",
      dialogItem: ref([]),
      dialogVisible: ref(false),
      games: [],
    };
  },
  computed: {
    searchedPosts() {
      return this.games.filter((game) =>
        game.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.fetchGames();
  },
  methods: {
    handleDialogOpen(itemId) {
      const target = this.searchedPosts.find((game) => game.id === itemId);
      this.dialogItem = target;
      this.dialogItemTitle = target.title;
      this.dialogVisible = ref(true);
    },
    handleDialogClose() {
      this.dialogVisible = ref(false);
    },
    async fetchGames() {
      const response = await api.get("games/user");
      this.games = response.data;
    },
    startGame(gameId) {
      this.$router.push(`/game-owner/lobby/${gameId}`);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a,
.link {
  padding: 0;
  color: #5d73d8 !important;
}
a,
.link:hover {
  color: #42b983 !important;
}
</style>
