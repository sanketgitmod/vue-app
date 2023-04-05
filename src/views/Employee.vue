<template>
  <div class="pa-6">
    <add-employee></add-employee>

    <employee-list v-if="$store.state.items.length"></employee-list>

    <no-employee v-else></no-employee>
  </div>
</template>

<script>
import AddEmployee from "../components/Employee/AddEmployee.vue";
import EmployeeList from "../components/Employee/EmployeeList.vue";
import NoEmployee from "../components/Employee/NoEmployee.vue";
export default {
  components: {
    AddEmployee,
    EmployeeList,
    NoEmployee,
  },
};
</script>
