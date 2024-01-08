# Book Search Engine (MERN: GraphQL)

This project is a book search engine built using the MERN stack (MongoDB, Express.js, React, and Node.js) with a transition from a RESTful API to a GraphQL API using Apollo Server. The application allows users to search for books using the Google Books API, save their favorite books, and manage their saved book list.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
  - [Back-End Specifications](#back-end-specifications)
  - [Front-End Specifications](#front-end-specifications)
- [Grading Requirements](#grading-requirements)
- [Deployment](#deployment)
- [Application Quality](#application-quality)
- [Repository Quality](#repository-quality)
- [Review](#review)

## User Story
As an avid reader, I want to search for new books to read so that I can keep a list of books to purchase.

## Acceptance Criteria
- Users can search for books and view search results.
- Users can log in or sign up.
- Logged-in users can save books to their account.
- Logged-in users can view their saved books and remove books from their list.
- Users can log out of the application.

## Mock-Up
The application includes a search functionality where users can enter a search term and view the results. Users can save books to their account and view their saved books. The interface is designed for an intuitive and easy-to-navigate user experience.

## Getting Started
To run the application, follow the instructions in the [Back-End Specifications](#back-end-specifications) and [Front-End Specifications](#front-end-specifications) sections. Ensure that you have set up the Apollo Server for GraphQL queries and mutations and deployed the application to Render.

### Back-End Specifications
- Update the `auth.js` middleware function to work with the GraphQL API.
- Implement the Apollo Server and apply it to the Express server as middleware in `server.js`.
- Export typeDefs and resolvers in the `Schemas` directory.
- Define necessary `Query` and `Mutation` types in `typeDefs.js`.
- Modify the existing authentication middleware to work with GraphQL.
- Use an Apollo Provider for communication with the Apollo Server.

### Front-End Specifications
- Create `queries.js` and `mutations.js` files for GraphQL queries and mutations.
- Set up Apollo Provider in `App.jsx`.
- Use Apollo `useMutation()` Hook in `SearchBooks.jsx` and `SavedBooks.jsx` for saving and removing books.
- Replace existing functionalities with GraphQL mutations in `SignupForm.jsx` and `LoginForm.jsx`.

## Deployment
The application is deployed and accessible at [Live URL](#) on Render.

## Application Quality
- The user experience is intuitive and easy to navigate.
- The user interface is clean and polished.
- The application closely resembles the mock-up functionality provided.

## Repository Quality
- The repository has a unique name.
- Follows best practices for file structure, naming conventions, and coding standards.
- Contains multiple descriptive commit messages.
- Includes a high-quality README file with project description, screenshots, and links.

## Review
- [)
- [GitHub Repository](https://github.com/basitmalik97/Book-Search-Engine/edit/main/)

---
© 2024 Basit Malik. Confidential and Proprietary. All Rights Reserved.
