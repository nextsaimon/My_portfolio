# Minecraft Server Hosting on Google Colab

This repository provides a Google Colab notebook for setting up and running a Minecraft server with SSH tunneling. This allows you to host a Minecraft server directly from your Google Colab environment, accessible to others via a public IP address.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/nextSaimon/minecraft-colab-server/blob/main/Minecraft_hosting.ipynb)

**Note:** Remember to replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` in the "Open In Colab" badge link above with your actual GitHub username and repository name.

## Features

- **Easy Setup:** Automates most of the setup process for a Minecraft server.
- **SSH Tunneling:** Uses `portmap.io` to create an SSH reverse tunnel, making your server accessible from outside Google Colab.
- **Google Drive Integration:** Stores server files on Google Drive, allowing for persistence across Colab sessions.
- **Minecraft Version 1.21.3:** Downloads and runs this specific version of the Minecraft server.

## Prerequisites

Before running the notebook, ensure you have the following:

1.  **Google Drive Access:** The notebook will mount your Google Drive to store server files.
2.  **SSH Key File:** A private SSH key file (e.g., `qasw1234.first.pem`) is required for SSH tunneling. This file should be placed in the `/content/drive/MyDrive/ms/` directory.
3.  **Portmap.io Account:** You'll need an account with `portmap.io` to set up the SSH tunnel.

## How to Use

Follow these steps to set up and run your Minecraft server:

### One-Time Setup

These steps only need to be performed once.

1.  **Open the Notebook in Colab:** Click the "Open In Colab" badge above or upload the `Minecraft_hosting.ipynb` file to Google Colab.
2.  **Clean up existing Java installations:** Run the cell with `!sudo apt purge openjdk-* -y` and `!sudo apt autoremove -y` to ensure no conflicting Java versions are present.
3.  **Mount Google Drive and Create Server Directory:** Run the cell that mounts Google Drive and creates the `/content/drive/MyDrive/ms` directory. This is where your Minecraft server files will be stored.
4.  **Download Minecraft Server JAR:** Execute the cell that downloads `server.jar` for Minecraft version 1.21.3.
5.  **Place SSH Key:** Ensure your SSH key file (e.g., `qasw1234.first.pem`) is placed inside `/content/drive/MyDrive/ms/`.

### Regular Server Setup (Each Time You Start the Server)

These steps need to be performed every time you want to start your Minecraft server.

1.  **Install OpenJDK 21:** Run the cell to install OpenJDK 21.
2.  **Verify Java Installation:** Run the cell to confirm Java is correctly installed by checking its version.
3.  **Navigate to Server Directory and Set SSH Key Permissions:** Change the directory to `/content/drive/MyDrive/ms` and set the correct permissions for your SSH key file (`chmod 600 your_key_file.pem`).
4.  **Start Minecraft Server and SSH Tunnel:** Run the final code cell. This script will:
    - Remove any existing `session.lock` file to prevent startup issues.
    - Start the Minecraft server with 6GB initial RAM and 8GB maximum RAM.
    - Establish an SSH reverse tunnel from your `portmap.io` endpoint to your local Minecraft server port `localhost:25565`.

## Creating a Tunnel in Portmap.io

To create the necessary SSH tunnel for your Minecraft server, follow these steps on Portmap.io:

1.  **Log in to Portmap.io:** Go to the Portmap.io website and log in to your account.
2.  **Generate SSH Key (if not already done):** Portmap.io usually provides instructions to generate an SSH key pair. You'll need the private key (which you'll upload to your Colab environment, named something like `qasw1234.first.pem`).
3.  **Add a New Mapping:**
    - Navigate to the "Mappings" or "Tunnels" section.
    - Click on "Add New Mapping" or a similar option.
    - **Public Port:** This is the port on Portmap.io that your Minecraft clients will connect to. Choose a free port (e.g., `61819`).
    - **Private IP:** Set this to `localhost`.
    - **Private Port:** Set this to `25565` (the default Minecraft server port).
    - **Protocol:** Select `TCP`.
    - **Description (Optional):** Add a descriptive name like "Minecraft Server".
4.  **Connect to your Mapping:** After creating the mapping, Portmap.io will provide you with the connection details, including the **Public Host** and **Public Port**. This will be in the format `your_username-your_port.portmap.io:your_port` (e.g., `demo.portmap.io:61819`). You'll use this information in the SSH command within the Colab notebook.

## Server Interaction

- **Monitoring Output:** The notebook will display output from both the Minecraft server (prefixed with `[MC]`) and the SSH tunnel (prefixed with `[SSH]`).
- **Sending Commands:** You can type Minecraft server commands directly into the input prompt provided by the Colab cell.
- **Stopping the Server:** Type `exit` in the input prompt and press Enter to gracefully stop the Minecraft server and the SSH tunnel.

## Connection Details

Once the server is running and the SSH tunnel is active, your Minecraft server should be accessible at the **Public Host** and **Public Port** provided by your Portmap.io mapping (e.g., `demo.portmap.io:61819`). This address maps to `localhost:25565` on the Colab instance.

## Troubleshooting

- **`server.jar` not found error:** Ensure you have run the "Download Minecraft server" cell and that `server.jar` exists in `/content/drive/MyDrive/ms/`.
- **SSH tunnel connection issues:**
  - Verify your private key file is correctly placed and has the right permissions (`chmod 600`).
  - Double-check your `portmap.io` details and ensure the tunnel is active on their side.
  - Review the `[SSH]` output for any error messages.
- **Minecraft server not starting:** Check the `[MC]` output for any error messages. This might indicate issues with Java, server properties, or world data. If a `session.lock` file exists from a previous improper shutdown, the script attempts to remove it, but manual intervention might be needed for other issues.
- **"SERVER IS RUNNING IN OFFLINE/INSECURE MODE!":** This is a warning from Minecraft itself. By default, the `server.properties` file has `online-mode=false`. While this allows players without a premium Minecraft account to join, it also means usernames are not authenticated, making your server vulnerable to impersonation. For a secure server, set `online-mode=true` in `server.properties` (though this would require a premium account for players).

## License

This project is open-source and available under the [MIT License](https://github.com/nextsaimon/minecraft-colab-server/blob/main/LICENSE).
