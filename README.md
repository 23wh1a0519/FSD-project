# NoteSphere – Smart Notes Management Platform

## Introduction

NoteSphere is a full-stack Smart Notes Management Platform built using the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**. It provides a real-world implementation of a scalable web application with secure authentication, role-based access control, and intelligent note management features.

## Purpose

The purpose of NoteSphere is to enable users to **create, update, delete, and manage notes efficiently** while maintaining data integrity through version control and structured organization. The platform supports tagging, access control, and future-ready integrations.

## Target Audience

* Students
* Professionals / Working Individuals
* Content Creators / Knowledge Workers

## Learning Outcomes

* Google OAuth integration
* Role-Based Access Control (RBAC)
* RESTful API design
* MongoDB schema design
* Tag-based data organization
* GitHub-based workflows

## System Overview

### User Roles

| Role            | Description                                         |
| --------------- | --------------------------------------------------- |
| Admin           | Manages user accounts and ensures platform security |
| Registered User | Creates, edits, deletes notes and manages tags      |

## Core Features

* User Authentication & Authorization
* Notes CRUD Operations
* Version Control for Notes
* Tag-Based Organization
* Role-Based Dashboards
* Secure Data Storage

## High-Level Architecture

Angular Notes App → REST API → Node.js & Express Backend → MongoDB Database

**Key Principle:** Single Frontend with a Centralized Backend

## Database Design

**Database:** MongoDB (Atlas / Local)
**ODM:** Mongoose

### Collections

#### users

```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "Date"
}
```

Index: email (unique)

#### notes

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (ref users)",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

Indexes: userId, tags

## Backend Design

**Tech Stack:** Node.js, Express.js, MongoDB, Google OAuth 2.0, JWT

### Backend Folder Structure

```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   └── app.js
├── .env
└── package.json
```

## Authentication Flow (Google SSO)

1. User logs in using Google
2. Backend validates Google token
3. College email domain is verified
4. User record is created or fetched
5. JWT token is issued

**Allowed Domain:** `@bvrithyderabad.edu.in`

## API Endpoints

### Auth APIs

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| POST   | /auth/google | Google login       |
| GET    | /auth/me     | Get logged-in user |

### User APIs

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /users/profile | Get user profile    |
| PUT    | /users/profile | Update user profile |

### Notes APIs

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| POST   | /notes     | Create a new note |
| GET    | /notes/my  | Get user notes    |
| PUT    | /notes/:id | Update a note     |

## Role-Based Access Control

* User role is stored in the database
* Middleware validates role from JWT
* Admin-only routes are protected

## Frontend – Angular (MEAN)

**Tech Stack:** Angular, Angular Router, HttpClient, Guards

### Folder Structure

```
src/app/
├── auth/
├── users/
├── notes/
├── services/
├── guards/
└── app.module.ts
```

## GitHub Integration

GitHub integration allows users to **attach public repositories to notes** for code reference and project tracking. Admins can directly access linked repositories for review.

**Validation Rules:**

* Must be a valid GitHub URL
* Repository must be public

## Security Considerations

* JWT-based authentication
* Secure OAuth flow
* Role-based authorization
* Input validation and sanitization

## Future Enhancements

* GitHub API integration
* AI-based note summarization
* Rating and feedback system
* Multi-college support

## Conclusion

This project demonstrates a **full-stack Notes App using Angular (MEAN)** with secure authentication, role-based access, and scalable architecture. The system is modular, extensible, and designed for real-world academic and professional use.

---

**Project Name:** NoteSphere
**Document Owner:** K. Vyshnavi
