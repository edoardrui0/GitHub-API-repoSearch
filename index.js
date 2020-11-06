"use strict";

// Requirements:

// 1) The user must be able to search for a GitHub user handle.
function getGithubHandle(handle) {
  fetch(`https://api.github.com/users/${handle}/repos`)
    .then((reponse) => reponse.json())
    .then((responseJson) => console.log(responseJson))
    .catch((error) => alert("There was an error. Please try again later."));
}

// 2) The search must trigger a call to GitHub's API.

// function displayRepos(responseJson, repo) {
//   console.log(responseJson);
//   $(".results").html(`<h2>Here are the user's repos!</h2>`);

//   $(".results").append(`<h3>${repo}</h3>`);

//   //display the results section
//   $(".results").removeClass("hidden");
// }

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let userHandle = $('input[name="githubHandle"]').val();
    getGithubHandle(userHandle);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

// 3) The repos associated with that handle must be displayed on the page.

// 4) You must display the repo name and link to the repo URL.

// 5) The user must be able to make multiple searches and see only the results for the current search.
