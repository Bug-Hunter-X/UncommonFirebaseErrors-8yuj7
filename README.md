# Uncommon Firebase Errors

This repository demonstrates two uncommon errors that can occur when using Firebase:

1. **Race Condition in Firestore Transactions:** The `bug.js` file shows an example of a race condition that can occur when incrementing a counter in Firestore using transactions.  The solution (`bugSolution.js`) demonstrates a correct approach using server-side timestamps to prevent this issue.
2. **Firestore Security Rules Misconfiguration:** Although not directly shown in code examples, this README highlights potential problems and best practices for writing secure and efficient Firestore security rules.  Always thoroughly test your rules before deploying to production.

## How to reproduce

The race condition example requires setting up a Firebase project and deploying the provided code. Running the code multiple times concurrently will likely reproduce the error.

## Solution

The solution to the race condition is to use server-side timestamps to ensure that each update operation has a unique timestamp, preventing simultaneous writes from interfering with each other.