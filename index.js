"use strict";

// Requirements:

// 1) The user must be able to search for a GitHub user handle.
function getGithubHandle(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((reponse) => reponse.json())
    .then((responseJson) => displayRepos(responseJson))
    .catch((error) =>
      alert("There was an error. Please try again later." + error)
    );
}

// 2) The search must trigger a call to GitHub's API.
function displayRepos(responseJson) {
  // if there are previous results, remove them
  $(".results").empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseJson.length; i++) {
    $(".results").append(
      `<p><a href="${responseJson[i].svn_url}" target="_blank">${responseJson[i].name}</a></p>
        </li>`
    );
  }
  //display the results section
  $(".results").removeClass("hidden");
}

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
