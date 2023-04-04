<template>
     <section class="services-section">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <img src="" alt="Service 1">
            <h3>Wedding Calligraphy</h3>
            <p>Make your special day even more memorable with our custom wedding calligraphy designs.</p>
          </div>
          <div class="service-card">
            <img src="/assets/images/service-2.jpg" alt="Service 2">
            <h3>Event Invitations</h3>
            <p>Add a touch of elegance to your event invitations with our professional calligraphy services.</p>
          </div>
          <div class="service-card">
            <img src="/assets/images/service-3.jpg" alt="Service 3">
            <h3>Personal Projects</h3>
            <p>From custom wall art to personalized gifts, we can help bring your calligraphy ideas to life.</p>
          </div>
        </div>
      </section>
</template>
<style>
  .services-section {
  background-color: #fff;
  padding: 220px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.service-card {
  background-color: #847e7e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-card img {
  max-width: 100%;
}

.service-card h3 {
  margin: 20px 0 10px;
}

.service-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #1b1a1a;
  padding: 0 20px 30px;
}

</style>