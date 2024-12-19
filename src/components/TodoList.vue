<script>
import {useTodoStore} from "@/stores/todo";
//import draggable from "vuedraggable";

export default {
  //components: {draggable},
  setup() {
    const todoStore = useTodoStore()
    return {
      todoStore
    }
  },
  methods: {
    goToBoard() {
      this.$router.push('/board')
    }
  },
  data() {
    return {
      dragging: false
    }
  },
}
</script>

<template>
  <div class="app-container">
    <h1>TODO List</h1>
    <h2>Number of TODOs: {{ todoStore.items.length }}</h2>
    <div class="wrapper">
      <div class="input-button-wrapper">
        <button @click="todoStore.addItem()">Add Todo</button>
        <button @click="todoStore.clearList()">Clear list</button>
      </div>
      <input
          type="text"
          v-model="todoStore.newItem"
          @keyup.enter="todoStore.addItem()"
          placeholder="Add a new item"
      />
    </div>
    <!-- <draggable :list="todoStore.items" @start="dragging = true" @end="dragging = false">-->
    <ol>
      <li v-for="(item, index) in todoStore.items" :key="index" class="drag-item">
        {{ item }}
        <button @click="todoStore.deleteItem(index)" class="delete-button">Delete</button>
      </li>
    </ol>

    <!-- </draggable> -->
    <button @click="goToBoard">See TODO overview</button>
  </div>

</template>

<style scoped>

/* Center the main app container */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px; /* Limit max width */
  background: #fff; /* White background for the container */
  padding: 20px;
  border-radius: 15px; /* Smooth rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  align-self: center;
  margin: auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* Input and buttons wrapper */
.input-button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Add spacing between elements */
  align-items: center;
  width: 100%; /* Make wrapper fill the container width */
}

/* Style input field */
input {
  width: calc(2 * 100px + 10px); /* Match the width of two buttons */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc; /* Light border for a clean look */
  border-radius: 8px; /* Rounded corners */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); /* Slight inner shadow */
  transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transition */
}

/* Highlight input on focus */
input:focus {
  border-color: #007bff; /* Blue border on focus */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* Blue glow */
  outline: none; /* Remove default outline */
}

/* Style buttons */
button {
  width: 100px; /* Fixed button width */
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  border: none; /* Remove default border */
  border-radius: 8px; /* Smooth rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition */
}

/* Button hover effect */
button:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: translateY(-2px); /* Subtle lift effect */
}

/* Button active effect */
button:active {
  background-color: #004085; /* Even darker blue when pressed */
  transform: translateY(0); /* Reset lift */
}

/* Ordered list styles */
ol {
  margin-top: 20px;
  text-align: left;
  list-style: decimal inside;
  padding: 0;
  width: 100%;
}

/* List items styling */
li {
  display: flex;
  justify-content: space-between; /* Align text and button */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee; /* Light divider between items */
  gap: 10px;
  cursor: grab;
}

li.dragging {
  opacity: 0.5;
}

/* Delete button */
li button {
  width: auto; /* Adjust width for the delete button */
  padding: 5px 10px;
  background-color: #dc3545; /* Red background for delete */
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition */
}

/* Delete button hover and active states */
li button:hover {
  background-color: #bd2130; /* Darker red on hover */
}

li button:active {
  background-color: #a71d2a; /* Even darker red when pressed */
}
</style>