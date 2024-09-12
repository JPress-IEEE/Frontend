# JPress Frontend

Welcome to the JPress Frontend repository! This project provides the user-facing interface for a job matching application. It includes features like user profiles, job listings, chat, notifications, offers, recommendations, and feedback for both clients and applicants.

## Features

- **User Profiles**: Manage profiles for clients and applicants.
- **Job Listings**: Browse and apply to job requests.
- **Chat System**: Real-time messaging and video calls between users.
- **Notifications**: Instant alerts for updates and activities.
- **Offers & Services**: Applicants can send offers; clients can post requests and view offers.
- **Recommendations**: Tailored suggestions for applicants based on job requests.
- **Feedback System**: Rate and review clients and applicants.

## Technology Stack

- **Languages**: TypeScript / JavaScript
- **Framework**: React (Next.js or Vite)
- **State Management**: Redux / Context API
- **Routing**: React Router / Next.js routing
- **Styling**: Tailwind CSS / Styled Components
- **API Communication**: Axios / Fetch API
- **Real-Time**: Socket.io (for chat & notifications)
- **Testing**: Jest / React Testing Library

## Getting Started

### Prerequisites

- Node.js / NPM
- JPress Backend API

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/JPress-IEEE/Frontend.git
    cd Frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:  
   Create a `.env` file with:
    ```plaintext
    NEXT_PUBLIC_API_BASE_URL=
    NEXT_PUBLIC_SOCKET_URL=
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=
    NEXT_PUBLIC_FACEBOOK_APP_ID=
    NEXT_PUBLIC_LINKEDIN_CLIENT_ID=
    ```

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    npm run start
    ```

### Testing

- **Run All Tests**:
    ```bash
    npm run test
    ```

- **Run Specific Tests**:
    ```bash
    npm test -- <path-to-test-file>
    ```

- **Test Coverage Report**:
    ```bash
    npm run test:coverage
    ```

### API Communication

The frontend interacts with the backend API. Make sure to set the correct `NEXT_PUBLIC_API_BASE_URL` in the `.env` file to point to the backend service.

## Contributing

We welcome contributions to JPress:

1. **Fork the Repository**: Create a personal copy on GitHub.
2. **Create a Branch**: Develop features or fixes in a new branch.
3. **Commit Changes**: Write clear and detailed commit messages.
4. **Submit a Pull Request**: Provide a clear description of the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
