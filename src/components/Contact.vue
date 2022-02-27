<template>
  <div className="alert alert-secondary text-center">
    <h4 className="alert-heading">Contact Us</h4>
  </div>

  <div class="container">
    <div class="row p-4">
      <form class="">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" name="name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="text" id="email" name="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Message: </label>
          <textarea type="text" id="phone" name="phone" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPage",
};
</script>

<style scoped></style>
