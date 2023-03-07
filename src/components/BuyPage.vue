<template>
  <div>
    <h4>search ID</h4>
    <form @submit.prevent="addToBasket">
      <input type="text" v-model="courseID" placeholder="PetID" />
      <button type="submit">submit</button>
    </form>

    <div v-if="courseID != ''">
      <article v-if="(x = courseData.find((elem) => elem.ID == courseID))">
        <div class="border">
          <p>
            <b>ID : </b> <span>{{ x.ID }}</span>
          </p>
          <p>
            <b>Species : </b> <span>{{ x.species }}</span>
          </p>
          <p>
            <b>Price : </b><span>{{ x.price }}</span>
          </p>
        </div>
      </article>
      <article v-else>
        <p>Not Found</p>
      </article>
    </div>

    <hr />
    <div>
      <h4>Submit</h4>
      <table>
        <thead>
          <th>ID</th>
          <th>Species</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr v-for="(course, index) in courseInfo" :key="index">
            <td>{{ course.ID }}</td>
            <td>{{ course.species }}</td>
            <td>{{ course.price }}</td>
            <td>
              <button @click="removeFromBasket(course.id)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="addUserData()">เพิ่มข้อมูล</button>
    </div>
  </div>
  <button @click="showpet()">แสดง</button>

  <table>
    <thead>
      <th>IDPet</th>
      <th>Species</th>
      <th>Price</th>
    </thead>
    <tbody>
      <tr v-for="(course, index) in allpet" :key="index">
        <td>{{ course.data.ID }}</td>
        <td>{{ course.data.species }}</td>
        <td>{{ course.data.price }}</td>
        <td><button @click="removeFromBasket(index)">delete</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref } from "vue";
import courseData from "../json/pet.json";
import { useBasket } from "../stores/useBasket";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../main.js";

const courseID = ref("");
const courseBasket = useBasket();
const courseInfo = courseBasket.getState;
const allpet = ref([]);
const dt = {
  ID: "",
  species: "",
  price: "",
};
function addToBasket() {
  const data = courseData.find((elem) => elem.ID == courseID.value);
  if (data) {
    courseBasket.storeState(data);
    console.log(data);
    courseID.value = "";
    dt.value = data;
  } else {
    alert("โปรดกรอกIDที่ถูกต้อง");
  }
}
function removeFromBasket(course_key) {
  if (confirm("ต้องการลบรายการหรือไม่ ?")) {
    courseBasket.popState(course_key);
  }
}

async function addUserData() {
  try {
    const docRef = await addDoc(collection(db, "pet"), dt.value);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function showpet() {
  const querySnapshot = await getDocs(collection(db, "pet"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const myDoc = ref({ id: doc.id, data: doc.data() });
    //allMenu.value.push(doc.data());
    allpet.value.push(myDoc.value);
  });
}
</script>
<style scoped>
.border {
  margin: 20px auto;
  padding: 0.5em;
  border: 3px solid gray;
}
</style>
