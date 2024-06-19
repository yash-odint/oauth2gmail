# Gmail OAuth2

## Description
Gmail OAuth2 is a simple web application that allows users to sign in with their Google account using OAuth2. Once signed in, the application fetches the user's emails using the Gmail API with the `mail.google.com` scope.

## Installation Instructions
Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/gmail-oauth2.git
   cd gmail-oauth2
   ```

2. **Get Google Client ID**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing project.
   - Navigate to **APIs & Services** > **Credentials**.
   - Create an OAuth 2.0 Client ID.
   - Download the credentials JSON file or copy the Client ID.

3. **Configure the Project**
   - Open `script.js`.
   - Paste your Google Client ID into the designated spot.

4. **Run the Application**
   - Simply open `index.html` in your browser.

## Usage
After setting up the project, open `index.html` in your browser. You will see a button to sign in with Google. Upon signing in, the application will request access to read your emails. Once access is granted, the emails will be fetched and displayed.

## Features
- Sign in with Google using OAuth2.
- Fetch and display user emails from Gmail.
- Simple and easy setup.

## Contributing
Contributions are welcome! If you have any ideas, feel free to fork the repository and submit a pull request. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information
If you have any questions or suggestions, feel free to reach out:

- Email: yashodint@gmail.com
- GitHub: [yash-odint](https://github.com/yash-odint)
