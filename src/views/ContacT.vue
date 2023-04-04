<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <p>Have a question or want to work with us on a project? Get in touch using the form below or through our contact information.</p>
  
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
  
       <!-- <div class="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, Anytown USA</p>
        <p><strong>Phone:</strong> 555-123-4567</p>
        <p><strong>Email:</strong> info@calligraphystudio.com</p>
      </div> -->
    </div> 
  </template>
  <style>
  .contact-page {
    background-color: #fff;
    height: 400px;
    margin: 0 auto;
    padding: 150px;
  }
  h1, h2 {
    color: #1b1a1a;
  }
  .contact-form {
    margin: 30px 0;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .contact-info {
    margin-top: 50px;
  }
  .contact-info p {
    margin-bottom: 10px;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // code to submit form data goes here
        console.log('Form submitted:', this.name, this.email, this.message);
        this.name = '';
        this.email = '';
        this.message = '';
        alert('Thank you for contacting us!');
      }
    }
  }
  </script>
  
  
  