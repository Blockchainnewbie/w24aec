<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Mein Profil</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js.js"></script>
</head>
<body>
    <header>
        <h1>Willkommen auf meiner Profilseite</h1>
        <nav>
            <a href="#about">Über mich</a>
            <a href="#projects">Projekte</a>
            <a href="#contact">Kontakt</a>
        </nav>
    
    </header>
    
    <section id="about">
        <h2>Über mich</h2>
        <p>Ich bin ein Webentwickler und lerne HTML und CSS.</p>
    </section>

    <section>
        <input type="text" placeholder="Suche..." id="searchInput" />
       <button onclick="search()">Suchen</button>
    </section>

    <section>
    <input id="my_input" type="text">
    <button onclick="my_func()">Funktion</button>
    <br>
</section>

    <section id="projects">
        <h2>Projekte</h2>
        <div class="project">
            <h3>Projekt 1</h3>
            <p>Beschreibung des Projekts.</p>
        </div>
        <div class="project">
            <h3>Projekt 2</h3>
            <p>Beschreibung des Projekts.</p>
        </div>
    </section>

    <footer>
        <p>Kontakt: <a href="mailto:example@example.com">example@example.com</a></p>
    </footer>
</body>
</html>
