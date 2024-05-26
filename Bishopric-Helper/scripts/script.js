//load hymns from json

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/hymns.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const hymnList = document.getElementById("hymn_display");
      data.forEach((h) => {
        const hymn = document.createElement("li");
        hymn.textContent = `Title: ${h.name}, Number: ${
          h.hymnNumber
        }, Hymn Last Sang: ${new Date(h.lastSang).toDateString()}`;
        hymnList.appendChild(hymn);
      });
    });
});

//load members from json

document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/members.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const memberList = document.getElementById("speaker_display");
        data.forEach((m) => {
          const member = document.createElement("li");
          member.textContent = `Name: ${m.name}, Last Spoke: ${new Date(m.lastSpoke).toDateString()}`;
          memberList.appendChild(member);
        });
      });
  });