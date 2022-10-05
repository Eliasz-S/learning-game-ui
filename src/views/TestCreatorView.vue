<template>
  <div class="testCreator">
    <h1>Test Creator Page</h1>
    <QuestionCreatorComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCreatorComponent from "@/components/QuestionCreatorComponent.vue";

export default {
  name: "TestCreatorView",
  components: { QuestionCreatorComponent },
};
</script>
