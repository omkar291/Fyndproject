<template>
    <div class="about-page">
      <h1>About Our Calligraphy Studio</h1>
      <img src="https://content.app-sources.com/s/95168264187396172/uploads/Images/Art-studio-with-a-desk-in-the-center-of-the-room--870x520-9768134.jpeg" alt="Our Calligraphy Studio" class="studio-image">
      <p>At our calligraphy studio, we specialize in creating unique and personalized calligraphy pieces for our clients.</p>
      <p>Our team of experienced calligraphers use traditional and modern techniques to create stunning designs for weddings, events, and personal projects.</p>
      <!-- <h2>Meet Our Team</h2> -->
      <div class="team-members">
        <!-- <div v-for="member in team" :key="member.id" class="member-card" v-bind:class="{ 'animated': showAnimation }" v-on:mouseenter="showAnimation = true" v-on:animationend="showAnimation = false">
          <img :src="member.image" :alt="member.name" class="member-image">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-description">{{ member.description }}</p>
        </div> -->
      </div>
    </div>
  </template>
  <style>
  .about-page {
    background-color: #fff;
    max-width:none ;
    margin-bottom: 2000rem;
    margin: 0 auto;
    padding: 40px;
  }
  h1, h2 {
    color: #353434;
  }
  .studio-image {
    width: 100%;
    max-width: 600px;
    margin: 20px 0;
    animation: slide-in-left 1s ease-out;
  }
  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .member-card {
    flex-basis: 30%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    position: relative;
    animation: fade-in 0.5s ease-out;
  }
  .member-image {
    width: 100%;
    margin-bottom: 10px;
  }
  .member-name {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .member-description {
    font-size: 0.9rem;
    color: #f4eeee;
  }
  
  /* Animation Styles */
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animated {
    animation-fill-mode: both;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        team: [
          { id: 1, name: 'John Doe', image: '/assets/images/john-doe.jpg', description: 'John has been practicing calligraphy for over 10 years and specializes in modern calligraphy.' },
          { id: 2, name: 'Jane Smith', image: '/assets/images/jane-smith.jpg', description: 'Jane is our resident expert in traditional calligraphy and has over 15 years of experience.' },
          { id: 3, name: 'Bob Johnson', image: '/assets/images/bob-johnson.jpg', description: 'Bob is our newest team member and brings a fresh perspective to our calligraphy designs.' }
        ],
        showAnimation: false
      }
    }
  }
  </script>
  