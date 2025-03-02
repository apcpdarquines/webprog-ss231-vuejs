<template>
   <div class="comment-form">
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter name" v-model="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment"  placeholder="Enter comment" v-model="comment" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="mt-2">
          {{ submissionStatus }}
        </div>
      </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient'

  
  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);
  
  // Your Supabase URL and Key - IMPORTANT!
  const tableName = 'comments'; // Name of your Supabase table
  
  async function submitComment() {
    submissionStatus.value = "Submitting...";
    try {
      const { error } = await supabase.from(tableName).insert([{ name: name.value, comment: comment.value }]);
  
      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting comment. Please try again.";
      } else {
        submissionStatus.value = "Comment submitted successfully!";
        name.value = ''; // Clear form fields
        comment.value = '';
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
  }
</script>
<style>
 /* Basic styling - Customize as needed */
 .comment-form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 500px;  /* 90% width on desktop */
  border-radius: 7px;
  padding: 10px 20px;
  border: 2px dashed #b33a3a;
  background-color: rgb(39, 179, 226);
}

/* Adjust styles for smaller screens (mobile) */
@media (max-width: 600px) {
  .comment-form {
    width: 100%; /* 100% width on mobile */
    padding: 0;
  }
  h2{
    margin: 0 auto;
    padding: 30px 0 0 10px;
  }
  .form-group{
    width: 95%;
    padding: 10px;
  }
  
  .btn {
    margin: 0 0 10px 10px;
    padding: 0;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  border-radius: 0 0 4px 4px;
  margin-bottom: 1rem;
  background-color: rgb(39, 179, 226);
  }
  textarea{
    resize: none;
  }
  label {
    font-weight: 700;
    display: block;
    margin: 0.5rem;
    margin-bottom: .6rem;
  }

  .form-control {
    width: auto;
    padding: 20px;
    border: 1px solid #b33a3a;
    border-radius: 4px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>