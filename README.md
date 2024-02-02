# Project Title

Team Utility Bot

## Description

The Team Utility Bot is intended to be used for Rocket League esports teams. The current implementation will ping out scheduling from a command.

## Getting Started

THIS BOT IS CURRENTLY NOT INTEDED TO BE USED! USING IT IN IT'S CURRENT FORM WILL REQUIRE BASIC PROGRAMMING KNOWLEDGE AND ABILITY TO HOST THE BOT YOURSELF!

### Dependencies

* Should work on any OS, but only tested on Windows 11
* node.js v20.10.0
* nodemon v3.0.3 (Optional but will have to change start script if not using nodemon)
* discord.js v14.14.1
* dotenv v16.4.1

### Installing

1. Download ALL files
2. Create a file named ".env" in the root of the project
3. Fill in the following template:
    TOKEN =

    GUILD_ID =
    CLIENT_ID =

    FOUNDATION_ROLE_ID =
    ACADEMY_ROLE_ID =
    CHAMPION_ROLE_ID =
    MASTER_ROLE_ID =
    PREMIER_ROLE_ID =

    FOUNDATION_SCHEDULING_ID =
    ACADEMY_SCHEDULING_ID =
    CHAMPION_SCHEDULING_ID =
    MASTER_SCHEDULING_ID =
    PREMIER_SCHEDULING_ID =

    FORM =

4. In config.json, replace "testServer" with the serverID you want to use for testing and replace "devs" with the userID's that you want developer access for the bot.

### Executing program

Navigate to root of project in terminal

Enter:
```
nodemon
```
OR
```
node src/index.js
```

## Help

Contact me (info below)

## Authors

Peyton Lackner
    Discord: peyton_.
    Email: peyton.lackner@gmail.com

## Version History

* a0.0.1
    Initial Release

## License

This project is licensed under the GPL-3.0+ License - see the LICENSE.md file for details