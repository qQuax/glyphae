// Erstelle eine Funktion, die den Counter aktualisiert
function updateCounter() {
  // Sende eine HTTP-GET-Anfrage an die Discord-API, um die Mitglieder abzurufen
  fetch('https://discordapp.com/api/guilds/{guild.id}/members?limit=1000', {
    headers: {
      'Authorization': 'Bot YOUR_API_KEY'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Parse die Antwort, um die Anzahl der Mitglieder zu ermitteln
    const memberCount = data.length;

    // Überprüfe, ob der Schwellenwert erreicht wurde
    if (memberCount >= 600 && memberCount < 700) {
      // Aktualisiere den Counter auf der Website
      document.getElementById('member-count').innerHTML = `${memberCount} members`;

      // Speichere die Anzahl der Mitglieder in einem "data"-Attribut
      document.getElementById('member-count').setAttribute('data-val', memberCount);
    }
  });
}

// Rufe die updateCounter()-Funktion auf, wenn die Seite geladen wird
window.onload = updateCounter;

// Setze ein Intervall, um den Counter alle 60 Sekunden zu aktualisieren
setInterval(updateCounter, 60000);
