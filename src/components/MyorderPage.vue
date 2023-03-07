<template>
  <div class="container">
    <h3>คำสั่งซื้อของฉัน</h3>
    <table>
      <thead>
        <th>PetID</th>
        <th>Species</th>
      </thead>
      <tbody>
        <tr v-for="(subject, index) in myEnrollment" :key="index">
          <td>{{ subject.ID }}</td>
          <td>{{ subject.species }}</td>
          <td>{{ subject.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useEnrollment } from "../stores/useEnrollment";
const enrollmentList = useEnrollment();
const myEnrollment = enrollmentList.getState;
</script>
<style></style>
