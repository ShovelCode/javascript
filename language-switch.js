<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Language Switcher Example</title>
  </head>
  <body>
    <h1 id="heading">Hello, World!</h1>
    <button onclick="switchLanguage()">Switch Language</button>
    
    <script>
      let language = 'english'; // Default language
      
      function switchLanguage() {
        const headingEl = document.getElementById('heading');
        if (language === 'english') {
          headingEl.innerText = 'Bonjour, Monde!'; // Change heading text to French
          language = 'french'; // Update language variable
        } else {
          headingEl.innerText = 'Hello, World!'; // Change heading text back to English
          language = 'english'; // Update language variable
        }
      }
    </script>
  </body>
</html>
