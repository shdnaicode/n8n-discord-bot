# N8N-Discord Bot  

An open-source integration between **N8N** and a **Discord bot**, allowing you to connect AI agents and custom workflows with Discord commands.  

---

## Technologies  
- **N8N AI Agent** – Enables integration between LLMs and Discord.  
- **JavaScript** – Used to configure and build Discord bot commands and systems.  
- **Dockerfile** – Optional; provides containerization rules for deployment.  

---

## Getting Started  

To set up and use this project:  

1. **Fork** this repository to your GitHub.  
2. **Clone** the forked repo into your local IDE.  
3. **Import** the provided workflow into your N8N instance.  
4. **Configure** your environment (bot token, slash commands, etc.).  
5. **Run** the bot locally or deploy via Docker.  

---

## Project Structure  

Key files and directories:  

- **`N8N-Discord-Integration`** → Main workflow to import into your N8N project.  
- **`index.js`** → Entry point for running the Discord bot.  
  - Start with:  
    ```bash
    node index.js
    ```  
- **`deploy-command.js`** → Registers slash commands for the bot (optional).  
- **`config.js`** → Stores configuration (bot token, slash command setup, etc.).  
- **`/commands` directory** → Add custom bot command files here.  

---

## License  

This project is licensed under the **MIT License**.  
Free to use, modify, and share.  

---

## Author  

- [Shindanai Sudprasert](https://github.com/shdnaicode)  
