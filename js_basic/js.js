/**
 * Diese JavaScript-Datei enthält Funktionen für einen einfachen Taschenrechner.
 * Sie ermöglicht grundlegende arithmetische Operationen und Eingabevalidierung.
 */

/**
 * Funktion zum Verarbeiten des Eingabewertes
 * Liest den Wert aus dem Eingabefeld und zeigt ihn in einer formatierten Ausgabe an
 */
function my_func() {
    // Hole das Eingabefeld-Element
    var my_input = document.getElementById('my_input');

    // Hole den eingegebenen Wert
    var value = my_input.value;

    // Überprüfe ob ein Wert eingegeben wurde
    if (value.trim() === '') {
        alert('Bitte geben Sie einen Wert ein!');
        return;
    }

    // Formatiere und zeige den Wert an
    alert('Eingegebener Text: ' + value);

    // Optional: Setze das Eingabefeld zurück
    my_input.value = '';
}

/**
 * Addiert zwei eingegebene Zahlen
 * @function my_add
 * Prüft auf gültige Zahleneingaben und zeigt das Ergebnis oder eine Fehlermeldung an
 */
function my_add() {
    // Hole Eingabewerte und konvertiere zu Gleitkommazahlen
    var first_number = parseFloat(document.getElementById("first_number").value);
    var second_number = parseFloat(document.getElementById("second_number").value);

    // Überprüfe ob die Eingaben gültige Zahlen sind
    if (isNaN(first_number) || isNaN(second_number)) {
    
        document.getElementById("result").value = "Bitte geben Sie gültige Zahlen ein.";
    } else {
        var result = first_number + second_number;
        document.getElementById("result").value = result;
    }
}

/**
 * Subtrahiert die zweite von der ersten eingegebenen Zahl
 * @function my_minus
 * Prüft auf gültige Zahleneingaben und zeigt das Ergebnis oder eine Fehlermeldung an
 */
function my_minus() {
    var first_number = parseFloat(document.getElementById("first_number").value);
    var second_number = parseFloat(document.getElementById("second_number").value);

    if (isNaN(first_number) || isNaN(second_number)) {
        document.getElementById("result").value = "Bitte geben Sie gültige Zahlen ein.";

    } else {
        var result = first_number - second_number;
       
        document.getElementById("result").value = result;
    }
}

/**
 * Multipliziert zwei eingegebene Zahlen
 * @function my_multiple
 * Prüft auf gültige Zahleneingaben und zeigt das Ergebnis oder eine Fehlermeldung an
 */
function my_multiple() {
    var first_number = parseFloat(document.getElementById("first_number").value);
    var second_number = parseFloat(document.getElementById("second_number").value);

    if (isNaN(first_number) || isNaN(second_number)) {
        document.getElementById("result").value = "Bitte geben Sie gültige Zahlen ein."
    } else {
        var result = first_number * second_number;
        document.getElementById("result").value = result;
      
    }
}

/**
 * Dividiert die erste durch die zweite eingegebene Zahl
 * @function my_divide
 * Prüft auf gültige Zahleneingaben und Division durch Null
 * Zeigt das Ergebnis oder entsprechende Fehlermeldungen an
 */
function my_divide() {
    // Hole Eingabewerte und konvertiere zu Gleitkommazahlen
    var first_number = parseFloat(document.getElementById("first_number").value);
    var second_number = parseFloat(document.getElementById("second_number").value);

    // Überprüfe Eingaben auf Gültigkeit und Division durch Null
    if (isNaN(first_number) || isNaN(second_number)) {
        document.getElementById("result").value = "Bitte geben Sie gültige Zahlen ein.";
    
    } else if (second_number === 0) {
        document.getElementById("result").value = "Division durch Null ist nicht erlaubt!";
     
    } else {
        var result = first_number / second_number;
        document.getElementById("result").value = result;
    
    }
}
