/* =========================================================
   DoBu Martial Arts — shared script.js
   Handles: mobile nav toggle, membership form validation,
   community "post" mockup interaction.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- Membership account form validation ---------- */
  var joinForm = document.getElementById("join-form");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var successBox = document.getElementById("join-success");
      var errorBox = document.getElementById("join-error");
      var name = document.getElementById("full-name").value.trim();
      var email = document.getElementById("email").value.trim();
      var tier = document.getElementById("tier").value;

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !tier) {
        errorBox.textContent = "Please fill in your name, email and choose a membership before continuing.";
        errorBox.classList.remove("is-hidden");
        successBox.classList.add("is-hidden");
        return;
      }
      if (!emailPattern.test(email)) {
        errorBox.textContent = "That email address doesn't look right — please double check it.";
        errorBox.classList.remove("is-hidden");
        successBox.classList.add("is-hidden");
        return;
      }

      errorBox.classList.add("is-hidden");
      successBox.textContent = "Welcome to DoBu, " + name + "! Your " + tier + " membership request has been received — check your inbox at " + email + " to confirm.";
      successBox.classList.remove("is-hidden");
      joinForm.reset();
    });
  }

  /* ---------- Contact form (basic client-side check) ---------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var confirmBox = document.getElementById("contact-success");
      confirmBox.classList.remove("is-hidden");
      contactForm.reset();
    });
  }

  /* ---------- Community forum mockup: new post ---------- */
  var postForm = document.getElementById("new-post-form");
  var postList = document.getElementById("forum-posts");
  if (postForm && postList) {
    postForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var author = document.getElementById("post-author").value.trim() || "Guest member";
      var message = document.getElementById("post-message").value.trim();
      if (!message) return;

      var post = document.createElement("div");
      post.className = "forum-post";
      post.innerHTML =
        '<p class="meta"><strong>' + author + '</strong> · just now</p>' +
        "<p>" + message + "</p>";
      postList.prepend(post);
      postForm.reset();
    });
  }

});
