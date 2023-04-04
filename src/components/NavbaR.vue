<template>
  
  <div id="navigation">
      <div id="navB">
        <div id="l">
        <router-link id="navButton" to="/">Home</router-link>
        <router-link id="navButton" to="/about">About</router-link><br>
        <router-link id="navButton" to="/services">Services</router-link>
        <router-link id="navButton" to="/Contact">Contact</router-link></div>
        <div id="r">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </div>


      </div>
   <router-view/>
  </div>
  
</template>
<style>

#navB #l
{
  display: flex;
  flex-direction: horizontal;
  flex-grow: initial;
  justify-content: flex-start;
  align-items: center;
}

#navB #r
{
  padding-right: 20px;
  padding-top: 10px;
  color: #202020;
  font-size: 30px;
}

#navB
{
  display: flex;
  justify-content: space-between;
}

#navButton 
{
  padding: 5px;
  text-decoration: none;
  color: #191818;
  font-size: 20px;

}


#navigation{
  background-color: #fff;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;


}
#navigation-brand{
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}
#navigation-links{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>



<script>

export default {};
</script>
