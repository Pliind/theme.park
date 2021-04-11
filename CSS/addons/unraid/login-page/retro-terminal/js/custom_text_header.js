
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
_____________________   _____    ____________________ _________  ________ ____________________ 
\______   \_   _____/  /  _  \  /   _____/\__    ___/ \_   ___ \ \_____  \\______   \______   \
 |    |  _/|    __)_  /  /_\  \ \_____  \   |    |    /    \  \/  /   |   \|       _/|     ___/
 |    |   \|        \/    |    \/        \  |    |    \     \____/    |    \    |   \|    |    
 |______  /_______  /\____|__  /_______  /  |____|     \______  /\_______  /____|_  /|____|    
        \/        \/         \/        \/                     \/         \/       \/                                                                          </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
