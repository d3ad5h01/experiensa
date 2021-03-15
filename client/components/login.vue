<template>
  <div>
    <div class="ui segment p-5">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="m-1 text-dark">Crawford</h2>
        <h3 class="mt-1 mb-2 text-secondary">Sign In</h3>
        <p>Get into your Crawford account.</p>
      </div>
      <div class="ui fluid input mt-4">
        <input type="text" placeholder="Email..." />
      </div>
      <div class="ui fluid input mt-4">
        <input type="text" placeholder="Password..." />
      </div>
      <p class="mt-4">
        Having problems to Get In? <br />
        <a href="#">Recover Access</a>
      </p>
      <div class="d-flex mt-4">
        <div class="small ui basic animated button" tabindex="0">
          <div class="visible content">Create Account</div>
          <div class="hidden content">
            <i class="right plus icon"></i>
          </div>
        </div>
        <div
          class="ml-4 small float-right ui animated button black"
          tabindex="0"
        >
          <div class="visible content">Sign In</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
