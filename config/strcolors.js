'use strict';
/*
Librairie de constantes strings pour formattage de texte console
*/

module.exports = {

    // /!\ RESET applique uniquement le foreground /!\
    // Ces effets compte comme foreground
    RESET : "\x1b[0m",
    BOLD : "\x1b[1m",
    DIM : "\x1b[2m",
    UNDERSCORE : "\x1b[4m",
    BLINK : "\x1b[5m",
    REVERSE : "\x1b[7m",
    HIDDEN : "\x1b[8m",

    // ForeGround - Couleurs du texte
    FG_BLACK : "\x1b[30m",
    FG_RED : "\x1b[31m",
    FG_GREEN : "\x1b[32m",
    FG_YELLOW : "\x1b[33m",
    FG_BLUE : "\x1b[34m",
    FG_MAGENTA : "\x1b[35m",
    FG_CYAN : "\x1b[36m",
    FG_WHITE : "\x1b[97m",
    FG_LIGHTGRAY : "\x1b[37m",
    FG_DARKGRAY : "\x1b[90m",

    // BackGround - Couleurs du fond
    BG_BLACK : "\x1b[40m",
    BG_RED : "\x1b[41m",
    BG_GREEN : "\x1b[42m",
    BG_YELLOW : "\x1b[43m",
    BG_BLUE : "\x1b[44m",
    BG_MAGENTA : "\x1b[45m",
    BG_CYAN : "\x1b[46m",
    BG_WHITE : "\x1b[107m",
    BG_LIGHTGRAY : "\x1b[47m",
    BG_DARKGRAY : "\x1b[100m",

    // Affiche '[OK]' formaté avec codes couleurs pour terminal
    STATUS_OK : "\x1b[0m\x1b[90m[\x1b[32mOK\x1b[0m\x1b[90m]\x1b[0m ",
    // Affiche '[ERR]' formaté avec codes couleurs pour terminal
    STATUS_ERR : "\x1b[0m\x1b[90m[\x1b[31mERR\x1b[0m\x1b[90m]\x1b[0m ",
};