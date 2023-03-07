<template>
  <h3>รายชื่อหมาทั้งหมด</h3>
  <hr />
  <table>
    <tr>
      <th>PetID</th>
      <th>Species</th>
      <th>Price</th>
    </tr>

    <tr v-for="(course, index) in courses" :key="index">
      <td style="text-align: left">{{ course.ID }}</td>
      <td style="text-align: left">
        {{ course.species }}
      </td>
      <td style="text-align: left">{{ course.price }}</td>
    </tr>
  </table>
</template>
<script setup>
import courses from "../json/pet.json";
</script>
<style></style>
