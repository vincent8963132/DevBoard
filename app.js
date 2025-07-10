function fetchGitHubData() {
  const username = document.getElementById("username").value.trim();
  if (!username) return;

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(data => {
      document.getElementById("profileCard").style.display = "block";
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || data.login;
      document.getElementById("bio").textContent = data.bio || "No bio available.";
      document.getElementById("repos").textContent = data.public_repos;
      document.getElementById("followers").textContent = data.followers;
      document.getElementById("following").textContent = data.following;
      document.getElementById("profileLink").href = data.html_url;
      document.getElementById("profileLink").textContent = "View GitHub Profile";
    })
    .catch(err => {
      alert("GitHub user
