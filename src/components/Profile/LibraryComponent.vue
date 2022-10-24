<template>
  <div class="profile-nav test-library">
    <p>Library component</p>
    <ProfileTopMenuUI :swapComponent="swapComponent" />
    <el-row :gutter="20" class="search">
      <el-col :span="6">
        <InputUI v-model="search" placeholder="Search by title..." />
      </el-col>
    </el-row>
    <el-table
      :data="SearchedPosts"
      style="width: 100%; margin-top: 10px"
      type="primary"
    >
      <el-table-column type="index" :index="indexMethod" width="50" />
      <el-table-column label="Date" prop="date"> </el-table-column>
      <el-table-column label="Title">
        <template #default="scope">
          <el-button class="link" text @click="handleDialogOpen(scope.$index)">
            <b>{{ scope.row.title }}</b>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="Author" prop="author" width="120">
      </el-table-column>
      <el-table-column label="Questions" prop="questions" width="100">
      </el-table-column>
      <el-table-column label="Plays" prop="plays" width="100">
      </el-table-column>
      <el-table-column label="Operations" fixed="right">
        <template #default="scope">
          <AnimatedBtnUI @click="handleDialogOpen(scope.$index)" />
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
              <b>{{ games[dialogItem].title }} </b>
            </p>
          </el-col>
        </el-row>
      </template>
      <div class="item">
        <p>Author: {{ games[dialogItem].author }}</p>
        <p>Date: {{ games[dialogItem].date }}</p>
        <p>Plays: {{ games[dialogItem].plays }}</p>
        <p>Questions: {{ games[dialogItem].questions }}</p>
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
import ProfileTopMenuUI from "../UI/ProfileTopMenuUI.vue";
import InputUI from "../UI/InputUI.vue";
import AnimatedBtnUI from "../UI/AnimatedBtnUI.vue";

export default {
  name: "LibraryComponent",
  props: ["swapComponent"],
  components: { ProfileTopMenuUI, InputUI, AnimatedBtnUI },
  data() {
    return {
      search: "",
      test: "",
      dialogItem: ref([]),
      dialogVisible: ref(false),
      games: [
        {
          id: 1,
          date: "2016-05-03",
          author: "Tom",
          title: "Some first test",
          questions: 5,
          plays: 6,
        },
        {
          id: 2,
          date: "2017-05-03",
          author: "Jess",
          title: "Some sec test",
          questions: 16,
          plays: 5,
        },
        {
          id: 3,
          date: "2018-05-03",
          author: "Laura",
          title: "Some three test",
          questions: 10,
          plays: 4,
        },
        {
          id: 4,
          date: "2018-06-03",
          author: "Jemmy",
          title: "Some fourth test",
          questions: 9,
          plays: 2,
        },
      ],
    };
  },
  methods: {
    handleDialogOpen(item) {
      console.log(item);
      this.dialogItem = ref(item);
      this.dialogItemTitle = ref(item);
      this.dialogVisible = ref(true);
    },
    handleDialogClose() {
      this.dialogVisible = ref(false);
    },
  },
  computed: {
    SearchedPosts() {
      return this.games.filter((game) =>
        game.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: #5d73d8 !important;
}
a,
.link:hover {
  color: #42b983 !important;
}
</style>
